// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  memory: (where?: MemoryWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  memory: (where: MemoryWhereUniqueInput) => MemoryNullablePromise;
  memories: (args?: {
    where?: MemoryWhereInput;
    orderBy?: MemoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Memory>;
  memoriesConnection: (args?: {
    where?: MemoryWhereInput;
    orderBy?: MemoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => MemoryConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMemory: (data: MemoryCreateInput) => MemoryPromise;
  updateMemory: (args: {
    data: MemoryUpdateInput;
    where: MemoryWhereUniqueInput;
  }) => MemoryPromise;
  updateManyMemories: (args: {
    data: MemoryUpdateManyMutationInput;
    where?: MemoryWhereInput;
  }) => BatchPayloadPromise;
  upsertMemory: (args: {
    where: MemoryWhereUniqueInput;
    create: MemoryCreateInput;
    update: MemoryUpdateInput;
  }) => MemoryPromise;
  deleteMemory: (where: MemoryWhereUniqueInput) => MemoryPromise;
  deleteManyMemories: (where?: MemoryWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  memory: (
    where?: MemorySubscriptionWhereInput
  ) => MemorySubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MemoryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "quote_ASC"
  | "quote_DESC"
  | "imageUrl_ASC"
  | "imageUrl_DESC"
  | "authorName_ASC"
  | "authorName_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type MemoryWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface MemoryWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  quote?: Maybe<String>;
  quote_not?: Maybe<String>;
  quote_in?: Maybe<String[] | String>;
  quote_not_in?: Maybe<String[] | String>;
  quote_lt?: Maybe<String>;
  quote_lte?: Maybe<String>;
  quote_gt?: Maybe<String>;
  quote_gte?: Maybe<String>;
  quote_contains?: Maybe<String>;
  quote_not_contains?: Maybe<String>;
  quote_starts_with?: Maybe<String>;
  quote_not_starts_with?: Maybe<String>;
  quote_ends_with?: Maybe<String>;
  quote_not_ends_with?: Maybe<String>;
  imageUrl?: Maybe<String>;
  imageUrl_not?: Maybe<String>;
  imageUrl_in?: Maybe<String[] | String>;
  imageUrl_not_in?: Maybe<String[] | String>;
  imageUrl_lt?: Maybe<String>;
  imageUrl_lte?: Maybe<String>;
  imageUrl_gt?: Maybe<String>;
  imageUrl_gte?: Maybe<String>;
  imageUrl_contains?: Maybe<String>;
  imageUrl_not_contains?: Maybe<String>;
  imageUrl_starts_with?: Maybe<String>;
  imageUrl_not_starts_with?: Maybe<String>;
  imageUrl_ends_with?: Maybe<String>;
  imageUrl_not_ends_with?: Maybe<String>;
  authorName?: Maybe<String>;
  authorName_not?: Maybe<String>;
  authorName_in?: Maybe<String[] | String>;
  authorName_not_in?: Maybe<String[] | String>;
  authorName_lt?: Maybe<String>;
  authorName_lte?: Maybe<String>;
  authorName_gt?: Maybe<String>;
  authorName_gte?: Maybe<String>;
  authorName_contains?: Maybe<String>;
  authorName_not_contains?: Maybe<String>;
  authorName_starts_with?: Maybe<String>;
  authorName_not_starts_with?: Maybe<String>;
  authorName_ends_with?: Maybe<String>;
  authorName_not_ends_with?: Maybe<String>;
  AND?: Maybe<MemoryWhereInput[] | MemoryWhereInput>;
  OR?: Maybe<MemoryWhereInput[] | MemoryWhereInput>;
  NOT?: Maybe<MemoryWhereInput[] | MemoryWhereInput>;
}

export interface MemoryCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  quote: String;
  imageUrl: String;
  authorName: String;
}

export interface MemoryUpdateInput {
  title?: Maybe<String>;
  quote?: Maybe<String>;
  imageUrl?: Maybe<String>;
  authorName?: Maybe<String>;
}

export interface MemoryUpdateManyMutationInput {
  title?: Maybe<String>;
  quote?: Maybe<String>;
  imageUrl?: Maybe<String>;
  authorName?: Maybe<String>;
}

export interface MemorySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<MemoryWhereInput>;
  AND?: Maybe<MemorySubscriptionWhereInput[] | MemorySubscriptionWhereInput>;
  OR?: Maybe<MemorySubscriptionWhereInput[] | MemorySubscriptionWhereInput>;
  NOT?: Maybe<MemorySubscriptionWhereInput[] | MemorySubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Memory {
  id: ID_Output;
  title: String;
  quote: String;
  imageUrl: String;
  authorName: String;
}

export interface MemoryPromise extends Promise<Memory>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  quote: () => Promise<String>;
  imageUrl: () => Promise<String>;
  authorName: () => Promise<String>;
}

export interface MemorySubscription
  extends Promise<AsyncIterator<Memory>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  quote: () => Promise<AsyncIterator<String>>;
  imageUrl: () => Promise<AsyncIterator<String>>;
  authorName: () => Promise<AsyncIterator<String>>;
}

export interface MemoryNullablePromise
  extends Promise<Memory | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  quote: () => Promise<String>;
  imageUrl: () => Promise<String>;
  authorName: () => Promise<String>;
}

export interface MemoryConnection {
  pageInfo: PageInfo;
  edges: MemoryEdge[];
}

export interface MemoryConnectionPromise
  extends Promise<MemoryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MemoryEdge>>() => T;
  aggregate: <T = AggregateMemoryPromise>() => T;
}

export interface MemoryConnectionSubscription
  extends Promise<AsyncIterator<MemoryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MemoryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMemorySubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface MemoryEdge {
  node: Memory;
  cursor: String;
}

export interface MemoryEdgePromise extends Promise<MemoryEdge>, Fragmentable {
  node: <T = MemoryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface MemoryEdgeSubscription
  extends Promise<AsyncIterator<MemoryEdge>>,
    Fragmentable {
  node: <T = MemorySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateMemory {
  count: Int;
}

export interface AggregateMemoryPromise
  extends Promise<AggregateMemory>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMemorySubscription
  extends Promise<AsyncIterator<AggregateMemory>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface MemorySubscriptionPayload {
  mutation: MutationType;
  node: Memory;
  updatedFields: String[];
  previousValues: MemoryPreviousValues;
}

export interface MemorySubscriptionPayloadPromise
  extends Promise<MemorySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MemoryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MemoryPreviousValuesPromise>() => T;
}

export interface MemorySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MemorySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MemorySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MemoryPreviousValuesSubscription>() => T;
}

export interface MemoryPreviousValues {
  id: ID_Output;
  title: String;
  quote: String;
  imageUrl: String;
  authorName: String;
}

export interface MemoryPreviousValuesPromise
  extends Promise<MemoryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  quote: () => Promise<String>;
  imageUrl: () => Promise<String>;
  authorName: () => Promise<String>;
}

export interface MemoryPreviousValuesSubscription
  extends Promise<AsyncIterator<MemoryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  quote: () => Promise<AsyncIterator<String>>;
  imageUrl: () => Promise<AsyncIterator<String>>;
  authorName: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Memory",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
