
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Drama
 * 
 */
export type Drama = $Result.DefaultSelection<Prisma.$DramaPayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model DramaView
 * 
 */
export type DramaView = $Result.DefaultSelection<Prisma.$DramaViewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dramas
 * const dramas = await prisma.drama.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dramas
   * const dramas = await prisma.drama.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.drama`: Exposes CRUD operations for the **Drama** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dramas
    * const dramas = await prisma.drama.findMany()
    * ```
    */
  get drama(): Prisma.DramaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dramaView`: Exposes CRUD operations for the **DramaView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DramaViews
    * const dramaViews = await prisma.dramaView.findMany()
    * ```
    */
  get dramaView(): Prisma.DramaViewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Drama: 'Drama',
    Episode: 'Episode',
    DramaView: 'DramaView'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "drama" | "episode" | "dramaView"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Drama: {
        payload: Prisma.$DramaPayload<ExtArgs>
        fields: Prisma.DramaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DramaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DramaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaPayload>
          }
          findFirst: {
            args: Prisma.DramaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DramaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaPayload>
          }
          findMany: {
            args: Prisma.DramaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaPayload>[]
          }
          create: {
            args: Prisma.DramaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaPayload>
          }
          createMany: {
            args: Prisma.DramaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DramaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaPayload>[]
          }
          delete: {
            args: Prisma.DramaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaPayload>
          }
          update: {
            args: Prisma.DramaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaPayload>
          }
          deleteMany: {
            args: Prisma.DramaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DramaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DramaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaPayload>[]
          }
          upsert: {
            args: Prisma.DramaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaPayload>
          }
          aggregate: {
            args: Prisma.DramaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrama>
          }
          groupBy: {
            args: Prisma.DramaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DramaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DramaCountArgs<ExtArgs>
            result: $Utils.Optional<DramaCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpisodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpisodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      DramaView: {
        payload: Prisma.$DramaViewPayload<ExtArgs>
        fields: Prisma.DramaViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DramaViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DramaViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaViewPayload>
          }
          findFirst: {
            args: Prisma.DramaViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DramaViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaViewPayload>
          }
          findMany: {
            args: Prisma.DramaViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaViewPayload>[]
          }
          create: {
            args: Prisma.DramaViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaViewPayload>
          }
          createMany: {
            args: Prisma.DramaViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DramaViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaViewPayload>[]
          }
          delete: {
            args: Prisma.DramaViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaViewPayload>
          }
          update: {
            args: Prisma.DramaViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaViewPayload>
          }
          deleteMany: {
            args: Prisma.DramaViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DramaViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DramaViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaViewPayload>[]
          }
          upsert: {
            args: Prisma.DramaViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DramaViewPayload>
          }
          aggregate: {
            args: Prisma.DramaViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDramaView>
          }
          groupBy: {
            args: Prisma.DramaViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<DramaViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.DramaViewCountArgs<ExtArgs>
            result: $Utils.Optional<DramaViewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    drama?: DramaOmit
    episode?: EpisodeOmit
    dramaView?: DramaViewOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type DramaCountOutputType
   */

  export type DramaCountOutputType = {
    episodes: number
    dramaViews: number
  }

  export type DramaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | DramaCountOutputTypeCountEpisodesArgs
    dramaViews?: boolean | DramaCountOutputTypeCountDramaViewsArgs
  }

  // Custom InputTypes
  /**
   * DramaCountOutputType without action
   */
  export type DramaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaCountOutputType
     */
    select?: DramaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DramaCountOutputType without action
   */
  export type DramaCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }

  /**
   * DramaCountOutputType without action
   */
  export type DramaCountOutputTypeCountDramaViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DramaViewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Drama
   */

  export type AggregateDrama = {
    _count: DramaCountAggregateOutputType | null
    _avg: DramaAvgAggregateOutputType | null
    _sum: DramaSumAggregateOutputType | null
    _min: DramaMinAggregateOutputType | null
    _max: DramaMaxAggregateOutputType | null
  }

  export type DramaAvgAggregateOutputType = {
    viewCount: number | null
  }

  export type DramaSumAggregateOutputType = {
    viewCount: number | null
  }

  export type DramaMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    tarikhTayangan: string | null
    waktuSiaran: string | null
    rangkaian: string | null
    pengarah: string | null
    produksi: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isTrending: boolean | null
    isRecommended: boolean | null
    viewCount: number | null
  }

  export type DramaMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    tarikhTayangan: string | null
    waktuSiaran: string | null
    rangkaian: string | null
    pengarah: string | null
    produksi: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isTrending: boolean | null
    isRecommended: boolean | null
    viewCount: number | null
  }

  export type DramaCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    description: number
    thumbnail: number
    tarikhTayangan: number
    waktuSiaran: number
    rangkaian: number
    pengarah: number
    produksi: number
    createdAt: number
    updatedAt: number
    isTrending: number
    isRecommended: number
    viewCount: number
    _all: number
  }


  export type DramaAvgAggregateInputType = {
    viewCount?: true
  }

  export type DramaSumAggregateInputType = {
    viewCount?: true
  }

  export type DramaMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    thumbnail?: true
    tarikhTayangan?: true
    waktuSiaran?: true
    rangkaian?: true
    pengarah?: true
    produksi?: true
    createdAt?: true
    updatedAt?: true
    isTrending?: true
    isRecommended?: true
    viewCount?: true
  }

  export type DramaMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    thumbnail?: true
    tarikhTayangan?: true
    waktuSiaran?: true
    rangkaian?: true
    pengarah?: true
    produksi?: true
    createdAt?: true
    updatedAt?: true
    isTrending?: true
    isRecommended?: true
    viewCount?: true
  }

  export type DramaCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    thumbnail?: true
    tarikhTayangan?: true
    waktuSiaran?: true
    rangkaian?: true
    pengarah?: true
    produksi?: true
    createdAt?: true
    updatedAt?: true
    isTrending?: true
    isRecommended?: true
    viewCount?: true
    _all?: true
  }

  export type DramaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drama to aggregate.
     */
    where?: DramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dramas to fetch.
     */
    orderBy?: DramaOrderByWithRelationInput | DramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dramas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dramas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dramas
    **/
    _count?: true | DramaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DramaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DramaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DramaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DramaMaxAggregateInputType
  }

  export type GetDramaAggregateType<T extends DramaAggregateArgs> = {
        [P in keyof T & keyof AggregateDrama]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrama[P]>
      : GetScalarType<T[P], AggregateDrama[P]>
  }




  export type DramaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DramaWhereInput
    orderBy?: DramaOrderByWithAggregationInput | DramaOrderByWithAggregationInput[]
    by: DramaScalarFieldEnum[] | DramaScalarFieldEnum
    having?: DramaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DramaCountAggregateInputType | true
    _avg?: DramaAvgAggregateInputType
    _sum?: DramaSumAggregateInputType
    _min?: DramaMinAggregateInputType
    _max?: DramaMaxAggregateInputType
  }

  export type DramaGroupByOutputType = {
    id: string
    slug: string
    title: string
    description: string | null
    thumbnail: string
    tarikhTayangan: string | null
    waktuSiaran: string | null
    rangkaian: string | null
    pengarah: string | null
    produksi: string | null
    createdAt: Date
    updatedAt: Date
    isTrending: boolean
    isRecommended: boolean
    viewCount: number
    _count: DramaCountAggregateOutputType | null
    _avg: DramaAvgAggregateOutputType | null
    _sum: DramaSumAggregateOutputType | null
    _min: DramaMinAggregateOutputType | null
    _max: DramaMaxAggregateOutputType | null
  }

  type GetDramaGroupByPayload<T extends DramaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DramaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DramaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DramaGroupByOutputType[P]>
            : GetScalarType<T[P], DramaGroupByOutputType[P]>
        }
      >
    >


  export type DramaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    tarikhTayangan?: boolean
    waktuSiaran?: boolean
    rangkaian?: boolean
    pengarah?: boolean
    produksi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isTrending?: boolean
    isRecommended?: boolean
    viewCount?: boolean
    episodes?: boolean | Drama$episodesArgs<ExtArgs>
    dramaViews?: boolean | Drama$dramaViewsArgs<ExtArgs>
    _count?: boolean | DramaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drama"]>

  export type DramaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    tarikhTayangan?: boolean
    waktuSiaran?: boolean
    rangkaian?: boolean
    pengarah?: boolean
    produksi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isTrending?: boolean
    isRecommended?: boolean
    viewCount?: boolean
  }, ExtArgs["result"]["drama"]>

  export type DramaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    tarikhTayangan?: boolean
    waktuSiaran?: boolean
    rangkaian?: boolean
    pengarah?: boolean
    produksi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isTrending?: boolean
    isRecommended?: boolean
    viewCount?: boolean
  }, ExtArgs["result"]["drama"]>

  export type DramaSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    tarikhTayangan?: boolean
    waktuSiaran?: boolean
    rangkaian?: boolean
    pengarah?: boolean
    produksi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isTrending?: boolean
    isRecommended?: boolean
    viewCount?: boolean
  }

  export type DramaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "description" | "thumbnail" | "tarikhTayangan" | "waktuSiaran" | "rangkaian" | "pengarah" | "produksi" | "createdAt" | "updatedAt" | "isTrending" | "isRecommended" | "viewCount", ExtArgs["result"]["drama"]>
  export type DramaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | Drama$episodesArgs<ExtArgs>
    dramaViews?: boolean | Drama$dramaViewsArgs<ExtArgs>
    _count?: boolean | DramaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DramaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DramaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DramaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drama"
    objects: {
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
      dramaViews: Prisma.$DramaViewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      description: string | null
      thumbnail: string
      tarikhTayangan: string | null
      waktuSiaran: string | null
      rangkaian: string | null
      pengarah: string | null
      produksi: string | null
      createdAt: Date
      updatedAt: Date
      isTrending: boolean
      isRecommended: boolean
      viewCount: number
    }, ExtArgs["result"]["drama"]>
    composites: {}
  }

  type DramaGetPayload<S extends boolean | null | undefined | DramaDefaultArgs> = $Result.GetResult<Prisma.$DramaPayload, S>

  type DramaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DramaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DramaCountAggregateInputType | true
    }

  export interface DramaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drama'], meta: { name: 'Drama' } }
    /**
     * Find zero or one Drama that matches the filter.
     * @param {DramaFindUniqueArgs} args - Arguments to find a Drama
     * @example
     * // Get one Drama
     * const drama = await prisma.drama.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DramaFindUniqueArgs>(args: SelectSubset<T, DramaFindUniqueArgs<ExtArgs>>): Prisma__DramaClient<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drama that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DramaFindUniqueOrThrowArgs} args - Arguments to find a Drama
     * @example
     * // Get one Drama
     * const drama = await prisma.drama.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DramaFindUniqueOrThrowArgs>(args: SelectSubset<T, DramaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DramaClient<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drama that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaFindFirstArgs} args - Arguments to find a Drama
     * @example
     * // Get one Drama
     * const drama = await prisma.drama.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DramaFindFirstArgs>(args?: SelectSubset<T, DramaFindFirstArgs<ExtArgs>>): Prisma__DramaClient<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drama that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaFindFirstOrThrowArgs} args - Arguments to find a Drama
     * @example
     * // Get one Drama
     * const drama = await prisma.drama.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DramaFindFirstOrThrowArgs>(args?: SelectSubset<T, DramaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DramaClient<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dramas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dramas
     * const dramas = await prisma.drama.findMany()
     * 
     * // Get first 10 Dramas
     * const dramas = await prisma.drama.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dramaWithIdOnly = await prisma.drama.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DramaFindManyArgs>(args?: SelectSubset<T, DramaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drama.
     * @param {DramaCreateArgs} args - Arguments to create a Drama.
     * @example
     * // Create one Drama
     * const Drama = await prisma.drama.create({
     *   data: {
     *     // ... data to create a Drama
     *   }
     * })
     * 
     */
    create<T extends DramaCreateArgs>(args: SelectSubset<T, DramaCreateArgs<ExtArgs>>): Prisma__DramaClient<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dramas.
     * @param {DramaCreateManyArgs} args - Arguments to create many Dramas.
     * @example
     * // Create many Dramas
     * const drama = await prisma.drama.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DramaCreateManyArgs>(args?: SelectSubset<T, DramaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dramas and returns the data saved in the database.
     * @param {DramaCreateManyAndReturnArgs} args - Arguments to create many Dramas.
     * @example
     * // Create many Dramas
     * const drama = await prisma.drama.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dramas and only return the `id`
     * const dramaWithIdOnly = await prisma.drama.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DramaCreateManyAndReturnArgs>(args?: SelectSubset<T, DramaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drama.
     * @param {DramaDeleteArgs} args - Arguments to delete one Drama.
     * @example
     * // Delete one Drama
     * const Drama = await prisma.drama.delete({
     *   where: {
     *     // ... filter to delete one Drama
     *   }
     * })
     * 
     */
    delete<T extends DramaDeleteArgs>(args: SelectSubset<T, DramaDeleteArgs<ExtArgs>>): Prisma__DramaClient<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drama.
     * @param {DramaUpdateArgs} args - Arguments to update one Drama.
     * @example
     * // Update one Drama
     * const drama = await prisma.drama.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DramaUpdateArgs>(args: SelectSubset<T, DramaUpdateArgs<ExtArgs>>): Prisma__DramaClient<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dramas.
     * @param {DramaDeleteManyArgs} args - Arguments to filter Dramas to delete.
     * @example
     * // Delete a few Dramas
     * const { count } = await prisma.drama.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DramaDeleteManyArgs>(args?: SelectSubset<T, DramaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dramas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dramas
     * const drama = await prisma.drama.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DramaUpdateManyArgs>(args: SelectSubset<T, DramaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dramas and returns the data updated in the database.
     * @param {DramaUpdateManyAndReturnArgs} args - Arguments to update many Dramas.
     * @example
     * // Update many Dramas
     * const drama = await prisma.drama.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dramas and only return the `id`
     * const dramaWithIdOnly = await prisma.drama.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DramaUpdateManyAndReturnArgs>(args: SelectSubset<T, DramaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drama.
     * @param {DramaUpsertArgs} args - Arguments to update or create a Drama.
     * @example
     * // Update or create a Drama
     * const drama = await prisma.drama.upsert({
     *   create: {
     *     // ... data to create a Drama
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drama we want to update
     *   }
     * })
     */
    upsert<T extends DramaUpsertArgs>(args: SelectSubset<T, DramaUpsertArgs<ExtArgs>>): Prisma__DramaClient<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dramas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaCountArgs} args - Arguments to filter Dramas to count.
     * @example
     * // Count the number of Dramas
     * const count = await prisma.drama.count({
     *   where: {
     *     // ... the filter for the Dramas we want to count
     *   }
     * })
    **/
    count<T extends DramaCountArgs>(
      args?: Subset<T, DramaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DramaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drama.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DramaAggregateArgs>(args: Subset<T, DramaAggregateArgs>): Prisma.PrismaPromise<GetDramaAggregateType<T>>

    /**
     * Group by Drama.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaGroupByArgs} args - Group by arguments.
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
      T extends DramaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DramaGroupByArgs['orderBy'] }
        : { orderBy?: DramaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DramaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDramaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drama model
   */
  readonly fields: DramaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drama.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DramaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episodes<T extends Drama$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Drama$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dramaViews<T extends Drama$dramaViewsArgs<ExtArgs> = {}>(args?: Subset<T, Drama$dramaViewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Drama model
   */
  interface DramaFieldRefs {
    readonly id: FieldRef<"Drama", 'String'>
    readonly slug: FieldRef<"Drama", 'String'>
    readonly title: FieldRef<"Drama", 'String'>
    readonly description: FieldRef<"Drama", 'String'>
    readonly thumbnail: FieldRef<"Drama", 'String'>
    readonly tarikhTayangan: FieldRef<"Drama", 'String'>
    readonly waktuSiaran: FieldRef<"Drama", 'String'>
    readonly rangkaian: FieldRef<"Drama", 'String'>
    readonly pengarah: FieldRef<"Drama", 'String'>
    readonly produksi: FieldRef<"Drama", 'String'>
    readonly createdAt: FieldRef<"Drama", 'DateTime'>
    readonly updatedAt: FieldRef<"Drama", 'DateTime'>
    readonly isTrending: FieldRef<"Drama", 'Boolean'>
    readonly isRecommended: FieldRef<"Drama", 'Boolean'>
    readonly viewCount: FieldRef<"Drama", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Drama findUnique
   */
  export type DramaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaInclude<ExtArgs> | null
    /**
     * Filter, which Drama to fetch.
     */
    where: DramaWhereUniqueInput
  }

  /**
   * Drama findUniqueOrThrow
   */
  export type DramaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaInclude<ExtArgs> | null
    /**
     * Filter, which Drama to fetch.
     */
    where: DramaWhereUniqueInput
  }

  /**
   * Drama findFirst
   */
  export type DramaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaInclude<ExtArgs> | null
    /**
     * Filter, which Drama to fetch.
     */
    where?: DramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dramas to fetch.
     */
    orderBy?: DramaOrderByWithRelationInput | DramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dramas.
     */
    cursor?: DramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dramas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dramas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dramas.
     */
    distinct?: DramaScalarFieldEnum | DramaScalarFieldEnum[]
  }

  /**
   * Drama findFirstOrThrow
   */
  export type DramaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaInclude<ExtArgs> | null
    /**
     * Filter, which Drama to fetch.
     */
    where?: DramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dramas to fetch.
     */
    orderBy?: DramaOrderByWithRelationInput | DramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dramas.
     */
    cursor?: DramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dramas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dramas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dramas.
     */
    distinct?: DramaScalarFieldEnum | DramaScalarFieldEnum[]
  }

  /**
   * Drama findMany
   */
  export type DramaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaInclude<ExtArgs> | null
    /**
     * Filter, which Dramas to fetch.
     */
    where?: DramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dramas to fetch.
     */
    orderBy?: DramaOrderByWithRelationInput | DramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dramas.
     */
    cursor?: DramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dramas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dramas.
     */
    skip?: number
    distinct?: DramaScalarFieldEnum | DramaScalarFieldEnum[]
  }

  /**
   * Drama create
   */
  export type DramaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaInclude<ExtArgs> | null
    /**
     * The data needed to create a Drama.
     */
    data: XOR<DramaCreateInput, DramaUncheckedCreateInput>
  }

  /**
   * Drama createMany
   */
  export type DramaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dramas.
     */
    data: DramaCreateManyInput | DramaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drama createManyAndReturn
   */
  export type DramaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * The data used to create many Dramas.
     */
    data: DramaCreateManyInput | DramaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drama update
   */
  export type DramaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaInclude<ExtArgs> | null
    /**
     * The data needed to update a Drama.
     */
    data: XOR<DramaUpdateInput, DramaUncheckedUpdateInput>
    /**
     * Choose, which Drama to update.
     */
    where: DramaWhereUniqueInput
  }

  /**
   * Drama updateMany
   */
  export type DramaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dramas.
     */
    data: XOR<DramaUpdateManyMutationInput, DramaUncheckedUpdateManyInput>
    /**
     * Filter which Dramas to update
     */
    where?: DramaWhereInput
    /**
     * Limit how many Dramas to update.
     */
    limit?: number
  }

  /**
   * Drama updateManyAndReturn
   */
  export type DramaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * The data used to update Dramas.
     */
    data: XOR<DramaUpdateManyMutationInput, DramaUncheckedUpdateManyInput>
    /**
     * Filter which Dramas to update
     */
    where?: DramaWhereInput
    /**
     * Limit how many Dramas to update.
     */
    limit?: number
  }

  /**
   * Drama upsert
   */
  export type DramaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaInclude<ExtArgs> | null
    /**
     * The filter to search for the Drama to update in case it exists.
     */
    where: DramaWhereUniqueInput
    /**
     * In case the Drama found by the `where` argument doesn't exist, create a new Drama with this data.
     */
    create: XOR<DramaCreateInput, DramaUncheckedCreateInput>
    /**
     * In case the Drama was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DramaUpdateInput, DramaUncheckedUpdateInput>
  }

  /**
   * Drama delete
   */
  export type DramaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaInclude<ExtArgs> | null
    /**
     * Filter which Drama to delete.
     */
    where: DramaWhereUniqueInput
  }

  /**
   * Drama deleteMany
   */
  export type DramaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dramas to delete
     */
    where?: DramaWhereInput
    /**
     * Limit how many Dramas to delete.
     */
    limit?: number
  }

  /**
   * Drama.episodes
   */
  export type Drama$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Drama.dramaViews
   */
  export type Drama$dramaViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewInclude<ExtArgs> | null
    where?: DramaViewWhereInput
    orderBy?: DramaViewOrderByWithRelationInput | DramaViewOrderByWithRelationInput[]
    cursor?: DramaViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DramaViewScalarFieldEnum | DramaViewScalarFieldEnum[]
  }

  /**
   * Drama without action
   */
  export type DramaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drama
     */
    select?: DramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drama
     */
    omit?: DramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaInclude<ExtArgs> | null
  }


  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    episodeNum: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    episodeNum: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    videoSrc: string | null
    publishedAt: Date | null
    dramaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    episodeNum: number | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    videoSrc: string | null
    publishedAt: Date | null
    dramaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    episodeNum: number | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    videoSrc: number
    publishedAt: number
    dramaId: number
    createdAt: number
    updatedAt: number
    episodeNum: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    episodeNum?: true
  }

  export type EpisodeSumAggregateInputType = {
    episodeNum?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    videoSrc?: true
    publishedAt?: true
    dramaId?: true
    createdAt?: true
    updatedAt?: true
    episodeNum?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    videoSrc?: true
    publishedAt?: true
    dramaId?: true
    createdAt?: true
    updatedAt?: true
    episodeNum?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    videoSrc?: true
    publishedAt?: true
    dramaId?: true
    createdAt?: true
    updatedAt?: true
    episodeNum?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: string
    slug: string
    title: string
    videoSrc: string
    publishedAt: Date | null
    dramaId: string
    createdAt: Date
    updatedAt: Date
    episodeNum: number | null
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    videoSrc?: boolean
    publishedAt?: boolean
    dramaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episodeNum?: boolean
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    videoSrc?: boolean
    publishedAt?: boolean
    dramaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episodeNum?: boolean
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    videoSrc?: boolean
    publishedAt?: boolean
    dramaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episodeNum?: boolean
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    videoSrc?: boolean
    publishedAt?: boolean
    dramaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episodeNum?: boolean
  }

  export type EpisodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "videoSrc" | "publishedAt" | "dramaId" | "createdAt" | "updatedAt" | "episodeNum", ExtArgs["result"]["episode"]>
  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }

  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      drama: Prisma.$DramaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      videoSrc: string
      publishedAt: Date | null
      dramaId: string
      createdAt: Date
      updatedAt: Date
      episodeNum: number | null
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodeFindUniqueArgs>(args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodeFindFirstArgs>(args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodeFindManyArgs>(args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends EpisodeCreateArgs>(args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodeCreateManyArgs>(args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Episodes and returns the data saved in the database.
     * @param {EpisodeCreateManyAndReturnArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpisodeCreateManyAndReturnArgs>(args?: SelectSubset<T, EpisodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends EpisodeDeleteArgs>(args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodeUpdateArgs>(args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodeDeleteManyArgs>(args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodeUpdateManyArgs>(args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes and returns the data updated in the database.
     * @param {EpisodeUpdateManyAndReturnArgs} args - Arguments to update many Episodes.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EpisodeUpdateManyAndReturnArgs>(args: SelectSubset<T, EpisodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends EpisodeUpsertArgs>(args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
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
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drama<T extends DramaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DramaDefaultArgs<ExtArgs>>): Prisma__DramaClient<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Episode model
   */
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'String'>
    readonly slug: FieldRef<"Episode", 'String'>
    readonly title: FieldRef<"Episode", 'String'>
    readonly videoSrc: FieldRef<"Episode", 'String'>
    readonly publishedAt: FieldRef<"Episode", 'DateTime'>
    readonly dramaId: FieldRef<"Episode", 'String'>
    readonly createdAt: FieldRef<"Episode", 'DateTime'>
    readonly updatedAt: FieldRef<"Episode", 'DateTime'>
    readonly episodeNum: FieldRef<"Episode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }

  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Episode createManyAndReturn
   */
  export type EpisodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
  }

  /**
   * Episode updateManyAndReturn
   */
  export type EpisodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }

  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to delete.
     */
    limit?: number
  }

  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
  }


  /**
   * Model DramaView
   */

  export type AggregateDramaView = {
    _count: DramaViewCountAggregateOutputType | null
    _min: DramaViewMinAggregateOutputType | null
    _max: DramaViewMaxAggregateOutputType | null
  }

  export type DramaViewMinAggregateOutputType = {
    id: string | null
    dramaId: string | null
    createdAt: Date | null
  }

  export type DramaViewMaxAggregateOutputType = {
    id: string | null
    dramaId: string | null
    createdAt: Date | null
  }

  export type DramaViewCountAggregateOutputType = {
    id: number
    dramaId: number
    createdAt: number
    _all: number
  }


  export type DramaViewMinAggregateInputType = {
    id?: true
    dramaId?: true
    createdAt?: true
  }

  export type DramaViewMaxAggregateInputType = {
    id?: true
    dramaId?: true
    createdAt?: true
  }

  export type DramaViewCountAggregateInputType = {
    id?: true
    dramaId?: true
    createdAt?: true
    _all?: true
  }

  export type DramaViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DramaView to aggregate.
     */
    where?: DramaViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DramaViews to fetch.
     */
    orderBy?: DramaViewOrderByWithRelationInput | DramaViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DramaViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DramaViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DramaViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DramaViews
    **/
    _count?: true | DramaViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DramaViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DramaViewMaxAggregateInputType
  }

  export type GetDramaViewAggregateType<T extends DramaViewAggregateArgs> = {
        [P in keyof T & keyof AggregateDramaView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDramaView[P]>
      : GetScalarType<T[P], AggregateDramaView[P]>
  }




  export type DramaViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DramaViewWhereInput
    orderBy?: DramaViewOrderByWithAggregationInput | DramaViewOrderByWithAggregationInput[]
    by: DramaViewScalarFieldEnum[] | DramaViewScalarFieldEnum
    having?: DramaViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DramaViewCountAggregateInputType | true
    _min?: DramaViewMinAggregateInputType
    _max?: DramaViewMaxAggregateInputType
  }

  export type DramaViewGroupByOutputType = {
    id: string
    dramaId: string
    createdAt: Date
    _count: DramaViewCountAggregateOutputType | null
    _min: DramaViewMinAggregateOutputType | null
    _max: DramaViewMaxAggregateOutputType | null
  }

  type GetDramaViewGroupByPayload<T extends DramaViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DramaViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DramaViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DramaViewGroupByOutputType[P]>
            : GetScalarType<T[P], DramaViewGroupByOutputType[P]>
        }
      >
    >


  export type DramaViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dramaId?: boolean
    createdAt?: boolean
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dramaView"]>

  export type DramaViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dramaId?: boolean
    createdAt?: boolean
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dramaView"]>

  export type DramaViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dramaId?: boolean
    createdAt?: boolean
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dramaView"]>

  export type DramaViewSelectScalar = {
    id?: boolean
    dramaId?: boolean
    createdAt?: boolean
  }

  export type DramaViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dramaId" | "createdAt", ExtArgs["result"]["dramaView"]>
  export type DramaViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }
  export type DramaViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }
  export type DramaViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drama?: boolean | DramaDefaultArgs<ExtArgs>
  }

  export type $DramaViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DramaView"
    objects: {
      drama: Prisma.$DramaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dramaId: string
      createdAt: Date
    }, ExtArgs["result"]["dramaView"]>
    composites: {}
  }

  type DramaViewGetPayload<S extends boolean | null | undefined | DramaViewDefaultArgs> = $Result.GetResult<Prisma.$DramaViewPayload, S>

  type DramaViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DramaViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DramaViewCountAggregateInputType | true
    }

  export interface DramaViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DramaView'], meta: { name: 'DramaView' } }
    /**
     * Find zero or one DramaView that matches the filter.
     * @param {DramaViewFindUniqueArgs} args - Arguments to find a DramaView
     * @example
     * // Get one DramaView
     * const dramaView = await prisma.dramaView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DramaViewFindUniqueArgs>(args: SelectSubset<T, DramaViewFindUniqueArgs<ExtArgs>>): Prisma__DramaViewClient<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DramaView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DramaViewFindUniqueOrThrowArgs} args - Arguments to find a DramaView
     * @example
     * // Get one DramaView
     * const dramaView = await prisma.dramaView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DramaViewFindUniqueOrThrowArgs>(args: SelectSubset<T, DramaViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DramaViewClient<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DramaView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaViewFindFirstArgs} args - Arguments to find a DramaView
     * @example
     * // Get one DramaView
     * const dramaView = await prisma.dramaView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DramaViewFindFirstArgs>(args?: SelectSubset<T, DramaViewFindFirstArgs<ExtArgs>>): Prisma__DramaViewClient<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DramaView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaViewFindFirstOrThrowArgs} args - Arguments to find a DramaView
     * @example
     * // Get one DramaView
     * const dramaView = await prisma.dramaView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DramaViewFindFirstOrThrowArgs>(args?: SelectSubset<T, DramaViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__DramaViewClient<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DramaViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DramaViews
     * const dramaViews = await prisma.dramaView.findMany()
     * 
     * // Get first 10 DramaViews
     * const dramaViews = await prisma.dramaView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dramaViewWithIdOnly = await prisma.dramaView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DramaViewFindManyArgs>(args?: SelectSubset<T, DramaViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DramaView.
     * @param {DramaViewCreateArgs} args - Arguments to create a DramaView.
     * @example
     * // Create one DramaView
     * const DramaView = await prisma.dramaView.create({
     *   data: {
     *     // ... data to create a DramaView
     *   }
     * })
     * 
     */
    create<T extends DramaViewCreateArgs>(args: SelectSubset<T, DramaViewCreateArgs<ExtArgs>>): Prisma__DramaViewClient<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DramaViews.
     * @param {DramaViewCreateManyArgs} args - Arguments to create many DramaViews.
     * @example
     * // Create many DramaViews
     * const dramaView = await prisma.dramaView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DramaViewCreateManyArgs>(args?: SelectSubset<T, DramaViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DramaViews and returns the data saved in the database.
     * @param {DramaViewCreateManyAndReturnArgs} args - Arguments to create many DramaViews.
     * @example
     * // Create many DramaViews
     * const dramaView = await prisma.dramaView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DramaViews and only return the `id`
     * const dramaViewWithIdOnly = await prisma.dramaView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DramaViewCreateManyAndReturnArgs>(args?: SelectSubset<T, DramaViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DramaView.
     * @param {DramaViewDeleteArgs} args - Arguments to delete one DramaView.
     * @example
     * // Delete one DramaView
     * const DramaView = await prisma.dramaView.delete({
     *   where: {
     *     // ... filter to delete one DramaView
     *   }
     * })
     * 
     */
    delete<T extends DramaViewDeleteArgs>(args: SelectSubset<T, DramaViewDeleteArgs<ExtArgs>>): Prisma__DramaViewClient<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DramaView.
     * @param {DramaViewUpdateArgs} args - Arguments to update one DramaView.
     * @example
     * // Update one DramaView
     * const dramaView = await prisma.dramaView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DramaViewUpdateArgs>(args: SelectSubset<T, DramaViewUpdateArgs<ExtArgs>>): Prisma__DramaViewClient<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DramaViews.
     * @param {DramaViewDeleteManyArgs} args - Arguments to filter DramaViews to delete.
     * @example
     * // Delete a few DramaViews
     * const { count } = await prisma.dramaView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DramaViewDeleteManyArgs>(args?: SelectSubset<T, DramaViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DramaViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DramaViews
     * const dramaView = await prisma.dramaView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DramaViewUpdateManyArgs>(args: SelectSubset<T, DramaViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DramaViews and returns the data updated in the database.
     * @param {DramaViewUpdateManyAndReturnArgs} args - Arguments to update many DramaViews.
     * @example
     * // Update many DramaViews
     * const dramaView = await prisma.dramaView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DramaViews and only return the `id`
     * const dramaViewWithIdOnly = await prisma.dramaView.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DramaViewUpdateManyAndReturnArgs>(args: SelectSubset<T, DramaViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DramaView.
     * @param {DramaViewUpsertArgs} args - Arguments to update or create a DramaView.
     * @example
     * // Update or create a DramaView
     * const dramaView = await prisma.dramaView.upsert({
     *   create: {
     *     // ... data to create a DramaView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DramaView we want to update
     *   }
     * })
     */
    upsert<T extends DramaViewUpsertArgs>(args: SelectSubset<T, DramaViewUpsertArgs<ExtArgs>>): Prisma__DramaViewClient<$Result.GetResult<Prisma.$DramaViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DramaViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaViewCountArgs} args - Arguments to filter DramaViews to count.
     * @example
     * // Count the number of DramaViews
     * const count = await prisma.dramaView.count({
     *   where: {
     *     // ... the filter for the DramaViews we want to count
     *   }
     * })
    **/
    count<T extends DramaViewCountArgs>(
      args?: Subset<T, DramaViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DramaViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DramaView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DramaViewAggregateArgs>(args: Subset<T, DramaViewAggregateArgs>): Prisma.PrismaPromise<GetDramaViewAggregateType<T>>

    /**
     * Group by DramaView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DramaViewGroupByArgs} args - Group by arguments.
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
      T extends DramaViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DramaViewGroupByArgs['orderBy'] }
        : { orderBy?: DramaViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DramaViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDramaViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DramaView model
   */
  readonly fields: DramaViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DramaView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DramaViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drama<T extends DramaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DramaDefaultArgs<ExtArgs>>): Prisma__DramaClient<$Result.GetResult<Prisma.$DramaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DramaView model
   */
  interface DramaViewFieldRefs {
    readonly id: FieldRef<"DramaView", 'String'>
    readonly dramaId: FieldRef<"DramaView", 'String'>
    readonly createdAt: FieldRef<"DramaView", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DramaView findUnique
   */
  export type DramaViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewInclude<ExtArgs> | null
    /**
     * Filter, which DramaView to fetch.
     */
    where: DramaViewWhereUniqueInput
  }

  /**
   * DramaView findUniqueOrThrow
   */
  export type DramaViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewInclude<ExtArgs> | null
    /**
     * Filter, which DramaView to fetch.
     */
    where: DramaViewWhereUniqueInput
  }

  /**
   * DramaView findFirst
   */
  export type DramaViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewInclude<ExtArgs> | null
    /**
     * Filter, which DramaView to fetch.
     */
    where?: DramaViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DramaViews to fetch.
     */
    orderBy?: DramaViewOrderByWithRelationInput | DramaViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DramaViews.
     */
    cursor?: DramaViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DramaViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DramaViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DramaViews.
     */
    distinct?: DramaViewScalarFieldEnum | DramaViewScalarFieldEnum[]
  }

  /**
   * DramaView findFirstOrThrow
   */
  export type DramaViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewInclude<ExtArgs> | null
    /**
     * Filter, which DramaView to fetch.
     */
    where?: DramaViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DramaViews to fetch.
     */
    orderBy?: DramaViewOrderByWithRelationInput | DramaViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DramaViews.
     */
    cursor?: DramaViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DramaViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DramaViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DramaViews.
     */
    distinct?: DramaViewScalarFieldEnum | DramaViewScalarFieldEnum[]
  }

  /**
   * DramaView findMany
   */
  export type DramaViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewInclude<ExtArgs> | null
    /**
     * Filter, which DramaViews to fetch.
     */
    where?: DramaViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DramaViews to fetch.
     */
    orderBy?: DramaViewOrderByWithRelationInput | DramaViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DramaViews.
     */
    cursor?: DramaViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DramaViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DramaViews.
     */
    skip?: number
    distinct?: DramaViewScalarFieldEnum | DramaViewScalarFieldEnum[]
  }

  /**
   * DramaView create
   */
  export type DramaViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewInclude<ExtArgs> | null
    /**
     * The data needed to create a DramaView.
     */
    data: XOR<DramaViewCreateInput, DramaViewUncheckedCreateInput>
  }

  /**
   * DramaView createMany
   */
  export type DramaViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DramaViews.
     */
    data: DramaViewCreateManyInput | DramaViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DramaView createManyAndReturn
   */
  export type DramaViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * The data used to create many DramaViews.
     */
    data: DramaViewCreateManyInput | DramaViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DramaView update
   */
  export type DramaViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewInclude<ExtArgs> | null
    /**
     * The data needed to update a DramaView.
     */
    data: XOR<DramaViewUpdateInput, DramaViewUncheckedUpdateInput>
    /**
     * Choose, which DramaView to update.
     */
    where: DramaViewWhereUniqueInput
  }

  /**
   * DramaView updateMany
   */
  export type DramaViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DramaViews.
     */
    data: XOR<DramaViewUpdateManyMutationInput, DramaViewUncheckedUpdateManyInput>
    /**
     * Filter which DramaViews to update
     */
    where?: DramaViewWhereInput
    /**
     * Limit how many DramaViews to update.
     */
    limit?: number
  }

  /**
   * DramaView updateManyAndReturn
   */
  export type DramaViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * The data used to update DramaViews.
     */
    data: XOR<DramaViewUpdateManyMutationInput, DramaViewUncheckedUpdateManyInput>
    /**
     * Filter which DramaViews to update
     */
    where?: DramaViewWhereInput
    /**
     * Limit how many DramaViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DramaView upsert
   */
  export type DramaViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewInclude<ExtArgs> | null
    /**
     * The filter to search for the DramaView to update in case it exists.
     */
    where: DramaViewWhereUniqueInput
    /**
     * In case the DramaView found by the `where` argument doesn't exist, create a new DramaView with this data.
     */
    create: XOR<DramaViewCreateInput, DramaViewUncheckedCreateInput>
    /**
     * In case the DramaView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DramaViewUpdateInput, DramaViewUncheckedUpdateInput>
  }

  /**
   * DramaView delete
   */
  export type DramaViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewInclude<ExtArgs> | null
    /**
     * Filter which DramaView to delete.
     */
    where: DramaViewWhereUniqueInput
  }

  /**
   * DramaView deleteMany
   */
  export type DramaViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DramaViews to delete
     */
    where?: DramaViewWhereInput
    /**
     * Limit how many DramaViews to delete.
     */
    limit?: number
  }

  /**
   * DramaView without action
   */
  export type DramaViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DramaView
     */
    select?: DramaViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DramaView
     */
    omit?: DramaViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DramaViewInclude<ExtArgs> | null
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


  export const DramaScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    thumbnail: 'thumbnail',
    tarikhTayangan: 'tarikhTayangan',
    waktuSiaran: 'waktuSiaran',
    rangkaian: 'rangkaian',
    pengarah: 'pengarah',
    produksi: 'produksi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isTrending: 'isTrending',
    isRecommended: 'isRecommended',
    viewCount: 'viewCount'
  };

  export type DramaScalarFieldEnum = (typeof DramaScalarFieldEnum)[keyof typeof DramaScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    videoSrc: 'videoSrc',
    publishedAt: 'publishedAt',
    dramaId: 'dramaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    episodeNum: 'episodeNum'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const DramaViewScalarFieldEnum: {
    id: 'id',
    dramaId: 'dramaId',
    createdAt: 'createdAt'
  };

  export type DramaViewScalarFieldEnum = (typeof DramaViewScalarFieldEnum)[keyof typeof DramaViewScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type DramaWhereInput = {
    AND?: DramaWhereInput | DramaWhereInput[]
    OR?: DramaWhereInput[]
    NOT?: DramaWhereInput | DramaWhereInput[]
    id?: StringFilter<"Drama"> | string
    slug?: StringFilter<"Drama"> | string
    title?: StringFilter<"Drama"> | string
    description?: StringNullableFilter<"Drama"> | string | null
    thumbnail?: StringFilter<"Drama"> | string
    tarikhTayangan?: StringNullableFilter<"Drama"> | string | null
    waktuSiaran?: StringNullableFilter<"Drama"> | string | null
    rangkaian?: StringNullableFilter<"Drama"> | string | null
    pengarah?: StringNullableFilter<"Drama"> | string | null
    produksi?: StringNullableFilter<"Drama"> | string | null
    createdAt?: DateTimeFilter<"Drama"> | Date | string
    updatedAt?: DateTimeFilter<"Drama"> | Date | string
    isTrending?: BoolFilter<"Drama"> | boolean
    isRecommended?: BoolFilter<"Drama"> | boolean
    viewCount?: IntFilter<"Drama"> | number
    episodes?: EpisodeListRelationFilter
    dramaViews?: DramaViewListRelationFilter
  }

  export type DramaOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnail?: SortOrder
    tarikhTayangan?: SortOrderInput | SortOrder
    waktuSiaran?: SortOrderInput | SortOrder
    rangkaian?: SortOrderInput | SortOrder
    pengarah?: SortOrderInput | SortOrder
    produksi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isTrending?: SortOrder
    isRecommended?: SortOrder
    viewCount?: SortOrder
    episodes?: EpisodeOrderByRelationAggregateInput
    dramaViews?: DramaViewOrderByRelationAggregateInput
  }

  export type DramaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: DramaWhereInput | DramaWhereInput[]
    OR?: DramaWhereInput[]
    NOT?: DramaWhereInput | DramaWhereInput[]
    title?: StringFilter<"Drama"> | string
    description?: StringNullableFilter<"Drama"> | string | null
    thumbnail?: StringFilter<"Drama"> | string
    tarikhTayangan?: StringNullableFilter<"Drama"> | string | null
    waktuSiaran?: StringNullableFilter<"Drama"> | string | null
    rangkaian?: StringNullableFilter<"Drama"> | string | null
    pengarah?: StringNullableFilter<"Drama"> | string | null
    produksi?: StringNullableFilter<"Drama"> | string | null
    createdAt?: DateTimeFilter<"Drama"> | Date | string
    updatedAt?: DateTimeFilter<"Drama"> | Date | string
    isTrending?: BoolFilter<"Drama"> | boolean
    isRecommended?: BoolFilter<"Drama"> | boolean
    viewCount?: IntFilter<"Drama"> | number
    episodes?: EpisodeListRelationFilter
    dramaViews?: DramaViewListRelationFilter
  }, "id" | "slug">

  export type DramaOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnail?: SortOrder
    tarikhTayangan?: SortOrderInput | SortOrder
    waktuSiaran?: SortOrderInput | SortOrder
    rangkaian?: SortOrderInput | SortOrder
    pengarah?: SortOrderInput | SortOrder
    produksi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isTrending?: SortOrder
    isRecommended?: SortOrder
    viewCount?: SortOrder
    _count?: DramaCountOrderByAggregateInput
    _avg?: DramaAvgOrderByAggregateInput
    _max?: DramaMaxOrderByAggregateInput
    _min?: DramaMinOrderByAggregateInput
    _sum?: DramaSumOrderByAggregateInput
  }

  export type DramaScalarWhereWithAggregatesInput = {
    AND?: DramaScalarWhereWithAggregatesInput | DramaScalarWhereWithAggregatesInput[]
    OR?: DramaScalarWhereWithAggregatesInput[]
    NOT?: DramaScalarWhereWithAggregatesInput | DramaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drama"> | string
    slug?: StringWithAggregatesFilter<"Drama"> | string
    title?: StringWithAggregatesFilter<"Drama"> | string
    description?: StringNullableWithAggregatesFilter<"Drama"> | string | null
    thumbnail?: StringWithAggregatesFilter<"Drama"> | string
    tarikhTayangan?: StringNullableWithAggregatesFilter<"Drama"> | string | null
    waktuSiaran?: StringNullableWithAggregatesFilter<"Drama"> | string | null
    rangkaian?: StringNullableWithAggregatesFilter<"Drama"> | string | null
    pengarah?: StringNullableWithAggregatesFilter<"Drama"> | string | null
    produksi?: StringNullableWithAggregatesFilter<"Drama"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Drama"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Drama"> | Date | string
    isTrending?: BoolWithAggregatesFilter<"Drama"> | boolean
    isRecommended?: BoolWithAggregatesFilter<"Drama"> | boolean
    viewCount?: IntWithAggregatesFilter<"Drama"> | number
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: StringFilter<"Episode"> | string
    slug?: StringFilter<"Episode"> | string
    title?: StringFilter<"Episode"> | string
    videoSrc?: StringFilter<"Episode"> | string
    publishedAt?: DateTimeNullableFilter<"Episode"> | Date | string | null
    dramaId?: StringFilter<"Episode"> | string
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    episodeNum?: IntNullableFilter<"Episode"> | number | null
    drama?: XOR<DramaScalarRelationFilter, DramaWhereInput>
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    videoSrc?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    dramaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    episodeNum?: SortOrderInput | SortOrder
    drama?: DramaOrderByWithRelationInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    title?: StringFilter<"Episode"> | string
    videoSrc?: StringFilter<"Episode"> | string
    publishedAt?: DateTimeNullableFilter<"Episode"> | Date | string | null
    dramaId?: StringFilter<"Episode"> | string
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    episodeNum?: IntNullableFilter<"Episode"> | number | null
    drama?: XOR<DramaScalarRelationFilter, DramaWhereInput>
  }, "id" | "slug">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    videoSrc?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    dramaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    episodeNum?: SortOrderInput | SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Episode"> | string
    slug?: StringWithAggregatesFilter<"Episode"> | string
    title?: StringWithAggregatesFilter<"Episode"> | string
    videoSrc?: StringWithAggregatesFilter<"Episode"> | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Episode"> | Date | string | null
    dramaId?: StringWithAggregatesFilter<"Episode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
    episodeNum?: IntNullableWithAggregatesFilter<"Episode"> | number | null
  }

  export type DramaViewWhereInput = {
    AND?: DramaViewWhereInput | DramaViewWhereInput[]
    OR?: DramaViewWhereInput[]
    NOT?: DramaViewWhereInput | DramaViewWhereInput[]
    id?: StringFilter<"DramaView"> | string
    dramaId?: StringFilter<"DramaView"> | string
    createdAt?: DateTimeFilter<"DramaView"> | Date | string
    drama?: XOR<DramaScalarRelationFilter, DramaWhereInput>
  }

  export type DramaViewOrderByWithRelationInput = {
    id?: SortOrder
    dramaId?: SortOrder
    createdAt?: SortOrder
    drama?: DramaOrderByWithRelationInput
  }

  export type DramaViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DramaViewWhereInput | DramaViewWhereInput[]
    OR?: DramaViewWhereInput[]
    NOT?: DramaViewWhereInput | DramaViewWhereInput[]
    dramaId?: StringFilter<"DramaView"> | string
    createdAt?: DateTimeFilter<"DramaView"> | Date | string
    drama?: XOR<DramaScalarRelationFilter, DramaWhereInput>
  }, "id">

  export type DramaViewOrderByWithAggregationInput = {
    id?: SortOrder
    dramaId?: SortOrder
    createdAt?: SortOrder
    _count?: DramaViewCountOrderByAggregateInput
    _max?: DramaViewMaxOrderByAggregateInput
    _min?: DramaViewMinOrderByAggregateInput
  }

  export type DramaViewScalarWhereWithAggregatesInput = {
    AND?: DramaViewScalarWhereWithAggregatesInput | DramaViewScalarWhereWithAggregatesInput[]
    OR?: DramaViewScalarWhereWithAggregatesInput[]
    NOT?: DramaViewScalarWhereWithAggregatesInput | DramaViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DramaView"> | string
    dramaId?: StringWithAggregatesFilter<"DramaView"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DramaView"> | Date | string
  }

  export type DramaCreateInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    thumbnail: string
    tarikhTayangan?: string | null
    waktuSiaran?: string | null
    rangkaian?: string | null
    pengarah?: string | null
    produksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isTrending?: boolean
    isRecommended?: boolean
    viewCount?: number
    episodes?: EpisodeCreateNestedManyWithoutDramaInput
    dramaViews?: DramaViewCreateNestedManyWithoutDramaInput
  }

  export type DramaUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    thumbnail: string
    tarikhTayangan?: string | null
    waktuSiaran?: string | null
    rangkaian?: string | null
    pengarah?: string | null
    produksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isTrending?: boolean
    isRecommended?: boolean
    viewCount?: number
    episodes?: EpisodeUncheckedCreateNestedManyWithoutDramaInput
    dramaViews?: DramaViewUncheckedCreateNestedManyWithoutDramaInput
  }

  export type DramaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    tarikhTayangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuSiaran?: NullableStringFieldUpdateOperationsInput | string | null
    rangkaian?: NullableStringFieldUpdateOperationsInput | string | null
    pengarah?: NullableStringFieldUpdateOperationsInput | string | null
    produksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    isRecommended?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    episodes?: EpisodeUpdateManyWithoutDramaNestedInput
    dramaViews?: DramaViewUpdateManyWithoutDramaNestedInput
  }

  export type DramaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    tarikhTayangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuSiaran?: NullableStringFieldUpdateOperationsInput | string | null
    rangkaian?: NullableStringFieldUpdateOperationsInput | string | null
    pengarah?: NullableStringFieldUpdateOperationsInput | string | null
    produksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    isRecommended?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    episodes?: EpisodeUncheckedUpdateManyWithoutDramaNestedInput
    dramaViews?: DramaViewUncheckedUpdateManyWithoutDramaNestedInput
  }

  export type DramaCreateManyInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    thumbnail: string
    tarikhTayangan?: string | null
    waktuSiaran?: string | null
    rangkaian?: string | null
    pengarah?: string | null
    produksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isTrending?: boolean
    isRecommended?: boolean
    viewCount?: number
  }

  export type DramaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    tarikhTayangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuSiaran?: NullableStringFieldUpdateOperationsInput | string | null
    rangkaian?: NullableStringFieldUpdateOperationsInput | string | null
    pengarah?: NullableStringFieldUpdateOperationsInput | string | null
    produksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    isRecommended?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
  }

  export type DramaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    tarikhTayangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuSiaran?: NullableStringFieldUpdateOperationsInput | string | null
    rangkaian?: NullableStringFieldUpdateOperationsInput | string | null
    pengarah?: NullableStringFieldUpdateOperationsInput | string | null
    produksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    isRecommended?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
  }

  export type EpisodeCreateInput = {
    id?: string
    slug: string
    title: string
    videoSrc: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodeNum?: number | null
    drama: DramaCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    videoSrc: string
    publishedAt?: Date | string | null
    dramaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    episodeNum?: number | null
  }

  export type EpisodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoSrc?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeNum?: NullableIntFieldUpdateOperationsInput | number | null
    drama?: DramaUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoSrc?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dramaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeNum?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EpisodeCreateManyInput = {
    id?: string
    slug: string
    title: string
    videoSrc: string
    publishedAt?: Date | string | null
    dramaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    episodeNum?: number | null
  }

  export type EpisodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoSrc?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeNum?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoSrc?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dramaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeNum?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DramaViewCreateInput = {
    id?: string
    createdAt?: Date | string
    drama: DramaCreateNestedOneWithoutDramaViewsInput
  }

  export type DramaViewUncheckedCreateInput = {
    id?: string
    dramaId: string
    createdAt?: Date | string
  }

  export type DramaViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drama?: DramaUpdateOneRequiredWithoutDramaViewsNestedInput
  }

  export type DramaViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dramaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DramaViewCreateManyInput = {
    id?: string
    dramaId: string
    createdAt?: Date | string
  }

  export type DramaViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DramaViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dramaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type DramaViewListRelationFilter = {
    every?: DramaViewWhereInput
    some?: DramaViewWhereInput
    none?: DramaViewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DramaViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DramaCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    tarikhTayangan?: SortOrder
    waktuSiaran?: SortOrder
    rangkaian?: SortOrder
    pengarah?: SortOrder
    produksi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isTrending?: SortOrder
    isRecommended?: SortOrder
    viewCount?: SortOrder
  }

  export type DramaAvgOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type DramaMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    tarikhTayangan?: SortOrder
    waktuSiaran?: SortOrder
    rangkaian?: SortOrder
    pengarah?: SortOrder
    produksi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isTrending?: SortOrder
    isRecommended?: SortOrder
    viewCount?: SortOrder
  }

  export type DramaMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    tarikhTayangan?: SortOrder
    waktuSiaran?: SortOrder
    rangkaian?: SortOrder
    pengarah?: SortOrder
    produksi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isTrending?: SortOrder
    isRecommended?: SortOrder
    viewCount?: SortOrder
  }

  export type DramaSumOrderByAggregateInput = {
    viewCount?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DramaScalarRelationFilter = {
    is?: DramaWhereInput
    isNot?: DramaWhereInput
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    videoSrc?: SortOrder
    publishedAt?: SortOrder
    dramaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    episodeNum?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    episodeNum?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    videoSrc?: SortOrder
    publishedAt?: SortOrder
    dramaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    episodeNum?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    videoSrc?: SortOrder
    publishedAt?: SortOrder
    dramaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    episodeNum?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    episodeNum?: SortOrder
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

  export type DramaViewCountOrderByAggregateInput = {
    id?: SortOrder
    dramaId?: SortOrder
    createdAt?: SortOrder
  }

  export type DramaViewMaxOrderByAggregateInput = {
    id?: SortOrder
    dramaId?: SortOrder
    createdAt?: SortOrder
  }

  export type DramaViewMinOrderByAggregateInput = {
    id?: SortOrder
    dramaId?: SortOrder
    createdAt?: SortOrder
  }

  export type EpisodeCreateNestedManyWithoutDramaInput = {
    create?: XOR<EpisodeCreateWithoutDramaInput, EpisodeUncheckedCreateWithoutDramaInput> | EpisodeCreateWithoutDramaInput[] | EpisodeUncheckedCreateWithoutDramaInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutDramaInput | EpisodeCreateOrConnectWithoutDramaInput[]
    createMany?: EpisodeCreateManyDramaInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type DramaViewCreateNestedManyWithoutDramaInput = {
    create?: XOR<DramaViewCreateWithoutDramaInput, DramaViewUncheckedCreateWithoutDramaInput> | DramaViewCreateWithoutDramaInput[] | DramaViewUncheckedCreateWithoutDramaInput[]
    connectOrCreate?: DramaViewCreateOrConnectWithoutDramaInput | DramaViewCreateOrConnectWithoutDramaInput[]
    createMany?: DramaViewCreateManyDramaInputEnvelope
    connect?: DramaViewWhereUniqueInput | DramaViewWhereUniqueInput[]
  }

  export type EpisodeUncheckedCreateNestedManyWithoutDramaInput = {
    create?: XOR<EpisodeCreateWithoutDramaInput, EpisodeUncheckedCreateWithoutDramaInput> | EpisodeCreateWithoutDramaInput[] | EpisodeUncheckedCreateWithoutDramaInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutDramaInput | EpisodeCreateOrConnectWithoutDramaInput[]
    createMany?: EpisodeCreateManyDramaInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type DramaViewUncheckedCreateNestedManyWithoutDramaInput = {
    create?: XOR<DramaViewCreateWithoutDramaInput, DramaViewUncheckedCreateWithoutDramaInput> | DramaViewCreateWithoutDramaInput[] | DramaViewUncheckedCreateWithoutDramaInput[]
    connectOrCreate?: DramaViewCreateOrConnectWithoutDramaInput | DramaViewCreateOrConnectWithoutDramaInput[]
    createMany?: DramaViewCreateManyDramaInputEnvelope
    connect?: DramaViewWhereUniqueInput | DramaViewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EpisodeUpdateManyWithoutDramaNestedInput = {
    create?: XOR<EpisodeCreateWithoutDramaInput, EpisodeUncheckedCreateWithoutDramaInput> | EpisodeCreateWithoutDramaInput[] | EpisodeUncheckedCreateWithoutDramaInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutDramaInput | EpisodeCreateOrConnectWithoutDramaInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutDramaInput | EpisodeUpsertWithWhereUniqueWithoutDramaInput[]
    createMany?: EpisodeCreateManyDramaInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutDramaInput | EpisodeUpdateWithWhereUniqueWithoutDramaInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutDramaInput | EpisodeUpdateManyWithWhereWithoutDramaInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type DramaViewUpdateManyWithoutDramaNestedInput = {
    create?: XOR<DramaViewCreateWithoutDramaInput, DramaViewUncheckedCreateWithoutDramaInput> | DramaViewCreateWithoutDramaInput[] | DramaViewUncheckedCreateWithoutDramaInput[]
    connectOrCreate?: DramaViewCreateOrConnectWithoutDramaInput | DramaViewCreateOrConnectWithoutDramaInput[]
    upsert?: DramaViewUpsertWithWhereUniqueWithoutDramaInput | DramaViewUpsertWithWhereUniqueWithoutDramaInput[]
    createMany?: DramaViewCreateManyDramaInputEnvelope
    set?: DramaViewWhereUniqueInput | DramaViewWhereUniqueInput[]
    disconnect?: DramaViewWhereUniqueInput | DramaViewWhereUniqueInput[]
    delete?: DramaViewWhereUniqueInput | DramaViewWhereUniqueInput[]
    connect?: DramaViewWhereUniqueInput | DramaViewWhereUniqueInput[]
    update?: DramaViewUpdateWithWhereUniqueWithoutDramaInput | DramaViewUpdateWithWhereUniqueWithoutDramaInput[]
    updateMany?: DramaViewUpdateManyWithWhereWithoutDramaInput | DramaViewUpdateManyWithWhereWithoutDramaInput[]
    deleteMany?: DramaViewScalarWhereInput | DramaViewScalarWhereInput[]
  }

  export type EpisodeUncheckedUpdateManyWithoutDramaNestedInput = {
    create?: XOR<EpisodeCreateWithoutDramaInput, EpisodeUncheckedCreateWithoutDramaInput> | EpisodeCreateWithoutDramaInput[] | EpisodeUncheckedCreateWithoutDramaInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutDramaInput | EpisodeCreateOrConnectWithoutDramaInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutDramaInput | EpisodeUpsertWithWhereUniqueWithoutDramaInput[]
    createMany?: EpisodeCreateManyDramaInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutDramaInput | EpisodeUpdateWithWhereUniqueWithoutDramaInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutDramaInput | EpisodeUpdateManyWithWhereWithoutDramaInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type DramaViewUncheckedUpdateManyWithoutDramaNestedInput = {
    create?: XOR<DramaViewCreateWithoutDramaInput, DramaViewUncheckedCreateWithoutDramaInput> | DramaViewCreateWithoutDramaInput[] | DramaViewUncheckedCreateWithoutDramaInput[]
    connectOrCreate?: DramaViewCreateOrConnectWithoutDramaInput | DramaViewCreateOrConnectWithoutDramaInput[]
    upsert?: DramaViewUpsertWithWhereUniqueWithoutDramaInput | DramaViewUpsertWithWhereUniqueWithoutDramaInput[]
    createMany?: DramaViewCreateManyDramaInputEnvelope
    set?: DramaViewWhereUniqueInput | DramaViewWhereUniqueInput[]
    disconnect?: DramaViewWhereUniqueInput | DramaViewWhereUniqueInput[]
    delete?: DramaViewWhereUniqueInput | DramaViewWhereUniqueInput[]
    connect?: DramaViewWhereUniqueInput | DramaViewWhereUniqueInput[]
    update?: DramaViewUpdateWithWhereUniqueWithoutDramaInput | DramaViewUpdateWithWhereUniqueWithoutDramaInput[]
    updateMany?: DramaViewUpdateManyWithWhereWithoutDramaInput | DramaViewUpdateManyWithWhereWithoutDramaInput[]
    deleteMany?: DramaViewScalarWhereInput | DramaViewScalarWhereInput[]
  }

  export type DramaCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<DramaCreateWithoutEpisodesInput, DramaUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: DramaCreateOrConnectWithoutEpisodesInput
    connect?: DramaWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DramaUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<DramaCreateWithoutEpisodesInput, DramaUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: DramaCreateOrConnectWithoutEpisodesInput
    upsert?: DramaUpsertWithoutEpisodesInput
    connect?: DramaWhereUniqueInput
    update?: XOR<XOR<DramaUpdateToOneWithWhereWithoutEpisodesInput, DramaUpdateWithoutEpisodesInput>, DramaUncheckedUpdateWithoutEpisodesInput>
  }

  export type DramaCreateNestedOneWithoutDramaViewsInput = {
    create?: XOR<DramaCreateWithoutDramaViewsInput, DramaUncheckedCreateWithoutDramaViewsInput>
    connectOrCreate?: DramaCreateOrConnectWithoutDramaViewsInput
    connect?: DramaWhereUniqueInput
  }

  export type DramaUpdateOneRequiredWithoutDramaViewsNestedInput = {
    create?: XOR<DramaCreateWithoutDramaViewsInput, DramaUncheckedCreateWithoutDramaViewsInput>
    connectOrCreate?: DramaCreateOrConnectWithoutDramaViewsInput
    upsert?: DramaUpsertWithoutDramaViewsInput
    connect?: DramaWhereUniqueInput
    update?: XOR<XOR<DramaUpdateToOneWithWhereWithoutDramaViewsInput, DramaUpdateWithoutDramaViewsInput>, DramaUncheckedUpdateWithoutDramaViewsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EpisodeCreateWithoutDramaInput = {
    id?: string
    slug: string
    title: string
    videoSrc: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodeNum?: number | null
  }

  export type EpisodeUncheckedCreateWithoutDramaInput = {
    id?: string
    slug: string
    title: string
    videoSrc: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodeNum?: number | null
  }

  export type EpisodeCreateOrConnectWithoutDramaInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutDramaInput, EpisodeUncheckedCreateWithoutDramaInput>
  }

  export type EpisodeCreateManyDramaInputEnvelope = {
    data: EpisodeCreateManyDramaInput | EpisodeCreateManyDramaInput[]
    skipDuplicates?: boolean
  }

  export type DramaViewCreateWithoutDramaInput = {
    id?: string
    createdAt?: Date | string
  }

  export type DramaViewUncheckedCreateWithoutDramaInput = {
    id?: string
    createdAt?: Date | string
  }

  export type DramaViewCreateOrConnectWithoutDramaInput = {
    where: DramaViewWhereUniqueInput
    create: XOR<DramaViewCreateWithoutDramaInput, DramaViewUncheckedCreateWithoutDramaInput>
  }

  export type DramaViewCreateManyDramaInputEnvelope = {
    data: DramaViewCreateManyDramaInput | DramaViewCreateManyDramaInput[]
    skipDuplicates?: boolean
  }

  export type EpisodeUpsertWithWhereUniqueWithoutDramaInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutDramaInput, EpisodeUncheckedUpdateWithoutDramaInput>
    create: XOR<EpisodeCreateWithoutDramaInput, EpisodeUncheckedCreateWithoutDramaInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutDramaInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutDramaInput, EpisodeUncheckedUpdateWithoutDramaInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutDramaInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutDramaInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: StringFilter<"Episode"> | string
    slug?: StringFilter<"Episode"> | string
    title?: StringFilter<"Episode"> | string
    videoSrc?: StringFilter<"Episode"> | string
    publishedAt?: DateTimeNullableFilter<"Episode"> | Date | string | null
    dramaId?: StringFilter<"Episode"> | string
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    episodeNum?: IntNullableFilter<"Episode"> | number | null
  }

  export type DramaViewUpsertWithWhereUniqueWithoutDramaInput = {
    where: DramaViewWhereUniqueInput
    update: XOR<DramaViewUpdateWithoutDramaInput, DramaViewUncheckedUpdateWithoutDramaInput>
    create: XOR<DramaViewCreateWithoutDramaInput, DramaViewUncheckedCreateWithoutDramaInput>
  }

  export type DramaViewUpdateWithWhereUniqueWithoutDramaInput = {
    where: DramaViewWhereUniqueInput
    data: XOR<DramaViewUpdateWithoutDramaInput, DramaViewUncheckedUpdateWithoutDramaInput>
  }

  export type DramaViewUpdateManyWithWhereWithoutDramaInput = {
    where: DramaViewScalarWhereInput
    data: XOR<DramaViewUpdateManyMutationInput, DramaViewUncheckedUpdateManyWithoutDramaInput>
  }

  export type DramaViewScalarWhereInput = {
    AND?: DramaViewScalarWhereInput | DramaViewScalarWhereInput[]
    OR?: DramaViewScalarWhereInput[]
    NOT?: DramaViewScalarWhereInput | DramaViewScalarWhereInput[]
    id?: StringFilter<"DramaView"> | string
    dramaId?: StringFilter<"DramaView"> | string
    createdAt?: DateTimeFilter<"DramaView"> | Date | string
  }

  export type DramaCreateWithoutEpisodesInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    thumbnail: string
    tarikhTayangan?: string | null
    waktuSiaran?: string | null
    rangkaian?: string | null
    pengarah?: string | null
    produksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isTrending?: boolean
    isRecommended?: boolean
    viewCount?: number
    dramaViews?: DramaViewCreateNestedManyWithoutDramaInput
  }

  export type DramaUncheckedCreateWithoutEpisodesInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    thumbnail: string
    tarikhTayangan?: string | null
    waktuSiaran?: string | null
    rangkaian?: string | null
    pengarah?: string | null
    produksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isTrending?: boolean
    isRecommended?: boolean
    viewCount?: number
    dramaViews?: DramaViewUncheckedCreateNestedManyWithoutDramaInput
  }

  export type DramaCreateOrConnectWithoutEpisodesInput = {
    where: DramaWhereUniqueInput
    create: XOR<DramaCreateWithoutEpisodesInput, DramaUncheckedCreateWithoutEpisodesInput>
  }

  export type DramaUpsertWithoutEpisodesInput = {
    update: XOR<DramaUpdateWithoutEpisodesInput, DramaUncheckedUpdateWithoutEpisodesInput>
    create: XOR<DramaCreateWithoutEpisodesInput, DramaUncheckedCreateWithoutEpisodesInput>
    where?: DramaWhereInput
  }

  export type DramaUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: DramaWhereInput
    data: XOR<DramaUpdateWithoutEpisodesInput, DramaUncheckedUpdateWithoutEpisodesInput>
  }

  export type DramaUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    tarikhTayangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuSiaran?: NullableStringFieldUpdateOperationsInput | string | null
    rangkaian?: NullableStringFieldUpdateOperationsInput | string | null
    pengarah?: NullableStringFieldUpdateOperationsInput | string | null
    produksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    isRecommended?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    dramaViews?: DramaViewUpdateManyWithoutDramaNestedInput
  }

  export type DramaUncheckedUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    tarikhTayangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuSiaran?: NullableStringFieldUpdateOperationsInput | string | null
    rangkaian?: NullableStringFieldUpdateOperationsInput | string | null
    pengarah?: NullableStringFieldUpdateOperationsInput | string | null
    produksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    isRecommended?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    dramaViews?: DramaViewUncheckedUpdateManyWithoutDramaNestedInput
  }

  export type DramaCreateWithoutDramaViewsInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    thumbnail: string
    tarikhTayangan?: string | null
    waktuSiaran?: string | null
    rangkaian?: string | null
    pengarah?: string | null
    produksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isTrending?: boolean
    isRecommended?: boolean
    viewCount?: number
    episodes?: EpisodeCreateNestedManyWithoutDramaInput
  }

  export type DramaUncheckedCreateWithoutDramaViewsInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    thumbnail: string
    tarikhTayangan?: string | null
    waktuSiaran?: string | null
    rangkaian?: string | null
    pengarah?: string | null
    produksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isTrending?: boolean
    isRecommended?: boolean
    viewCount?: number
    episodes?: EpisodeUncheckedCreateNestedManyWithoutDramaInput
  }

  export type DramaCreateOrConnectWithoutDramaViewsInput = {
    where: DramaWhereUniqueInput
    create: XOR<DramaCreateWithoutDramaViewsInput, DramaUncheckedCreateWithoutDramaViewsInput>
  }

  export type DramaUpsertWithoutDramaViewsInput = {
    update: XOR<DramaUpdateWithoutDramaViewsInput, DramaUncheckedUpdateWithoutDramaViewsInput>
    create: XOR<DramaCreateWithoutDramaViewsInput, DramaUncheckedCreateWithoutDramaViewsInput>
    where?: DramaWhereInput
  }

  export type DramaUpdateToOneWithWhereWithoutDramaViewsInput = {
    where?: DramaWhereInput
    data: XOR<DramaUpdateWithoutDramaViewsInput, DramaUncheckedUpdateWithoutDramaViewsInput>
  }

  export type DramaUpdateWithoutDramaViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    tarikhTayangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuSiaran?: NullableStringFieldUpdateOperationsInput | string | null
    rangkaian?: NullableStringFieldUpdateOperationsInput | string | null
    pengarah?: NullableStringFieldUpdateOperationsInput | string | null
    produksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    isRecommended?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    episodes?: EpisodeUpdateManyWithoutDramaNestedInput
  }

  export type DramaUncheckedUpdateWithoutDramaViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: StringFieldUpdateOperationsInput | string
    tarikhTayangan?: NullableStringFieldUpdateOperationsInput | string | null
    waktuSiaran?: NullableStringFieldUpdateOperationsInput | string | null
    rangkaian?: NullableStringFieldUpdateOperationsInput | string | null
    pengarah?: NullableStringFieldUpdateOperationsInput | string | null
    produksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrending?: BoolFieldUpdateOperationsInput | boolean
    isRecommended?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    episodes?: EpisodeUncheckedUpdateManyWithoutDramaNestedInput
  }

  export type EpisodeCreateManyDramaInput = {
    id?: string
    slug: string
    title: string
    videoSrc: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodeNum?: number | null
  }

  export type DramaViewCreateManyDramaInput = {
    id?: string
    createdAt?: Date | string
  }

  export type EpisodeUpdateWithoutDramaInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoSrc?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeNum?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EpisodeUncheckedUpdateWithoutDramaInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoSrc?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeNum?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EpisodeUncheckedUpdateManyWithoutDramaInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoSrc?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodeNum?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DramaViewUpdateWithoutDramaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DramaViewUncheckedUpdateWithoutDramaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DramaViewUncheckedUpdateManyWithoutDramaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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