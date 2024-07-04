import { Resolvers } from '../../generated/resolvers-types';
import { getMyBundles } from './bundle';
import { getMyLibrary } from './library';
import { searchSteam } from './search';

const resolvers: Resolvers = {
  Query: {
    getMyBundles,
    getMyLibrary,
    searchSteam,
  },
};

export default resolvers;
