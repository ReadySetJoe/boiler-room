/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetBundlesByGameName($name: String!) {\n  getBundlesByGameName(name: $name) {\n    id\n    name\n    image\n    url\n    price\n    discount\n    games {\n      id\n      name\n      image\n      url\n    }\n  }\n}": types.GetBundlesByGameNameDocument,
    "query GetMyBundles($steamId: String!, $sort: SortOptions) {\n  getMyBundles(steamId: $steamId, sort: $sort) {\n    id\n    name\n    image\n    url\n    price\n    games {\n      id\n      name\n      image\n      url\n    }\n  }\n}": types.GetMyBundlesDocument,
    "query GetMyFriends($steamId: String!) {\n  getMyFriends(steamId: $steamId) {\n    id\n    name\n    avatar\n  }\n}": types.GetMyFriendsDocument,
    "query GetMyLibrary($steamId: String!, $sort: SortOptions) {\n  getMyLibrary(steamId: $steamId, sort: $sort) {\n    id\n    name\n    image\n    url\n    playtimeForever\n  }\n}": types.GetMyLibraryDocument,
    "query GetSharedGames($steamIds: [String!]!) {\n  getSharedGames(steamIds: $steamIds) {\n    id\n    name\n    image\n    url\n  }\n}": types.GetSharedGamesDocument,
    "query SearchSteam($q: String!, $bundlesOnly: Boolean) {\n  searchSteam(q: $q, bundlesOnly: $bundlesOnly) {\n    id\n    name\n    image\n    url\n    price\n  }\n}": types.SearchSteamDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetBundlesByGameName($name: String!) {\n  getBundlesByGameName(name: $name) {\n    id\n    name\n    image\n    url\n    price\n    discount\n    games {\n      id\n      name\n      image\n      url\n    }\n  }\n}"): (typeof documents)["query GetBundlesByGameName($name: String!) {\n  getBundlesByGameName(name: $name) {\n    id\n    name\n    image\n    url\n    price\n    discount\n    games {\n      id\n      name\n      image\n      url\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMyBundles($steamId: String!, $sort: SortOptions) {\n  getMyBundles(steamId: $steamId, sort: $sort) {\n    id\n    name\n    image\n    url\n    price\n    games {\n      id\n      name\n      image\n      url\n    }\n  }\n}"): (typeof documents)["query GetMyBundles($steamId: String!, $sort: SortOptions) {\n  getMyBundles(steamId: $steamId, sort: $sort) {\n    id\n    name\n    image\n    url\n    price\n    games {\n      id\n      name\n      image\n      url\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMyFriends($steamId: String!) {\n  getMyFriends(steamId: $steamId) {\n    id\n    name\n    avatar\n  }\n}"): (typeof documents)["query GetMyFriends($steamId: String!) {\n  getMyFriends(steamId: $steamId) {\n    id\n    name\n    avatar\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMyLibrary($steamId: String!, $sort: SortOptions) {\n  getMyLibrary(steamId: $steamId, sort: $sort) {\n    id\n    name\n    image\n    url\n    playtimeForever\n  }\n}"): (typeof documents)["query GetMyLibrary($steamId: String!, $sort: SortOptions) {\n  getMyLibrary(steamId: $steamId, sort: $sort) {\n    id\n    name\n    image\n    url\n    playtimeForever\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSharedGames($steamIds: [String!]!) {\n  getSharedGames(steamIds: $steamIds) {\n    id\n    name\n    image\n    url\n  }\n}"): (typeof documents)["query GetSharedGames($steamIds: [String!]!) {\n  getSharedGames(steamIds: $steamIds) {\n    id\n    name\n    image\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchSteam($q: String!, $bundlesOnly: Boolean) {\n  searchSteam(q: $q, bundlesOnly: $bundlesOnly) {\n    id\n    name\n    image\n    url\n    price\n  }\n}"): (typeof documents)["query SearchSteam($q: String!, $bundlesOnly: Boolean) {\n  searchSteam(q: $q, bundlesOnly: $bundlesOnly) {\n    id\n    name\n    image\n    url\n    price\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;