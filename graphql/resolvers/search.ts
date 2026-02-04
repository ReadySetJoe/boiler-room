import axios from 'axios';
import { JSDOM } from 'jsdom';
import { QueryResolvers } from '../../generated/resolvers-types';

// Search for games in Steam store using the suggest API (better autocomplete)
const searchGames = async (query: string) => {
  const res = await axios.get(
    `https://store.steampowered.com/search/suggest?term=${encodeURIComponent(query)}&f=games&cc=US&l=english`
  );

  const dom = new JSDOM(res.data);
  const links = dom.window.document.querySelectorAll('a.match');

  const results = [];
  for (const link of links) {
    const appId = link.getAttribute('data-ds-appid');
    if (!appId) continue;

    const name = link.querySelector('.match_name')?.textContent;
    const image = link.querySelector('img')?.getAttribute('src');
    const price = link.querySelector('.match_price')?.textContent || 'Unknown';
    const url = link.getAttribute('href');

    results.push({
      name,
      id: appId,
      image,
      url,
      price,
    });
  }

  return results;
};

// Find bundles containing a specific game by fetching the game's store page
const searchBundlesForGame = async (gameName: string) => {
  // First, search for the game to get its app ID
  const games = await searchGames(gameName);
  if (games.length === 0) return [];

  // Find exact or closest match
  const exactMatch = games.find(
    g => g.name?.toLowerCase() === gameName.toLowerCase()
  );
  const appId = exactMatch?.id || games[0].id;

  // Fetch the game's store page to find bundle links
  const gamePageRes = await axios.get(
    `https://store.steampowered.com/app/${appId}/`
  );

  // Extract bundle URLs from the game page
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

  // Fetch details for each bundle (limit to 10)
  const bundles = [];
  for (const bundleUrl of bundleUrls.slice(0, 10)) {
    try {
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

      // Get bundle ID from URL
      const bundleId = bundleUrl.match(/\/bundle\/(\d+)\//)?.[1];

      bundles.push({
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

  return bundles;
};

export const searchSteam: QueryResolvers['searchSteam'] = async (
  _parent,
  { q, bundlesOnly }
) => {
  if (bundlesOnly) {
    return searchBundlesForGame(q);
  }
  return searchGames(q);
};
