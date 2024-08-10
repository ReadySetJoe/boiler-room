import { Resolvers } from '../../generated/resolvers-types';
import { getBundlesByGameName, getMyBundles } from './bundle';
import { getMyFriends, getSharedGames } from './friend';
import { getMyLibrary } from './library';
import { searchSteam } from './search';

const resolvers: Resolvers = {
  Query: {
    getBundlesByGameName,
    getMyBundles,
    getMyFriends,
    getMyLibrary,
    getSharedGames,
    searchSteam,
  },
};

export default resolvers;
