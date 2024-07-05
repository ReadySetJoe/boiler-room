import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import fs from 'node:fs';
import path from 'path';
import resolvers from '../../graphql/resolvers';
import prisma from '../../lib/prisma';
import allowCors from '../../utils/cors';

const schemaPath = path.join(process.cwd(), 'graphql/schema.graphql');
const typeDefs = fs.readFileSync(schemaPath, 'utf8');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({
    req,
    res,
    models: prisma,
  }),
});

export default allowCors(handler);
