import axios from 'axios';
import { JSDOM } from 'jsdom';
import { QueryResolvers } from '../../generated/resolvers-types';

export const getMyBundles: QueryResolvers['getMyBundles'] = async (
  _parent,
  { steamId }
) => {
  const res = await axios.get(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&include_appinfo=true&format=json`
  );

  const gameNames = res.data.response.games.map(game => game.name);
  const bundles = [];

  for (let i = 0; i < gameNames.length; i++) {
    const game = gameNames[i];
    console.log('game', game);
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
      const bundleItemNameElements: Element[] = Array.from(
        bundleDom.window.document.querySelectorAll('.tab_item_name')
      );
      const bundleGameNames = bundleItemNameElements.map(
        element => element.textContent
      );
      if (!bundleGameNames.includes(game)) {
        continue;
      }

      bundles.push({
        name: link.querySelector('.title').textContent,
        id: link.getAttribute('data-ds-bundleid'),
        image: images[0].getAttribute('src'),
        url,
        price:
          link.querySelector('.discount_final_price')?.textContent || 'Free',
      });
    }
  }

  return bundles;
};
