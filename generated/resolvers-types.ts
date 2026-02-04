import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum BundleSortField {
  Discount = 'DISCOUNT',
  Name = 'NAME',
  Price = 'PRICE'
}

export type BundleSortOptions = {
  field: BundleSortField;
  order: SortOrder;
};

export type MultiStoreResult = {
  __typename?: 'MultiStoreResult';
  cheapestEverDate?: Maybe<Scalars['String']['output']>;
  cheapestEverPrice?: Maybe<Scalars['String']['output']>;
  cheapestPrice?: Maybe<Scalars['String']['output']>;
  gameId: Scalars['String']['output'];
  stores: Array<StorePrice>;
  thumb?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getBundlesByGameName?: Maybe<Array<Maybe<SteamBundle>>>;
  getGamePrices?: Maybe<MultiStoreResult>;
  getMyBundles?: Maybe<Array<Maybe<SteamBundle>>>;
  getMyFriends?: Maybe<Array<Maybe<SteamFriend>>>;
  getMyLibrary?: Maybe<Array<Maybe<SteamGame>>>;
  getSharedGames?: Maybe<Array<Maybe<SharedGame>>>;
  getUserBundles?: Maybe<Array<Maybe<SteamBundle>>>;
  searchMultiStore?: Maybe<Array<Maybe<MultiStoreResult>>>;
  searchSteam?: Maybe<Array<Maybe<SteamGame>>>;
  updateUserBundles?: Maybe<Array<Maybe<SteamBundle>>>;
  updateUserGameBundle?: Maybe<SteamBundle>;
};


export type QueryGetBundlesByGameNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetGamePricesArgs = {
  gameId: Scalars['String']['input'];
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


export type QueryGetUserBundlesArgs = {
  sort?: InputMaybe<BundleSortOptions>;
  steamId: Scalars['String']['input'];
};


export type QuerySearchMultiStoreArgs = {
  q: Scalars['String']['input'];
};


export type QuerySearchSteamArgs = {
  bundlesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  q: Scalars['String']['input'];
};


export type QueryUpdateUserBundlesArgs = {
  steamId: Scalars['String']['input'];
};


export type QueryUpdateUserGameBundleArgs = {
  gameName: Scalars['String']['input'];
  steamId: Scalars['String']['input'];
};

export type SharedGame = {
  __typename?: 'SharedGame';
  friends?: Maybe<Array<Maybe<SteamFriend>>>;
  game?: Maybe<SteamGame>;
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
  name?: Maybe<Scalars['String']['output']>;
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

export type StorePrice = {
  __typename?: 'StorePrice';
  dealUrl: Scalars['String']['output'];
  price: Scalars['String']['output'];
  retailPrice: Scalars['String']['output'];
  savings?: Maybe<Scalars['String']['output']>;
  storeIcon?: Maybe<Scalars['String']['output']>;
  storeId: Scalars['String']['output'];
  storeName: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BundleSortField: BundleSortField;
  BundleSortOptions: BundleSortOptions;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  MultiStoreResult: ResolverTypeWrapper<MultiStoreResult>;
  Query: ResolverTypeWrapper<{}>;
  SharedGame: ResolverTypeWrapper<SharedGame>;
  SortField: SortField;
  SortOptions: SortOptions;
  SortOrder: SortOrder;
  SteamBundle: ResolverTypeWrapper<SteamBundle>;
  SteamFriend: ResolverTypeWrapper<SteamFriend>;
  SteamGame: ResolverTypeWrapper<SteamGame>;
  StorePrice: ResolverTypeWrapper<StorePrice>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  BundleSortOptions: BundleSortOptions;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  MultiStoreResult: MultiStoreResult;
  Query: {};
  SharedGame: SharedGame;
  SortOptions: SortOptions;
  SteamBundle: SteamBundle;
  SteamFriend: SteamFriend;
  SteamGame: SteamGame;
  StorePrice: StorePrice;
  String: Scalars['String']['output'];
}>;

export type MultiStoreResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultiStoreResult'] = ResolversParentTypes['MultiStoreResult']> = ResolversObject<{
  cheapestEverDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cheapestEverPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cheapestPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stores?: Resolver<Array<ResolversTypes['StorePrice']>, ParentType, ContextType>;
  thumb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getBundlesByGameName?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamBundle']>>>, ParentType, ContextType, RequireFields<QueryGetBundlesByGameNameArgs, 'name'>>;
  getGamePrices?: Resolver<Maybe<ResolversTypes['MultiStoreResult']>, ParentType, ContextType, RequireFields<QueryGetGamePricesArgs, 'gameId'>>;
  getMyBundles?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamBundle']>>>, ParentType, ContextType, RequireFields<QueryGetMyBundlesArgs, 'steamId'>>;
  getMyFriends?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamFriend']>>>, ParentType, ContextType, RequireFields<QueryGetMyFriendsArgs, 'steamId'>>;
  getMyLibrary?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamGame']>>>, ParentType, ContextType, RequireFields<QueryGetMyLibraryArgs, 'steamId'>>;
  getSharedGames?: Resolver<Maybe<Array<Maybe<ResolversTypes['SharedGame']>>>, ParentType, ContextType, RequireFields<QueryGetSharedGamesArgs, 'steamIds'>>;
  getUserBundles?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamBundle']>>>, ParentType, ContextType, RequireFields<QueryGetUserBundlesArgs, 'steamId'>>;
  searchMultiStore?: Resolver<Maybe<Array<Maybe<ResolversTypes['MultiStoreResult']>>>, ParentType, ContextType, RequireFields<QuerySearchMultiStoreArgs, 'q'>>;
  searchSteam?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamGame']>>>, ParentType, ContextType, RequireFields<QuerySearchSteamArgs, 'q'>>;
  updateUserBundles?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamBundle']>>>, ParentType, ContextType, RequireFields<QueryUpdateUserBundlesArgs, 'steamId'>>;
  updateUserGameBundle?: Resolver<Maybe<ResolversTypes['SteamBundle']>, ParentType, ContextType, RequireFields<QueryUpdateUserGameBundleArgs, 'gameName' | 'steamId'>>;
}>;

export type SharedGameResolvers<ContextType = any, ParentType extends ResolversParentTypes['SharedGame'] = ResolversParentTypes['SharedGame']> = ResolversObject<{
  friends?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamFriend']>>>, ParentType, ContextType>;
  game?: Resolver<Maybe<ResolversTypes['SteamGame']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SteamBundleResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamBundle'] = ResolversParentTypes['SteamBundle']> = ResolversObject<{
  discount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  games?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamGame']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SteamFriendResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamFriend'] = ResolversParentTypes['SteamFriend']> = ResolversObject<{
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SteamGameResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamGame'] = ResolversParentTypes['SteamGame']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playtimeForever?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StorePriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['StorePrice'] = ResolversParentTypes['StorePrice']> = ResolversObject<{
  dealUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  retailPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  savings?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeIcon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  storeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  MultiStoreResult?: MultiStoreResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SharedGame?: SharedGameResolvers<ContextType>;
  SteamBundle?: SteamBundleResolvers<ContextType>;
  SteamFriend?: SteamFriendResolvers<ContextType>;
  SteamGame?: SteamGameResolvers<ContextType>;
  StorePrice?: StorePriceResolvers<ContextType>;
}>;

