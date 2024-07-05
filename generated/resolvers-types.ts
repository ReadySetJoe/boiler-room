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

export type Query = {
  __typename?: 'Query';
  getBundlesByGameName?: Maybe<Array<Maybe<SteamBundle>>>;
  getMyBundles?: Maybe<Array<Maybe<SteamBundle>>>;
  getMyLibrary?: Maybe<Array<Maybe<SteamGame>>>;
  searchSteam?: Maybe<Array<Maybe<SteamGame>>>;
};


export type QueryGetBundlesByGameNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetMyBundlesArgs = {
  sort?: InputMaybe<SortOptions>;
  steamId: Scalars['String']['input'];
};


export type QueryGetMyLibraryArgs = {
  sort?: InputMaybe<SortOptions>;
  steamId: Scalars['String']['input'];
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

export type SteamGame = {
  __typename?: 'SteamGame';
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  playtimeForever?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
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
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Query: ResolverTypeWrapper<{}>;
  SortField: SortField;
  SortOptions: SortOptions;
  SortOrder: SortOrder;
  SteamBundle: ResolverTypeWrapper<SteamBundle>;
  SteamGame: ResolverTypeWrapper<SteamGame>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Query: {};
  SortOptions: SortOptions;
  SteamBundle: SteamBundle;
  SteamGame: SteamGame;
  String: Scalars['String']['output'];
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getBundlesByGameName?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamBundle']>>>, ParentType, ContextType, RequireFields<QueryGetBundlesByGameNameArgs, 'name'>>;
  getMyBundles?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamBundle']>>>, ParentType, ContextType, RequireFields<QueryGetMyBundlesArgs, 'steamId'>>;
  getMyLibrary?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamGame']>>>, ParentType, ContextType, RequireFields<QueryGetMyLibraryArgs, 'steamId'>>;
  searchSteam?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamGame']>>>, ParentType, ContextType, RequireFields<QuerySearchSteamArgs, 'q'>>;
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

export type SteamGameResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamGame'] = ResolversParentTypes['SteamGame']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playtimeForever?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  SteamBundle?: SteamBundleResolvers<ContextType>;
  SteamGame?: SteamGameResolvers<ContextType>;
}>;

