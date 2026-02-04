import axios from 'axios';
import { QueryResolvers } from '../../generated/resolvers-types';

const CHEAPSHARK_BASE = 'https://www.cheapshark.com/api/1.0';

// Store ID to name/info mapping from CheapShark
const STORE_INFO: Record<string, { name: string; icon: string; active: boolean }> = {
  '1': { name: 'Steam', icon: 'https://www.cheapshark.com/img/stores/icons/0.png', active: true },
  '2': { name: 'GamersGate', icon: 'https://www.cheapshark.com/img/stores/icons/1.png', active: true },
  '3': { name: 'GreenManGaming', icon: 'https://www.cheapshark.com/img/stores/icons/2.png', active: true },
  '7': { name: 'GOG', icon: 'https://www.cheapshark.com/img/stores/icons/6.png', active: true },
  '11': { name: 'Humble Store', icon: 'https://www.cheapshark.com/img/stores/icons/10.png', active: true },
  '13': { name: 'Ubisoft', icon: 'https://www.cheapshark.com/img/stores/icons/12.png', active: true },
  '15': { name: 'Fanatical', icon: 'https://www.cheapshark.com/img/stores/icons/14.png', active: true },
  '21': { name: 'WinGameStore', icon: 'https://www.cheapshark.com/img/stores/icons/20.png', active: true },
  '23': { name: 'GameBillet', icon: 'https://www.cheapshark.com/img/stores/icons/22.png', active: true },
  '25': { name: 'Epic Games Store', icon: 'https://www.cheapshark.com/img/stores/icons/24.png', active: true },
  '27': { name: 'Gamesplanet', icon: 'https://www.cheapshark.com/img/stores/icons/26.png', active: true },
  '28': { name: 'Gamesload', icon: 'https://www.cheapshark.com/img/stores/icons/27.png', active: true },
  '29': { name: '2Game', icon: 'https://www.cheapshark.com/img/stores/icons/28.png', active: true },
  '30': { name: 'IndieGala', icon: 'https://www.cheapshark.com/img/stores/icons/29.png', active: true },
  '35': { name: 'DreamGame', icon: 'https://www.cheapshark.com/img/stores/icons/34.png', active: true },
};

// Priority stores to show first (most popular/trusted)
const PRIORITY_STORES = ['1', '11', '15', '7', '25', '3'];

interface CheapSharkGame {
  gameID: string;
  steamAppID: string | null;
  cheapest: string;
  cheapestDealID: string;
  external: string;
  internalName: string;
  thumb: string;
}

interface CheapSharkDeal {
  storeID: string;
  dealID: string;
  price: string;
  retailPrice: string;
  savings: string;
}

interface CheapSharkGameDetails {
  info: {
    title: string;
    steamAppID: string | null;
    thumb: string;
  };
  cheapestPriceEver: {
    price: string;
    date: number;
  };
  deals: CheapSharkDeal[];
}

// Search for games across all stores
export const searchMultiStore: QueryResolvers['searchMultiStore'] = async (
  _parent,
  { q }
) => {
  if (!q || q.trim().length < 2) {
    return [];
  }

  try {
    const response = await axios.get<CheapSharkGame[]>(
      `${CHEAPSHARK_BASE}/games?title=${encodeURIComponent(q)}&limit=10`
    );

    return response.data.map(game => ({
      gameId: game.gameID,
      title: game.external,
      thumb: game.thumb,
      cheapestPrice: `$${game.cheapest}`,
      cheapestEverPrice: null,
      cheapestEverDate: null,
      stores: [], // Populated when user selects a game
    }));
  } catch (error) {
    console.error('CheapShark search error:', error);
    return [];
  }
};

// Get detailed prices for a specific game from all stores
export const getGamePrices: QueryResolvers['getGamePrices'] = async (
  _parent,
  { gameId }
) => {
  if (!gameId) {
    return null;
  }

  try {
    const response = await axios.get<CheapSharkGameDetails>(
      `${CHEAPSHARK_BASE}/games?id=${gameId}`
    );

    const data = response.data;

    // Format the cheapest ever date
    const cheapestEverDate = data.cheapestPriceEver?.date
      ? new Date(data.cheapestPriceEver.date * 1000).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : null;

    // Map deals to store prices, filtering to active stores only
    const stores = data.deals
      .filter(deal => STORE_INFO[deal.storeID]?.active)
      .map(deal => ({
        storeId: deal.storeID,
        storeName: STORE_INFO[deal.storeID]?.name || `Store ${deal.storeID}`,
        price: `$${deal.price}`,
        retailPrice: `$${deal.retailPrice}`,
        savings: parseFloat(deal.savings) > 0 ? `${Math.round(parseFloat(deal.savings))}%` : null,
        dealUrl: `https://www.cheapshark.com/redirect?dealID=${deal.dealID}`,
        storeIcon: STORE_INFO[deal.storeID]?.icon || null,
      }))
      // Sort by price (lowest first), with priority stores getting slight preference
      .sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));

        // If prices are equal, prefer priority stores
        if (priceA === priceB) {
          const priorityA = PRIORITY_STORES.indexOf(a.storeId);
          const priorityB = PRIORITY_STORES.indexOf(b.storeId);
          if (priorityA !== -1 && priorityB === -1) return -1;
          if (priorityA === -1 && priorityB !== -1) return 1;
          if (priorityA !== -1 && priorityB !== -1) return priorityA - priorityB;
          return 0;
        }

        return priceA - priceB;
      });

    return {
      gameId,
      title: data.info.title,
      thumb: data.info.thumb,
      cheapestPrice: stores.length > 0 ? stores[0].price : null,
      cheapestEverPrice: data.cheapestPriceEver?.price ? `$${data.cheapestPriceEver.price}` : null,
      cheapestEverDate,
      stores,
    };
  } catch (error) {
    console.error('CheapShark game details error:', error);
    return null;
  }
};
