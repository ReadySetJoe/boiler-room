import { Resolvers } from '../../generated/resolvers-types';
import {
  getBundlesByGameName,
  getMyBundles,
  getUserBundles,
  updateUserBundles,
  updateUserGameBundle,
} from './bundle';
import { getMyFriends, getSharedGames } from './friend';
import { getMyLibrary } from './library';
import { searchSteam } from './search';
import { searchMultiStore, getGamePrices } from './multistore';

const resolvers: Resolvers = {
  Query: {
    getBundlesByGameName,
    getGamePrices,
    getMyBundles,
    getMyFriends,
    getMyLibrary,
    getSharedGames,
    getUserBundles,
    searchMultiStore,
    searchSteam,
    updateUserBundles,
    updateUserGameBundle,
  },
};

export default resolvers;
