
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model BundleGame
 * 
 */
export type BundleGame = $Result.DefaultSelection<Prisma.$BundleGamePayload>
/**
 * Model Bundle
 * 
 */
export type Bundle = $Result.DefaultSelection<Prisma.$BundlePayload>
/**
 * Model UserGame
 * 
 */
export type UserGame = $Result.DefaultSelection<Prisma.$UserGamePayload>
/**
 * Model UserBundle
 * 
 */
export type UserBundle = $Result.DefaultSelection<Prisma.$UserBundlePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs>;

  /**
   * `prisma.bundleGame`: Exposes CRUD operations for the **BundleGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BundleGames
    * const bundleGames = await prisma.bundleGame.findMany()
    * ```
    */
  get bundleGame(): Prisma.BundleGameDelegate<ExtArgs>;

  /**
   * `prisma.bundle`: Exposes CRUD operations for the **Bundle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bundles
    * const bundles = await prisma.bundle.findMany()
    * ```
    */
  get bundle(): Prisma.BundleDelegate<ExtArgs>;

  /**
   * `prisma.userGame`: Exposes CRUD operations for the **UserGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGames
    * const userGames = await prisma.userGame.findMany()
    * ```
    */
  get userGame(): Prisma.UserGameDelegate<ExtArgs>;

  /**
   * `prisma.userBundle`: Exposes CRUD operations for the **UserBundle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBundles
    * const userBundles = await prisma.userBundle.findMany()
    * ```
    */
  get userBundle(): Prisma.UserBundleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Game: 'Game',
    BundleGame: 'BundleGame',
    Bundle: 'Bundle',
    UserGame: 'UserGame',
    UserBundle: 'UserBundle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'session' | 'user' | 'verificationToken' | 'game' | 'bundleGame' | 'bundle' | 'userGame' | 'userBundle'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>,
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      BundleGame: {
        payload: Prisma.$BundleGamePayload<ExtArgs>
        fields: Prisma.BundleGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BundleGameFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundleGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BundleGameFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundleGamePayload>
          }
          findFirst: {
            args: Prisma.BundleGameFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundleGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BundleGameFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundleGamePayload>
          }
          findMany: {
            args: Prisma.BundleGameFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundleGamePayload>[]
          }
          create: {
            args: Prisma.BundleGameCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundleGamePayload>
          }
          createMany: {
            args: Prisma.BundleGameCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BundleGameDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundleGamePayload>
          }
          update: {
            args: Prisma.BundleGameUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundleGamePayload>
          }
          deleteMany: {
            args: Prisma.BundleGameDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BundleGameUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BundleGameUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundleGamePayload>
          }
          aggregate: {
            args: Prisma.BundleGameAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBundleGame>
          }
          groupBy: {
            args: Prisma.BundleGameGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BundleGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.BundleGameCountArgs<ExtArgs>,
            result: $Utils.Optional<BundleGameCountAggregateOutputType> | number
          }
        }
      }
      Bundle: {
        payload: Prisma.$BundlePayload<ExtArgs>
        fields: Prisma.BundleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BundleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BundleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          findFirst: {
            args: Prisma.BundleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BundleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          findMany: {
            args: Prisma.BundleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>[]
          }
          create: {
            args: Prisma.BundleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          createMany: {
            args: Prisma.BundleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BundleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          update: {
            args: Prisma.BundleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          deleteMany: {
            args: Prisma.BundleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BundleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BundleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          aggregate: {
            args: Prisma.BundleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBundle>
          }
          groupBy: {
            args: Prisma.BundleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BundleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BundleCountArgs<ExtArgs>,
            result: $Utils.Optional<BundleCountAggregateOutputType> | number
          }
        }
      }
      UserGame: {
        payload: Prisma.$UserGamePayload<ExtArgs>
        fields: Prisma.UserGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGameFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGameFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          findFirst: {
            args: Prisma.UserGameFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGameFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          findMany: {
            args: Prisma.UserGameFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          create: {
            args: Prisma.UserGameCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          createMany: {
            args: Prisma.UserGameCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserGameDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          update: {
            args: Prisma.UserGameUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          deleteMany: {
            args: Prisma.UserGameDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserGameUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserGameUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          aggregate: {
            args: Prisma.UserGameAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserGame>
          }
          groupBy: {
            args: Prisma.UserGameGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGameCountArgs<ExtArgs>,
            result: $Utils.Optional<UserGameCountAggregateOutputType> | number
          }
        }
      }
      UserBundle: {
        payload: Prisma.$UserBundlePayload<ExtArgs>
        fields: Prisma.UserBundleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBundleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBundlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBundleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBundlePayload>
          }
          findFirst: {
            args: Prisma.UserBundleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBundlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBundleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBundlePayload>
          }
          findMany: {
            args: Prisma.UserBundleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBundlePayload>[]
          }
          create: {
            args: Prisma.UserBundleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBundlePayload>
          }
          createMany: {
            args: Prisma.UserBundleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserBundleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBundlePayload>
          }
          update: {
            args: Prisma.UserBundleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBundlePayload>
          }
          deleteMany: {
            args: Prisma.UserBundleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserBundleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserBundleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBundlePayload>
          }
          aggregate: {
            args: Prisma.UserBundleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserBundle>
          }
          groupBy: {
            args: Prisma.UserBundleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserBundleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBundleCountArgs<ExtArgs>,
            result: $Utils.Optional<UserBundleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    userGames: number
    userBundles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    userGames?: boolean | UserCountOutputTypeCountUserGamesArgs
    userBundles?: boolean | UserCountOutputTypeCountUserBundlesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserGamesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserBundlesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserBundleWhereInput
  }



  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    bundleGames: number
    userGames: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    bundleGames?: boolean | GameCountOutputTypeCountBundleGamesArgs
    userGames?: boolean | GameCountOutputTypeCountUserGamesArgs
  }

  // Custom InputTypes

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountBundleGamesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BundleGameWhereInput
  }


  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountUserGamesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
  }



  /**
   * Count Type BundleCountOutputType
   */

  export type BundleCountOutputType = {
    bundleGames: number
    userBundles: number
  }

  export type BundleCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    bundleGames?: boolean | BundleCountOutputTypeCountBundleGamesArgs
    userBundles?: boolean | BundleCountOutputTypeCountUserBundlesArgs
  }

  // Custom InputTypes

  /**
   * BundleCountOutputType without action
   */
  export type BundleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCountOutputType
     */
    select?: BundleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BundleCountOutputType without action
   */
  export type BundleCountOutputTypeCountBundleGamesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BundleGameWhereInput
  }


  /**
   * BundleCountOutputType without action
   */
  export type BundleCountOutputTypeCountUserBundlesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserBundleWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    steamId: string | null
    twitchId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    steamId: string | null
    twitchId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    steamId: number
    twitchId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    steamId?: true
    twitchId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    steamId?: true
    twitchId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    steamId?: true
    twitchId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    steamId: string | null
    twitchId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    steamId?: boolean
    twitchId?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    userGames?: boolean | User$userGamesArgs<ExtArgs>
    userBundles?: boolean | User$userBundlesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    steamId?: boolean
    twitchId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    userGames?: boolean | User$userGamesArgs<ExtArgs>
    userBundles?: boolean | User$userBundlesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      userGames: Prisma.$UserGamePayload<ExtArgs>[]
      userBundles: Prisma.$UserBundlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      steamId: string | null
      twitchId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    userGames<T extends User$userGamesArgs<ExtArgs> = {}>(args?: Subset<T, User$userGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, 'findMany'> | Null>;

    userBundles<T extends User$userBundlesArgs<ExtArgs> = {}>(args?: Subset<T, User$userBundlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBundlePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly steamId: FieldRef<"User", 'String'>
    readonly twitchId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User.userGames
   */
  export type User$userGamesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    cursor?: UserGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }


  /**
   * User.userBundles
   */
  export type User$userBundlesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
    where?: UserBundleWhereInput
    orderBy?: UserBundleOrderByWithRelationInput | UserBundleOrderByWithRelationInput[]
    cursor?: UserBundleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBundleScalarFieldEnum | UserBundleScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }


  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }



  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    steamId: string | null
    name: string | null
    image: string | null
    price: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    steamId: string | null
    name: string | null
    image: string | null
    price: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    steamId: number
    name: number
    image: number
    price: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    steamId?: true
    name?: true
    image?: true
    price?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    steamId?: true
    name?: true
    image?: true
    price?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    steamId?: true
    name?: true
    image?: true
    price?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    steamId: string
    name: string
    image: string
    price: string
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    steamId?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
    bundleGames?: boolean | Game$bundleGamesArgs<ExtArgs>
    userGames?: boolean | Game$userGamesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    steamId?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
  }

  export type GameInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    bundleGames?: boolean | Game$bundleGamesArgs<ExtArgs>
    userGames?: boolean | Game$userGamesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GamePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      bundleGames: Prisma.$BundleGamePayload<ExtArgs>[]
      userGames: Prisma.$UserGamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      steamId: string
      name: string
      image: string
      price: string
    }, ExtArgs["result"]["game"]>
    composites: {}
  }


  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GameFindManyArgs, 'select' | 'include'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Game that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
    **/
    create<T extends GameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GameCreateArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Games.
     *     @param {GameCreateManyArgs} args - Arguments to create many Games.
     *     @example
     *     // Create many Games
     *     const game = await prisma.game.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
    **/
    delete<T extends GameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GameDeleteArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GameUpdateArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
    **/
    upsert<T extends GameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GameUpsertArgs<ExtArgs>>
    ): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bundleGames<T extends Game$bundleGamesArgs<ExtArgs> = {}>(args?: Subset<T, Game$bundleGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundleGamePayload<ExtArgs>, T, 'findMany'> | Null>;

    userGames<T extends Game$userGamesArgs<ExtArgs> = {}>(args?: Subset<T, Game$userGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Game model
   */ 
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly steamId: FieldRef<"Game", 'String'>
    readonly name: FieldRef<"Game", 'String'>
    readonly image: FieldRef<"Game", 'String'>
    readonly price: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }


  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }


  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }


  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }


  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }


  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }


  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }


  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
  }


  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }


  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }


  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
  }


  /**
   * Game.bundleGames
   */
  export type Game$bundleGamesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
    where?: BundleGameWhereInput
    orderBy?: BundleGameOrderByWithRelationInput | BundleGameOrderByWithRelationInput[]
    cursor?: BundleGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BundleGameScalarFieldEnum | BundleGameScalarFieldEnum[]
  }


  /**
   * Game.userGames
   */
  export type Game$userGamesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    cursor?: UserGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }


  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
  }



  /**
   * Model BundleGame
   */

  export type AggregateBundleGame = {
    _count: BundleGameCountAggregateOutputType | null
    _min: BundleGameMinAggregateOutputType | null
    _max: BundleGameMaxAggregateOutputType | null
  }

  export type BundleGameMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    bundleId: string | null
  }

  export type BundleGameMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    bundleId: string | null
  }

  export type BundleGameCountAggregateOutputType = {
    id: number
    gameId: number
    bundleId: number
    _all: number
  }


  export type BundleGameMinAggregateInputType = {
    id?: true
    gameId?: true
    bundleId?: true
  }

  export type BundleGameMaxAggregateInputType = {
    id?: true
    gameId?: true
    bundleId?: true
  }

  export type BundleGameCountAggregateInputType = {
    id?: true
    gameId?: true
    bundleId?: true
    _all?: true
  }

  export type BundleGameAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BundleGame to aggregate.
     */
    where?: BundleGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundleGames to fetch.
     */
    orderBy?: BundleGameOrderByWithRelationInput | BundleGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BundleGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundleGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundleGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BundleGames
    **/
    _count?: true | BundleGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BundleGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BundleGameMaxAggregateInputType
  }

  export type GetBundleGameAggregateType<T extends BundleGameAggregateArgs> = {
        [P in keyof T & keyof AggregateBundleGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBundleGame[P]>
      : GetScalarType<T[P], AggregateBundleGame[P]>
  }




  export type BundleGameGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BundleGameWhereInput
    orderBy?: BundleGameOrderByWithAggregationInput | BundleGameOrderByWithAggregationInput[]
    by: BundleGameScalarFieldEnum[] | BundleGameScalarFieldEnum
    having?: BundleGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BundleGameCountAggregateInputType | true
    _min?: BundleGameMinAggregateInputType
    _max?: BundleGameMaxAggregateInputType
  }

  export type BundleGameGroupByOutputType = {
    id: string
    gameId: string
    bundleId: string
    _count: BundleGameCountAggregateOutputType | null
    _min: BundleGameMinAggregateOutputType | null
    _max: BundleGameMaxAggregateOutputType | null
  }

  type GetBundleGameGroupByPayload<T extends BundleGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BundleGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BundleGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BundleGameGroupByOutputType[P]>
            : GetScalarType<T[P], BundleGameGroupByOutputType[P]>
        }
      >
    >


  export type BundleGameSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    bundleId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    bundle?: boolean | BundleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bundleGame"]>

  export type BundleGameSelectScalar = {
    id?: boolean
    gameId?: boolean
    bundleId?: boolean
  }

  export type BundleGameInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    bundle?: boolean | BundleDefaultArgs<ExtArgs>
  }


  export type $BundleGamePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "BundleGame"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      bundle: Prisma.$BundlePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      gameId: string
      bundleId: string
    }, ExtArgs["result"]["bundleGame"]>
    composites: {}
  }


  type BundleGameGetPayload<S extends boolean | null | undefined | BundleGameDefaultArgs> = $Result.GetResult<Prisma.$BundleGamePayload, S>

  type BundleGameCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BundleGameFindManyArgs, 'select' | 'include'> & {
      select?: BundleGameCountAggregateInputType | true
    }

  export interface BundleGameDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BundleGame'], meta: { name: 'BundleGame' } }
    /**
     * Find zero or one BundleGame that matches the filter.
     * @param {BundleGameFindUniqueArgs} args - Arguments to find a BundleGame
     * @example
     * // Get one BundleGame
     * const bundleGame = await prisma.bundleGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BundleGameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BundleGameFindUniqueArgs<ExtArgs>>
    ): Prisma__BundleGameClient<$Result.GetResult<Prisma.$BundleGamePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BundleGame that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BundleGameFindUniqueOrThrowArgs} args - Arguments to find a BundleGame
     * @example
     * // Get one BundleGame
     * const bundleGame = await prisma.bundleGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BundleGameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleGameFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BundleGameClient<$Result.GetResult<Prisma.$BundleGamePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BundleGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleGameFindFirstArgs} args - Arguments to find a BundleGame
     * @example
     * // Get one BundleGame
     * const bundleGame = await prisma.bundleGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BundleGameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleGameFindFirstArgs<ExtArgs>>
    ): Prisma__BundleGameClient<$Result.GetResult<Prisma.$BundleGamePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BundleGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleGameFindFirstOrThrowArgs} args - Arguments to find a BundleGame
     * @example
     * // Get one BundleGame
     * const bundleGame = await prisma.bundleGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BundleGameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleGameFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BundleGameClient<$Result.GetResult<Prisma.$BundleGamePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BundleGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleGameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BundleGames
     * const bundleGames = await prisma.bundleGame.findMany()
     * 
     * // Get first 10 BundleGames
     * const bundleGames = await prisma.bundleGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bundleGameWithIdOnly = await prisma.bundleGame.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BundleGameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleGameFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundleGamePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BundleGame.
     * @param {BundleGameCreateArgs} args - Arguments to create a BundleGame.
     * @example
     * // Create one BundleGame
     * const BundleGame = await prisma.bundleGame.create({
     *   data: {
     *     // ... data to create a BundleGame
     *   }
     * })
     * 
    **/
    create<T extends BundleGameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BundleGameCreateArgs<ExtArgs>>
    ): Prisma__BundleGameClient<$Result.GetResult<Prisma.$BundleGamePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BundleGames.
     *     @param {BundleGameCreateManyArgs} args - Arguments to create many BundleGames.
     *     @example
     *     // Create many BundleGames
     *     const bundleGame = await prisma.bundleGame.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BundleGameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleGameCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BundleGame.
     * @param {BundleGameDeleteArgs} args - Arguments to delete one BundleGame.
     * @example
     * // Delete one BundleGame
     * const BundleGame = await prisma.bundleGame.delete({
     *   where: {
     *     // ... filter to delete one BundleGame
     *   }
     * })
     * 
    **/
    delete<T extends BundleGameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BundleGameDeleteArgs<ExtArgs>>
    ): Prisma__BundleGameClient<$Result.GetResult<Prisma.$BundleGamePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BundleGame.
     * @param {BundleGameUpdateArgs} args - Arguments to update one BundleGame.
     * @example
     * // Update one BundleGame
     * const bundleGame = await prisma.bundleGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BundleGameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BundleGameUpdateArgs<ExtArgs>>
    ): Prisma__BundleGameClient<$Result.GetResult<Prisma.$BundleGamePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BundleGames.
     * @param {BundleGameDeleteManyArgs} args - Arguments to filter BundleGames to delete.
     * @example
     * // Delete a few BundleGames
     * const { count } = await prisma.bundleGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BundleGameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleGameDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BundleGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BundleGames
     * const bundleGame = await prisma.bundleGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BundleGameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BundleGameUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BundleGame.
     * @param {BundleGameUpsertArgs} args - Arguments to update or create a BundleGame.
     * @example
     * // Update or create a BundleGame
     * const bundleGame = await prisma.bundleGame.upsert({
     *   create: {
     *     // ... data to create a BundleGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BundleGame we want to update
     *   }
     * })
    **/
    upsert<T extends BundleGameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BundleGameUpsertArgs<ExtArgs>>
    ): Prisma__BundleGameClient<$Result.GetResult<Prisma.$BundleGamePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BundleGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleGameCountArgs} args - Arguments to filter BundleGames to count.
     * @example
     * // Count the number of BundleGames
     * const count = await prisma.bundleGame.count({
     *   where: {
     *     // ... the filter for the BundleGames we want to count
     *   }
     * })
    **/
    count<T extends BundleGameCountArgs>(
      args?: Subset<T, BundleGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BundleGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BundleGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BundleGameAggregateArgs>(args: Subset<T, BundleGameAggregateArgs>): Prisma.PrismaPromise<GetBundleGameAggregateType<T>>

    /**
     * Group by BundleGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BundleGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BundleGameGroupByArgs['orderBy'] }
        : { orderBy?: BundleGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BundleGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBundleGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BundleGame model
   */
  readonly fields: BundleGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BundleGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BundleGameClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    bundle<T extends BundleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BundleDefaultArgs<ExtArgs>>): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BundleGame model
   */ 
  interface BundleGameFieldRefs {
    readonly id: FieldRef<"BundleGame", 'String'>
    readonly gameId: FieldRef<"BundleGame", 'String'>
    readonly bundleId: FieldRef<"BundleGame", 'String'>
  }
    

  // Custom InputTypes

  /**
   * BundleGame findUnique
   */
  export type BundleGameFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
    /**
     * Filter, which BundleGame to fetch.
     */
    where: BundleGameWhereUniqueInput
  }


  /**
   * BundleGame findUniqueOrThrow
   */
  export type BundleGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
    /**
     * Filter, which BundleGame to fetch.
     */
    where: BundleGameWhereUniqueInput
  }


  /**
   * BundleGame findFirst
   */
  export type BundleGameFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
    /**
     * Filter, which BundleGame to fetch.
     */
    where?: BundleGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundleGames to fetch.
     */
    orderBy?: BundleGameOrderByWithRelationInput | BundleGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BundleGames.
     */
    cursor?: BundleGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundleGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundleGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BundleGames.
     */
    distinct?: BundleGameScalarFieldEnum | BundleGameScalarFieldEnum[]
  }


  /**
   * BundleGame findFirstOrThrow
   */
  export type BundleGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
    /**
     * Filter, which BundleGame to fetch.
     */
    where?: BundleGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundleGames to fetch.
     */
    orderBy?: BundleGameOrderByWithRelationInput | BundleGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BundleGames.
     */
    cursor?: BundleGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundleGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundleGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BundleGames.
     */
    distinct?: BundleGameScalarFieldEnum | BundleGameScalarFieldEnum[]
  }


  /**
   * BundleGame findMany
   */
  export type BundleGameFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
    /**
     * Filter, which BundleGames to fetch.
     */
    where?: BundleGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BundleGames to fetch.
     */
    orderBy?: BundleGameOrderByWithRelationInput | BundleGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BundleGames.
     */
    cursor?: BundleGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BundleGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BundleGames.
     */
    skip?: number
    distinct?: BundleGameScalarFieldEnum | BundleGameScalarFieldEnum[]
  }


  /**
   * BundleGame create
   */
  export type BundleGameCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
    /**
     * The data needed to create a BundleGame.
     */
    data: XOR<BundleGameCreateInput, BundleGameUncheckedCreateInput>
  }


  /**
   * BundleGame createMany
   */
  export type BundleGameCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BundleGames.
     */
    data: BundleGameCreateManyInput | BundleGameCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BundleGame update
   */
  export type BundleGameUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
    /**
     * The data needed to update a BundleGame.
     */
    data: XOR<BundleGameUpdateInput, BundleGameUncheckedUpdateInput>
    /**
     * Choose, which BundleGame to update.
     */
    where: BundleGameWhereUniqueInput
  }


  /**
   * BundleGame updateMany
   */
  export type BundleGameUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BundleGames.
     */
    data: XOR<BundleGameUpdateManyMutationInput, BundleGameUncheckedUpdateManyInput>
    /**
     * Filter which BundleGames to update
     */
    where?: BundleGameWhereInput
  }


  /**
   * BundleGame upsert
   */
  export type BundleGameUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
    /**
     * The filter to search for the BundleGame to update in case it exists.
     */
    where: BundleGameWhereUniqueInput
    /**
     * In case the BundleGame found by the `where` argument doesn't exist, create a new BundleGame with this data.
     */
    create: XOR<BundleGameCreateInput, BundleGameUncheckedCreateInput>
    /**
     * In case the BundleGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BundleGameUpdateInput, BundleGameUncheckedUpdateInput>
  }


  /**
   * BundleGame delete
   */
  export type BundleGameDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
    /**
     * Filter which BundleGame to delete.
     */
    where: BundleGameWhereUniqueInput
  }


  /**
   * BundleGame deleteMany
   */
  export type BundleGameDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BundleGames to delete
     */
    where?: BundleGameWhereInput
  }


  /**
   * BundleGame without action
   */
  export type BundleGameDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
  }



  /**
   * Model Bundle
   */

  export type AggregateBundle = {
    _count: BundleCountAggregateOutputType | null
    _avg: BundleAvgAggregateOutputType | null
    _sum: BundleSumAggregateOutputType | null
    _min: BundleMinAggregateOutputType | null
    _max: BundleMaxAggregateOutputType | null
  }

  export type BundleAvgAggregateOutputType = {
    priceInCents: number | null
    discountPercent: number | null
  }

  export type BundleSumAggregateOutputType = {
    priceInCents: number | null
    discountPercent: number | null
  }

  export type BundleMinAggregateOutputType = {
    id: string | null
    steamId: string | null
    name: string | null
    image: string | null
    url: string | null
    price: string | null
    priceInCents: number | null
    discount: string | null
    discountPercent: number | null
  }

  export type BundleMaxAggregateOutputType = {
    id: string | null
    steamId: string | null
    name: string | null
    image: string | null
    url: string | null
    price: string | null
    priceInCents: number | null
    discount: string | null
    discountPercent: number | null
  }

  export type BundleCountAggregateOutputType = {
    id: number
    steamId: number
    name: number
    image: number
    url: number
    price: number
    priceInCents: number
    discount: number
    discountPercent: number
    _all: number
  }


  export type BundleAvgAggregateInputType = {
    priceInCents?: true
    discountPercent?: true
  }

  export type BundleSumAggregateInputType = {
    priceInCents?: true
    discountPercent?: true
  }

  export type BundleMinAggregateInputType = {
    id?: true
    steamId?: true
    name?: true
    image?: true
    url?: true
    price?: true
    priceInCents?: true
    discount?: true
    discountPercent?: true
  }

  export type BundleMaxAggregateInputType = {
    id?: true
    steamId?: true
    name?: true
    image?: true
    url?: true
    price?: true
    priceInCents?: true
    discount?: true
    discountPercent?: true
  }

  export type BundleCountAggregateInputType = {
    id?: true
    steamId?: true
    name?: true
    image?: true
    url?: true
    price?: true
    priceInCents?: true
    discount?: true
    discountPercent?: true
    _all?: true
  }

  export type BundleAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bundle to aggregate.
     */
    where?: BundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bundles to fetch.
     */
    orderBy?: BundleOrderByWithRelationInput | BundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bundles
    **/
    _count?: true | BundleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BundleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BundleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BundleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BundleMaxAggregateInputType
  }

  export type GetBundleAggregateType<T extends BundleAggregateArgs> = {
        [P in keyof T & keyof AggregateBundle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBundle[P]>
      : GetScalarType<T[P], AggregateBundle[P]>
  }




  export type BundleGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BundleWhereInput
    orderBy?: BundleOrderByWithAggregationInput | BundleOrderByWithAggregationInput[]
    by: BundleScalarFieldEnum[] | BundleScalarFieldEnum
    having?: BundleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BundleCountAggregateInputType | true
    _avg?: BundleAvgAggregateInputType
    _sum?: BundleSumAggregateInputType
    _min?: BundleMinAggregateInputType
    _max?: BundleMaxAggregateInputType
  }

  export type BundleGroupByOutputType = {
    id: string
    steamId: string
    name: string
    image: string
    url: string
    price: string
    priceInCents: number
    discount: string
    discountPercent: number
    _count: BundleCountAggregateOutputType | null
    _avg: BundleAvgAggregateOutputType | null
    _sum: BundleSumAggregateOutputType | null
    _min: BundleMinAggregateOutputType | null
    _max: BundleMaxAggregateOutputType | null
  }

  type GetBundleGroupByPayload<T extends BundleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BundleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BundleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BundleGroupByOutputType[P]>
            : GetScalarType<T[P], BundleGroupByOutputType[P]>
        }
      >
    >


  export type BundleSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    steamId?: boolean
    name?: boolean
    image?: boolean
    url?: boolean
    price?: boolean
    priceInCents?: boolean
    discount?: boolean
    discountPercent?: boolean
    bundleGames?: boolean | Bundle$bundleGamesArgs<ExtArgs>
    userBundles?: boolean | Bundle$userBundlesArgs<ExtArgs>
    _count?: boolean | BundleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bundle"]>

  export type BundleSelectScalar = {
    id?: boolean
    steamId?: boolean
    name?: boolean
    image?: boolean
    url?: boolean
    price?: boolean
    priceInCents?: boolean
    discount?: boolean
    discountPercent?: boolean
  }

  export type BundleInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    bundleGames?: boolean | Bundle$bundleGamesArgs<ExtArgs>
    userBundles?: boolean | Bundle$userBundlesArgs<ExtArgs>
    _count?: boolean | BundleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BundlePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Bundle"
    objects: {
      bundleGames: Prisma.$BundleGamePayload<ExtArgs>[]
      userBundles: Prisma.$UserBundlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      steamId: string
      name: string
      image: string
      url: string
      price: string
      priceInCents: number
      discount: string
      discountPercent: number
    }, ExtArgs["result"]["bundle"]>
    composites: {}
  }


  type BundleGetPayload<S extends boolean | null | undefined | BundleDefaultArgs> = $Result.GetResult<Prisma.$BundlePayload, S>

  type BundleCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BundleFindManyArgs, 'select' | 'include'> & {
      select?: BundleCountAggregateInputType | true
    }

  export interface BundleDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bundle'], meta: { name: 'Bundle' } }
    /**
     * Find zero or one Bundle that matches the filter.
     * @param {BundleFindUniqueArgs} args - Arguments to find a Bundle
     * @example
     * // Get one Bundle
     * const bundle = await prisma.bundle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BundleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BundleFindUniqueArgs<ExtArgs>>
    ): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bundle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BundleFindUniqueOrThrowArgs} args - Arguments to find a Bundle
     * @example
     * // Get one Bundle
     * const bundle = await prisma.bundle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BundleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bundle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleFindFirstArgs} args - Arguments to find a Bundle
     * @example
     * // Get one Bundle
     * const bundle = await prisma.bundle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BundleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleFindFirstArgs<ExtArgs>>
    ): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bundle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleFindFirstOrThrowArgs} args - Arguments to find a Bundle
     * @example
     * // Get one Bundle
     * const bundle = await prisma.bundle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BundleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bundles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bundles
     * const bundles = await prisma.bundle.findMany()
     * 
     * // Get first 10 Bundles
     * const bundles = await prisma.bundle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bundleWithIdOnly = await prisma.bundle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BundleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bundle.
     * @param {BundleCreateArgs} args - Arguments to create a Bundle.
     * @example
     * // Create one Bundle
     * const Bundle = await prisma.bundle.create({
     *   data: {
     *     // ... data to create a Bundle
     *   }
     * })
     * 
    **/
    create<T extends BundleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BundleCreateArgs<ExtArgs>>
    ): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bundles.
     *     @param {BundleCreateManyArgs} args - Arguments to create many Bundles.
     *     @example
     *     // Create many Bundles
     *     const bundle = await prisma.bundle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BundleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bundle.
     * @param {BundleDeleteArgs} args - Arguments to delete one Bundle.
     * @example
     * // Delete one Bundle
     * const Bundle = await prisma.bundle.delete({
     *   where: {
     *     // ... filter to delete one Bundle
     *   }
     * })
     * 
    **/
    delete<T extends BundleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BundleDeleteArgs<ExtArgs>>
    ): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bundle.
     * @param {BundleUpdateArgs} args - Arguments to update one Bundle.
     * @example
     * // Update one Bundle
     * const bundle = await prisma.bundle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BundleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BundleUpdateArgs<ExtArgs>>
    ): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bundles.
     * @param {BundleDeleteManyArgs} args - Arguments to filter Bundles to delete.
     * @example
     * // Delete a few Bundles
     * const { count } = await prisma.bundle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BundleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BundleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bundles
     * const bundle = await prisma.bundle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BundleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BundleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bundle.
     * @param {BundleUpsertArgs} args - Arguments to update or create a Bundle.
     * @example
     * // Update or create a Bundle
     * const bundle = await prisma.bundle.upsert({
     *   create: {
     *     // ... data to create a Bundle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bundle we want to update
     *   }
     * })
    **/
    upsert<T extends BundleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BundleUpsertArgs<ExtArgs>>
    ): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleCountArgs} args - Arguments to filter Bundles to count.
     * @example
     * // Count the number of Bundles
     * const count = await prisma.bundle.count({
     *   where: {
     *     // ... the filter for the Bundles we want to count
     *   }
     * })
    **/
    count<T extends BundleCountArgs>(
      args?: Subset<T, BundleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BundleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BundleAggregateArgs>(args: Subset<T, BundleAggregateArgs>): Prisma.PrismaPromise<GetBundleAggregateType<T>>

    /**
     * Group by Bundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BundleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BundleGroupByArgs['orderBy'] }
        : { orderBy?: BundleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BundleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBundleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bundle model
   */
  readonly fields: BundleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bundle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BundleClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bundleGames<T extends Bundle$bundleGamesArgs<ExtArgs> = {}>(args?: Subset<T, Bundle$bundleGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundleGamePayload<ExtArgs>, T, 'findMany'> | Null>;

    userBundles<T extends Bundle$userBundlesArgs<ExtArgs> = {}>(args?: Subset<T, Bundle$userBundlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBundlePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bundle model
   */ 
  interface BundleFieldRefs {
    readonly id: FieldRef<"Bundle", 'String'>
    readonly steamId: FieldRef<"Bundle", 'String'>
    readonly name: FieldRef<"Bundle", 'String'>
    readonly image: FieldRef<"Bundle", 'String'>
    readonly url: FieldRef<"Bundle", 'String'>
    readonly price: FieldRef<"Bundle", 'String'>
    readonly priceInCents: FieldRef<"Bundle", 'Int'>
    readonly discount: FieldRef<"Bundle", 'String'>
    readonly discountPercent: FieldRef<"Bundle", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Bundle findUnique
   */
  export type BundleFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter, which Bundle to fetch.
     */
    where: BundleWhereUniqueInput
  }


  /**
   * Bundle findUniqueOrThrow
   */
  export type BundleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter, which Bundle to fetch.
     */
    where: BundleWhereUniqueInput
  }


  /**
   * Bundle findFirst
   */
  export type BundleFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter, which Bundle to fetch.
     */
    where?: BundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bundles to fetch.
     */
    orderBy?: BundleOrderByWithRelationInput | BundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bundles.
     */
    cursor?: BundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bundles.
     */
    distinct?: BundleScalarFieldEnum | BundleScalarFieldEnum[]
  }


  /**
   * Bundle findFirstOrThrow
   */
  export type BundleFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter, which Bundle to fetch.
     */
    where?: BundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bundles to fetch.
     */
    orderBy?: BundleOrderByWithRelationInput | BundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bundles.
     */
    cursor?: BundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bundles.
     */
    distinct?: BundleScalarFieldEnum | BundleScalarFieldEnum[]
  }


  /**
   * Bundle findMany
   */
  export type BundleFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter, which Bundles to fetch.
     */
    where?: BundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bundles to fetch.
     */
    orderBy?: BundleOrderByWithRelationInput | BundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bundles.
     */
    cursor?: BundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bundles.
     */
    skip?: number
    distinct?: BundleScalarFieldEnum | BundleScalarFieldEnum[]
  }


  /**
   * Bundle create
   */
  export type BundleCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * The data needed to create a Bundle.
     */
    data: XOR<BundleCreateInput, BundleUncheckedCreateInput>
  }


  /**
   * Bundle createMany
   */
  export type BundleCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bundles.
     */
    data: BundleCreateManyInput | BundleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bundle update
   */
  export type BundleUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * The data needed to update a Bundle.
     */
    data: XOR<BundleUpdateInput, BundleUncheckedUpdateInput>
    /**
     * Choose, which Bundle to update.
     */
    where: BundleWhereUniqueInput
  }


  /**
   * Bundle updateMany
   */
  export type BundleUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bundles.
     */
    data: XOR<BundleUpdateManyMutationInput, BundleUncheckedUpdateManyInput>
    /**
     * Filter which Bundles to update
     */
    where?: BundleWhereInput
  }


  /**
   * Bundle upsert
   */
  export type BundleUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * The filter to search for the Bundle to update in case it exists.
     */
    where: BundleWhereUniqueInput
    /**
     * In case the Bundle found by the `where` argument doesn't exist, create a new Bundle with this data.
     */
    create: XOR<BundleCreateInput, BundleUncheckedCreateInput>
    /**
     * In case the Bundle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BundleUpdateInput, BundleUncheckedUpdateInput>
  }


  /**
   * Bundle delete
   */
  export type BundleDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter which Bundle to delete.
     */
    where: BundleWhereUniqueInput
  }


  /**
   * Bundle deleteMany
   */
  export type BundleDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bundles to delete
     */
    where?: BundleWhereInput
  }


  /**
   * Bundle.bundleGames
   */
  export type Bundle$bundleGamesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleGame
     */
    select?: BundleGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleGameInclude<ExtArgs> | null
    where?: BundleGameWhereInput
    orderBy?: BundleGameOrderByWithRelationInput | BundleGameOrderByWithRelationInput[]
    cursor?: BundleGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BundleGameScalarFieldEnum | BundleGameScalarFieldEnum[]
  }


  /**
   * Bundle.userBundles
   */
  export type Bundle$userBundlesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
    where?: UserBundleWhereInput
    orderBy?: UserBundleOrderByWithRelationInput | UserBundleOrderByWithRelationInput[]
    cursor?: UserBundleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBundleScalarFieldEnum | UserBundleScalarFieldEnum[]
  }


  /**
   * Bundle without action
   */
  export type BundleDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BundleInclude<ExtArgs> | null
  }



  /**
   * Model UserGame
   */

  export type AggregateUserGame = {
    _count: UserGameCountAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  export type UserGameMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
  }

  export type UserGameMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
  }

  export type UserGameCountAggregateOutputType = {
    id: number
    userId: number
    gameId: number
    _all: number
  }


  export type UserGameMinAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
  }

  export type UserGameMaxAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
  }

  export type UserGameCountAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    _all?: true
  }

  export type UserGameAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGame to aggregate.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGames
    **/
    _count?: true | UserGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGameMaxAggregateInputType
  }

  export type GetUserGameAggregateType<T extends UserGameAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGame[P]>
      : GetScalarType<T[P], AggregateUserGame[P]>
  }




  export type UserGameGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithAggregationInput | UserGameOrderByWithAggregationInput[]
    by: UserGameScalarFieldEnum[] | UserGameScalarFieldEnum
    having?: UserGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGameCountAggregateInputType | true
    _min?: UserGameMinAggregateInputType
    _max?: UserGameMaxAggregateInputType
  }

  export type UserGameGroupByOutputType = {
    id: string
    userId: string
    gameId: string
    _count: UserGameCountAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  type GetUserGameGroupByPayload<T extends UserGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGameGroupByOutputType[P]>
            : GetScalarType<T[P], UserGameGroupByOutputType[P]>
        }
      >
    >


  export type UserGameSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectScalar = {
    id?: boolean
    userId?: boolean
    gameId?: boolean
  }

  export type UserGameInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }


  export type $UserGamePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "UserGame"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string
      gameId: string
    }, ExtArgs["result"]["userGame"]>
    composites: {}
  }


  type UserGameGetPayload<S extends boolean | null | undefined | UserGameDefaultArgs> = $Result.GetResult<Prisma.$UserGamePayload, S>

  type UserGameCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserGameFindManyArgs, 'select' | 'include'> & {
      select?: UserGameCountAggregateInputType | true
    }

  export interface UserGameDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGame'], meta: { name: 'UserGame' } }
    /**
     * Find zero or one UserGame that matches the filter.
     * @param {UserGameFindUniqueArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserGameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameFindUniqueArgs<ExtArgs>>
    ): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserGame that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserGameFindUniqueOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserGameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindFirstArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserGameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameFindFirstArgs<ExtArgs>>
    ): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindFirstOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserGameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGames
     * const userGames = await prisma.userGame.findMany()
     * 
     * // Get first 10 UserGames
     * const userGames = await prisma.userGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGameWithIdOnly = await prisma.userGame.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserGameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserGame.
     * @param {UserGameCreateArgs} args - Arguments to create a UserGame.
     * @example
     * // Create one UserGame
     * const UserGame = await prisma.userGame.create({
     *   data: {
     *     // ... data to create a UserGame
     *   }
     * })
     * 
    **/
    create<T extends UserGameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameCreateArgs<ExtArgs>>
    ): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserGames.
     *     @param {UserGameCreateManyArgs} args - Arguments to create many UserGames.
     *     @example
     *     // Create many UserGames
     *     const userGame = await prisma.userGame.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserGameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserGame.
     * @param {UserGameDeleteArgs} args - Arguments to delete one UserGame.
     * @example
     * // Delete one UserGame
     * const UserGame = await prisma.userGame.delete({
     *   where: {
     *     // ... filter to delete one UserGame
     *   }
     * })
     * 
    **/
    delete<T extends UserGameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameDeleteArgs<ExtArgs>>
    ): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserGame.
     * @param {UserGameUpdateArgs} args - Arguments to update one UserGame.
     * @example
     * // Update one UserGame
     * const userGame = await prisma.userGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserGameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameUpdateArgs<ExtArgs>>
    ): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserGames.
     * @param {UserGameDeleteManyArgs} args - Arguments to filter UserGames to delete.
     * @example
     * // Delete a few UserGames
     * const { count } = await prisma.userGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserGameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGames
     * const userGame = await prisma.userGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserGameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserGame.
     * @param {UserGameUpsertArgs} args - Arguments to update or create a UserGame.
     * @example
     * // Update or create a UserGame
     * const userGame = await prisma.userGame.upsert({
     *   create: {
     *     // ... data to create a UserGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGame we want to update
     *   }
     * })
    **/
    upsert<T extends UserGameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameUpsertArgs<ExtArgs>>
    ): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameCountArgs} args - Arguments to filter UserGames to count.
     * @example
     * // Count the number of UserGames
     * const count = await prisma.userGame.count({
     *   where: {
     *     // ... the filter for the UserGames we want to count
     *   }
     * })
    **/
    count<T extends UserGameCountArgs>(
      args?: Subset<T, UserGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGameAggregateArgs>(args: Subset<T, UserGameAggregateArgs>): Prisma.PrismaPromise<GetUserGameAggregateType<T>>

    /**
     * Group by UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGameGroupByArgs['orderBy'] }
        : { orderBy?: UserGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGame model
   */
  readonly fields: UserGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGameClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserGame model
   */ 
  interface UserGameFieldRefs {
    readonly id: FieldRef<"UserGame", 'String'>
    readonly userId: FieldRef<"UserGame", 'String'>
    readonly gameId: FieldRef<"UserGame", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserGame findUnique
   */
  export type UserGameFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where: UserGameWhereUniqueInput
  }


  /**
   * UserGame findUniqueOrThrow
   */
  export type UserGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where: UserGameWhereUniqueInput
  }


  /**
   * UserGame findFirst
   */
  export type UserGameFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }


  /**
   * UserGame findFirstOrThrow
   */
  export type UserGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }


  /**
   * UserGame findMany
   */
  export type UserGameFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGames to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }


  /**
   * UserGame create
   */
  export type UserGameCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGame.
     */
    data: XOR<UserGameCreateInput, UserGameUncheckedCreateInput>
  }


  /**
   * UserGame createMany
   */
  export type UserGameCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGames.
     */
    data: UserGameCreateManyInput | UserGameCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserGame update
   */
  export type UserGameUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGame.
     */
    data: XOR<UserGameUpdateInput, UserGameUncheckedUpdateInput>
    /**
     * Choose, which UserGame to update.
     */
    where: UserGameWhereUniqueInput
  }


  /**
   * UserGame updateMany
   */
  export type UserGameUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGames.
     */
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyInput>
    /**
     * Filter which UserGames to update
     */
    where?: UserGameWhereInput
  }


  /**
   * UserGame upsert
   */
  export type UserGameUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGame to update in case it exists.
     */
    where: UserGameWhereUniqueInput
    /**
     * In case the UserGame found by the `where` argument doesn't exist, create a new UserGame with this data.
     */
    create: XOR<UserGameCreateInput, UserGameUncheckedCreateInput>
    /**
     * In case the UserGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGameUpdateInput, UserGameUncheckedUpdateInput>
  }


  /**
   * UserGame delete
   */
  export type UserGameDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter which UserGame to delete.
     */
    where: UserGameWhereUniqueInput
  }


  /**
   * UserGame deleteMany
   */
  export type UserGameDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGames to delete
     */
    where?: UserGameWhereInput
  }


  /**
   * UserGame without action
   */
  export type UserGameDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameInclude<ExtArgs> | null
  }



  /**
   * Model UserBundle
   */

  export type AggregateUserBundle = {
    _count: UserBundleCountAggregateOutputType | null
    _min: UserBundleMinAggregateOutputType | null
    _max: UserBundleMaxAggregateOutputType | null
  }

  export type UserBundleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bundleId: string | null
  }

  export type UserBundleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bundleId: string | null
  }

  export type UserBundleCountAggregateOutputType = {
    id: number
    userId: number
    bundleId: number
    _all: number
  }


  export type UserBundleMinAggregateInputType = {
    id?: true
    userId?: true
    bundleId?: true
  }

  export type UserBundleMaxAggregateInputType = {
    id?: true
    userId?: true
    bundleId?: true
  }

  export type UserBundleCountAggregateInputType = {
    id?: true
    userId?: true
    bundleId?: true
    _all?: true
  }

  export type UserBundleAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBundle to aggregate.
     */
    where?: UserBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBundles to fetch.
     */
    orderBy?: UserBundleOrderByWithRelationInput | UserBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBundles
    **/
    _count?: true | UserBundleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBundleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBundleMaxAggregateInputType
  }

  export type GetUserBundleAggregateType<T extends UserBundleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBundle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBundle[P]>
      : GetScalarType<T[P], AggregateUserBundle[P]>
  }




  export type UserBundleGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserBundleWhereInput
    orderBy?: UserBundleOrderByWithAggregationInput | UserBundleOrderByWithAggregationInput[]
    by: UserBundleScalarFieldEnum[] | UserBundleScalarFieldEnum
    having?: UserBundleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBundleCountAggregateInputType | true
    _min?: UserBundleMinAggregateInputType
    _max?: UserBundleMaxAggregateInputType
  }

  export type UserBundleGroupByOutputType = {
    id: string
    userId: string
    bundleId: string
    _count: UserBundleCountAggregateOutputType | null
    _min: UserBundleMinAggregateOutputType | null
    _max: UserBundleMaxAggregateOutputType | null
  }

  type GetUserBundleGroupByPayload<T extends UserBundleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBundleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBundleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBundleGroupByOutputType[P]>
            : GetScalarType<T[P], UserBundleGroupByOutputType[P]>
        }
      >
    >


  export type UserBundleSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bundleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bundle?: boolean | BundleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBundle"]>

  export type UserBundleSelectScalar = {
    id?: boolean
    userId?: boolean
    bundleId?: boolean
  }

  export type UserBundleInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bundle?: boolean | BundleDefaultArgs<ExtArgs>
  }


  export type $UserBundlePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "UserBundle"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bundle: Prisma.$BundlePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string
      bundleId: string
    }, ExtArgs["result"]["userBundle"]>
    composites: {}
  }


  type UserBundleGetPayload<S extends boolean | null | undefined | UserBundleDefaultArgs> = $Result.GetResult<Prisma.$UserBundlePayload, S>

  type UserBundleCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserBundleFindManyArgs, 'select' | 'include'> & {
      select?: UserBundleCountAggregateInputType | true
    }

  export interface UserBundleDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBundle'], meta: { name: 'UserBundle' } }
    /**
     * Find zero or one UserBundle that matches the filter.
     * @param {UserBundleFindUniqueArgs} args - Arguments to find a UserBundle
     * @example
     * // Get one UserBundle
     * const userBundle = await prisma.userBundle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserBundleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserBundleFindUniqueArgs<ExtArgs>>
    ): Prisma__UserBundleClient<$Result.GetResult<Prisma.$UserBundlePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserBundle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserBundleFindUniqueOrThrowArgs} args - Arguments to find a UserBundle
     * @example
     * // Get one UserBundle
     * const userBundle = await prisma.userBundle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserBundleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBundleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserBundleClient<$Result.GetResult<Prisma.$UserBundlePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserBundle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBundleFindFirstArgs} args - Arguments to find a UserBundle
     * @example
     * // Get one UserBundle
     * const userBundle = await prisma.userBundle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserBundleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBundleFindFirstArgs<ExtArgs>>
    ): Prisma__UserBundleClient<$Result.GetResult<Prisma.$UserBundlePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserBundle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBundleFindFirstOrThrowArgs} args - Arguments to find a UserBundle
     * @example
     * // Get one UserBundle
     * const userBundle = await prisma.userBundle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserBundleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBundleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserBundleClient<$Result.GetResult<Prisma.$UserBundlePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserBundles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBundleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBundles
     * const userBundles = await prisma.userBundle.findMany()
     * 
     * // Get first 10 UserBundles
     * const userBundles = await prisma.userBundle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBundleWithIdOnly = await prisma.userBundle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserBundleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBundleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBundlePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserBundle.
     * @param {UserBundleCreateArgs} args - Arguments to create a UserBundle.
     * @example
     * // Create one UserBundle
     * const UserBundle = await prisma.userBundle.create({
     *   data: {
     *     // ... data to create a UserBundle
     *   }
     * })
     * 
    **/
    create<T extends UserBundleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserBundleCreateArgs<ExtArgs>>
    ): Prisma__UserBundleClient<$Result.GetResult<Prisma.$UserBundlePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserBundles.
     *     @param {UserBundleCreateManyArgs} args - Arguments to create many UserBundles.
     *     @example
     *     // Create many UserBundles
     *     const userBundle = await prisma.userBundle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserBundleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBundleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserBundle.
     * @param {UserBundleDeleteArgs} args - Arguments to delete one UserBundle.
     * @example
     * // Delete one UserBundle
     * const UserBundle = await prisma.userBundle.delete({
     *   where: {
     *     // ... filter to delete one UserBundle
     *   }
     * })
     * 
    **/
    delete<T extends UserBundleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserBundleDeleteArgs<ExtArgs>>
    ): Prisma__UserBundleClient<$Result.GetResult<Prisma.$UserBundlePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserBundle.
     * @param {UserBundleUpdateArgs} args - Arguments to update one UserBundle.
     * @example
     * // Update one UserBundle
     * const userBundle = await prisma.userBundle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserBundleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserBundleUpdateArgs<ExtArgs>>
    ): Prisma__UserBundleClient<$Result.GetResult<Prisma.$UserBundlePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserBundles.
     * @param {UserBundleDeleteManyArgs} args - Arguments to filter UserBundles to delete.
     * @example
     * // Delete a few UserBundles
     * const { count } = await prisma.userBundle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserBundleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBundleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBundleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBundles
     * const userBundle = await prisma.userBundle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserBundleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserBundleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBundle.
     * @param {UserBundleUpsertArgs} args - Arguments to update or create a UserBundle.
     * @example
     * // Update or create a UserBundle
     * const userBundle = await prisma.userBundle.upsert({
     *   create: {
     *     // ... data to create a UserBundle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBundle we want to update
     *   }
     * })
    **/
    upsert<T extends UserBundleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserBundleUpsertArgs<ExtArgs>>
    ): Prisma__UserBundleClient<$Result.GetResult<Prisma.$UserBundlePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserBundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBundleCountArgs} args - Arguments to filter UserBundles to count.
     * @example
     * // Count the number of UserBundles
     * const count = await prisma.userBundle.count({
     *   where: {
     *     // ... the filter for the UserBundles we want to count
     *   }
     * })
    **/
    count<T extends UserBundleCountArgs>(
      args?: Subset<T, UserBundleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBundleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBundleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBundleAggregateArgs>(args: Subset<T, UserBundleAggregateArgs>): Prisma.PrismaPromise<GetUserBundleAggregateType<T>>

    /**
     * Group by UserBundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBundleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBundleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBundleGroupByArgs['orderBy'] }
        : { orderBy?: UserBundleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBundleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBundleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBundle model
   */
  readonly fields: UserBundleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBundle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBundleClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    bundle<T extends BundleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BundleDefaultArgs<ExtArgs>>): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserBundle model
   */ 
  interface UserBundleFieldRefs {
    readonly id: FieldRef<"UserBundle", 'String'>
    readonly userId: FieldRef<"UserBundle", 'String'>
    readonly bundleId: FieldRef<"UserBundle", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserBundle findUnique
   */
  export type UserBundleFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
    /**
     * Filter, which UserBundle to fetch.
     */
    where: UserBundleWhereUniqueInput
  }


  /**
   * UserBundle findUniqueOrThrow
   */
  export type UserBundleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
    /**
     * Filter, which UserBundle to fetch.
     */
    where: UserBundleWhereUniqueInput
  }


  /**
   * UserBundle findFirst
   */
  export type UserBundleFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
    /**
     * Filter, which UserBundle to fetch.
     */
    where?: UserBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBundles to fetch.
     */
    orderBy?: UserBundleOrderByWithRelationInput | UserBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBundles.
     */
    cursor?: UserBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBundles.
     */
    distinct?: UserBundleScalarFieldEnum | UserBundleScalarFieldEnum[]
  }


  /**
   * UserBundle findFirstOrThrow
   */
  export type UserBundleFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
    /**
     * Filter, which UserBundle to fetch.
     */
    where?: UserBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBundles to fetch.
     */
    orderBy?: UserBundleOrderByWithRelationInput | UserBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBundles.
     */
    cursor?: UserBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBundles.
     */
    distinct?: UserBundleScalarFieldEnum | UserBundleScalarFieldEnum[]
  }


  /**
   * UserBundle findMany
   */
  export type UserBundleFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
    /**
     * Filter, which UserBundles to fetch.
     */
    where?: UserBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBundles to fetch.
     */
    orderBy?: UserBundleOrderByWithRelationInput | UserBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBundles.
     */
    cursor?: UserBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBundles.
     */
    skip?: number
    distinct?: UserBundleScalarFieldEnum | UserBundleScalarFieldEnum[]
  }


  /**
   * UserBundle create
   */
  export type UserBundleCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBundle.
     */
    data: XOR<UserBundleCreateInput, UserBundleUncheckedCreateInput>
  }


  /**
   * UserBundle createMany
   */
  export type UserBundleCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBundles.
     */
    data: UserBundleCreateManyInput | UserBundleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserBundle update
   */
  export type UserBundleUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBundle.
     */
    data: XOR<UserBundleUpdateInput, UserBundleUncheckedUpdateInput>
    /**
     * Choose, which UserBundle to update.
     */
    where: UserBundleWhereUniqueInput
  }


  /**
   * UserBundle updateMany
   */
  export type UserBundleUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBundles.
     */
    data: XOR<UserBundleUpdateManyMutationInput, UserBundleUncheckedUpdateManyInput>
    /**
     * Filter which UserBundles to update
     */
    where?: UserBundleWhereInput
  }


  /**
   * UserBundle upsert
   */
  export type UserBundleUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBundle to update in case it exists.
     */
    where: UserBundleWhereUniqueInput
    /**
     * In case the UserBundle found by the `where` argument doesn't exist, create a new UserBundle with this data.
     */
    create: XOR<UserBundleCreateInput, UserBundleUncheckedCreateInput>
    /**
     * In case the UserBundle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBundleUpdateInput, UserBundleUncheckedUpdateInput>
  }


  /**
   * UserBundle delete
   */
  export type UserBundleDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
    /**
     * Filter which UserBundle to delete.
     */
    where: UserBundleWhereUniqueInput
  }


  /**
   * UserBundle deleteMany
   */
  export type UserBundleDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBundles to delete
     */
    where?: UserBundleWhereInput
  }


  /**
   * UserBundle without action
   */
  export type UserBundleDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBundle
     */
    select?: UserBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserBundleInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    steamId: 'steamId',
    twitchId: 'twitchId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    steamId: 'steamId',
    name: 'name',
    image: 'image',
    price: 'price'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const BundleGameScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    bundleId: 'bundleId'
  };

  export type BundleGameScalarFieldEnum = (typeof BundleGameScalarFieldEnum)[keyof typeof BundleGameScalarFieldEnum]


  export const BundleScalarFieldEnum: {
    id: 'id',
    steamId: 'steamId',
    name: 'name',
    image: 'image',
    url: 'url',
    price: 'price',
    priceInCents: 'priceInCents',
    discount: 'discount',
    discountPercent: 'discountPercent'
  };

  export type BundleScalarFieldEnum = (typeof BundleScalarFieldEnum)[keyof typeof BundleScalarFieldEnum]


  export const UserGameScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameId: 'gameId'
  };

  export type UserGameScalarFieldEnum = (typeof UserGameScalarFieldEnum)[keyof typeof UserGameScalarFieldEnum]


  export const UserBundleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bundleId: 'bundleId'
  };

  export type UserBundleScalarFieldEnum = (typeof UserBundleScalarFieldEnum)[keyof typeof UserBundleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    steamId?: StringNullableFilter<"User"> | string | null
    twitchId?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    userGames?: UserGameListRelationFilter
    userBundles?: UserBundleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    steamId?: SortOrderInput | SortOrder
    twitchId?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    userGames?: UserGameOrderByRelationAggregateInput
    userBundles?: UserBundleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    steamId?: string
    twitchId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    userGames?: UserGameListRelationFilter
    userBundles?: UserBundleListRelationFilter
  }, "id" | "email" | "steamId" | "twitchId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    steamId?: SortOrderInput | SortOrder
    twitchId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    steamId?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitchId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    steamId?: StringFilter<"Game"> | string
    name?: StringFilter<"Game"> | string
    image?: StringFilter<"Game"> | string
    price?: StringFilter<"Game"> | string
    bundleGames?: BundleGameListRelationFilter
    userGames?: UserGameListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    steamId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    bundleGames?: BundleGameOrderByRelationAggregateInput
    userGames?: UserGameOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    steamId?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    name?: StringFilter<"Game"> | string
    image?: StringFilter<"Game"> | string
    price?: StringFilter<"Game"> | string
    bundleGames?: BundleGameListRelationFilter
    userGames?: UserGameListRelationFilter
  }, "id" | "steamId">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    steamId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    steamId?: StringWithAggregatesFilter<"Game"> | string
    name?: StringWithAggregatesFilter<"Game"> | string
    image?: StringWithAggregatesFilter<"Game"> | string
    price?: StringWithAggregatesFilter<"Game"> | string
  }

  export type BundleGameWhereInput = {
    AND?: BundleGameWhereInput | BundleGameWhereInput[]
    OR?: BundleGameWhereInput[]
    NOT?: BundleGameWhereInput | BundleGameWhereInput[]
    id?: StringFilter<"BundleGame"> | string
    gameId?: StringFilter<"BundleGame"> | string
    bundleId?: StringFilter<"BundleGame"> | string
    game?: XOR<GameRelationFilter, GameWhereInput>
    bundle?: XOR<BundleRelationFilter, BundleWhereInput>
  }

  export type BundleGameOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    bundleId?: SortOrder
    game?: GameOrderByWithRelationInput
    bundle?: BundleOrderByWithRelationInput
  }

  export type BundleGameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameId_bundleId?: BundleGameGameIdBundleIdCompoundUniqueInput
    AND?: BundleGameWhereInput | BundleGameWhereInput[]
    OR?: BundleGameWhereInput[]
    NOT?: BundleGameWhereInput | BundleGameWhereInput[]
    gameId?: StringFilter<"BundleGame"> | string
    bundleId?: StringFilter<"BundleGame"> | string
    game?: XOR<GameRelationFilter, GameWhereInput>
    bundle?: XOR<BundleRelationFilter, BundleWhereInput>
  }, "id" | "gameId_bundleId">

  export type BundleGameOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    bundleId?: SortOrder
    _count?: BundleGameCountOrderByAggregateInput
    _max?: BundleGameMaxOrderByAggregateInput
    _min?: BundleGameMinOrderByAggregateInput
  }

  export type BundleGameScalarWhereWithAggregatesInput = {
    AND?: BundleGameScalarWhereWithAggregatesInput | BundleGameScalarWhereWithAggregatesInput[]
    OR?: BundleGameScalarWhereWithAggregatesInput[]
    NOT?: BundleGameScalarWhereWithAggregatesInput | BundleGameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BundleGame"> | string
    gameId?: StringWithAggregatesFilter<"BundleGame"> | string
    bundleId?: StringWithAggregatesFilter<"BundleGame"> | string
  }

  export type BundleWhereInput = {
    AND?: BundleWhereInput | BundleWhereInput[]
    OR?: BundleWhereInput[]
    NOT?: BundleWhereInput | BundleWhereInput[]
    id?: StringFilter<"Bundle"> | string
    steamId?: StringFilter<"Bundle"> | string
    name?: StringFilter<"Bundle"> | string
    image?: StringFilter<"Bundle"> | string
    url?: StringFilter<"Bundle"> | string
    price?: StringFilter<"Bundle"> | string
    priceInCents?: IntFilter<"Bundle"> | number
    discount?: StringFilter<"Bundle"> | string
    discountPercent?: IntFilter<"Bundle"> | number
    bundleGames?: BundleGameListRelationFilter
    userBundles?: UserBundleListRelationFilter
  }

  export type BundleOrderByWithRelationInput = {
    id?: SortOrder
    steamId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    url?: SortOrder
    price?: SortOrder
    priceInCents?: SortOrder
    discount?: SortOrder
    discountPercent?: SortOrder
    bundleGames?: BundleGameOrderByRelationAggregateInput
    userBundles?: UserBundleOrderByRelationAggregateInput
  }

  export type BundleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    steamId?: string
    AND?: BundleWhereInput | BundleWhereInput[]
    OR?: BundleWhereInput[]
    NOT?: BundleWhereInput | BundleWhereInput[]
    name?: StringFilter<"Bundle"> | string
    image?: StringFilter<"Bundle"> | string
    url?: StringFilter<"Bundle"> | string
    price?: StringFilter<"Bundle"> | string
    priceInCents?: IntFilter<"Bundle"> | number
    discount?: StringFilter<"Bundle"> | string
    discountPercent?: IntFilter<"Bundle"> | number
    bundleGames?: BundleGameListRelationFilter
    userBundles?: UserBundleListRelationFilter
  }, "id" | "steamId">

  export type BundleOrderByWithAggregationInput = {
    id?: SortOrder
    steamId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    url?: SortOrder
    price?: SortOrder
    priceInCents?: SortOrder
    discount?: SortOrder
    discountPercent?: SortOrder
    _count?: BundleCountOrderByAggregateInput
    _avg?: BundleAvgOrderByAggregateInput
    _max?: BundleMaxOrderByAggregateInput
    _min?: BundleMinOrderByAggregateInput
    _sum?: BundleSumOrderByAggregateInput
  }

  export type BundleScalarWhereWithAggregatesInput = {
    AND?: BundleScalarWhereWithAggregatesInput | BundleScalarWhereWithAggregatesInput[]
    OR?: BundleScalarWhereWithAggregatesInput[]
    NOT?: BundleScalarWhereWithAggregatesInput | BundleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bundle"> | string
    steamId?: StringWithAggregatesFilter<"Bundle"> | string
    name?: StringWithAggregatesFilter<"Bundle"> | string
    image?: StringWithAggregatesFilter<"Bundle"> | string
    url?: StringWithAggregatesFilter<"Bundle"> | string
    price?: StringWithAggregatesFilter<"Bundle"> | string
    priceInCents?: IntWithAggregatesFilter<"Bundle"> | number
    discount?: StringWithAggregatesFilter<"Bundle"> | string
    discountPercent?: IntWithAggregatesFilter<"Bundle"> | number
  }

  export type UserGameWhereInput = {
    AND?: UserGameWhereInput | UserGameWhereInput[]
    OR?: UserGameWhereInput[]
    NOT?: UserGameWhereInput | UserGameWhereInput[]
    id?: StringFilter<"UserGame"> | string
    userId?: StringFilter<"UserGame"> | string
    gameId?: StringFilter<"UserGame"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    game?: XOR<GameRelationFilter, GameWhereInput>
  }

  export type UserGameOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type UserGameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_gameId?: UserGameUserIdGameIdCompoundUniqueInput
    AND?: UserGameWhereInput | UserGameWhereInput[]
    OR?: UserGameWhereInput[]
    NOT?: UserGameWhereInput | UserGameWhereInput[]
    userId?: StringFilter<"UserGame"> | string
    gameId?: StringFilter<"UserGame"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    game?: XOR<GameRelationFilter, GameWhereInput>
  }, "id" | "userId_gameId">

  export type UserGameOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    _count?: UserGameCountOrderByAggregateInput
    _max?: UserGameMaxOrderByAggregateInput
    _min?: UserGameMinOrderByAggregateInput
  }

  export type UserGameScalarWhereWithAggregatesInput = {
    AND?: UserGameScalarWhereWithAggregatesInput | UserGameScalarWhereWithAggregatesInput[]
    OR?: UserGameScalarWhereWithAggregatesInput[]
    NOT?: UserGameScalarWhereWithAggregatesInput | UserGameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGame"> | string
    userId?: StringWithAggregatesFilter<"UserGame"> | string
    gameId?: StringWithAggregatesFilter<"UserGame"> | string
  }

  export type UserBundleWhereInput = {
    AND?: UserBundleWhereInput | UserBundleWhereInput[]
    OR?: UserBundleWhereInput[]
    NOT?: UserBundleWhereInput | UserBundleWhereInput[]
    id?: StringFilter<"UserBundle"> | string
    userId?: StringFilter<"UserBundle"> | string
    bundleId?: StringFilter<"UserBundle"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    bundle?: XOR<BundleRelationFilter, BundleWhereInput>
  }

  export type UserBundleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bundleId?: SortOrder
    user?: UserOrderByWithRelationInput
    bundle?: BundleOrderByWithRelationInput
  }

  export type UserBundleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_bundleId?: UserBundleUserIdBundleIdCompoundUniqueInput
    AND?: UserBundleWhereInput | UserBundleWhereInput[]
    OR?: UserBundleWhereInput[]
    NOT?: UserBundleWhereInput | UserBundleWhereInput[]
    userId?: StringFilter<"UserBundle"> | string
    bundleId?: StringFilter<"UserBundle"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    bundle?: XOR<BundleRelationFilter, BundleWhereInput>
  }, "id" | "userId_bundleId">

  export type UserBundleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bundleId?: SortOrder
    _count?: UserBundleCountOrderByAggregateInput
    _max?: UserBundleMaxOrderByAggregateInput
    _min?: UserBundleMinOrderByAggregateInput
  }

  export type UserBundleScalarWhereWithAggregatesInput = {
    AND?: UserBundleScalarWhereWithAggregatesInput | UserBundleScalarWhereWithAggregatesInput[]
    OR?: UserBundleScalarWhereWithAggregatesInput[]
    NOT?: UserBundleScalarWhereWithAggregatesInput | UserBundleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserBundle"> | string
    userId?: StringWithAggregatesFilter<"UserBundle"> | string
    bundleId?: StringWithAggregatesFilter<"UserBundle"> | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    steamId?: string | null
    twitchId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userGames?: UserGameCreateNestedManyWithoutUserInput
    userBundles?: UserBundleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    steamId?: string | null
    twitchId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutUserInput
    userBundles?: UserBundleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userGames?: UserGameUpdateManyWithoutUserNestedInput
    userBundles?: UserBundleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    userBundles?: UserBundleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    steamId?: string | null
    twitchId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    steamId: string
    name: string
    image: string
    price: string
    bundleGames?: BundleGameCreateNestedManyWithoutGameInput
    userGames?: UserGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    steamId: string
    name: string
    image: string
    price: string
    bundleGames?: BundleGameUncheckedCreateNestedManyWithoutGameInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bundleGames?: BundleGameUpdateManyWithoutGameNestedInput
    userGames?: UserGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bundleGames?: BundleGameUncheckedUpdateManyWithoutGameNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    steamId: string
    name: string
    image: string
    price: string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type BundleGameCreateInput = {
    id?: string
    game: GameCreateNestedOneWithoutBundleGamesInput
    bundle: BundleCreateNestedOneWithoutBundleGamesInput
  }

  export type BundleGameUncheckedCreateInput = {
    id?: string
    gameId: string
    bundleId: string
  }

  export type BundleGameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateOneRequiredWithoutBundleGamesNestedInput
    bundle?: BundleUpdateOneRequiredWithoutBundleGamesNestedInput
  }

  export type BundleGameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    bundleId?: StringFieldUpdateOperationsInput | string
  }

  export type BundleGameCreateManyInput = {
    id?: string
    gameId: string
    bundleId: string
  }

  export type BundleGameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BundleGameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    bundleId?: StringFieldUpdateOperationsInput | string
  }

  export type BundleCreateInput = {
    id?: string
    steamId: string
    name: string
    image: string
    url: string
    price: string
    priceInCents: number
    discount: string
    discountPercent: number
    bundleGames?: BundleGameCreateNestedManyWithoutBundleInput
    userBundles?: UserBundleCreateNestedManyWithoutBundleInput
  }

  export type BundleUncheckedCreateInput = {
    id?: string
    steamId: string
    name: string
    image: string
    url: string
    price: string
    priceInCents: number
    discount: string
    discountPercent: number
    bundleGames?: BundleGameUncheckedCreateNestedManyWithoutBundleInput
    userBundles?: UserBundleUncheckedCreateNestedManyWithoutBundleInput
  }

  export type BundleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    discount?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    bundleGames?: BundleGameUpdateManyWithoutBundleNestedInput
    userBundles?: UserBundleUpdateManyWithoutBundleNestedInput
  }

  export type BundleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    discount?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    bundleGames?: BundleGameUncheckedUpdateManyWithoutBundleNestedInput
    userBundles?: UserBundleUncheckedUpdateManyWithoutBundleNestedInput
  }

  export type BundleCreateManyInput = {
    id?: string
    steamId: string
    name: string
    image: string
    url: string
    price: string
    priceInCents: number
    discount: string
    discountPercent: number
  }

  export type BundleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    discount?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
  }

  export type BundleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    discount?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserGameCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserGamesInput
    game: GameCreateNestedOneWithoutUserGamesInput
  }

  export type UserGameUncheckedCreateInput = {
    id?: string
    userId: string
    gameId: string
  }

  export type UserGameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserGamesNestedInput
    game?: GameUpdateOneRequiredWithoutUserGamesNestedInput
  }

  export type UserGameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameCreateManyInput = {
    id?: string
    userId: string
    gameId: string
  }

  export type UserGameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBundleCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserBundlesInput
    bundle: BundleCreateNestedOneWithoutUserBundlesInput
  }

  export type UserBundleUncheckedCreateInput = {
    id?: string
    userId: string
    bundleId: string
  }

  export type UserBundleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserBundlesNestedInput
    bundle?: BundleUpdateOneRequiredWithoutUserBundlesNestedInput
  }

  export type UserBundleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bundleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBundleCreateManyInput = {
    id?: string
    userId: string
    bundleId: string
  }

  export type UserBundleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserBundleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bundleId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserGameListRelationFilter = {
    every?: UserGameWhereInput
    some?: UserGameWhereInput
    none?: UserGameWhereInput
  }

  export type UserBundleListRelationFilter = {
    every?: UserBundleWhereInput
    some?: UserBundleWhereInput
    none?: UserBundleWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBundleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    steamId?: SortOrder
    twitchId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    steamId?: SortOrder
    twitchId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    steamId?: SortOrder
    twitchId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BundleGameListRelationFilter = {
    every?: BundleGameWhereInput
    some?: BundleGameWhereInput
    none?: BundleGameWhereInput
  }

  export type BundleGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    steamId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    steamId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    steamId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
  }

  export type GameRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type BundleRelationFilter = {
    is?: BundleWhereInput
    isNot?: BundleWhereInput
  }

  export type BundleGameGameIdBundleIdCompoundUniqueInput = {
    gameId: string
    bundleId: string
  }

  export type BundleGameCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    bundleId?: SortOrder
  }

  export type BundleGameMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    bundleId?: SortOrder
  }

  export type BundleGameMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    bundleId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BundleCountOrderByAggregateInput = {
    id?: SortOrder
    steamId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    url?: SortOrder
    price?: SortOrder
    priceInCents?: SortOrder
    discount?: SortOrder
    discountPercent?: SortOrder
  }

  export type BundleAvgOrderByAggregateInput = {
    priceInCents?: SortOrder
    discountPercent?: SortOrder
  }

  export type BundleMaxOrderByAggregateInput = {
    id?: SortOrder
    steamId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    url?: SortOrder
    price?: SortOrder
    priceInCents?: SortOrder
    discount?: SortOrder
    discountPercent?: SortOrder
  }

  export type BundleMinOrderByAggregateInput = {
    id?: SortOrder
    steamId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    url?: SortOrder
    price?: SortOrder
    priceInCents?: SortOrder
    discount?: SortOrder
    discountPercent?: SortOrder
  }

  export type BundleSumOrderByAggregateInput = {
    priceInCents?: SortOrder
    discountPercent?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserGameUserIdGameIdCompoundUniqueInput = {
    userId: string
    gameId: string
  }

  export type UserGameCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type UserGameMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type UserGameMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
  }

  export type UserBundleUserIdBundleIdCompoundUniqueInput = {
    userId: string
    bundleId: string
  }

  export type UserBundleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bundleId?: SortOrder
  }

  export type UserBundleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bundleId?: SortOrder
  }

  export type UserBundleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bundleId?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserGameCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type UserBundleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBundleCreateWithoutUserInput, UserBundleUncheckedCreateWithoutUserInput> | UserBundleCreateWithoutUserInput[] | UserBundleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBundleCreateOrConnectWithoutUserInput | UserBundleCreateOrConnectWithoutUserInput[]
    createMany?: UserBundleCreateManyUserInputEnvelope
    connect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserGameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type UserBundleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBundleCreateWithoutUserInput, UserBundleUncheckedCreateWithoutUserInput> | UserBundleCreateWithoutUserInput[] | UserBundleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBundleCreateOrConnectWithoutUserInput | UserBundleCreateOrConnectWithoutUserInput[]
    createMany?: UserBundleCreateManyUserInputEnvelope
    connect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserGameUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutUserInput | UserGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutUserInput | UserGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutUserInput | UserGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type UserBundleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBundleCreateWithoutUserInput, UserBundleUncheckedCreateWithoutUserInput> | UserBundleCreateWithoutUserInput[] | UserBundleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBundleCreateOrConnectWithoutUserInput | UserBundleCreateOrConnectWithoutUserInput[]
    upsert?: UserBundleUpsertWithWhereUniqueWithoutUserInput | UserBundleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBundleCreateManyUserInputEnvelope
    set?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    disconnect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    delete?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    connect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    update?: UserBundleUpdateWithWhereUniqueWithoutUserInput | UserBundleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBundleUpdateManyWithWhereWithoutUserInput | UserBundleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBundleScalarWhereInput | UserBundleScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserGameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutUserInput | UserGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutUserInput | UserGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutUserInput | UserGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type UserBundleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBundleCreateWithoutUserInput, UserBundleUncheckedCreateWithoutUserInput> | UserBundleCreateWithoutUserInput[] | UserBundleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBundleCreateOrConnectWithoutUserInput | UserBundleCreateOrConnectWithoutUserInput[]
    upsert?: UserBundleUpsertWithWhereUniqueWithoutUserInput | UserBundleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBundleCreateManyUserInputEnvelope
    set?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    disconnect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    delete?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    connect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    update?: UserBundleUpdateWithWhereUniqueWithoutUserInput | UserBundleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBundleUpdateManyWithWhereWithoutUserInput | UserBundleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBundleScalarWhereInput | UserBundleScalarWhereInput[]
  }

  export type BundleGameCreateNestedManyWithoutGameInput = {
    create?: XOR<BundleGameCreateWithoutGameInput, BundleGameUncheckedCreateWithoutGameInput> | BundleGameCreateWithoutGameInput[] | BundleGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: BundleGameCreateOrConnectWithoutGameInput | BundleGameCreateOrConnectWithoutGameInput[]
    createMany?: BundleGameCreateManyGameInputEnvelope
    connect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
  }

  export type UserGameCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type BundleGameUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<BundleGameCreateWithoutGameInput, BundleGameUncheckedCreateWithoutGameInput> | BundleGameCreateWithoutGameInput[] | BundleGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: BundleGameCreateOrConnectWithoutGameInput | BundleGameCreateOrConnectWithoutGameInput[]
    createMany?: BundleGameCreateManyGameInputEnvelope
    connect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
  }

  export type UserGameUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type BundleGameUpdateManyWithoutGameNestedInput = {
    create?: XOR<BundleGameCreateWithoutGameInput, BundleGameUncheckedCreateWithoutGameInput> | BundleGameCreateWithoutGameInput[] | BundleGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: BundleGameCreateOrConnectWithoutGameInput | BundleGameCreateOrConnectWithoutGameInput[]
    upsert?: BundleGameUpsertWithWhereUniqueWithoutGameInput | BundleGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: BundleGameCreateManyGameInputEnvelope
    set?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    disconnect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    delete?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    connect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    update?: BundleGameUpdateWithWhereUniqueWithoutGameInput | BundleGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: BundleGameUpdateManyWithWhereWithoutGameInput | BundleGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: BundleGameScalarWhereInput | BundleGameScalarWhereInput[]
  }

  export type UserGameUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutGameInput | UserGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutGameInput | UserGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutGameInput | UserGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type BundleGameUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<BundleGameCreateWithoutGameInput, BundleGameUncheckedCreateWithoutGameInput> | BundleGameCreateWithoutGameInput[] | BundleGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: BundleGameCreateOrConnectWithoutGameInput | BundleGameCreateOrConnectWithoutGameInput[]
    upsert?: BundleGameUpsertWithWhereUniqueWithoutGameInput | BundleGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: BundleGameCreateManyGameInputEnvelope
    set?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    disconnect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    delete?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    connect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    update?: BundleGameUpdateWithWhereUniqueWithoutGameInput | BundleGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: BundleGameUpdateManyWithWhereWithoutGameInput | BundleGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: BundleGameScalarWhereInput | BundleGameScalarWhereInput[]
  }

  export type UserGameUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutGameInput | UserGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutGameInput | UserGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutGameInput | UserGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutBundleGamesInput = {
    create?: XOR<GameCreateWithoutBundleGamesInput, GameUncheckedCreateWithoutBundleGamesInput>
    connectOrCreate?: GameCreateOrConnectWithoutBundleGamesInput
    connect?: GameWhereUniqueInput
  }

  export type BundleCreateNestedOneWithoutBundleGamesInput = {
    create?: XOR<BundleCreateWithoutBundleGamesInput, BundleUncheckedCreateWithoutBundleGamesInput>
    connectOrCreate?: BundleCreateOrConnectWithoutBundleGamesInput
    connect?: BundleWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutBundleGamesNestedInput = {
    create?: XOR<GameCreateWithoutBundleGamesInput, GameUncheckedCreateWithoutBundleGamesInput>
    connectOrCreate?: GameCreateOrConnectWithoutBundleGamesInput
    upsert?: GameUpsertWithoutBundleGamesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutBundleGamesInput, GameUpdateWithoutBundleGamesInput>, GameUncheckedUpdateWithoutBundleGamesInput>
  }

  export type BundleUpdateOneRequiredWithoutBundleGamesNestedInput = {
    create?: XOR<BundleCreateWithoutBundleGamesInput, BundleUncheckedCreateWithoutBundleGamesInput>
    connectOrCreate?: BundleCreateOrConnectWithoutBundleGamesInput
    upsert?: BundleUpsertWithoutBundleGamesInput
    connect?: BundleWhereUniqueInput
    update?: XOR<XOR<BundleUpdateToOneWithWhereWithoutBundleGamesInput, BundleUpdateWithoutBundleGamesInput>, BundleUncheckedUpdateWithoutBundleGamesInput>
  }

  export type BundleGameCreateNestedManyWithoutBundleInput = {
    create?: XOR<BundleGameCreateWithoutBundleInput, BundleGameUncheckedCreateWithoutBundleInput> | BundleGameCreateWithoutBundleInput[] | BundleGameUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: BundleGameCreateOrConnectWithoutBundleInput | BundleGameCreateOrConnectWithoutBundleInput[]
    createMany?: BundleGameCreateManyBundleInputEnvelope
    connect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
  }

  export type UserBundleCreateNestedManyWithoutBundleInput = {
    create?: XOR<UserBundleCreateWithoutBundleInput, UserBundleUncheckedCreateWithoutBundleInput> | UserBundleCreateWithoutBundleInput[] | UserBundleUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: UserBundleCreateOrConnectWithoutBundleInput | UserBundleCreateOrConnectWithoutBundleInput[]
    createMany?: UserBundleCreateManyBundleInputEnvelope
    connect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
  }

  export type BundleGameUncheckedCreateNestedManyWithoutBundleInput = {
    create?: XOR<BundleGameCreateWithoutBundleInput, BundleGameUncheckedCreateWithoutBundleInput> | BundleGameCreateWithoutBundleInput[] | BundleGameUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: BundleGameCreateOrConnectWithoutBundleInput | BundleGameCreateOrConnectWithoutBundleInput[]
    createMany?: BundleGameCreateManyBundleInputEnvelope
    connect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
  }

  export type UserBundleUncheckedCreateNestedManyWithoutBundleInput = {
    create?: XOR<UserBundleCreateWithoutBundleInput, UserBundleUncheckedCreateWithoutBundleInput> | UserBundleCreateWithoutBundleInput[] | UserBundleUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: UserBundleCreateOrConnectWithoutBundleInput | UserBundleCreateOrConnectWithoutBundleInput[]
    createMany?: UserBundleCreateManyBundleInputEnvelope
    connect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BundleGameUpdateManyWithoutBundleNestedInput = {
    create?: XOR<BundleGameCreateWithoutBundleInput, BundleGameUncheckedCreateWithoutBundleInput> | BundleGameCreateWithoutBundleInput[] | BundleGameUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: BundleGameCreateOrConnectWithoutBundleInput | BundleGameCreateOrConnectWithoutBundleInput[]
    upsert?: BundleGameUpsertWithWhereUniqueWithoutBundleInput | BundleGameUpsertWithWhereUniqueWithoutBundleInput[]
    createMany?: BundleGameCreateManyBundleInputEnvelope
    set?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    disconnect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    delete?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    connect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    update?: BundleGameUpdateWithWhereUniqueWithoutBundleInput | BundleGameUpdateWithWhereUniqueWithoutBundleInput[]
    updateMany?: BundleGameUpdateManyWithWhereWithoutBundleInput | BundleGameUpdateManyWithWhereWithoutBundleInput[]
    deleteMany?: BundleGameScalarWhereInput | BundleGameScalarWhereInput[]
  }

  export type UserBundleUpdateManyWithoutBundleNestedInput = {
    create?: XOR<UserBundleCreateWithoutBundleInput, UserBundleUncheckedCreateWithoutBundleInput> | UserBundleCreateWithoutBundleInput[] | UserBundleUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: UserBundleCreateOrConnectWithoutBundleInput | UserBundleCreateOrConnectWithoutBundleInput[]
    upsert?: UserBundleUpsertWithWhereUniqueWithoutBundleInput | UserBundleUpsertWithWhereUniqueWithoutBundleInput[]
    createMany?: UserBundleCreateManyBundleInputEnvelope
    set?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    disconnect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    delete?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    connect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    update?: UserBundleUpdateWithWhereUniqueWithoutBundleInput | UserBundleUpdateWithWhereUniqueWithoutBundleInput[]
    updateMany?: UserBundleUpdateManyWithWhereWithoutBundleInput | UserBundleUpdateManyWithWhereWithoutBundleInput[]
    deleteMany?: UserBundleScalarWhereInput | UserBundleScalarWhereInput[]
  }

  export type BundleGameUncheckedUpdateManyWithoutBundleNestedInput = {
    create?: XOR<BundleGameCreateWithoutBundleInput, BundleGameUncheckedCreateWithoutBundleInput> | BundleGameCreateWithoutBundleInput[] | BundleGameUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: BundleGameCreateOrConnectWithoutBundleInput | BundleGameCreateOrConnectWithoutBundleInput[]
    upsert?: BundleGameUpsertWithWhereUniqueWithoutBundleInput | BundleGameUpsertWithWhereUniqueWithoutBundleInput[]
    createMany?: BundleGameCreateManyBundleInputEnvelope
    set?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    disconnect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    delete?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    connect?: BundleGameWhereUniqueInput | BundleGameWhereUniqueInput[]
    update?: BundleGameUpdateWithWhereUniqueWithoutBundleInput | BundleGameUpdateWithWhereUniqueWithoutBundleInput[]
    updateMany?: BundleGameUpdateManyWithWhereWithoutBundleInput | BundleGameUpdateManyWithWhereWithoutBundleInput[]
    deleteMany?: BundleGameScalarWhereInput | BundleGameScalarWhereInput[]
  }

  export type UserBundleUncheckedUpdateManyWithoutBundleNestedInput = {
    create?: XOR<UserBundleCreateWithoutBundleInput, UserBundleUncheckedCreateWithoutBundleInput> | UserBundleCreateWithoutBundleInput[] | UserBundleUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: UserBundleCreateOrConnectWithoutBundleInput | UserBundleCreateOrConnectWithoutBundleInput[]
    upsert?: UserBundleUpsertWithWhereUniqueWithoutBundleInput | UserBundleUpsertWithWhereUniqueWithoutBundleInput[]
    createMany?: UserBundleCreateManyBundleInputEnvelope
    set?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    disconnect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    delete?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    connect?: UserBundleWhereUniqueInput | UserBundleWhereUniqueInput[]
    update?: UserBundleUpdateWithWhereUniqueWithoutBundleInput | UserBundleUpdateWithWhereUniqueWithoutBundleInput[]
    updateMany?: UserBundleUpdateManyWithWhereWithoutBundleInput | UserBundleUpdateManyWithWhereWithoutBundleInput[]
    deleteMany?: UserBundleScalarWhereInput | UserBundleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserGamesInput = {
    create?: XOR<UserCreateWithoutUserGamesInput, UserUncheckedCreateWithoutUserGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGamesInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutUserGamesInput = {
    create?: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
    connectOrCreate?: GameCreateOrConnectWithoutUserGamesInput
    connect?: GameWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserGamesNestedInput = {
    create?: XOR<UserCreateWithoutUserGamesInput, UserUncheckedCreateWithoutUserGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGamesInput
    upsert?: UserUpsertWithoutUserGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserGamesInput, UserUpdateWithoutUserGamesInput>, UserUncheckedUpdateWithoutUserGamesInput>
  }

  export type GameUpdateOneRequiredWithoutUserGamesNestedInput = {
    create?: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
    connectOrCreate?: GameCreateOrConnectWithoutUserGamesInput
    upsert?: GameUpsertWithoutUserGamesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutUserGamesInput, GameUpdateWithoutUserGamesInput>, GameUncheckedUpdateWithoutUserGamesInput>
  }

  export type UserCreateNestedOneWithoutUserBundlesInput = {
    create?: XOR<UserCreateWithoutUserBundlesInput, UserUncheckedCreateWithoutUserBundlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBundlesInput
    connect?: UserWhereUniqueInput
  }

  export type BundleCreateNestedOneWithoutUserBundlesInput = {
    create?: XOR<BundleCreateWithoutUserBundlesInput, BundleUncheckedCreateWithoutUserBundlesInput>
    connectOrCreate?: BundleCreateOrConnectWithoutUserBundlesInput
    connect?: BundleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserBundlesNestedInput = {
    create?: XOR<UserCreateWithoutUserBundlesInput, UserUncheckedCreateWithoutUserBundlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBundlesInput
    upsert?: UserUpsertWithoutUserBundlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserBundlesInput, UserUpdateWithoutUserBundlesInput>, UserUncheckedUpdateWithoutUserBundlesInput>
  }

  export type BundleUpdateOneRequiredWithoutUserBundlesNestedInput = {
    create?: XOR<BundleCreateWithoutUserBundlesInput, BundleUncheckedCreateWithoutUserBundlesInput>
    connectOrCreate?: BundleCreateOrConnectWithoutUserBundlesInput
    upsert?: BundleUpsertWithoutUserBundlesInput
    connect?: BundleWhereUniqueInput
    update?: XOR<XOR<BundleUpdateToOneWithWhereWithoutUserBundlesInput, BundleUpdateWithoutUserBundlesInput>, BundleUncheckedUpdateWithoutUserBundlesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    steamId?: string | null
    twitchId?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    userGames?: UserGameCreateNestedManyWithoutUserInput
    userBundles?: UserBundleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    steamId?: string | null
    twitchId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutUserInput
    userBundles?: UserBundleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userGames?: UserGameUpdateManyWithoutUserNestedInput
    userBundles?: UserBundleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    userBundles?: UserBundleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    steamId?: string | null
    twitchId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    userGames?: UserGameCreateNestedManyWithoutUserInput
    userBundles?: UserBundleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    steamId?: string | null
    twitchId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutUserInput
    userBundles?: UserBundleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userGames?: UserGameUpdateManyWithoutUserNestedInput
    userBundles?: UserBundleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    userBundles?: UserBundleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGameCreateWithoutUserInput = {
    id?: string
    game: GameCreateNestedOneWithoutUserGamesInput
  }

  export type UserGameUncheckedCreateWithoutUserInput = {
    id?: string
    gameId: string
  }

  export type UserGameCreateOrConnectWithoutUserInput = {
    where: UserGameWhereUniqueInput
    create: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput>
  }

  export type UserGameCreateManyUserInputEnvelope = {
    data: UserGameCreateManyUserInput | UserGameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBundleCreateWithoutUserInput = {
    id?: string
    bundle: BundleCreateNestedOneWithoutUserBundlesInput
  }

  export type UserBundleUncheckedCreateWithoutUserInput = {
    id?: string
    bundleId: string
  }

  export type UserBundleCreateOrConnectWithoutUserInput = {
    where: UserBundleWhereUniqueInput
    create: XOR<UserBundleCreateWithoutUserInput, UserBundleUncheckedCreateWithoutUserInput>
  }

  export type UserBundleCreateManyUserInputEnvelope = {
    data: UserBundleCreateManyUserInput | UserBundleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserGameUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGameWhereUniqueInput
    update: XOR<UserGameUpdateWithoutUserInput, UserGameUncheckedUpdateWithoutUserInput>
    create: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput>
  }

  export type UserGameUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGameWhereUniqueInput
    data: XOR<UserGameUpdateWithoutUserInput, UserGameUncheckedUpdateWithoutUserInput>
  }

  export type UserGameUpdateManyWithWhereWithoutUserInput = {
    where: UserGameScalarWhereInput
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGameScalarWhereInput = {
    AND?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
    OR?: UserGameScalarWhereInput[]
    NOT?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
    id?: StringFilter<"UserGame"> | string
    userId?: StringFilter<"UserGame"> | string
    gameId?: StringFilter<"UserGame"> | string
  }

  export type UserBundleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBundleWhereUniqueInput
    update: XOR<UserBundleUpdateWithoutUserInput, UserBundleUncheckedUpdateWithoutUserInput>
    create: XOR<UserBundleCreateWithoutUserInput, UserBundleUncheckedCreateWithoutUserInput>
  }

  export type UserBundleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBundleWhereUniqueInput
    data: XOR<UserBundleUpdateWithoutUserInput, UserBundleUncheckedUpdateWithoutUserInput>
  }

  export type UserBundleUpdateManyWithWhereWithoutUserInput = {
    where: UserBundleScalarWhereInput
    data: XOR<UserBundleUpdateManyMutationInput, UserBundleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBundleScalarWhereInput = {
    AND?: UserBundleScalarWhereInput | UserBundleScalarWhereInput[]
    OR?: UserBundleScalarWhereInput[]
    NOT?: UserBundleScalarWhereInput | UserBundleScalarWhereInput[]
    id?: StringFilter<"UserBundle"> | string
    userId?: StringFilter<"UserBundle"> | string
    bundleId?: StringFilter<"UserBundle"> | string
  }

  export type BundleGameCreateWithoutGameInput = {
    id?: string
    bundle: BundleCreateNestedOneWithoutBundleGamesInput
  }

  export type BundleGameUncheckedCreateWithoutGameInput = {
    id?: string
    bundleId: string
  }

  export type BundleGameCreateOrConnectWithoutGameInput = {
    where: BundleGameWhereUniqueInput
    create: XOR<BundleGameCreateWithoutGameInput, BundleGameUncheckedCreateWithoutGameInput>
  }

  export type BundleGameCreateManyGameInputEnvelope = {
    data: BundleGameCreateManyGameInput | BundleGameCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserGameCreateWithoutGameInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserGamesInput
  }

  export type UserGameUncheckedCreateWithoutGameInput = {
    id?: string
    userId: string
  }

  export type UserGameCreateOrConnectWithoutGameInput = {
    where: UserGameWhereUniqueInput
    create: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput>
  }

  export type UserGameCreateManyGameInputEnvelope = {
    data: UserGameCreateManyGameInput | UserGameCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type BundleGameUpsertWithWhereUniqueWithoutGameInput = {
    where: BundleGameWhereUniqueInput
    update: XOR<BundleGameUpdateWithoutGameInput, BundleGameUncheckedUpdateWithoutGameInput>
    create: XOR<BundleGameCreateWithoutGameInput, BundleGameUncheckedCreateWithoutGameInput>
  }

  export type BundleGameUpdateWithWhereUniqueWithoutGameInput = {
    where: BundleGameWhereUniqueInput
    data: XOR<BundleGameUpdateWithoutGameInput, BundleGameUncheckedUpdateWithoutGameInput>
  }

  export type BundleGameUpdateManyWithWhereWithoutGameInput = {
    where: BundleGameScalarWhereInput
    data: XOR<BundleGameUpdateManyMutationInput, BundleGameUncheckedUpdateManyWithoutGameInput>
  }

  export type BundleGameScalarWhereInput = {
    AND?: BundleGameScalarWhereInput | BundleGameScalarWhereInput[]
    OR?: BundleGameScalarWhereInput[]
    NOT?: BundleGameScalarWhereInput | BundleGameScalarWhereInput[]
    id?: StringFilter<"BundleGame"> | string
    gameId?: StringFilter<"BundleGame"> | string
    bundleId?: StringFilter<"BundleGame"> | string
  }

  export type UserGameUpsertWithWhereUniqueWithoutGameInput = {
    where: UserGameWhereUniqueInput
    update: XOR<UserGameUpdateWithoutGameInput, UserGameUncheckedUpdateWithoutGameInput>
    create: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput>
  }

  export type UserGameUpdateWithWhereUniqueWithoutGameInput = {
    where: UserGameWhereUniqueInput
    data: XOR<UserGameUpdateWithoutGameInput, UserGameUncheckedUpdateWithoutGameInput>
  }

  export type UserGameUpdateManyWithWhereWithoutGameInput = {
    where: UserGameScalarWhereInput
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutBundleGamesInput = {
    id?: string
    steamId: string
    name: string
    image: string
    price: string
    userGames?: UserGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutBundleGamesInput = {
    id?: string
    steamId: string
    name: string
    image: string
    price: string
    userGames?: UserGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutBundleGamesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutBundleGamesInput, GameUncheckedCreateWithoutBundleGamesInput>
  }

  export type BundleCreateWithoutBundleGamesInput = {
    id?: string
    steamId: string
    name: string
    image: string
    url: string
    price: string
    priceInCents: number
    discount: string
    discountPercent: number
    userBundles?: UserBundleCreateNestedManyWithoutBundleInput
  }

  export type BundleUncheckedCreateWithoutBundleGamesInput = {
    id?: string
    steamId: string
    name: string
    image: string
    url: string
    price: string
    priceInCents: number
    discount: string
    discountPercent: number
    userBundles?: UserBundleUncheckedCreateNestedManyWithoutBundleInput
  }

  export type BundleCreateOrConnectWithoutBundleGamesInput = {
    where: BundleWhereUniqueInput
    create: XOR<BundleCreateWithoutBundleGamesInput, BundleUncheckedCreateWithoutBundleGamesInput>
  }

  export type GameUpsertWithoutBundleGamesInput = {
    update: XOR<GameUpdateWithoutBundleGamesInput, GameUncheckedUpdateWithoutBundleGamesInput>
    create: XOR<GameCreateWithoutBundleGamesInput, GameUncheckedCreateWithoutBundleGamesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutBundleGamesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutBundleGamesInput, GameUncheckedUpdateWithoutBundleGamesInput>
  }

  export type GameUpdateWithoutBundleGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    userGames?: UserGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutBundleGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    userGames?: UserGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type BundleUpsertWithoutBundleGamesInput = {
    update: XOR<BundleUpdateWithoutBundleGamesInput, BundleUncheckedUpdateWithoutBundleGamesInput>
    create: XOR<BundleCreateWithoutBundleGamesInput, BundleUncheckedCreateWithoutBundleGamesInput>
    where?: BundleWhereInput
  }

  export type BundleUpdateToOneWithWhereWithoutBundleGamesInput = {
    where?: BundleWhereInput
    data: XOR<BundleUpdateWithoutBundleGamesInput, BundleUncheckedUpdateWithoutBundleGamesInput>
  }

  export type BundleUpdateWithoutBundleGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    discount?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    userBundles?: UserBundleUpdateManyWithoutBundleNestedInput
  }

  export type BundleUncheckedUpdateWithoutBundleGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    discount?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    userBundles?: UserBundleUncheckedUpdateManyWithoutBundleNestedInput
  }

  export type BundleGameCreateWithoutBundleInput = {
    id?: string
    game: GameCreateNestedOneWithoutBundleGamesInput
  }

  export type BundleGameUncheckedCreateWithoutBundleInput = {
    id?: string
    gameId: string
  }

  export type BundleGameCreateOrConnectWithoutBundleInput = {
    where: BundleGameWhereUniqueInput
    create: XOR<BundleGameCreateWithoutBundleInput, BundleGameUncheckedCreateWithoutBundleInput>
  }

  export type BundleGameCreateManyBundleInputEnvelope = {
    data: BundleGameCreateManyBundleInput | BundleGameCreateManyBundleInput[]
    skipDuplicates?: boolean
  }

  export type UserBundleCreateWithoutBundleInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserBundlesInput
  }

  export type UserBundleUncheckedCreateWithoutBundleInput = {
    id?: string
    userId: string
  }

  export type UserBundleCreateOrConnectWithoutBundleInput = {
    where: UserBundleWhereUniqueInput
    create: XOR<UserBundleCreateWithoutBundleInput, UserBundleUncheckedCreateWithoutBundleInput>
  }

  export type UserBundleCreateManyBundleInputEnvelope = {
    data: UserBundleCreateManyBundleInput | UserBundleCreateManyBundleInput[]
    skipDuplicates?: boolean
  }

  export type BundleGameUpsertWithWhereUniqueWithoutBundleInput = {
    where: BundleGameWhereUniqueInput
    update: XOR<BundleGameUpdateWithoutBundleInput, BundleGameUncheckedUpdateWithoutBundleInput>
    create: XOR<BundleGameCreateWithoutBundleInput, BundleGameUncheckedCreateWithoutBundleInput>
  }

  export type BundleGameUpdateWithWhereUniqueWithoutBundleInput = {
    where: BundleGameWhereUniqueInput
    data: XOR<BundleGameUpdateWithoutBundleInput, BundleGameUncheckedUpdateWithoutBundleInput>
  }

  export type BundleGameUpdateManyWithWhereWithoutBundleInput = {
    where: BundleGameScalarWhereInput
    data: XOR<BundleGameUpdateManyMutationInput, BundleGameUncheckedUpdateManyWithoutBundleInput>
  }

  export type UserBundleUpsertWithWhereUniqueWithoutBundleInput = {
    where: UserBundleWhereUniqueInput
    update: XOR<UserBundleUpdateWithoutBundleInput, UserBundleUncheckedUpdateWithoutBundleInput>
    create: XOR<UserBundleCreateWithoutBundleInput, UserBundleUncheckedCreateWithoutBundleInput>
  }

  export type UserBundleUpdateWithWhereUniqueWithoutBundleInput = {
    where: UserBundleWhereUniqueInput
    data: XOR<UserBundleUpdateWithoutBundleInput, UserBundleUncheckedUpdateWithoutBundleInput>
  }

  export type UserBundleUpdateManyWithWhereWithoutBundleInput = {
    where: UserBundleScalarWhereInput
    data: XOR<UserBundleUpdateManyMutationInput, UserBundleUncheckedUpdateManyWithoutBundleInput>
  }

  export type UserCreateWithoutUserGamesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    steamId?: string | null
    twitchId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userBundles?: UserBundleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserGamesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    steamId?: string | null
    twitchId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userBundles?: UserBundleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserGamesInput, UserUncheckedCreateWithoutUserGamesInput>
  }

  export type GameCreateWithoutUserGamesInput = {
    id?: string
    steamId: string
    name: string
    image: string
    price: string
    bundleGames?: BundleGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUserGamesInput = {
    id?: string
    steamId: string
    name: string
    image: string
    price: string
    bundleGames?: BundleGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUserGamesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
  }

  export type UserUpsertWithoutUserGamesInput = {
    update: XOR<UserUpdateWithoutUserGamesInput, UserUncheckedUpdateWithoutUserGamesInput>
    create: XOR<UserCreateWithoutUserGamesInput, UserUncheckedCreateWithoutUserGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserGamesInput, UserUncheckedUpdateWithoutUserGamesInput>
  }

  export type UserUpdateWithoutUserGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userBundles?: UserBundleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userBundles?: UserBundleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameUpsertWithoutUserGamesInput = {
    update: XOR<GameUpdateWithoutUserGamesInput, GameUncheckedUpdateWithoutUserGamesInput>
    create: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutUserGamesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutUserGamesInput, GameUncheckedUpdateWithoutUserGamesInput>
  }

  export type GameUpdateWithoutUserGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bundleGames?: BundleGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUserGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    bundleGames?: BundleGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserCreateWithoutUserBundlesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    steamId?: string | null
    twitchId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userGames?: UserGameCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserBundlesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    steamId?: string | null
    twitchId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserBundlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBundlesInput, UserUncheckedCreateWithoutUserBundlesInput>
  }

  export type BundleCreateWithoutUserBundlesInput = {
    id?: string
    steamId: string
    name: string
    image: string
    url: string
    price: string
    priceInCents: number
    discount: string
    discountPercent: number
    bundleGames?: BundleGameCreateNestedManyWithoutBundleInput
  }

  export type BundleUncheckedCreateWithoutUserBundlesInput = {
    id?: string
    steamId: string
    name: string
    image: string
    url: string
    price: string
    priceInCents: number
    discount: string
    discountPercent: number
    bundleGames?: BundleGameUncheckedCreateNestedManyWithoutBundleInput
  }

  export type BundleCreateOrConnectWithoutUserBundlesInput = {
    where: BundleWhereUniqueInput
    create: XOR<BundleCreateWithoutUserBundlesInput, BundleUncheckedCreateWithoutUserBundlesInput>
  }

  export type UserUpsertWithoutUserBundlesInput = {
    update: XOR<UserUpdateWithoutUserBundlesInput, UserUncheckedUpdateWithoutUserBundlesInput>
    create: XOR<UserCreateWithoutUserBundlesInput, UserUncheckedCreateWithoutUserBundlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserBundlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserBundlesInput, UserUncheckedUpdateWithoutUserBundlesInput>
  }

  export type UserUpdateWithoutUserBundlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userGames?: UserGameUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserBundlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    steamId?: NullableStringFieldUpdateOperationsInput | string | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BundleUpsertWithoutUserBundlesInput = {
    update: XOR<BundleUpdateWithoutUserBundlesInput, BundleUncheckedUpdateWithoutUserBundlesInput>
    create: XOR<BundleCreateWithoutUserBundlesInput, BundleUncheckedCreateWithoutUserBundlesInput>
    where?: BundleWhereInput
  }

  export type BundleUpdateToOneWithWhereWithoutUserBundlesInput = {
    where?: BundleWhereInput
    data: XOR<BundleUpdateWithoutUserBundlesInput, BundleUncheckedUpdateWithoutUserBundlesInput>
  }

  export type BundleUpdateWithoutUserBundlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    discount?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    bundleGames?: BundleGameUpdateManyWithoutBundleNestedInput
  }

  export type BundleUncheckedUpdateWithoutUserBundlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    steamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    discount?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    bundleGames?: BundleGameUncheckedUpdateManyWithoutBundleNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type UserGameCreateManyUserInput = {
    id?: string
    gameId: string
  }

  export type UserBundleCreateManyUserInput = {
    id?: string
    bundleId: string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateOneRequiredWithoutUserGamesNestedInput
  }

  export type UserGameUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBundleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bundle?: BundleUpdateOneRequiredWithoutUserBundlesNestedInput
  }

  export type UserBundleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bundleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBundleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bundleId?: StringFieldUpdateOperationsInput | string
  }

  export type BundleGameCreateManyGameInput = {
    id?: string
    bundleId: string
  }

  export type UserGameCreateManyGameInput = {
    id?: string
    userId: string
  }

  export type BundleGameUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    bundle?: BundleUpdateOneRequiredWithoutBundleGamesNestedInput
  }

  export type BundleGameUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    bundleId?: StringFieldUpdateOperationsInput | string
  }

  export type BundleGameUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    bundleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserGamesNestedInput
  }

  export type UserGameUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BundleGameCreateManyBundleInput = {
    id?: string
    gameId: string
  }

  export type UserBundleCreateManyBundleInput = {
    id?: string
    userId: string
  }

  export type BundleGameUpdateWithoutBundleInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateOneRequiredWithoutBundleGamesNestedInput
  }

  export type BundleGameUncheckedUpdateWithoutBundleInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type BundleGameUncheckedUpdateManyWithoutBundleInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBundleUpdateWithoutBundleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserBundlesNestedInput
  }

  export type UserBundleUncheckedUpdateWithoutBundleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBundleUncheckedUpdateManyWithoutBundleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameCountOutputTypeDefaultArgs instead
     */
    export type GameCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GameCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BundleCountOutputTypeDefaultArgs instead
     */
    export type BundleCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BundleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameDefaultArgs instead
     */
    export type GameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BundleGameDefaultArgs instead
     */
    export type BundleGameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BundleGameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BundleDefaultArgs instead
     */
    export type BundleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BundleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserGameDefaultArgs instead
     */
    export type UserGameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserGameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserBundleDefaultArgs instead
     */
    export type UserBundleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserBundleDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}