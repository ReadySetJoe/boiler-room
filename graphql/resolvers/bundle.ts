import axios from 'axios';
import { JSDOM } from 'jsdom';
import {
  BundleSortField,
  SortOrder,
  SteamBundle,
} from '../../generated/graphql';
import { QueryResolvers } from '../../generated/resolvers-types';
import prisma from '../../lib/prisma';

// Validate Steam ID format (17-digit numeric string)
const isValidSteamId = (steamId: string): boolean => {
  return /^\d{17}$/.test(steamId);
};

// Sanitize game name for URL usage - remove potentially dangerous characters
const sanitizeGameName = (name: string): string => {
  return name
    .replace(/[<>'"&]/g, '')
    .trim()
    .substring(0, 200); // Limit length
};

// Search for a game using Steam's suggest API to get its app ID
const findGameAppId = async (gameName: string): Promise<string | null> => {
  const res = await axios.get(
    `https://store.steampowered.com/search/suggest?term=${encodeURIComponent(gameName)}&f=games&cc=US&l=english`
  );

  const dom = new JSDOM(res.data);
  const links = dom.window.document.querySelectorAll('a.match');

  // Try to find exact match first
  for (const link of links) {
    const name = link.querySelector('.match_name')?.textContent;
    if (name?.toLowerCase() === gameName.toLowerCase()) {
      return link.getAttribute('data-ds-appid');
    }
  }

  // Fall back to first result
  const firstLink = links[0];
  return firstLink?.getAttribute('data-ds-appid') || null;
};

// Find bundles by fetching the game's store page (Steam no longer returns bundles in search)
const searchBundlesByGameNames = async (gameNames: string[]) => {
  const allBundles = [] as SteamBundle[];
  const seenBundleIds = new Set<string>();

  for (const gameName of gameNames) {
    try {
      // Get the game's app ID
      const appId = await findGameAppId(gameName);
      if (!appId) continue;

      // Fetch the game's store page to find bundle links
      const gamePageRes = await axios.get(
        `https://store.steampowered.com/app/${appId}/`
      );

      // Extract bundle URLs from the game page
      const bundleMatches = gamePageRes.data.match(
        /href="(https:\/\/store\.steampowered\.com\/bundle\/\d+\/[^"]+)"/g
      );
      if (!bundleMatches) continue;

      const bundleUrls = [
        ...new Set(
          bundleMatches.map(
            (m: string) => m.match(/href="([^"]+)"/)?.[1]?.split('?')[0]
          )
        ),
      ].filter(Boolean) as string[];

      // Fetch details for each bundle (limit to 10 per game)
      for (const bundleUrl of bundleUrls.slice(0, 10)) {
        try {
          const bundleId = bundleUrl.match(/\/bundle\/(\d+)\//)?.[1];
          if (!bundleId || seenBundleIds.has(bundleId)) continue;
          seenBundleIds.add(bundleId);

          const bundleRes = await axios.get(bundleUrl);
          const dom = new JSDOM(bundleRes.data);
          const doc = dom.window.document;

          const name =
            doc.querySelector('.pageheader')?.textContent?.trim() || 'Unknown';
          const discount =
            doc.querySelector('.bundle_base_discount')?.textContent?.trim() ||
            doc.querySelector('.bundle_discount')?.textContent?.trim();
          const price =
            doc.querySelector('.bundle_final_package_price')?.textContent?.trim() ||
            doc.querySelector('.discount_final_price')?.textContent?.trim() ||
            'Unknown';
          const image = doc.querySelector('.package_header')?.getAttribute('src');

          allBundles.push({
            id: bundleId,
            name,
            url: bundleUrl,
            price,
            discount,
            image,
          });
        } catch {
          // Skip bundles that fail to fetch
        }
      }
    } catch {
      // Skip games that fail to fetch
    }
  }

  return allBundles;
};

export const getBundlesByGameName: QueryResolvers['getBundlesByGameName'] =
  async (_parent, { name }) => {
    if (!name || name.trim().length === 0) {
      return [];
    }
    return searchBundlesByGameNames([sanitizeGameName(name)]);
  };

