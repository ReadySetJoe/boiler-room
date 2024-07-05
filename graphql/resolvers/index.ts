import { Resolvers } from '../../generated/resolvers-types';
import { getBundlesByGameName, getMyBundles } from './bundle';
import { getMyLibrary } from './library';
import { searchSteam } from './search';

const resolvers: Resolvers = {
  Query: {
    getBundlesByGameName,
    getMyBundles,
    getMyLibrary,
    searchSteam,
  },
};

export default resolvers;
