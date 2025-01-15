import axios from 'axios';
import { JSDOM } from 'jsdom';
import {
  BundleSortField,
  SortOrder,
  SteamBundle,
} from '../../generated/graphql';
import { QueryResolvers } from '../../generated/resolvers-types';
import prisma from '../../lib/prisma';

const searchBundlesByGameNames = async (gameNames: string[]) => {
  const bundles = [] as SteamBundle[];
  for (let i = 0; i < gameNames.length; i++) {
    const game = gameNames[i];
    const res = await axios.get(
      `https://store.steampowered.com/search/results?term="${game}"&force_infinite=1&category1=996`
    );

    const startIndex = res.data.indexOf('<!-- List Items -->');
    const endIndex = res.data.indexOf('<!-- End List Items -->');
    const gamesInfoString = res.data.substring(startIndex, endIndex);

    const dom = new JSDOM(gamesInfoString);
    const links = dom.window.document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
      const link: Element = links[i];
      const images = link.getElementsByTagName('img');

      const url = link.getAttribute('href');

      const bundlePage = await axios.get(url);
      const bundleDom = new JSDOM(bundlePage.data);

      const discount =
        bundleDom.window.document.querySelector('.bundle_discount')
          ?.textContent;
      const bundleItemNameElements: Element[] = Array.from(
        bundleDom.window.document.querySelectorAll('.tab_item_name')
      );
      const bundleGameNames = bundleItemNameElements.map(
        element => element.textContent
      );
      if (!bundleGameNames.includes(game)) {
        continue;
      }

      const bundle: SteamBundle = {
        name: link.querySelector('.title').textContent,
        id: link.getAttribute('data-ds-bundleid'),
        image: images[0].getAttribute('src'),
        url,
        price:
          link.querySelector('.discount_final_price')?.textContent || 'Free',
        discount,
      };

      bundles.push(bundle);
    }
  }

  return bundles;
};

export const getBundlesByGameName: QueryResolvers['getBundlesByGameName'] =
  async (_parent, { name }) => {
    return searchBundlesByGameNames([name]);
  };

export const getMyBundles: QueryResolvers['getMyBundles'] = async (
  _parent,
  { steamId }
) => {
  const res = await axios.get(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&include_appinfo=true&format=json`
  );

  const gameNames = res.data.response.games.map(game => game.name);
  return searchBundlesByGameNames(gameNames);
};

export const getUserBundles: QueryResolvers['getUserBundles'] = async (
  _parent,
  { steamId, sort }
) => {
  const user = await prisma.user.findUnique({
    where: { steamId },
    include: {
      userBundles: {
        include: {
          bundle: true,
        },
      },
    },
  });

  const bundles = user.userBundles.map(userBundle => userBundle.bundle);

  if (sort) {
    const { field, order } = sort;
    bundles.sort((a, b) => {
      if (field === BundleSortField.Discount) {
        return order === SortOrder.Asc
          ? a.discountPercent - b.discountPercent
          : b.discountPercent - a.discountPercent;
      }

      if (field === BundleSortField.Name) {
        const aName = a.name.toLowerCase().trim();
        const bName = b.name.toLowerCase().trim();
        return order === SortOrder.Asc
          ? aName.localeCompare(bName)
          : bName.localeCompare(aName);
      }

      if (field === BundleSortField.Price) {
        return order === SortOrder.Asc
          ? a.priceInCents - b.priceInCents
          : b.priceInCents - a.priceInCents;
      }

      return 0;
    });
  }

  return bundles;
};

export const updateUserBundles: QueryResolvers['updateUserBundles'] = async (
  _parent,
  { steamId }
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { steamId },
    });

    const res = await axios.get(
      `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&include_appinfo=true&format=json`
    );

    const games = res.data.response.games.map(game => ({
      id: game.appid.toString(),
      name: game.name,
      image: `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,
      playtime: game.playtime_forever,
    }));

    const userBundles = [];
    for (const game of games) {
      console.log('Searching for', game.name);
      const res = await axios.get(
        `https://store.steampowered.com/search/results?term=${game.name}&force_infinite=1`
      );

      const startIndex = res.data.indexOf('<!-- List Items -->');
      const endIndex = res.data.indexOf('<!-- End List Items -->');
      const gamesInfoString = res.data.substring(startIndex, endIndex);

      const dom = new JSDOM(gamesInfoString);
      const links = dom.window.document.getElementsByTagName('a');

      const link = links[0];
      const price =
        link.querySelector('.discount_final_price')?.textContent || 'Unknown';

      const gameInDb = await prisma.game.findFirst({
        where: { steamId: game.id },
      });

      if (!gameInDb) {
        await prisma.game.create({
          data: {
            steamId: game.id,
            name: game.name,
            image: game.image,
            price,
          },
        });
      } else {
        await prisma.game.update({
          where: { steamId: game.id },
          data: {
            name: game.name,
            image: game.image,
            price,
          },
        });
      }

      const bundleRes = await axios.get(
        `https://store.steampowered.com/search/results?term=${game.name}&force_infinite=1&category1=996`
      );

      const bundleStartIndex = bundleRes.data.indexOf('<!-- List Items -->');
      const bundleEndIndex = bundleRes.data.indexOf('<!-- End List Items -->');
      const bundleGamesInfoString = bundleRes.data.substring(
        bundleStartIndex,
        bundleEndIndex
      );

      const bundleDom = new JSDOM(bundleGamesInfoString);
      // Set a limit of 10 bundles
      const bundleLinks = bundleDom.window.document.getElementsByTagName('a');

      for (let i = 0; i < Math.min(bundleLinks.length, 10); i++) {
        const link = bundleLinks[i];

        const bundleId = link.getAttribute('data-ds-bundleid');
        if (!bundleId) {
          continue;
        }

        const url = link.getAttribute('href');

        // check if game is not in bundle
        const bundlePage = await axios.get(url);
        const bundleDom = new JSDOM(bundlePage.data);
        const bundleItemNameElements: Element[] = Array.from(
          bundleDom.window.document.querySelectorAll('.tab_item_name')
        );
        const bundleGameNames = bundleItemNameElements.map(
          element => element.textContent
        );
        if (!bundleGameNames.includes(game.name)) {
          continue;
        }
        const images = link.getElementsByTagName('img');
        const price = link.querySelector('.discount_final_price')?.textContent;
        const discount =
          bundleDom.window.document.querySelector('.bundle_base_discount')
            ?.textContent || '-0%';
        const data = {
          steamId: bundleId,
          name: link.querySelector('.title').textContent,
          image: images[0] ? images[0].getAttribute('src') : '',
          url,
          price: price || 'Free',
          priceInCents:
            parseInt(price?.replace('$', '')?.replace('.', '')) || 0,
          discount,
          discountPercent: parseInt(discount.replace('-', '').replace('%', '')),
        };

        let bundle = await prisma.bundle.findFirst({
          where: { steamId: bundleId },
        });
        if (!bundle) {
          bundle = await prisma.bundle.create({
            data,
          });
        } else {
          await prisma.bundle.update({
            where: { steamId: bundleId },
            data,
          });
        }

        const userBundle = await prisma.userBundle.findFirst({
          where: { userId: user.id, bundleId: bundle.id },
        });

        if (!userBundle) {
          await prisma.userBundle.create({
            data: {
              userId: user.id,
              bundleId: bundle.id,
            },
          });
        }

        userBundles.push(bundle);
      }
    }

    return userBundles;
  } catch (error) {
    console.error(error);
    return [];
  }
};
