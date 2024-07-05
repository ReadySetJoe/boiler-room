import axios from 'axios';
import { JSDOM } from 'jsdom';
import { QueryResolvers } from '../../generated/resolvers-types';

export const searchSteam: QueryResolvers['searchSteam'] = async (
  _parent,
  { q, bundlesOnly }
) => {
  const res = await axios.get(
    `https://store.steampowered.com/search/results?term=${q}&force_infinite=1&${
      bundlesOnly ? 'category1=996' : ''
    }`
  );

  const startIndex = res.data.indexOf('<!-- List Items -->');
  const endIndex = res.data.indexOf('<!-- End List Items -->');
  const gamesInfoString = res.data.substring(startIndex, endIndex);

  const dom = new JSDOM(gamesInfoString);
  const links = dom.window.document.getElementsByTagName('a');

  const games = [];
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const images = link.getElementsByTagName('img');

    games.push({
      name: link.querySelector('.title').textContent,
      id: link.getAttribute('data-ds-bundleid'),
      image: images[0].getAttribute('src'),
      url: link.getAttribute('href'),
      price: link.querySelector('.discount_final_price')?.textContent || 'Free',
    });
  }

  return games;
};
