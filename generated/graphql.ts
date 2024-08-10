/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  getBundlesByGameName?: Maybe<Array<Maybe<SteamBundle>>>;
  getMyBundles?: Maybe<Array<Maybe<SteamBundle>>>;
  getMyFriends?: Maybe<Array<Maybe<SteamFriend>>>;
  getMyLibrary?: Maybe<Array<Maybe<SteamGame>>>;
  getSharedGames?: Maybe<Array<Maybe<SteamGame>>>;
  searchSteam?: Maybe<Array<Maybe<SteamGame>>>;
};


export type QueryGetBundlesByGameNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetMyBundlesArgs = {
  sort?: InputMaybe<SortOptions>;
  steamId: Scalars['String']['input'];
};


export type QueryGetMyFriendsArgs = {
  steamId: Scalars['String']['input'];
};


export type QueryGetMyLibraryArgs = {
  sort?: InputMaybe<SortOptions>;
  steamId: Scalars['String']['input'];
};


export type QueryGetSharedGamesArgs = {
  steamIds: Array<Scalars['String']['input']>;
};


export type QuerySearchSteamArgs = {
  bundlesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  q: Scalars['String']['input'];
};

export enum SortField {
  Name = 'NAME',
  PlaytimeForever = 'PLAYTIME_FOREVER',
  Price = 'PRICE'
}

export type SortOptions = {
  field: SortField;
  order: SortOrder;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SteamBundle = {
  __typename?: 'SteamBundle';
  discount?: Maybe<Scalars['String']['output']>;
  games?: Maybe<Array<Maybe<SteamGame>>>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SteamFriend = {
  __typename?: 'SteamFriend';
  avatar?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
};

export type SteamGame = {
  __typename?: 'SteamGame';
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  playtimeForever?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type GetBundlesByGameNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetBundlesByGameNameQuery = { __typename?: 'Query', getBundlesByGameName?: Array<{ __typename?: 'SteamBundle', id?: string | null, name: string, image?: string | null, url?: string | null, price?: string | null, discount?: string | null, games?: Array<{ __typename?: 'SteamGame', id?: string | null, name: string, image?: string | null, url?: string | null } | null> | null } | null> | null };

export type GetMyBundlesQueryVariables = Exact<{
  steamId: Scalars['String']['input'];
  sort?: InputMaybe<SortOptions>;
}>;


export type GetMyBundlesQuery = { __typename?: 'Query', getMyBundles?: Array<{ __typename?: 'SteamBundle', id?: string | null, name: string, image?: string | null, url?: string | null, price?: string | null, games?: Array<{ __typename?: 'SteamGame', id?: string | null, name: string, image?: string | null, url?: string | null } | null> | null } | null> | null };

export type GetMyFriendsQueryVariables = Exact<{
  steamId: Scalars['String']['input'];
}>;


export type GetMyFriendsQuery = { __typename?: 'Query', getMyFriends?: Array<{ __typename?: 'SteamFriend', id?: string | null, name: string, avatar?: string | null } | null> | null };

export type GetMyLibraryQueryVariables = Exact<{
  steamId: Scalars['String']['input'];
  sort?: InputMaybe<SortOptions>;
}>;


export type GetMyLibraryQuery = { __typename?: 'Query', getMyLibrary?: Array<{ __typename?: 'SteamGame', id?: string | null, name: string, image?: string | null, url?: string | null, playtimeForever?: number | null } | null> | null };

export type GetSharedGamesQueryVariables = Exact<{
  steamIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetSharedGamesQuery = { __typename?: 'Query', getSharedGames?: Array<{ __typename?: 'SteamGame', id?: string | null, name: string, image?: string | null, url?: string | null } | null> | null };

export type SearchSteamQueryVariables = Exact<{
  q: Scalars['String']['input'];
  bundlesOnly?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SearchSteamQuery = { __typename?: 'Query', searchSteam?: Array<{ __typename?: 'SteamGame', id?: string | null, name: string, image?: string | null, url?: string | null, price?: string | null } | null> | null };


export const GetBundlesByGameNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBundlesByGameName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBundlesByGameName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetBundlesByGameNameQuery, GetBundlesByGameNameQueryVariables>;
export const GetMyBundlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyBundles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"steamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyBundles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"steamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"steamId"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyBundlesQuery, GetMyBundlesQueryVariables>;
export const GetMyFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"steamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"steamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"steamId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode<GetMyFriendsQuery, GetMyFriendsQueryVariables>;
export const GetMyLibraryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyLibrary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"steamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyLibrary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"steamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"steamId"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"playtimeForever"}}]}}]}}]} as unknown as DocumentNode<GetMyLibraryQuery, GetMyLibraryQueryVariables>;
export const GetSharedGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSharedGames"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"steamIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSharedGames"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"steamIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"steamIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetSharedGamesQuery, GetSharedGamesQueryVariables>;
export const SearchSteamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchSteam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"q"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bundlesOnly"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchSteam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"q"},"value":{"kind":"Variable","name":{"kind":"Name","value":"q"}}},{"kind":"Argument","name":{"kind":"Name","value":"bundlesOnly"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bundlesOnly"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<SearchSteamQuery, SearchSteamQueryVariables>;