export const getMyBundles: QueryResolvers['getMyBundles'] = async (
  _parent,
  { steamId }
) => {
  if (!isValidSteamId(steamId)) {
    return [];
  }

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
  if (!isValidSteamId(steamId)) {
    return [];
  }

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

// Helper to find bundles for a game by its app ID
const findBundlesForAppId = async (appId: string) => {
  const gamePageRes = await axios.get(
    `https://store.steampowered.com/app/${appId}/`
  );

  const bundleMatches = gamePageRes.data.match(
    /href="(https:\/\/store\.steampowered\.com\/bundle\/\d+\/[^"]+)"/g
  );
  if (!bundleMatches) return [];

  const bundleUrls = [
    ...new Set(
      bundleMatches.map(
        (m: string) => m.match(/href="([^"]+)"/)?.[1]?.split('?')[0]
      )
    ),
  ].filter(Boolean) as string[];

  const bundles = [];
  for (const bundleUrl of bundleUrls.slice(0, 10)) {
    try {
      const bundleId = bundleUrl.match(/\/bundle\/(\d+)\//)?.[1];
      if (!bundleId) continue;

      const bundleRes = await axios.get(bundleUrl);
      const dom = new JSDOM(bundleRes.data);
      const doc = dom.window.document;

      const name =
        doc.querySelector('.pageheader')?.textContent?.trim() || 'Unknown';
      const discount =
        doc.querySelector('.bundle_base_discount')?.textContent?.trim() ||
        doc.querySelector('.bundle_discount')?.textContent?.trim() ||
        '-0%';
      const price =
        doc.querySelector('.bundle_final_package_price')?.textContent?.trim() ||
        doc.querySelector('.discount_final_price')?.textContent?.trim() ||
        'Free';
      const image =
        doc.querySelector('.package_header')?.getAttribute('src') || '';

      bundles.push({
        bundleId,
        name,
        url: bundleUrl,
        price,
        discount,
        image,
        priceInCents: parseInt(price?.replace('$', '')?.replace('.', '')) || 0,
        discountPercent: parseInt(
          discount.replace('-', '').replace('%', '')
        ) || 0,
      });
    } catch {
      // Skip bundles that fail to fetch
    }
  }

  return bundles;
};

export const updateUserBundles: QueryResolvers['updateUserBundles'] = async (
  _parent,
  { steamId }
) => {
  if (!isValidSteamId(steamId)) {
    return [];
  }

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
    }));

    const userBundles = [];
    const seenBundleIds = new Set<string>();

    for (const game of games) {
      // Update game in database
      const gameInDb = await prisma.game.findFirst({
        where: { steamId: game.id },
      });

      if (!gameInDb) {
        await prisma.game.create({
          data: {
            steamId: game.id,
            name: game.name,
            image: game.image,
            price: 'Unknown',
          },
        });
      } else {
        await prisma.game.update({
          where: { steamId: game.id },
          data: {
            name: game.name,
            image: game.image,
          },
        });
      }

      // Find bundles for this game
      try {
        const bundles = await findBundlesForAppId(game.id);

        for (const bundleData of bundles) {
          if (seenBundleIds.has(bundleData.bundleId)) continue;
          seenBundleIds.add(bundleData.bundleId);

          const data = {
            steamId: bundleData.bundleId,
            name: bundleData.name,
            image: bundleData.image,
            url: bundleData.url,
            price: bundleData.price,
            priceInCents: bundleData.priceInCents,
            discount: bundleData.discount,
            discountPercent: bundleData.discountPercent,
          };

          let bundle = await prisma.bundle.findFirst({
            where: { steamId: bundleData.bundleId },
          });

          if (!bundle) {
            bundle = await prisma.bundle.create({ data });
          } else {
            await prisma.bundle.update({
              where: { steamId: bundleData.bundleId },
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
      } catch {
        // Skip games that fail
      }
    }

    return userBundles;
  } catch (error) {
    return [];
  }
};

export const updateUserGameBundle: QueryResolvers['updateUserGameBundle'] =
  async (_parent, { steamId, gameName }) => {
    if (!isValidSteamId(steamId) || !gameName || gameName.trim().length === 0) {
      return null;
    }

    const sanitizedGameName = sanitizeGameName(gameName);

    try {
      const user = await prisma.user.findUnique({
        where: { steamId },
      });

      // Find the game's app ID
      const appId = await findGameAppId(sanitizedGameName);
      if (!appId) return null;

      // Find bundles for this game
      const bundles = await findBundlesForAppId(appId);
      if (bundles.length === 0) return null;

      // Save the first bundle found
      const bundleData = bundles[0];
      const data = {
        steamId: bundleData.bundleId,
        name: bundleData.name,
        image: bundleData.image,
        url: bundleData.url,
        price: bundleData.price,
        priceInCents: bundleData.priceInCents,
        discount: bundleData.discount,
        discountPercent: bundleData.discountPercent,
      };

      let bundle = await prisma.bundle.findFirst({
        where: { steamId: bundleData.bundleId },
      });

      if (!bundle) {
        bundle = await prisma.bundle.create({ data });
      } else {
        await prisma.bundle.update({
          where: { steamId: bundleData.bundleId },
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

      return bundle;
    } catch (error) {
      return null;
    }
  };
