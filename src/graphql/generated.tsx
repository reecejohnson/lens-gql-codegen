import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockchainData: any;
  BroadcastId: any;
  ChainId: any;
  CollectModuleData: any;
  ContentEncryptionKey: any;
  ContractAddress: any;
  CreateHandle: any;
  Cursor: any;
  DateTime: any;
  EncryptedValueScalar: any;
  Ens: any;
  EthereumAddress: any;
  FollowModuleData: any;
  Handle: any;
  HandleClaimIdScalar: any;
  IfpsCid: any;
  InternalPublicationId: any;
  Jwt: any;
  LimitScalar: any;
  Locale: any;
  Markdown: any;
  MimeType: any;
  NftOwnershipId: any;
  Nonce: any;
  NotificationId: any;
  ProfileId: any;
  ProfileInterest: any;
  ProxyActionId: any;
  PublicationId: any;
  PublicationTag: any;
  PublicationUrl: any;
  ReactionId: any;
  ReferenceModuleData: any;
  Search: any;
  Signature: any;
  Sources: any;
  TimestampScalar: any;
  TokenId: any;
  TxHash: any;
  TxId: any;
  UnixTimestamp: any;
  Url: any;
  Void: any;
};

/** The access conditions for the publication */
export type AccessConditionInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>;
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>;
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>;
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>;
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>;
  /** OR condition */
  or?: InputMaybe<OrConditionInput>;
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>;
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>;
};

/** The access conditions for the publication */
export type AccessConditionOutput = {
  __typename?: 'AccessConditionOutput';
  /** AND condition */
  and?: Maybe<AndConditionOutput>;
  /** Profile follow condition */
  collect?: Maybe<CollectConditionOutput>;
  /** EOA ownership condition */
  eoa?: Maybe<EoaOwnershipOutput>;
  /** Profile follow condition */
  follow?: Maybe<FollowConditionOutput>;
  /** NFT ownership condition */
  nft?: Maybe<NftOwnershipOutput>;
  /** OR condition */
  or?: Maybe<OrConditionOutput>;
  /** Profile ownership condition */
  profile?: Maybe<ProfileOwnershipOutput>;
  /** ERC20 token ownership condition */
  token?: Maybe<Erc20OwnershipOutput>;
};

export type AchRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
  freeTextHandle?: InputMaybe<Scalars['Boolean']>;
  handle?: InputMaybe<Scalars['CreateHandle']>;
  overrideAlreadyClaimed: Scalars['Boolean'];
  overrideTradeMark: Scalars['Boolean'];
  secret: Scalars['String'];
};

/** The request object to add interests to a profile */
export type AddProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars['ProfileInterest']>;
  /** The profileId to add interests to */
  profileId: Scalars['ProfileId'];
};

export type AllPublicationsTagsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  sort: TagSortCriteria;
  /** The App Id */
  source?: InputMaybe<Scalars['Sources']>;
};

export type AndConditionInput = {
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>;
};

export type AndConditionOutput = {
  __typename?: 'AndConditionOutput';
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>;
};

export type ApprovedAllowanceAmount = {
  __typename?: 'ApprovedAllowanceAmount';
  allowance: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  currency: Scalars['ContractAddress'];
  module: Scalars['String'];
};

export type ApprovedModuleAllowanceAmountRequest = {
  collectModules?: InputMaybe<Array<CollectModules>>;
  /** The contract addresses for the module approved currencies you want to find information on about the user */
  currencies: Array<Scalars['ContractAddress']>;
  followModules?: InputMaybe<Array<FollowModules>>;
  referenceModules?: InputMaybe<Array<ReferenceModules>>;
  unknownCollectModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
  unknownFollowModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
  unknownReferenceModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
};

/** The Profile */
export type Attribute = {
  __typename?: 'Attribute';
  /** The display type */
  displayType?: Maybe<Scalars['String']>;
  /** identifier of this attribute, we will update by this id  */
  key: Scalars['String'];
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars['String']>;
  /** Value attribute */
  value: Scalars['String'];
};

/** The auth challenge result */
export type AuthChallengeResult = {
  __typename?: 'AuthChallengeResult';
  /** The text to sign */
  text: Scalars['String'];
};

/** The authentication result */
export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  /** The access token */
  accessToken: Scalars['Jwt'];
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type BroadcastRequest = {
  id: Scalars['BroadcastId'];
  signature: Scalars['Signature'];
};

export type BurnProfileRequest = {
  profileId: Scalars['ProfileId'];
};

export type CanCommentResponse = {
  __typename?: 'CanCommentResponse';
  result: Scalars['Boolean'];
};

export type CanDecryptResponse = {
  __typename?: 'CanDecryptResponse';
  reasons?: Maybe<DecryptFailReason>;
  result: Scalars['Boolean'];
};

export type CanMirrorResponse = {
  __typename?: 'CanMirrorResponse';
  result: Scalars['Boolean'];
};

/** The challenge request */
export type ChallengeRequest = {
  /** The ethereum address you want to login with */
  address: Scalars['EthereumAddress'];
};

export type ClaimHandleRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  freeTextHandle?: InputMaybe<Scalars['CreateHandle']>;
  id?: InputMaybe<Scalars['HandleClaimIdScalar']>;
};

/** The claim status */
export enum ClaimStatus {
  AlreadyClaimed = 'ALREADY_CLAIMED',
  ClaimFailed = 'CLAIM_FAILED',
  NotClaimed = 'NOT_CLAIMED'
}

export type ClaimableHandles = {
  __typename?: 'ClaimableHandles';
  canClaimFreeTextHandle: Scalars['Boolean'];
  reservedHandles: Array<ReservedClaimableHandle>;
};

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionInput = {
  /** The publication id that has to be collected to unlock content */
  publicationId?: InputMaybe<Scalars['ProfileId']>;
  /** True if the content will be unlocked for this specific publication */
  thisPublication?: InputMaybe<Scalars['Boolean']>;
};

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionOutput = {
  __typename?: 'CollectConditionOutput';
  /** The publication id that has to be collected to unlock content */
  publicationId?: Maybe<Scalars['ProfileId']>;
  /** True if the content will be unlocked for this specific publication */
  thisPublication?: Maybe<Scalars['Boolean']>;
};

export type CollectModule = FeeCollectModuleSettings | FreeCollectModuleSettings | LimitedFeeCollectModuleSettings | LimitedTimedFeeCollectModuleSettings | RevertCollectModuleSettings | TimedFeeCollectModuleSettings | UnknownCollectModuleSettings;

export type CollectModuleParams = {
  /** The collect fee collect module */
  feeCollectModule?: InputMaybe<FeeCollectModuleParams>;
  /** The collect empty collect module */
  freeCollectModule?: InputMaybe<FreeCollectModuleParams>;
  /** The collect limited fee collect module */
  limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>;
  /** The collect limited timed fee collect module */
  limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>;
  /** The collect revert collect module */
  revertCollectModule?: InputMaybe<Scalars['Boolean']>;
  /** The collect timed fee collect module */
  timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>;
  /** A unknown collect module */
  unknownCollectModule?: InputMaybe<UnknownCollectModuleParams>;
};

/** The collect module types */
export enum CollectModules {
  FeeCollectModule = 'FeeCollectModule',
  FreeCollectModule = 'FreeCollectModule',
  LimitedFeeCollectModule = 'LimitedFeeCollectModule',
  LimitedTimedFeeCollectModule = 'LimitedTimedFeeCollectModule',
  RevertCollectModule = 'RevertCollectModule',
  TimedFeeCollectModule = 'TimedFeeCollectModule',
  UnknownCollectModule = 'UnknownCollectModule'
}

export type CollectProxyAction = {
  freeCollect?: InputMaybe<FreeCollectProxyAction>;
};

export type CollectedEvent = {
  __typename?: 'CollectedEvent';
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

/** The social comment */
export type Comment = {
  __typename?: 'Comment';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** Who collected it, this is used for timeline results and like this for better caching for the client */
  collectedBy?: Maybe<Wallet>;
  /** Which comment this points to if its null the pointer too deep so do another query to find it out */
  commentOn?: Maybe<Publication>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  /** This will bring back the first comment of a comment and only be defined if using `publication` query and `commentOf` */
  firstComment?: Maybe<Comment>;
  hasCollectedByMe: Scalars['Boolean'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean'];
  /** The top level post/mirror this comment lives on */
  mainPost: MainPostReference;
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirrors: Array<Scalars['InternalPublicationId']>;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social comment */
export type CommentCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social comment */
export type CommentCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social comment */
export type CommentCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social comment */
export type CommentHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


/** The social comment */
export type CommentMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']>;
};


/** The social comment */
export type CommentReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

/** The gated publication access criteria contract types */
export enum ContractType {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

/** The create burn eip 712 typed data */
export type CreateBurnEip712TypedData = {
  __typename?: 'CreateBurnEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateBurnEip712TypedDataTypes;
  /** The values */
  value: CreateBurnEip712TypedDataValue;
};

/** The create burn eip 712 typed data types */
export type CreateBurnEip712TypedDataTypes = {
  __typename?: 'CreateBurnEIP712TypedDataTypes';
  BurnWithSig: Array<Eip712TypedDataField>;
};

/** The create burn eip 712 typed data value */
export type CreateBurnEip712TypedDataValue = {
  __typename?: 'CreateBurnEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  tokenId: Scalars['String'];
};

/** The broadcast item */
export type CreateBurnProfileBroadcastItemResult = {
  __typename?: 'CreateBurnProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

/** The broadcast item */
export type CreateCollectBroadcastItemResult = {
  __typename?: 'CreateCollectBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateCollectEip712TypedData;
};

/** The collect eip 712 typed data */
export type CreateCollectEip712TypedData = {
  __typename?: 'CreateCollectEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCollectEip712TypedDataTypes;
  /** The values */
  value: CreateCollectEip712TypedDataValue;
};

/** The collect eip 712 typed data types */
export type CreateCollectEip712TypedDataTypes = {
  __typename?: 'CreateCollectEIP712TypedDataTypes';
  CollectWithSig: Array<Eip712TypedDataField>;
};

/** The collect eip 712 typed data value */
export type CreateCollectEip712TypedDataValue = {
  __typename?: 'CreateCollectEIP712TypedDataValue';
  data: Scalars['BlockchainData'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  pubId: Scalars['PublicationId'];
};

export type CreateCollectRequest = {
  publicationId: Scalars['InternalPublicationId'];
  /** The encoded data to collect with if using an unknown module */
  unknownModuleData?: InputMaybe<Scalars['BlockchainData']>;
};

/** The broadcast item */
export type CreateCommentBroadcastItemResult = {
  __typename?: 'CreateCommentBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateCommentEip712TypedData;
};

/** The create comment eip 712 typed data */
export type CreateCommentEip712TypedData = {
  __typename?: 'CreateCommentEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCommentEip712TypedDataTypes;
  /** The values */
  value: CreateCommentEip712TypedDataValue;
};

/** The create comment eip 712 typed data types */
export type CreateCommentEip712TypedDataTypes = {
  __typename?: 'CreateCommentEIP712TypedDataTypes';
  CommentWithSig: Array<Eip712TypedDataField>;
};

/** The create comment eip 712 typed data value */
export type CreateCommentEip712TypedDataValue = {
  __typename?: 'CreateCommentEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress'];
  collectModuleInitData: Scalars['CollectModuleData'];
  contentURI: Scalars['PublicationUrl'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  profileIdPointed: Scalars['ProfileId'];
  pubIdPointed: Scalars['PublicationId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleData: Scalars['ReferenceModuleData'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

/** The broadcast item */
export type CreateFollowBroadcastItemResult = {
  __typename?: 'CreateFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateFollowEip712TypedData;
};

/** The create follow eip 712 typed data */
export type CreateFollowEip712TypedData = {
  __typename?: 'CreateFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateFollowEip712TypedDataTypes;
  /** The values */
  value: CreateFollowEip712TypedDataValue;
};

/** The create follow eip 712 typed data types */
export type CreateFollowEip712TypedDataTypes = {
  __typename?: 'CreateFollowEIP712TypedDataTypes';
  FollowWithSig: Array<Eip712TypedDataField>;
};

/** The create follow eip 712 typed data value */
export type CreateFollowEip712TypedDataValue = {
  __typename?: 'CreateFollowEIP712TypedDataValue';
  datas: Array<Scalars['BlockchainData']>;
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileIds: Array<Scalars['ProfileId']>;
};

/** The broadcast item */
export type CreateMirrorBroadcastItemResult = {
  __typename?: 'CreateMirrorBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMirrorEip712TypedData;
};

/** The mirror eip 712 typed data */
export type CreateMirrorEip712TypedData = {
  __typename?: 'CreateMirrorEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMirrorEip712TypedDataTypes;
  /** The values */
  value: CreateMirrorEip712TypedDataValue;
};

/** The mirror eip 712 typed data types */
export type CreateMirrorEip712TypedDataTypes = {
  __typename?: 'CreateMirrorEIP712TypedDataTypes';
  MirrorWithSig: Array<Eip712TypedDataField>;
};

/** The mirror eip 712 typed data value */
export type CreateMirrorEip712TypedDataValue = {
  __typename?: 'CreateMirrorEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  profileIdPointed: Scalars['ProfileId'];
  pubIdPointed: Scalars['PublicationId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleData: Scalars['ReferenceModuleData'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

export type CreateMirrorRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** Publication id of what you want to mirror on remember if this is a comment it will be that as the id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reference module info */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

/** The broadcast item */
export type CreatePostBroadcastItemResult = {
  __typename?: 'CreatePostBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreatePostEip712TypedData;
};

/** The create post eip 712 typed data */
export type CreatePostEip712TypedData = {
  __typename?: 'CreatePostEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreatePostEip712TypedDataTypes;
  /** The values */
  value: CreatePostEip712TypedDataValue;
};

/** The create post eip 712 typed data types */
export type CreatePostEip712TypedDataTypes = {
  __typename?: 'CreatePostEIP712TypedDataTypes';
  PostWithSig: Array<Eip712TypedDataField>;
};

/** The create post eip 712 typed data value */
export type CreatePostEip712TypedDataValue = {
  __typename?: 'CreatePostEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress'];
  collectModuleInitData: Scalars['CollectModuleData'];
  contentURI: Scalars['PublicationUrl'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

export type CreateProfileRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']>;
  handle: Scalars['CreateHandle'];
  /** The profile picture uri */
  profilePictureUri?: InputMaybe<Scalars['Url']>;
};

export type CreatePublicCommentRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url'];
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>;
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** Publication id of what your comments on remember if this is a comment you commented on it will be that as the id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicPostRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url'];
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>;
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicSetProfileMetadataUriRequest = {
  /** The metadata uploaded somewhere passing in the url to reach it */
  metadata: Scalars['Url'];
  /** Profile id */
  profileId: Scalars['ProfileId'];
};

export type CreateSetDefaultProfileRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetDispatcherBroadcastItemResult = {
  __typename?: 'CreateSetDispatcherBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetDispatcherEip712TypedData;
};

/** The set dispatcher eip 712 typed data */
export type CreateSetDispatcherEip712TypedData = {
  __typename?: 'CreateSetDispatcherEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetDispatcherEip712TypedDataTypes;
  /** The values */
  value: CreateSetDispatcherEip712TypedDataValue;
};

/** The set dispatcher eip 712 typed data types */
export type CreateSetDispatcherEip712TypedDataTypes = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataTypes';
  SetDispatcherWithSig: Array<Eip712TypedDataField>;
};

/** The set dispatcher eip 712 typed data value */
export type CreateSetDispatcherEip712TypedDataValue = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  dispatcher: Scalars['EthereumAddress'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: 'CreateSetFollowModuleBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetFollowModuleEip712TypedData;
};

/** The set follow module eip 712 typed data */
export type CreateSetFollowModuleEip712TypedData = {
  __typename?: 'CreateSetFollowModuleEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowModuleEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowModuleEip712TypedDataValue;
};

/** The set follow module eip 712 typed data types */
export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes';
  SetFollowModuleWithSig: Array<Eip712TypedDataField>;
};

/** The set follow module eip 712 typed data value */
export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followModule: Scalars['ContractAddress'];
  followModuleInitData: Scalars['FollowModuleData'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowModuleRequest = {
  /** The follow module info */
  followModule: FollowModuleParams;
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetFollowNftUriBroadcastItemResult = {
  __typename?: 'CreateSetFollowNFTUriBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetFollowNftUriEip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetFollowNftUriEip712TypedData = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowNftUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowNftUriEip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetFollowNftUriEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataTypes';
  SetFollowNFTURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetFollowNftUriEip712TypedDataValue = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followNFTURI: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowNftUriRequest = {
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']>;
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetProfileImageUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileImageUriBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetProfileImageUriEip712TypedData;
};

/** The set profile uri eip 712 typed data */
export type CreateSetProfileImageUriEip712TypedData = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileImageUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileImageUriEip712TypedDataValue;
};

/** The set profile image uri eip 712 typed data types */
export type CreateSetProfileImageUriEip712TypedDataTypes = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataTypes';
  SetProfileImageURIWithSig: Array<Eip712TypedDataField>;
};

/** The set profile uri eip 712 typed data value */
export type CreateSetProfileImageUriEip712TypedDataValue = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  imageURI: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetProfileMetadataUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileMetadataURIBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetProfileMetadataUrieip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetProfileMetadataUrieip712TypedData = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileMetadataUrieip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileMetadataUrieip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetProfileMetadataUrieip712TypedDataTypes = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataTypes';
  SetProfileMetadataURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetProfileMetadataUrieip712TypedDataValue = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  metadata: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateToggleFollowBroadcastItemResult = {
  __typename?: 'CreateToggleFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateToggleFollowEip712TypedData;
};

/** The create toggle follows eip 712 typed data */
export type CreateToggleFollowEip712TypedData = {
  __typename?: 'CreateToggleFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateToggleFollowEip712TypedDataTypes;
  /** The values */
  value: CreateToggleFollowEip712TypedDataValue;
};

/** The create toggle follows eip 712 typed data types */
export type CreateToggleFollowEip712TypedDataTypes = {
  __typename?: 'CreateToggleFollowEIP712TypedDataTypes';
  ToggleFollowWithSig: Array<Eip712TypedDataField>;
};

/** The create toggle follow eip 712 typed data value */
export type CreateToggleFollowEip712TypedDataValue = {
  __typename?: 'CreateToggleFollowEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  enables: Array<Scalars['Boolean']>;
  nonce: Scalars['Nonce'];
  profileIds: Array<Scalars['ProfileId']>;
};

export type CreateToggleFollowRequest = {
  enables: Array<Scalars['Boolean']>;
  profileIds: Array<Scalars['ProfileId']>;
};

/** The broadcast item */
export type CreateUnfollowBroadcastItemResult = {
  __typename?: 'CreateUnfollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

/** The custom filters types */
export enum CustomFiltersTypes {
  Gardeners = 'GARDENERS'
}

/** The reason why a profile cannot decrypt a publication */
export enum DecryptFailReason {
  CollectNotFinalisedOnChain = 'COLLECT_NOT_FINALISED_ON_CHAIN',
  DoesNotFollowProfile = 'DOES_NOT_FOLLOW_PROFILE',
  DoesNotOwnNft = 'DOES_NOT_OWN_NFT',
  DoesNotOwnProfile = 'DOES_NOT_OWN_PROFILE',
  FollowNotFinalisedOnChain = 'FOLLOW_NOT_FINALISED_ON_CHAIN',
  HasNotCollectedPublication = 'HAS_NOT_COLLECTED_PUBLICATION',
  MissingEncryptionParams = 'MISSING_ENCRYPTION_PARAMS',
  ProfileDoesNotExist = 'PROFILE_DOES_NOT_EXIST',
  UnauthorizedAddress = 'UNAUTHORIZED_ADDRESS',
  UnauthorizedBalance = 'UNAUTHORIZED_BALANCE'
}

export type DefaultProfileRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
};

export type DegreesOfSeparationReferenceModuleParams = {
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean'];
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean'];
};

export type DegreesOfSeparationReferenceModuleSettings = {
  __typename?: 'DegreesOfSeparationReferenceModuleSettings';
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean'];
  contractAddress: Scalars['ContractAddress'];
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean'];
  /** The reference modules enum */
  type: ReferenceModules;
};

/** The dispatcher */
export type Dispatcher = {
  __typename?: 'Dispatcher';
  /** The dispatcher address */
  address: Scalars['EthereumAddress'];
  /** If the dispatcher can use the relay */
  canUseRelay: Scalars['Boolean'];
};

export type DoesFollow = {
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress'];
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

export type DoesFollowRequest = {
  /** The follower infos */
  followInfos: Array<DoesFollow>;
};

/** The does follow response */
export type DoesFollowResponse = {
  __typename?: 'DoesFollowResponse';
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress'];
  /** If the user does follow */
  follows: Scalars['Boolean'];
  /** Is finalised on-chain */
  isFinalisedOnChain: Scalars['Boolean'];
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

/** The eip 712 typed data domain */
export type Eip712TypedDataDomain = {
  __typename?: 'EIP712TypedDataDomain';
  /** The chainId */
  chainId: Scalars['ChainId'];
  /** The name of the typed data domain */
  name: Scalars['String'];
  /** The verifying contract */
  verifyingContract: Scalars['ContractAddress'];
  /** The version */
  version: Scalars['String'];
};

/** The eip 712 typed data field */
export type Eip712TypedDataField = {
  __typename?: 'EIP712TypedDataField';
  /** The name of the typed data field */
  name: Scalars['String'];
  /** The type of the typed data field */
  type: Scalars['String'];
};

export type ElectedMirror = {
  __typename?: 'ElectedMirror';
  mirrorId: Scalars['InternalPublicationId'];
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

export type EnabledModule = {
  __typename?: 'EnabledModule';
  contractAddress: Scalars['ContractAddress'];
  inputParams: Array<ModuleInfo>;
  moduleName: Scalars['String'];
  redeemParams: Array<ModuleInfo>;
  returnDataParms: Array<ModuleInfo>;
};

/** The enabled modules */
export type EnabledModules = {
  __typename?: 'EnabledModules';
  collectModules: Array<EnabledModule>;
  followModules: Array<EnabledModule>;
  referenceModules: Array<EnabledModule>;
};

/** The encrypted fields */
export type EncryptedFieldsOutput = {
  __typename?: 'EncryptedFieldsOutput';
  /** The encrypted animation_url field */
  animation_url?: Maybe<Scalars['EncryptedValueScalar']>;
  /** The encrypted content field */
  content?: Maybe<Scalars['EncryptedValueScalar']>;
  /** The encrypted external_url field */
  external_url?: Maybe<Scalars['EncryptedValueScalar']>;
  /** The encrypted image field */
  image?: Maybe<Scalars['EncryptedValueScalar']>;
  /** The encrypted media field */
  media?: Maybe<Array<EncryptedMediaSet>>;
};

/** The Encrypted Media url and metadata */
export type EncryptedMedia = {
  __typename?: 'EncryptedMedia';
  /** The encrypted alt tags for accessibility */
  altTag?: Maybe<Scalars['EncryptedValueScalar']>;
  /** The encrypted cover for any video or audio you attached */
  cover?: Maybe<Scalars['EncryptedValueScalar']>;
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars['Int']>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars['MimeType']>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars['Int']>;
  /** The encrypted value for the URL */
  url: Scalars['Url'];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars['Int']>;
};

/** The encrypted media set */
export type EncryptedMediaSet = {
  __typename?: 'EncryptedMediaSet';
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  medium?: Maybe<EncryptedMedia>;
  /** Original media */
  original: EncryptedMedia;
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  small?: Maybe<EncryptedMedia>;
};

/** The metadata encryption params */
export type EncryptionParamsOutput = {
  __typename?: 'EncryptionParamsOutput';
  /** The access conditions */
  accessCondition: AccessConditionOutput;
  /** The encrypted fields */
  encryptedFields: EncryptedFieldsOutput;
  /** The encryption provider */
  encryptionProvider: EncryptionProvider;
  /** The provider-specific encryption params */
  providerSpecificParams: ProviderSpecificParamsOutput;
};

/** The gated publication encryption provider */
export enum EncryptionProvider {
  LitProtocol = 'LIT_PROTOCOL'
}

export type EnsOnChainIdentity = {
  __typename?: 'EnsOnChainIdentity';
  /** The default ens mapped to this address */
  name?: Maybe<Scalars['Ens']>;
};

export type EoaOwnershipInput = {
  /** The address that will have access to the content */
  address: Scalars['EthereumAddress'];
};

export type EoaOwnershipOutput = {
  __typename?: 'EoaOwnershipOutput';
  /** The address that will have access to the content */
  address: Scalars['EthereumAddress'];
};

/** The erc20 type */
export type Erc20 = {
  __typename?: 'Erc20';
  /** The erc20 address */
  address: Scalars['ContractAddress'];
  /** Decimal places for the token */
  decimals: Scalars['Int'];
  /** Name of the symbol */
  name: Scalars['String'];
  /** Symbol for the token */
  symbol: Scalars['String'];
};

export type Erc20Amount = {
  __typename?: 'Erc20Amount';
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type Erc20OwnershipInput = {
  /** The amount of tokens required to access the content */
  amount: Scalars['String'];
  /** The amount of tokens required to access the content */
  chainID: Scalars['ChainId'];
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator;
  /** The ERC20 token's ethereum address */
  contractAddress: Scalars['ContractAddress'];
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars['Float'];
};

export type Erc20OwnershipOutput = {
  __typename?: 'Erc20OwnershipOutput';
  /** The amount of tokens required to access the content */
  amount: Scalars['String'];
  /** The amount of tokens required to access the content */
  chainID: Scalars['ChainId'];
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator;
  /** The ERC20 token's ethereum address */
  contractAddress: Scalars['ContractAddress'];
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars['Float'];
};

/** The paginated publication result */
export type ExploreProfileResult = {
  __typename?: 'ExploreProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type ExploreProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  sortCriteria: ProfileSortCriteria;
  timestamp?: InputMaybe<Scalars['TimestampScalar']>;
};

export type ExplorePublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  /** If you wish to exclude any results for profile ids */
  excludeProfileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** If you want the randomizer off (default on) */
  noRandomize?: InputMaybe<Scalars['Boolean']>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  sortCriteria: PublicationSortCriteria;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  timestamp?: InputMaybe<Scalars['TimestampScalar']>;
};

/** The paginated publication result */
export type ExplorePublicationResult = {
  __typename?: 'ExplorePublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type FeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type FeeCollectModuleSettings = {
  __typename?: 'FeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type FeeFollowModuleParams = {
  /** The follow module amount info */
  amount: ModuleFeeAmountParams;
  /** The follow module recipient address */
  recipient: Scalars['EthereumAddress'];
};

export type FeeFollowModuleRedeemParams = {
  /** The expected amount to pay */
  amount: ModuleFeeAmountParams;
};

export type FeeFollowModuleSettings = {
  __typename?: 'FeeFollowModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The follow modules enum */
  type: FollowModules;
};

/** The feed event item filter types */
export enum FeedEventItemType {
  CollectComment = 'COLLECT_COMMENT',
  CollectPost = 'COLLECT_POST',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type FeedHighlightsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  /** Sorted by most recent first. Resolves defaultProfile and if null omits the wallet collect event from the list. */
  collects: Array<CollectedEvent>;
  /** Sorted by most recent first. Up to page size - 1 comments. */
  comments?: Maybe<Array<Comment>>;
  /** The elected mirror will be the first Mirror publication within the page results set */
  electedMirror?: Maybe<ElectedMirror>;
  /** Sorted by most recent first. Up to page size - 1 mirrors */
  mirrors: Array<MirrorEvent>;
  /** Sorted by most recent first. Up to page size - 1 reactions */
  reactions: Array<ReactionEvent>;
  root: FeedItemRoot;
};

export type FeedItemRoot = Comment | Post;

export type FeedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** Filter your feed to whatever you wish */
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type Follow = {
  followModule?: InputMaybe<FollowModuleRedeemParams>;
  profile: Scalars['ProfileId'];
};

export type FollowConditionInput = {
  /** The profile id of the gated profile */
  profileId: Scalars['ProfileId'];
};

export type FollowConditionOutput = {
  __typename?: 'FollowConditionOutput';
  /** The profile id of the gated profile */
  profileId: Scalars['ProfileId'];
};

export type FollowModule = FeeFollowModuleSettings | ProfileFollowModuleSettings | RevertFollowModuleSettings | UnknownFollowModuleSettings;

export type FollowModuleParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleParams>;
  /** The empty follow module */
  freeFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** The profile follow module */
  profileFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** The revert follow module */
  revertFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleParams>;
};

export type FollowModuleRedeemParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>;
  /** The profile follower module */
  profileFollowModule?: InputMaybe<ProfileFollowModuleRedeemParams>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemParams>;
};

/** The follow module types */
export enum FollowModules {
  FeeFollowModule = 'FeeFollowModule',
  ProfileFollowModule = 'ProfileFollowModule',
  RevertFollowModule = 'RevertFollowModule',
  UnknownFollowModule = 'UnknownFollowModule'
}

export type FollowOnlyReferenceModuleSettings = {
  __typename?: 'FollowOnlyReferenceModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type FollowProxyAction = {
  freeFollow?: InputMaybe<FreeFollowProxyAction>;
};

export type FollowRequest = {
  follow: Array<Follow>;
};

export type FollowRevenueResult = {
  __typename?: 'FollowRevenueResult';
  revenues: Array<RevenueAggregate>;
};

export type Follower = {
  __typename?: 'Follower';
  totalAmountOfTimesFollowed: Scalars['Int'];
  wallet: Wallet;
};

export type FollowerNftOwnedTokenIds = {
  __typename?: 'FollowerNftOwnedTokenIds';
  followerNftAddress: Scalars['ContractAddress'];
  tokensIds: Array<Scalars['String']>;
};

export type FollowerNftOwnedTokenIdsRequest = {
  address: Scalars['EthereumAddress'];
  profileId: Scalars['ProfileId'];
};

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  profileId: Scalars['ProfileId'];
};

export type Following = {
  __typename?: 'Following';
  profile: Profile;
  totalAmountOfTimesFollowing: Scalars['Int'];
};

export type FollowingRequest = {
  address: Scalars['EthereumAddress'];
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type FraudReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export type FreeCollectModuleParams = {
  /** Follower only */
  followerOnly: Scalars['Boolean'];
};

export type FreeCollectModuleSettings = {
  __typename?: 'FreeCollectModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect modules enum */
  type: CollectModules;
};

export type FreeCollectProxyAction = {
  publicationId: Scalars['InternalPublicationId'];
};

export type FreeFollowProxyAction = {
  profileId: Scalars['ProfileId'];
};

/** The access conditions for the publication */
export type GatedPublicationParamsInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>;
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>;
  /** The LIT Protocol encrypted symmetric key */
  encryptedSymmetricKey: Scalars['ContentEncryptionKey'];
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>;
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>;
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>;
  /** OR condition */
  or?: InputMaybe<OrConditionInput>;
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>;
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>;
};

export type GenerateModuleCurrencyApproval = {
  __typename?: 'GenerateModuleCurrencyApproval';
  data: Scalars['BlockchainData'];
  from: Scalars['EthereumAddress'];
  to: Scalars['ContractAddress'];
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  collectModule?: InputMaybe<CollectModules>;
  currency: Scalars['ContractAddress'];
  followModule?: InputMaybe<FollowModules>;
  referenceModule?: InputMaybe<ReferenceModules>;
  unknownCollectModule?: InputMaybe<Scalars['ContractAddress']>;
  unknownFollowModule?: InputMaybe<Scalars['ContractAddress']>;
  unknownReferenceModule?: InputMaybe<Scalars['ContractAddress']>;
  /** Floating point number as string (e.g. 42.009837). The server will move its decimal places for you */
  value: Scalars['String'];
};

export type GetPublicationMetadataStatusRequest = {
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
  txHash?: InputMaybe<Scalars['TxHash']>;
  txId?: InputMaybe<Scalars['TxId']>;
};

export type GlobalProtocolStats = {
  __typename?: 'GlobalProtocolStats';
  totalBurntProfiles: Scalars['Int'];
  totalCollects: Scalars['Int'];
  totalComments: Scalars['Int'];
  totalFollows: Scalars['Int'];
  totalMirrors: Scalars['Int'];
  totalPosts: Scalars['Int'];
  totalProfiles: Scalars['Int'];
  totalRevenue: Array<Erc20Amount>;
};

export type GlobalProtocolStatsRequest = {
  /** Unix time from timestamp - if not supplied it will go from 0 timestamp */
  fromTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** Unix time to timestamp - if not supplied it go to the present timestamp */
  toTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
};

export type HasTxHashBeenIndexedRequest = {
  /** Tx hash.. if your using the broadcaster you should use txId due to gas price upgrades */
  txHash?: InputMaybe<Scalars['TxHash']>;
  /** Tx id.. if your using the broadcaster you should always use this field */
  txId?: InputMaybe<Scalars['TxId']>;
};

export type HidePublicationRequest = {
  /** Publication id */
  publicationId: Scalars['InternalPublicationId'];
};

export type IllegalReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingIllegalSubreason;
};

export type InternalPublicationsFilterRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** must be DD/MM/YYYY */
  fromDate: Scalars['String'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The shared secret */
  secret: Scalars['String'];
  /** The App Id */
  source: Scalars['Sources'];
  /** must be DD/MM/YYYY */
  toDate: Scalars['String'];
};

export type LimitedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LimitedFeeCollectModuleSettings = {
  __typename?: 'LimitedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type LimitedTimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LimitedTimedFeeCollectModuleSettings = {
  __typename?: 'LimitedTimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type Log = {
  __typename?: 'Log';
  address: Scalars['ContractAddress'];
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  data: Scalars['String'];
  logIndex: Scalars['Int'];
  removed: Scalars['Boolean'];
  topics: Array<Scalars['String']>;
  transactionHash: Scalars['TxHash'];
  transactionIndex: Scalars['Int'];
};

export type MainPostReference = Mirror | Post;

/** The Media url */
export type Media = {
  __typename?: 'Media';
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars['String']>;
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars['Url']>;
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars['Int']>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars['MimeType']>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars['Int']>;
  /** The token image nft */
  url: Scalars['Url'];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars['Int']>;
};

/** Media object output */
export type MediaOutput = {
  __typename?: 'MediaOutput';
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars['String']>;
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars['Url']>;
  item: Scalars['Url'];
  source?: Maybe<PublicationMediaSource>;
  /** This is the mime type of media */
  type?: Maybe<Scalars['MimeType']>;
};

/** The Media Set */
export type MediaSet = {
  __typename?: 'MediaSet';
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  medium?: Maybe<Media>;
  /** Original media */
  original: Media;
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  small?: Maybe<Media>;
};

export type MentionPublication = Comment | Post;

/** The metadata attribute input */
export type MetadataAttributeInput = {
  /** The display type */
  displayType?: InputMaybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType: Scalars['String'];
  /** The value */
  value: Scalars['String'];
};

/** The metadata attribute output */
export type MetadataAttributeOutput = {
  __typename?: 'MetadataAttributeOutput';
  /** The display type */
  displayType?: Maybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars['String']>;
  /** The value */
  value?: Maybe<Scalars['String']>;
};

/** The metadata output */
export type MetadataOutput = {
  __typename?: 'MetadataOutput';
  /** The main focus of the publication */
  animatedUrl?: Maybe<Scalars['Url']>;
  /** The attributes */
  attributes: Array<MetadataAttributeOutput>;
  /** This is the metadata content for the publication, should be markdown */
  content?: Maybe<Scalars['Markdown']>;
  /** The content warning for the publication */
  contentWarning?: Maybe<PublicationContentWarning>;
  /** The image cover for video/music publications */
  cover?: Maybe<MediaSet>;
  /** This is the metadata description */
  description?: Maybe<Scalars['Markdown']>;
  /** The publication's encryption params in case it's encrypted */
  encryptionParams?: Maybe<EncryptionParamsOutput>;
  /** This is the image attached to the metadata and the property used to show the NFT! */
  image?: Maybe<Scalars['Url']>;
  /** The locale of the publication,  */
  locale?: Maybe<Scalars['Locale']>;
  /** The main focus of the publication */
  mainContentFocus: PublicationMainFocus;
  /** The images/audios/videos for the publication */
  media: Array<MediaSet>;
  /** The metadata name */
  name?: Maybe<Scalars['String']>;
  /** The tags for the publication */
  tags: Array<Scalars['String']>;
};

/** The social mirror */
export type Mirror = {
  __typename?: 'Mirror';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  hasCollectedByMe: Scalars['Boolean'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean'];
  /** The metadata for the post */
  metadata: MetadataOutput;
  /** The mirror publication */
  mirrorOf: MirrorablePublication;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social mirror */
export type MirrorCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social mirror */
export type MirrorCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social mirror */
export type MirrorCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social mirror */
export type MirrorHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


/** The social mirror */
export type MirrorReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

export type MirrorEvent = {
  __typename?: 'MirrorEvent';
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

export type MirrorablePublication = Comment | Post;

export type ModuleFeeAmount = {
  __typename?: 'ModuleFeeAmount';
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type ModuleFeeAmountParams = {
  /** The currency address */
  currency: Scalars['ContractAddress'];
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type ModuleInfo = {
  __typename?: 'ModuleInfo';
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ach?: Maybe<Scalars['Void']>;
  /** Adds profile interests to the given profile */
  addProfileInterests?: Maybe<Scalars['Void']>;
  addReaction?: Maybe<Scalars['Void']>;
  authenticate: AuthenticationResult;
  broadcast: RelayResult;
  claim: RelayResult;
  createAttachMediaData: PublicMediaResults;
  createBurnProfileTypedData: CreateBurnProfileBroadcastItemResult;
  createCollectTypedData: CreateCollectBroadcastItemResult;
  createCommentTypedData: CreateCommentBroadcastItemResult;
  createCommentViaDispatcher: RelayResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createMirrorTypedData: CreateMirrorBroadcastItemResult;
  createMirrorViaDispatcher: RelayResult;
  createPostTypedData: CreatePostBroadcastItemResult;
  createPostViaDispatcher: RelayResult;
  createProfile: RelayResult;
  createSetDefaultProfileTypedData: SetDefaultProfileBroadcastItemResult;
  createSetDispatcherTypedData: CreateSetDispatcherBroadcastItemResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createSetFollowNFTUriTypedData: CreateSetFollowNftUriBroadcastItemResult;
  createSetProfileImageURITypedData: CreateSetProfileImageUriBroadcastItemResult;
  createSetProfileImageURIViaDispatcher: RelayResult;
  createSetProfileMetadataTypedData: CreateSetProfileMetadataUriBroadcastItemResult;
  createSetProfileMetadataViaDispatcher: RelayResult;
  createToggleFollowTypedData: CreateToggleFollowBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  hidePublication?: Maybe<Scalars['Void']>;
  proxyAction: Scalars['ProxyActionId'];
  refresh: AuthenticationResult;
  /** Removes profile interests from the given profile */
  removeProfileInterests?: Maybe<Scalars['Void']>;
  removeReaction?: Maybe<Scalars['Void']>;
  reportPublication?: Maybe<Scalars['Void']>;
};


export type MutationAchArgs = {
  request: AchRequest;
};


export type MutationAddProfileInterestsArgs = {
  request: AddProfileInterestsRequest;
};


export type MutationAddReactionArgs = {
  request: ReactionRequest;
};


export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};


export type MutationBroadcastArgs = {
  request: BroadcastRequest;
};


export type MutationClaimArgs = {
  request: ClaimHandleRequest;
};


export type MutationCreateAttachMediaDataArgs = {
  request: PublicMediaRequest;
};


export type MutationCreateBurnProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: BurnProfileRequest;
};


export type MutationCreateCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
};


export type MutationCreateCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
};


export type MutationCreateCommentViaDispatcherArgs = {
  request: CreatePublicCommentRequest;
};


export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
};


export type MutationCreateMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateMirrorRequest;
};


export type MutationCreateMirrorViaDispatcherArgs = {
  request: CreateMirrorRequest;
};


export type MutationCreatePostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicPostRequest;
};


export type MutationCreatePostViaDispatcherArgs = {
  request: CreatePublicPostRequest;
};


export type MutationCreateProfileArgs = {
  request: CreateProfileRequest;
};


export type MutationCreateSetDefaultProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetDefaultProfileRequest;
};


export type MutationCreateSetDispatcherTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetDispatcherRequest;
};


export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowModuleRequest;
};


export type MutationCreateSetFollowNftUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowNftUriRequest;
};


export type MutationCreateSetProfileImageUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UpdateProfileImageRequest;
};


export type MutationCreateSetProfileImageUriViaDispatcherArgs = {
  request: UpdateProfileImageRequest;
};


export type MutationCreateSetProfileMetadataTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationCreateSetProfileMetadataViaDispatcherArgs = {
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationCreateToggleFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateToggleFollowRequest;
};


export type MutationCreateUnfollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnfollowRequest;
};


export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};


export type MutationProxyActionArgs = {
  request: ProxyActionRequest;
};


export type MutationRefreshArgs = {
  request: RefreshRequest;
};


export type MutationRemoveProfileInterestsArgs = {
  request: RemoveProfileInterestsRequest;
};


export type MutationRemoveReactionArgs = {
  request: ReactionRequest;
};


export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest;
};

export type MutualFollowersProfilesQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The profile id your viewing */
  viewingProfileId: Scalars['ProfileId'];
  /** The profile id you want the result to come back as your viewing from */
  yourProfileId: Scalars['ProfileId'];
};

/** The nft type */
export type Nft = {
  __typename?: 'NFT';
  /** aka "1"  */
  chainId: Scalars['ChainId'];
  /** aka "CryptoKitties"  */
  collectionName: Scalars['String'];
  /** aka "https://api.criptokitt..."  */
  contentURI: Scalars['String'];
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  contractAddress: Scalars['ContractAddress'];
  /** aka us CryptoKitties */
  contractName: Scalars['String'];
  /** aka "Hey cutie! I m Beard Coffee. ....  */
  description: Scalars['String'];
  /** aka "ERC721"  */
  ercType: Scalars['String'];
  /** aka "Beard Coffee"  */
  name: Scalars['String'];
  /** aka "{ uri:"https://ipfs....", metaType:"image/png" }"  */
  originalContent: NftContent;
  /** aka { address: 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e, amount:"2" }  */
  owners: Array<Owner>;
  /** aka RARI */
  symbol: Scalars['String'];
  /** aka "13"  */
  tokenId: Scalars['String'];
};

/** The NFT content uri */
export type NftContent = {
  __typename?: 'NFTContent';
  /** The animated url */
  animatedUrl?: Maybe<Scalars['String']>;
  /** The meta type content */
  metaType: Scalars['String'];
  /** The token uri  nft */
  uri: Scalars['String'];
};

export type NftData = {
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId'];
  /** The signature */
  signature: Scalars['Signature'];
};

export type NfTsRequest = {
  /** Chain Ids */
  chainIds: Array<Scalars['ChainId']>;
  /** Filter by contract address */
  contractAddress?: InputMaybe<Scalars['ContractAddress']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Filter by owner address */
  ownerAddress: Scalars['EthereumAddress'];
};

/** Paginated nft results */
export type NfTsResult = {
  __typename?: 'NFTsResult';
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export type NewCollectNotification = {
  __typename?: 'NewCollectNotification';
  collectedPublication: Publication;
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  wallet: Wallet;
};

export type NewCommentNotification = {
  __typename?: 'NewCommentNotification';
  comment: Comment;
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  /** The profile */
  profile: Profile;
};

export type NewFollowerNotification = {
  __typename?: 'NewFollowerNotification';
  createdAt: Scalars['DateTime'];
  isFollowedByMe: Scalars['Boolean'];
  notificationId: Scalars['NotificationId'];
  wallet: Wallet;
};

export type NewMentionNotification = {
  __typename?: 'NewMentionNotification';
  createdAt: Scalars['DateTime'];
  mentionPublication: MentionPublication;
  notificationId: Scalars['NotificationId'];
};

export type NewMirrorNotification = {
  __typename?: 'NewMirrorNotification';
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  /** The profile */
  profile: Profile;
  publication: MirrorablePublication;
};

export type NewReactionNotification = {
  __typename?: 'NewReactionNotification';
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  /** The profile */
  profile: Profile;
  publication: Publication;
  reaction: ReactionTypes;
};

/** The NFT image */
export type NftImage = {
  __typename?: 'NftImage';
  /** The token image nft */
  chainId: Scalars['Int'];
  /** The contract address */
  contractAddress: Scalars['ContractAddress'];
  /** The token id of the nft */
  tokenId: Scalars['String'];
  /** The token image nft */
  uri: Scalars['Url'];
  /** If the NFT is verified */
  verified: Scalars['Boolean'];
};

export type NftOwnershipChallenge = {
  /** Chain Id */
  chainId: Scalars['ChainId'];
  /** ContractAddress for nft */
  contractAddress: Scalars['ContractAddress'];
  /** Token id for NFT */
  tokenId: Scalars['String'];
};

export type NftOwnershipChallengeRequest = {
  /** The wallet address which owns the NFT */
  ethereumAddress: Scalars['EthereumAddress'];
  nfts: Array<NftOwnershipChallenge>;
};

/** NFT ownership challenge result */
export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult';
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId'];
  text: Scalars['String'];
  /** Timeout of the validation */
  timeout: Scalars['TimestampScalar'];
};

export type NftOwnershipInput = {
  /** The NFT chain id */
  chainID: Scalars['ChainId'];
  /** The NFT collection's ethereum address */
  contractAddress: Scalars['ContractAddress'];
  /** The unlocker contract type */
  contractType: ContractType;
  /** The optional token ID(s) to check for ownership */
  tokenIds?: InputMaybe<Scalars['TokenId']>;
};

export type NftOwnershipOutput = {
  __typename?: 'NftOwnershipOutput';
  /** The NFT chain id */
  chainID: Scalars['ChainId'];
  /** The NFT collection's ethereum address */
  contractAddress: Scalars['ContractAddress'];
  /** The unlocker contract type */
  contractType: ContractType;
  /** The optional token ID(s) to check for ownership */
  tokenIds?: Maybe<Scalars['TokenId']>;
};

export type Notification = NewCollectNotification | NewCommentNotification | NewFollowerNotification | NewMentionNotification | NewMirrorNotification | NewReactionNotification;

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  notificationTypes?: InputMaybe<Array<NotificationTypes>>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

/** The notification filter types */
export enum NotificationTypes {
  CollectedComment = 'COLLECTED_COMMENT',
  CollectedPost = 'COLLECTED_POST',
  CommentedComment = 'COMMENTED_COMMENT',
  CommentedPost = 'COMMENTED_POST',
  Followed = 'FOLLOWED',
  MentionComment = 'MENTION_COMMENT',
  MentionPost = 'MENTION_POST',
  MirroredComment = 'MIRRORED_COMMENT',
  MirroredPost = 'MIRRORED_POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type OnChainIdentity = {
  __typename?: 'OnChainIdentity';
  /** The ens information */
  ens?: Maybe<EnsOnChainIdentity>;
  /** The POH status */
  proofOfHumanity: Scalars['Boolean'];
  /** The sybil dot org information */
  sybilDotOrg: SybilDotOrgIdentity;
  /** The worldcoin identity */
  worldcoin: WorldcoinIdentity;
};

export type OrConditionInput = {
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>;
};

export type OrConditionOutput = {
  __typename?: 'OrConditionOutput';
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>;
};

/** The nft type */
export type Owner = {
  __typename?: 'Owner';
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  address: Scalars['EthereumAddress'];
  /** number of tokens owner */
  amount: Scalars['Float'];
};

/** The paginated wallet result */
export type PaginatedAllPublicationsTagsResult = {
  __typename?: 'PaginatedAllPublicationsTagsResult';
  items: Array<TagResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated feed result */
export type PaginatedFeedResult = {
  __typename?: 'PaginatedFeedResult';
  items: Array<FeedItem>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated followers result */
export type PaginatedFollowersResult = {
  __typename?: 'PaginatedFollowersResult';
  items: Array<Follower>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowingResult = {
  __typename?: 'PaginatedFollowingResult';
  items: Array<Following>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated notification result */
export type PaginatedNotificationResult = {
  __typename?: 'PaginatedNotificationResult';
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedProfilePublicationsForSaleResult = {
  __typename?: 'PaginatedProfilePublicationsForSaleResult';
  items: Array<PublicationForSale>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated profile result */
export type PaginatedProfileResult = {
  __typename?: 'PaginatedProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated publication result */
export type PaginatedPublicationResult = {
  __typename?: 'PaginatedPublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  /** Cursor to query next results */
  next?: Maybe<Scalars['Cursor']>;
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars['Cursor']>;
  /** The total number of entities the pagination iterates over. If null it means it can not work it out due to dynamic or aggregated query e.g. For a query that requests all nfts with more than 10 likes, this field gives the total amount of nfts with more than 10 likes, not the total amount of nfts */
  totalCount?: Maybe<Scalars['Int']>;
};

/** The paginated timeline result */
export type PaginatedTimelineResult = {
  __typename?: 'PaginatedTimelineResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedWhoCollectedResult = {
  __typename?: 'PaginatedWhoCollectedResult';
  items: Array<Wallet>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedWhoReactedResult = {
  __typename?: 'PaginatedWhoReactedResult';
  items: Array<WhoReactedResult>;
  pageInfo: PaginatedResultInfo;
};

export type PendingApprovalFollowsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

/** The paginated follow result */
export type PendingApproveFollowsResult = {
  __typename?: 'PendingApproveFollowsResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The social post */
export type Post = {
  __typename?: 'Post';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /**
   * Who collected it, this is used for timeline results and like this for better caching for the client
   * @deprecated use `feed` query, timeline query will be killed on the 15th November. This includes this field.
   */
  collectedBy?: Maybe<Wallet>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  hasCollectedByMe: Scalars['Boolean'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean'];
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirrors: Array<Scalars['InternalPublicationId']>;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social post */
export type PostCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social post */
export type PostCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social post */
export type PostCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social post */
export type PostHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


/** The social post */
export type PostMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']>;
};


/** The social post */
export type PostReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

/** The Profile */
export type Profile = {
  __typename?: 'Profile';
  /** Optionals param to add extra attributes on the metadata */
  attributes?: Maybe<Array<Attribute>>;
  /** Bio of the profile */
  bio?: Maybe<Scalars['String']>;
  /** The cover picture for the profile */
  coverPicture?: Maybe<ProfileMedia>;
  /** The dispatcher */
  dispatcher?: Maybe<Dispatcher>;
  /** The follow module */
  followModule?: Maybe<FollowModule>;
  /** Follow nft address */
  followNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** The profile handle */
  handle: Scalars['Handle'];
  /** The profile id */
  id: Scalars['ProfileId'];
  /** The profile interests */
  interests?: Maybe<Array<Scalars['ProfileInterest']>>;
  /** Is the profile default */
  isDefault: Scalars['Boolean'];
  isFollowedByMe: Scalars['Boolean'];
  isFollowing: Scalars['Boolean'];
  /** Metadata url */
  metadata?: Maybe<Scalars['Url']>;
  /** Name of the profile */
  name?: Maybe<Scalars['String']>;
  /** The on chain identity */
  onChainIdentity: OnChainIdentity;
  /** Who owns the profile */
  ownedBy: Scalars['EthereumAddress'];
  /** The picture for the profile */
  picture?: Maybe<ProfileMedia>;
  /** Profile stats */
  stats: ProfileStats;
};


/** The Profile */
export type ProfileIsFollowedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


/** The Profile */
export type ProfileIsFollowingArgs = {
  who?: InputMaybe<Scalars['ProfileId']>;
};

export type ProfileFollowModuleBeenRedeemedRequest = {
  followProfileId: Scalars['ProfileId'];
  redeemingProfileId: Scalars['ProfileId'];
};

export type ProfileFollowModuleRedeemParams = {
  /** The profile id to use to follow this profile */
  profileId: Scalars['ProfileId'];
};

export type ProfileFollowModuleSettings = {
  __typename?: 'ProfileFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The follow module enum */
  type: FollowModules;
};

export type ProfileFollowRevenueQueryRequest = {
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

export type ProfileMedia = MediaSet | NftImage;

export type ProfileOnChainIdentityRequest = {
  profileIds: Array<Scalars['ProfileId']>;
};

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipInput = {
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipOutput = {
  __typename?: 'ProfileOwnershipOutput';
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

export type ProfilePublicationRevenueQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** The revenue types */
  types?: InputMaybe<Array<PublicationTypes>>;
};

/** The paginated revenue result */
export type ProfilePublicationRevenueResult = {
  __typename?: 'ProfilePublicationRevenueResult';
  items: Array<PublicationRevenue>;
  pageInfo: PaginatedResultInfo;
};

export type ProfilePublicationsForSaleRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type ProfileQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The handles for the profile */
  handles?: InputMaybe<Array<Scalars['Handle']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The ethereum addresses */
  ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The mirrored publication id */
  whoMirroredPublicationId?: InputMaybe<Scalars['InternalPublicationId']>;
};

/** Profile search results */
export type ProfileSearchResult = {
  __typename?: 'ProfileSearchResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

/** profile sort criteria */
export enum ProfileSortCriteria {
  CreatedOn = 'CREATED_ON',
  LatestCreated = 'LATEST_CREATED',
  MostCollects = 'MOST_COLLECTS',
  MostComments = 'MOST_COMMENTS',
  MostFollowers = 'MOST_FOLLOWERS',
  MostMirrors = 'MOST_MIRRORS',
  MostPosts = 'MOST_POSTS',
  MostPublication = 'MOST_PUBLICATION'
}

/** The Profile Stats */
export type ProfileStats = {
  __typename?: 'ProfileStats';
  commentsTotal: Scalars['Int'];
  id: Scalars['ProfileId'];
  mirrorsTotal: Scalars['Int'];
  postsTotal: Scalars['Int'];
  publicationsTotal: Scalars['Int'];
  /** Total collects count */
  totalCollects: Scalars['Int'];
  /** Total comment count */
  totalComments: Scalars['Int'];
  /** Total follower count */
  totalFollowers: Scalars['Int'];
  /** Total following count (remember the wallet follows not profile so will be same for every profile they own) */
  totalFollowing: Scalars['Int'];
  /** Total mirror count */
  totalMirrors: Scalars['Int'];
  /** Total post count */
  totalPosts: Scalars['Int'];
  /** Total publication count */
  totalPublications: Scalars['Int'];
};


/** The Profile Stats */
export type ProfileStatsCommentsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


/** The Profile Stats */
export type ProfileStatsMirrorsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


/** The Profile Stats */
export type ProfileStatsPostsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


/** The Profile Stats */
export type ProfileStatsPublicationsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};

/** The provider-specific encryption params */
export type ProviderSpecificParamsOutput = {
  __typename?: 'ProviderSpecificParamsOutput';
  /** The encryption key */
  encryptionKey: Scalars['ContentEncryptionKey'];
};

export type ProxyActionError = {
  __typename?: 'ProxyActionError';
  lastKnownTxId?: Maybe<Scalars['TxId']>;
  reason: Scalars['String'];
};

export type ProxyActionQueued = {
  __typename?: 'ProxyActionQueued';
  queuedAt: Scalars['DateTime'];
};

export type ProxyActionRequest = {
  collect?: InputMaybe<CollectProxyAction>;
  follow?: InputMaybe<FollowProxyAction>;
};

export type ProxyActionStatusResult = {
  __typename?: 'ProxyActionStatusResult';
  status: ProxyActionStatusTypes;
  txHash: Scalars['TxHash'];
  txId: Scalars['TxId'];
};

export type ProxyActionStatusResultUnion = ProxyActionError | ProxyActionQueued | ProxyActionStatusResult;

/** The proxy action status */
export enum ProxyActionStatusTypes {
  Complete = 'COMPLETE',
  Minting = 'MINTING',
  Transferring = 'TRANSFERRING'
}

export type PublicMediaRequest = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars['String']>;
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars['Url']>;
  /** Pre calculated cid of the file to push */
  itemCid: Scalars['IfpsCid'];
  /** This is the mime type of media */
  type?: InputMaybe<Scalars['MimeType']>;
};

/** The response to upload the attached file */
export type PublicMediaResults = {
  __typename?: 'PublicMediaResults';
  /** ipfs uri to add on the metadata */
  media: MediaOutput;
  /** Signed url to push the file */
  signedUrl: Scalars['String'];
};

export type Publication = Comment | Mirror | Post;

/** The publication content warning */
export enum PublicationContentWarning {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER'
}

export type PublicationForSale = Comment | Post;

/** The publication main focus */
export enum PublicationMainFocus {
  Article = 'ARTICLE',
  Audio = 'AUDIO',
  Embed = 'EMBED',
  Image = 'IMAGE',
  Link = 'LINK',
  TextOnly = 'TEXT_ONLY',
  Video = 'VIDEO'
}

/** The source of the media */
export enum PublicationMediaSource {
  Lens = 'LENS'
}

/** Publication metadata content waring filters */
export type PublicationMetadataContentWarningFilter = {
  /** By default all content warnings will be hidden you can include them in your query by adding them to this array. */
  includeOneOf?: InputMaybe<Array<PublicationContentWarning>>;
};

/** The publication metadata display types */
export enum PublicationMetadataDisplayTypes {
  Date = 'date',
  Number = 'number',
  String = 'string'
}

/** Publication metadata filters */
export type PublicationMetadataFilters = {
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT. You can just filter on language if you wish. */
  locale?: InputMaybe<Scalars['Locale']>;
  mainContentFocus?: InputMaybe<Array<PublicationMainFocus>>;
  tags?: InputMaybe<PublicationMetadataTagsFilter>;
};

/** The metadata attribute input */
export type PublicationMetadataMediaInput = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars['String']>;
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars['Url']>;
  item: Scalars['Url'];
  source?: InputMaybe<PublicationMediaSource>;
  /** This is the mime type of media */
  type?: InputMaybe<Scalars['MimeType']>;
};

export type PublicationMetadataStatus = {
  __typename?: 'PublicationMetadataStatus';
  /** If metadata validation failed it will put a reason why here */
  reason?: Maybe<Scalars['String']>;
  status: PublicationMetadataStatusType;
};

/** publication metadata status type */
export enum PublicationMetadataStatusType {
  MetadataValidationFailed = 'METADATA_VALIDATION_FAILED',
  NotFound = 'NOT_FOUND',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

/** Publication metadata tag filter */
export type PublicationMetadataTagsFilter = {
  /** Needs to only match all */
  all?: InputMaybe<Array<Scalars['String']>>;
  /** Needs to only match one of */
  oneOf?: InputMaybe<Array<Scalars['String']>>;
};

export type PublicationMetadataV1Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars['Url']>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars['Sources']>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars['Markdown']>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars['Markdown']>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars['Url']>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars['Url']>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars['MimeType']>;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars['String'];
  /** Name of the item. */
  name: Scalars['String'];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars['String'];
};

export type PublicationMetadataV2Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars['Url']>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars['Sources']>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars['Markdown']>;
  /** Ability to add a content warning */
  contentWarning?: InputMaybe<PublicationContentWarning>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars['Markdown']>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars['Url']>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars['Url']>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars['MimeType']>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT */
  locale: Scalars['Locale'];
  /** Main content focus that for this publication */
  mainContentFocus: PublicationMainFocus;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars['String'];
  /** Name of the item. */
  name: Scalars['String'];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** Ability to tag your publication */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars['String'];
};

export type PublicationQueryRequest = {
  /** The publication id */
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
  /** The tx hash */
  txHash?: InputMaybe<Scalars['TxHash']>;
};

/** Publication reporting fraud subreason */
export enum PublicationReportingFraudSubreason {
  Impersonation = 'IMPERSONATION',
  Scam = 'SCAM'
}

/** Publication reporting illegal subreason */
export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  DirectThreat = 'DIRECT_THREAT',
  HumanAbuse = 'HUMAN_ABUSE',
  ThreatIndividual = 'THREAT_INDIVIDUAL',
  Violence = 'VIOLENCE'
}

/** Publication reporting reason */
export enum PublicationReportingReason {
  Fraud = 'FRAUD',
  Illegal = 'ILLEGAL',
  Sensitive = 'SENSITIVE',
  Spam = 'SPAM'
}

/** Publication reporting sensitive subreason */
export enum PublicationReportingSensitiveSubreason {
  Nsfw = 'NSFW',
  Offensive = 'OFFENSIVE'
}

/** Publication reporting spam subreason */
export enum PublicationReportingSpamSubreason {
  FakeEngagement = 'FAKE_ENGAGEMENT',
  ManipulationAlgo = 'MANIPULATION_ALGO',
  Misleading = 'MISLEADING',
  MisuseHashtags = 'MISUSE_HASHTAGS',
  Repetitive = 'REPETITIVE',
  SomethingElse = 'SOMETHING_ELSE',
  Unrelated = 'UNRELATED'
}

/** The social comment */
export type PublicationRevenue = {
  __typename?: 'PublicationRevenue';
  publication: Publication;
  revenue: RevenueAggregate;
};

export type PublicationRevenueQueryRequest = {
  /** The publication id */
  publicationId: Scalars['InternalPublicationId'];
};

/** Publication search results */
export type PublicationSearchResult = {
  __typename?: 'PublicationSearchResult';
  items: Array<PublicationSearchResultItem>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type PublicationSearchResultItem = Comment | Post;

export type PublicationSignatureContextInput = {
  signature: Scalars['String'];
};

/** Publication sort criteria */
export enum PublicationSortCriteria {
  CuratedProfiles = 'CURATED_PROFILES',
  Latest = 'LATEST',
  TopCollected = 'TOP_COLLECTED',
  TopCommented = 'TOP_COMMENTED',
  TopMirrored = 'TOP_MIRRORED'
}

/** The publication stats */
export type PublicationStats = {
  __typename?: 'PublicationStats';
  commentsTotal: Scalars['Int'];
  /** The publication id */
  id: Scalars['InternalPublicationId'];
  /** The total amount of collects */
  totalAmountOfCollects: Scalars['Int'];
  /** The total amount of comments */
  totalAmountOfComments: Scalars['Int'];
  /** The total amount of mirrors */
  totalAmountOfMirrors: Scalars['Int'];
  /** The total amount of upvotes */
  totalDownvotes: Scalars['Int'];
  /** The total amount of downvotes */
  totalUpvotes: Scalars['Int'];
};


/** The publication stats */
export type PublicationStatsCommentsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};

/** The publication types */
export enum PublicationTypes {
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST'
}

export type PublicationValidateMetadataResult = {
  __typename?: 'PublicationValidateMetadataResult';
  /** If `valid` is false it will put a reason why here */
  reason?: Maybe<Scalars['String']>;
  valid: Scalars['Boolean'];
};

export type PublicationsQueryRequest = {
  /** The ethereum address */
  collectedBy?: InputMaybe<Scalars['EthereumAddress']>;
  /** The publication id you wish to get comments for */
  commentsOf?: InputMaybe<Scalars['InternalPublicationId']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  /** Profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The publication id */
  publicationIds?: InputMaybe<Array<Scalars['InternalPublicationId']>>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type Query = {
  __typename?: 'Query';
  allPublicationsTags: PaginatedAllPublicationsTagsResult;
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmount>;
  challenge: AuthChallengeResult;
  claimableHandles: ClaimableHandles;
  claimableStatus: ClaimStatus;
  defaultProfile?: Maybe<Profile>;
  doesFollow: Array<DoesFollowResponse>;
  enabledModuleCurrencies: Array<Erc20>;
  enabledModules: EnabledModules;
  exploreProfiles: ExploreProfileResult;
  explorePublications: ExplorePublicationResult;
  feed: PaginatedFeedResult;
  feedHighlights: PaginatedTimelineResult;
  followerNftOwnedTokenIds?: Maybe<FollowerNftOwnedTokenIds>;
  followers: PaginatedFollowersResult;
  following: PaginatedFollowingResult;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApproval;
  globalProtocolStats: GlobalProtocolStats;
  hasTxHashBeenIndexed: TransactionResult;
  internalPublicationFilter: PaginatedPublicationResult;
  mutualFollowersProfiles: PaginatedProfileResult;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  nfts: NfTsResult;
  notifications: PaginatedNotificationResult;
  pendingApprovalFollows: PendingApproveFollowsResult;
  ping: Scalars['String'];
  profile?: Maybe<Profile>;
  profileFollowModuleBeenRedeemed: Scalars['Boolean'];
  profileFollowRevenue: FollowRevenueResult;
  /** Get the list of profile interests */
  profileInterests: Array<Scalars['ProfileInterest']>;
  profileOnChainIdentity: Array<OnChainIdentity>;
  profilePublicationRevenue: ProfilePublicationRevenueResult;
  profilePublicationsForSale: PaginatedProfilePublicationsForSaleResult;
  profiles: PaginatedProfileResult;
  proxyActionStatus: ProxyActionStatusResultUnion;
  publication?: Maybe<Publication>;
  publicationMetadataStatus: PublicationMetadataStatus;
  publicationRevenue?: Maybe<PublicationRevenue>;
  publications: PaginatedPublicationResult;
  recommendedProfiles: Array<Profile>;
  rel?: Maybe<Scalars['Void']>;
  search: SearchResult;
  /** @deprecated You should be using feed, this will not be supported after 15th November 2021, please migrate. */
  timeline: PaginatedTimelineResult;
  txIdToTxHash: Scalars['TxHash'];
  unknownEnabledModules: EnabledModules;
  userSigNonces: UserSigNonces;
  validatePublicationMetadata: PublicationValidateMetadataResult;
  verify: Scalars['Boolean'];
  whoCollectedPublication: PaginatedWhoCollectedResult;
  whoReactedPublication: PaginatedWhoReactedResult;
};


export type QueryAllPublicationsTagsArgs = {
  request: AllPublicationsTagsRequest;
};


export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};


export type QueryChallengeArgs = {
  request: ChallengeRequest;
};


export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest;
};


export type QueryDoesFollowArgs = {
  request: DoesFollowRequest;
};


export type QueryExploreProfilesArgs = {
  request: ExploreProfilesRequest;
};


export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest;
};


export type QueryFeedArgs = {
  request: FeedRequest;
};


export type QueryFeedHighlightsArgs = {
  request: FeedHighlightsRequest;
};


export type QueryFollowerNftOwnedTokenIdsArgs = {
  request: FollowerNftOwnedTokenIdsRequest;
};


export type QueryFollowersArgs = {
  request: FollowersRequest;
};


export type QueryFollowingArgs = {
  request: FollowingRequest;
};


export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};


export type QueryGlobalProtocolStatsArgs = {
  request?: InputMaybe<GlobalProtocolStatsRequest>;
};


export type QueryHasTxHashBeenIndexedArgs = {
  request: HasTxHashBeenIndexedRequest;
};


export type QueryInternalPublicationFilterArgs = {
  request: InternalPublicationsFilterRequest;
};


export type QueryMutualFollowersProfilesArgs = {
  request: MutualFollowersProfilesQueryRequest;
};


export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};


export type QueryNftsArgs = {
  request: NfTsRequest;
};


export type QueryNotificationsArgs = {
  request: NotificationRequest;
};


export type QueryPendingApprovalFollowsArgs = {
  request: PendingApprovalFollowsRequest;
};


export type QueryProfileArgs = {
  request: SingleProfileQueryRequest;
};


export type QueryProfileFollowModuleBeenRedeemedArgs = {
  request: ProfileFollowModuleBeenRedeemedRequest;
};


export type QueryProfileFollowRevenueArgs = {
  request: ProfileFollowRevenueQueryRequest;
};


export type QueryProfileOnChainIdentityArgs = {
  request: ProfileOnChainIdentityRequest;
};


export type QueryProfilePublicationRevenueArgs = {
  request: ProfilePublicationRevenueQueryRequest;
};


export type QueryProfilePublicationsForSaleArgs = {
  request: ProfilePublicationsForSaleRequest;
};


export type QueryProfilesArgs = {
  request: ProfileQueryRequest;
};


export type QueryProxyActionStatusArgs = {
  proxyActionId: Scalars['ProxyActionId'];
};


export type QueryPublicationArgs = {
  request: PublicationQueryRequest;
};


export type QueryPublicationMetadataStatusArgs = {
  request: GetPublicationMetadataStatusRequest;
};


export type QueryPublicationRevenueArgs = {
  request: PublicationRevenueQueryRequest;
};


export type QueryPublicationsArgs = {
  request: PublicationsQueryRequest;
};


export type QueryRecommendedProfilesArgs = {
  options?: InputMaybe<RecommendedProfileOptions>;
};


export type QueryRelArgs = {
  request: RelRequest;
};


export type QuerySearchArgs = {
  request: SearchQueryRequest;
};


export type QueryTimelineArgs = {
  request: TimelineRequest;
};


export type QueryTxIdToTxHashArgs = {
  txId: Scalars['TxId'];
};


export type QueryValidatePublicationMetadataArgs = {
  request: ValidatePublicationMetadataRequest;
};


export type QueryVerifyArgs = {
  request: VerifyRequest;
};


export type QueryWhoCollectedPublicationArgs = {
  request: WhoCollectedPublicationRequest;
};


export type QueryWhoReactedPublicationArgs = {
  request: WhoReactedPublicationRequest;
};

export type ReactionEvent = {
  __typename?: 'ReactionEvent';
  profile: Profile;
  reaction: ReactionTypes;
  timestamp: Scalars['DateTime'];
};

export type ReactionFieldResolverRequest = {
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

export type ReactionRequest = {
  /** Profile id to perform the action */
  profileId: Scalars['ProfileId'];
  /** The internal publication id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reaction */
  reaction: ReactionTypes;
};

/** Reaction types */
export enum ReactionTypes {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type RecommendedProfileOptions = {
  /** If you wish to turn ML off */
  disableML?: InputMaybe<Scalars['Boolean']>;
  /** If you wish to shuffle the results */
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type ReferenceModule = DegreesOfSeparationReferenceModuleSettings | FollowOnlyReferenceModuleSettings | UnknownReferenceModuleSettings;

export type ReferenceModuleParams = {
  /** The degrees of seperation reference module */
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleParams>;
  /** The follower only reference module */
  followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']>;
  /** A unknown reference module */
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleParams>;
};

/** The reference module types */
export enum ReferenceModules {
  DegreesOfSeparationReferenceModule = 'DegreesOfSeparationReferenceModule',
  FollowerOnlyReferenceModule = 'FollowerOnlyReferenceModule',
  UnknownReferenceModule = 'UnknownReferenceModule'
}

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type RelRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
  secret: Scalars['String'];
};

export type RelayError = {
  __typename?: 'RelayError';
  reason: RelayErrorReasons;
};

/** Relay error reason */
export enum RelayErrorReasons {
  Expired = 'EXPIRED',
  HandleTaken = 'HANDLE_TAKEN',
  NotAllowed = 'NOT_ALLOWED',
  Rejected = 'REJECTED',
  WrongWalletSigned = 'WRONG_WALLET_SIGNED'
}

export type RelayResult = RelayError | RelayerResult;

/** The relayer result */
export type RelayerResult = {
  __typename?: 'RelayerResult';
  /** The tx hash - you should use the `txId` as your identifier as gas prices can be upgraded meaning txHash will change */
  txHash: Scalars['TxHash'];
  /** The tx id */
  txId: Scalars['TxId'];
};

/** The request object to remove interests from a profile */
export type RemoveProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars['ProfileInterest']>;
  /** The profileId to add interests to */
  profileId: Scalars['ProfileId'];
};

export type ReportPublicationRequest = {
  additionalComments?: InputMaybe<Scalars['String']>;
  publicationId: Scalars['InternalPublicationId'];
  reason: ReportingReasonInputParams;
};

export type ReportingReasonInputParams = {
  fraudReason?: InputMaybe<FraudReasonInputParams>;
  illegalReason?: InputMaybe<IllegalReasonInputParams>;
  sensitiveReason?: InputMaybe<SensitiveReasonInputParams>;
  spamReason?: InputMaybe<SpamReasonInputParams>;
};

export type ReservedClaimableHandle = {
  __typename?: 'ReservedClaimableHandle';
  expiry: Scalars['DateTime'];
  handle: Scalars['Handle'];
  id: Scalars['HandleClaimIdScalar'];
  source: Scalars['String'];
};

export type RevenueAggregate = {
  __typename?: 'RevenueAggregate';
  total: Erc20Amount;
};

export type RevertCollectModuleSettings = {
  __typename?: 'RevertCollectModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The collect modules enum */
  type: CollectModules;
};

export type RevertFollowModuleSettings = {
  __typename?: 'RevertFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The follow module enum */
  type: FollowModules;
};

/** The gated publication access criteria scalar operators */
export enum ScalarOperator {
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotEqual = 'NOT_EQUAL'
}

export type SearchQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The search term */
  query: Scalars['Search'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  type: SearchRequestTypes;
};

/** Search request types */
export enum SearchRequestTypes {
  Profile = 'PROFILE',
  Publication = 'PUBLICATION'
}

export type SearchResult = ProfileSearchResult | PublicationSearchResult;

export type SensitiveReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
};

/** The broadcast item */
export type SetDefaultProfileBroadcastItemResult = {
  __typename?: 'SetDefaultProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: SetDefaultProfileEip712TypedData;
};

/** The default profile eip 712 typed data */
export type SetDefaultProfileEip712TypedData = {
  __typename?: 'SetDefaultProfileEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: SetDefaultProfileEip712TypedDataTypes;
  /** The values */
  value: SetDefaultProfileEip712TypedDataValue;
};

/** The default profile eip 712 typed data types */
export type SetDefaultProfileEip712TypedDataTypes = {
  __typename?: 'SetDefaultProfileEIP712TypedDataTypes';
  SetDefaultProfileWithSig: Array<Eip712TypedDataField>;
};

/** The default profile eip 712 typed data value */
export type SetDefaultProfileEip712TypedDataValue = {
  __typename?: 'SetDefaultProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  wallet: Scalars['EthereumAddress'];
};

export type SetDispatcherRequest = {
  /** The dispatcher address - they can post, comment, mirror, set follow module, change your profile picture on your behalf, if left as none it will use the built in dispatcher address. */
  dispatcher?: InputMaybe<Scalars['EthereumAddress']>;
  /** If you want to enable or disable it */
  enable?: InputMaybe<Scalars['Boolean']>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

/** The signed auth challenge */
export type SignedAuthChallenge = {
  /** The ethereum address you signed the signature with */
  address: Scalars['EthereumAddress'];
  /** The signature */
  signature: Scalars['Signature'];
};

export type SingleProfileQueryRequest = {
  /** The handle for the profile */
  handle?: InputMaybe<Scalars['Handle']>;
  /** The profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

export type SpamReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSpamSubreason;
};

export type SybilDotOrgIdentity = {
  __typename?: 'SybilDotOrgIdentity';
  source: SybilDotOrgIdentitySource;
  /** The sybil dot org status */
  verified: Scalars['Boolean'];
};

export type SybilDotOrgIdentitySource = {
  __typename?: 'SybilDotOrgIdentitySource';
  twitter: SybilDotOrgTwitterIdentity;
};

export type SybilDotOrgTwitterIdentity = {
  __typename?: 'SybilDotOrgTwitterIdentity';
  handle?: Maybe<Scalars['String']>;
};

/** The social comment */
export type TagResult = {
  __typename?: 'TagResult';
  /** The tag */
  tag: Scalars['PublicationTag'];
  /** The total amount of publication tagged */
  total: Scalars['Int'];
};

/** The publications tags sort criteria */
export enum TagSortCriteria {
  Alphabetical = 'ALPHABETICAL',
  MostPopular = 'MOST_POPULAR'
}

export type TimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type TimedFeeCollectModuleSettings = {
  __typename?: 'TimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type TimelineRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** The timeline types you wish to include, if nothing passed in will bring back all */
  timelineTypes?: InputMaybe<Array<TimelineType>>;
};

/** Timeline types */
export enum TimelineType {
  CollectComment = 'COLLECT_COMMENT',
  CollectPost = 'COLLECT_POST',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST'
}

export type TransactionError = {
  __typename?: 'TransactionError';
  reason: TransactionErrorReasons;
  txReceipt?: Maybe<TransactionReceipt>;
};

/** Transaction error reason */
export enum TransactionErrorReasons {
  Reverted = 'REVERTED'
}

export type TransactionIndexedResult = {
  __typename?: 'TransactionIndexedResult';
  indexed: Scalars['Boolean'];
  /** Publications can be indexed but the ipfs link for example not findable for x time. This allows you to work that out for publications. If its not a publication tx then it always be null. */
  metadataStatus?: Maybe<PublicationMetadataStatus>;
  txHash: Scalars['TxHash'];
  txReceipt?: Maybe<TransactionReceipt>;
};

export type TransactionReceipt = {
  __typename?: 'TransactionReceipt';
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  byzantium: Scalars['Boolean'];
  confirmations: Scalars['Int'];
  contractAddress?: Maybe<Scalars['ContractAddress']>;
  cumulativeGasUsed: Scalars['String'];
  effectiveGasPrice: Scalars['String'];
  from: Scalars['EthereumAddress'];
  gasUsed: Scalars['String'];
  logs: Array<Log>;
  logsBloom: Scalars['String'];
  root?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['EthereumAddress']>;
  transactionHash: Scalars['TxHash'];
  transactionIndex: Scalars['Int'];
  type: Scalars['Int'];
};

export type TransactionResult = TransactionError | TransactionIndexedResult;

export type TypedDataOptions = {
  /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
  overrideSigNonce: Scalars['Nonce'];
};

export type UnfollowRequest = {
  profile: Scalars['ProfileId'];
};

export type UnknownCollectModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownCollectModuleSettings = {
  __typename?: 'UnknownCollectModuleSettings';
  /** The data used to setup the module which you can decode with your known ABI  */
  collectModuleReturnData: Scalars['CollectModuleData'];
  contractAddress: Scalars['ContractAddress'];
  /** The collect modules enum */
  type: CollectModules;
};

export type UnknownFollowModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleRedeemParams = {
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleSettings = {
  __typename?: 'UnknownFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The data used to setup the module which you can decode with your known ABI  */
  followModuleReturnData: Scalars['FollowModuleData'];
  /** The follow modules enum */
  type: FollowModules;
};

export type UnknownReferenceModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownReferenceModuleSettings = {
  __typename?: 'UnknownReferenceModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The data used to setup the module which you can decode with your known ABI  */
  referenceModuleReturnData: Scalars['ReferenceModuleData'];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type UpdateProfileImageRequest = {
  /** The nft data */
  nftData?: InputMaybe<NftData>;
  profileId: Scalars['ProfileId'];
  /** The url to the image if offline */
  url?: InputMaybe<Scalars['Url']>;
};

export type UserSigNonces = {
  __typename?: 'UserSigNonces';
  lensHubOnChainSigNonce: Scalars['Nonce'];
  peripheryOnChainSigNonce: Scalars['Nonce'];
};

export type ValidatePublicationMetadataRequest = {
  metadatav1?: InputMaybe<PublicationMetadataV1Input>;
  metadatav2?: InputMaybe<PublicationMetadataV2Input>;
};

/** The access request */
export type VerifyRequest = {
  /** The access token */
  accessToken: Scalars['Jwt'];
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['EthereumAddress'];
  /** The default profile for the wallet for now it is just their first profile, this will be the default profile they picked soon enough */
  defaultProfile?: Maybe<Profile>;
};

export type WhoCollectedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId'];
};

export type WhoReactedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId'];
};

/** The Profile */
export type WhoReactedResult = {
  __typename?: 'WhoReactedResult';
  profile: Profile;
  /** The reaction */
  reaction: ReactionTypes;
  /** The reaction */
  reactionAt: Scalars['DateTime'];
  /** The reaction id */
  reactionId: Scalars['ReactionId'];
};

export type WorldcoinIdentity = {
  __typename?: 'WorldcoinIdentity';
  /** If the profile has verified as a user */
  isHuman: Scalars['Boolean'];
};

export type CreatePostTypedDataMutationVariables = Exact<{
  request: CreatePublicPostRequest;
}>;


export type CreatePostTypedDataMutation = { __typename?: 'Mutation', createPostTypedData: { __typename?: 'CreatePostBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreatePostEIP712TypedData', types: { __typename?: 'CreatePostEIP712TypedDataTypes', PostWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreatePostEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, contentURI: any, collectModule: any, collectModuleInitData: any, referenceModule: any, referenceModuleInitData: any } } } };

export type ProfileQueryVariables = Exact<{
  profileId: Scalars['ProfileId'];
}>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } } | { __typename: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } } | { __typename: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, name: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules } | { __typename?: 'UnknownFollowModuleSettings' } | null } | null };


export const CreatePostTypedDataDocument = gql`
    mutation CreatePostTypedData($request: CreatePublicPostRequest!) {
  createPostTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        PostWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
    }
  }
}
    `;
export type CreatePostTypedDataMutationFn = Apollo.MutationFunction<CreatePostTypedDataMutation, CreatePostTypedDataMutationVariables>;

/**
 * __useCreatePostTypedDataMutation__
 *
 * To run a mutation, you first call `useCreatePostTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostTypedDataMutation, { data, loading, error }] = useCreatePostTypedDataMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreatePostTypedDataMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostTypedDataMutation, CreatePostTypedDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostTypedDataMutation, CreatePostTypedDataMutationVariables>(CreatePostTypedDataDocument, options);
      }
export type CreatePostTypedDataMutationHookResult = ReturnType<typeof useCreatePostTypedDataMutation>;
export type CreatePostTypedDataMutationResult = Apollo.MutationResult<CreatePostTypedDataMutation>;
export type CreatePostTypedDataMutationOptions = Apollo.BaseMutationOptions<CreatePostTypedDataMutation, CreatePostTypedDataMutationVariables>;
export const ProfileDocument = gql`
    query Profile($profileId: ProfileId!) {
  profile(request: {profileId: $profileId}) {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
    followNftAddress
    metadata
    isDefault
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    handle
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    ownedBy
    dispatcher {
      address
      canUseRelay
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            symbol
            name
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
        type
      }
      ... on RevertFollowModuleSettings {
        type
      }
    }
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useProfileQuery(baseOptions: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export type AccessConditionOutputKeySpecifier = ('and' | 'collect' | 'eoa' | 'follow' | 'nft' | 'or' | 'profile' | 'token' | AccessConditionOutputKeySpecifier)[];
export type AccessConditionOutputFieldPolicy = {
	and?: FieldPolicy<any> | FieldReadFunction<any>,
	collect?: FieldPolicy<any> | FieldReadFunction<any>,
	eoa?: FieldPolicy<any> | FieldReadFunction<any>,
	follow?: FieldPolicy<any> | FieldReadFunction<any>,
	nft?: FieldPolicy<any> | FieldReadFunction<any>,
	or?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AndConditionOutputKeySpecifier = ('criteria' | AndConditionOutputKeySpecifier)[];
export type AndConditionOutputFieldPolicy = {
	criteria?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApprovedAllowanceAmountKeySpecifier = ('allowance' | 'contractAddress' | 'currency' | 'module' | ApprovedAllowanceAmountKeySpecifier)[];
export type ApprovedAllowanceAmountFieldPolicy = {
	allowance?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	module?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeKeySpecifier = ('displayType' | 'key' | 'traitType' | 'value' | AttributeKeySpecifier)[];
export type AttributeFieldPolicy = {
	displayType?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	traitType?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthChallengeResultKeySpecifier = ('text' | AuthChallengeResultKeySpecifier)[];
export type AuthChallengeResultFieldPolicy = {
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticationResultKeySpecifier = ('accessToken' | 'refreshToken' | AuthenticationResultKeySpecifier)[];
export type AuthenticationResultFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CanCommentResponseKeySpecifier = ('result' | CanCommentResponseKeySpecifier)[];
export type CanCommentResponseFieldPolicy = {
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CanDecryptResponseKeySpecifier = ('reasons' | 'result' | CanDecryptResponseKeySpecifier)[];
export type CanDecryptResponseFieldPolicy = {
	reasons?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CanMirrorResponseKeySpecifier = ('result' | CanMirrorResponseKeySpecifier)[];
export type CanMirrorResponseFieldPolicy = {
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClaimableHandlesKeySpecifier = ('canClaimFreeTextHandle' | 'reservedHandles' | ClaimableHandlesKeySpecifier)[];
export type ClaimableHandlesFieldPolicy = {
	canClaimFreeTextHandle?: FieldPolicy<any> | FieldReadFunction<any>,
	reservedHandles?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectConditionOutputKeySpecifier = ('publicationId' | 'thisPublication' | CollectConditionOutputKeySpecifier)[];
export type CollectConditionOutputFieldPolicy = {
	publicationId?: FieldPolicy<any> | FieldReadFunction<any>,
	thisPublication?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectedEventKeySpecifier = ('profile' | 'timestamp' | CollectedEventKeySpecifier)[];
export type CollectedEventFieldPolicy = {
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('appId' | 'canComment' | 'canDecrypt' | 'canMirror' | 'collectModule' | 'collectNftAddress' | 'collectedBy' | 'commentOn' | 'createdAt' | 'firstComment' | 'hasCollectedByMe' | 'hidden' | 'id' | 'isGated' | 'mainPost' | 'metadata' | 'mirrors' | 'onChainContentURI' | 'profile' | 'reaction' | 'referenceModule' | 'stats' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	appId?: FieldPolicy<any> | FieldReadFunction<any>,
	canComment?: FieldPolicy<any> | FieldReadFunction<any>,
	canDecrypt?: FieldPolicy<any> | FieldReadFunction<any>,
	canMirror?: FieldPolicy<any> | FieldReadFunction<any>,
	collectModule?: FieldPolicy<any> | FieldReadFunction<any>,
	collectNftAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	collectedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	commentOn?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	firstComment?: FieldPolicy<any> | FieldReadFunction<any>,
	hasCollectedByMe?: FieldPolicy<any> | FieldReadFunction<any>,
	hidden?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isGated?: FieldPolicy<any> | FieldReadFunction<any>,
	mainPost?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	mirrors?: FieldPolicy<any> | FieldReadFunction<any>,
	onChainContentURI?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	reaction?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModule?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateBurnEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreateBurnEIP712TypedDataKeySpecifier)[];
export type CreateBurnEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateBurnEIP712TypedDataTypesKeySpecifier = ('BurnWithSig' | CreateBurnEIP712TypedDataTypesKeySpecifier)[];
export type CreateBurnEIP712TypedDataTypesFieldPolicy = {
	BurnWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateBurnEIP712TypedDataValueKeySpecifier = ('deadline' | 'nonce' | 'tokenId' | CreateBurnEIP712TypedDataValueKeySpecifier)[];
export type CreateBurnEIP712TypedDataValueFieldPolicy = {
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateBurnProfileBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateBurnProfileBroadcastItemResultKeySpecifier)[];
export type CreateBurnProfileBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCollectBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateCollectBroadcastItemResultKeySpecifier)[];
export type CreateCollectBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCollectEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreateCollectEIP712TypedDataKeySpecifier)[];
export type CreateCollectEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCollectEIP712TypedDataTypesKeySpecifier = ('CollectWithSig' | CreateCollectEIP712TypedDataTypesKeySpecifier)[];
export type CreateCollectEIP712TypedDataTypesFieldPolicy = {
	CollectWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCollectEIP712TypedDataValueKeySpecifier = ('data' | 'deadline' | 'nonce' | 'profileId' | 'pubId' | CreateCollectEIP712TypedDataValueKeySpecifier)[];
export type CreateCollectEIP712TypedDataValueFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>,
	pubId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCommentBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateCommentBroadcastItemResultKeySpecifier)[];
export type CreateCommentBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCommentEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreateCommentEIP712TypedDataKeySpecifier)[];
export type CreateCommentEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCommentEIP712TypedDataTypesKeySpecifier = ('CommentWithSig' | CreateCommentEIP712TypedDataTypesKeySpecifier)[];
export type CreateCommentEIP712TypedDataTypesFieldPolicy = {
	CommentWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCommentEIP712TypedDataValueKeySpecifier = ('collectModule' | 'collectModuleInitData' | 'contentURI' | 'deadline' | 'nonce' | 'profileId' | 'profileIdPointed' | 'pubIdPointed' | 'referenceModule' | 'referenceModuleData' | 'referenceModuleInitData' | CreateCommentEIP712TypedDataValueKeySpecifier)[];
export type CreateCommentEIP712TypedDataValueFieldPolicy = {
	collectModule?: FieldPolicy<any> | FieldReadFunction<any>,
	collectModuleInitData?: FieldPolicy<any> | FieldReadFunction<any>,
	contentURI?: FieldPolicy<any> | FieldReadFunction<any>,
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>,
	profileIdPointed?: FieldPolicy<any> | FieldReadFunction<any>,
	pubIdPointed?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModule?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModuleData?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModuleInitData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateFollowBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateFollowBroadcastItemResultKeySpecifier)[];
export type CreateFollowBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateFollowEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreateFollowEIP712TypedDataKeySpecifier)[];
export type CreateFollowEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateFollowEIP712TypedDataTypesKeySpecifier = ('FollowWithSig' | CreateFollowEIP712TypedDataTypesKeySpecifier)[];
export type CreateFollowEIP712TypedDataTypesFieldPolicy = {
	FollowWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateFollowEIP712TypedDataValueKeySpecifier = ('datas' | 'deadline' | 'nonce' | 'profileIds' | CreateFollowEIP712TypedDataValueKeySpecifier)[];
export type CreateFollowEIP712TypedDataValueFieldPolicy = {
	datas?: FieldPolicy<any> | FieldReadFunction<any>,
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileIds?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateMirrorBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateMirrorBroadcastItemResultKeySpecifier)[];
export type CreateMirrorBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateMirrorEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreateMirrorEIP712TypedDataKeySpecifier)[];
export type CreateMirrorEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateMirrorEIP712TypedDataTypesKeySpecifier = ('MirrorWithSig' | CreateMirrorEIP712TypedDataTypesKeySpecifier)[];
export type CreateMirrorEIP712TypedDataTypesFieldPolicy = {
	MirrorWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateMirrorEIP712TypedDataValueKeySpecifier = ('deadline' | 'nonce' | 'profileId' | 'profileIdPointed' | 'pubIdPointed' | 'referenceModule' | 'referenceModuleData' | 'referenceModuleInitData' | CreateMirrorEIP712TypedDataValueKeySpecifier)[];
export type CreateMirrorEIP712TypedDataValueFieldPolicy = {
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>,
	profileIdPointed?: FieldPolicy<any> | FieldReadFunction<any>,
	pubIdPointed?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModule?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModuleData?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModuleInitData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePostBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreatePostBroadcastItemResultKeySpecifier)[];
export type CreatePostBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePostEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreatePostEIP712TypedDataKeySpecifier)[];
export type CreatePostEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePostEIP712TypedDataTypesKeySpecifier = ('PostWithSig' | CreatePostEIP712TypedDataTypesKeySpecifier)[];
export type CreatePostEIP712TypedDataTypesFieldPolicy = {
	PostWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePostEIP712TypedDataValueKeySpecifier = ('collectModule' | 'collectModuleInitData' | 'contentURI' | 'deadline' | 'nonce' | 'profileId' | 'referenceModule' | 'referenceModuleInitData' | CreatePostEIP712TypedDataValueKeySpecifier)[];
export type CreatePostEIP712TypedDataValueFieldPolicy = {
	collectModule?: FieldPolicy<any> | FieldReadFunction<any>,
	collectModuleInitData?: FieldPolicy<any> | FieldReadFunction<any>,
	contentURI?: FieldPolicy<any> | FieldReadFunction<any>,
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModule?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModuleInitData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetDispatcherBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateSetDispatcherBroadcastItemResultKeySpecifier)[];
export type CreateSetDispatcherBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetDispatcherEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreateSetDispatcherEIP712TypedDataKeySpecifier)[];
export type CreateSetDispatcherEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetDispatcherEIP712TypedDataTypesKeySpecifier = ('SetDispatcherWithSig' | CreateSetDispatcherEIP712TypedDataTypesKeySpecifier)[];
export type CreateSetDispatcherEIP712TypedDataTypesFieldPolicy = {
	SetDispatcherWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetDispatcherEIP712TypedDataValueKeySpecifier = ('deadline' | 'dispatcher' | 'nonce' | 'profileId' | CreateSetDispatcherEIP712TypedDataValueKeySpecifier)[];
export type CreateSetDispatcherEIP712TypedDataValueFieldPolicy = {
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	dispatcher?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetFollowModuleBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateSetFollowModuleBroadcastItemResultKeySpecifier)[];
export type CreateSetFollowModuleBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetFollowModuleEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreateSetFollowModuleEIP712TypedDataKeySpecifier)[];
export type CreateSetFollowModuleEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetFollowModuleEIP712TypedDataTypesKeySpecifier = ('SetFollowModuleWithSig' | CreateSetFollowModuleEIP712TypedDataTypesKeySpecifier)[];
export type CreateSetFollowModuleEIP712TypedDataTypesFieldPolicy = {
	SetFollowModuleWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetFollowModuleEIP712TypedDataValueKeySpecifier = ('deadline' | 'followModule' | 'followModuleInitData' | 'nonce' | 'profileId' | CreateSetFollowModuleEIP712TypedDataValueKeySpecifier)[];
export type CreateSetFollowModuleEIP712TypedDataValueFieldPolicy = {
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	followModule?: FieldPolicy<any> | FieldReadFunction<any>,
	followModuleInitData?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetFollowNFTUriBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateSetFollowNFTUriBroadcastItemResultKeySpecifier)[];
export type CreateSetFollowNFTUriBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetFollowNFTUriEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreateSetFollowNFTUriEIP712TypedDataKeySpecifier)[];
export type CreateSetFollowNFTUriEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetFollowNFTUriEIP712TypedDataTypesKeySpecifier = ('SetFollowNFTURIWithSig' | CreateSetFollowNFTUriEIP712TypedDataTypesKeySpecifier)[];
export type CreateSetFollowNFTUriEIP712TypedDataTypesFieldPolicy = {
	SetFollowNFTURIWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetFollowNFTUriEIP712TypedDataValueKeySpecifier = ('deadline' | 'followNFTURI' | 'nonce' | 'profileId' | CreateSetFollowNFTUriEIP712TypedDataValueKeySpecifier)[];
export type CreateSetFollowNFTUriEIP712TypedDataValueFieldPolicy = {
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	followNFTURI?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetProfileImageUriBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateSetProfileImageUriBroadcastItemResultKeySpecifier)[];
export type CreateSetProfileImageUriBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetProfileImageUriEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreateSetProfileImageUriEIP712TypedDataKeySpecifier)[];
export type CreateSetProfileImageUriEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetProfileImageUriEIP712TypedDataTypesKeySpecifier = ('SetProfileImageURIWithSig' | CreateSetProfileImageUriEIP712TypedDataTypesKeySpecifier)[];
export type CreateSetProfileImageUriEIP712TypedDataTypesFieldPolicy = {
	SetProfileImageURIWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetProfileImageUriEIP712TypedDataValueKeySpecifier = ('deadline' | 'imageURI' | 'nonce' | 'profileId' | CreateSetProfileImageUriEIP712TypedDataValueKeySpecifier)[];
export type CreateSetProfileImageUriEIP712TypedDataValueFieldPolicy = {
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	imageURI?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetProfileMetadataURIBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateSetProfileMetadataURIBroadcastItemResultKeySpecifier)[];
export type CreateSetProfileMetadataURIBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetProfileMetadataURIEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreateSetProfileMetadataURIEIP712TypedDataKeySpecifier)[];
export type CreateSetProfileMetadataURIEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetProfileMetadataURIEIP712TypedDataTypesKeySpecifier = ('SetProfileMetadataURIWithSig' | CreateSetProfileMetadataURIEIP712TypedDataTypesKeySpecifier)[];
export type CreateSetProfileMetadataURIEIP712TypedDataTypesFieldPolicy = {
	SetProfileMetadataURIWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetProfileMetadataURIEIP712TypedDataValueKeySpecifier = ('deadline' | 'metadata' | 'nonce' | 'profileId' | CreateSetProfileMetadataURIEIP712TypedDataValueKeySpecifier)[];
export type CreateSetProfileMetadataURIEIP712TypedDataValueFieldPolicy = {
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateToggleFollowBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateToggleFollowBroadcastItemResultKeySpecifier)[];
export type CreateToggleFollowBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateToggleFollowEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | CreateToggleFollowEIP712TypedDataKeySpecifier)[];
export type CreateToggleFollowEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateToggleFollowEIP712TypedDataTypesKeySpecifier = ('ToggleFollowWithSig' | CreateToggleFollowEIP712TypedDataTypesKeySpecifier)[];
export type CreateToggleFollowEIP712TypedDataTypesFieldPolicy = {
	ToggleFollowWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateToggleFollowEIP712TypedDataValueKeySpecifier = ('deadline' | 'enables' | 'nonce' | 'profileIds' | CreateToggleFollowEIP712TypedDataValueKeySpecifier)[];
export type CreateToggleFollowEIP712TypedDataValueFieldPolicy = {
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	enables?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileIds?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateUnfollowBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | CreateUnfollowBroadcastItemResultKeySpecifier)[];
export type CreateUnfollowBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DegreesOfSeparationReferenceModuleSettingsKeySpecifier = ('commentsRestricted' | 'contractAddress' | 'degreesOfSeparation' | 'mirrorsRestricted' | 'type' | DegreesOfSeparationReferenceModuleSettingsKeySpecifier)[];
export type DegreesOfSeparationReferenceModuleSettingsFieldPolicy = {
	commentsRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	degreesOfSeparation?: FieldPolicy<any> | FieldReadFunction<any>,
	mirrorsRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DispatcherKeySpecifier = ('address' | 'canUseRelay' | DispatcherKeySpecifier)[];
export type DispatcherFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	canUseRelay?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DoesFollowResponseKeySpecifier = ('followerAddress' | 'follows' | 'isFinalisedOnChain' | 'profileId' | DoesFollowResponseKeySpecifier)[];
export type DoesFollowResponseFieldPolicy = {
	followerAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	follows?: FieldPolicy<any> | FieldReadFunction<any>,
	isFinalisedOnChain?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EIP712TypedDataDomainKeySpecifier = ('chainId' | 'name' | 'verifyingContract' | 'version' | EIP712TypedDataDomainKeySpecifier)[];
export type EIP712TypedDataDomainFieldPolicy = {
	chainId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyingContract?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EIP712TypedDataFieldKeySpecifier = ('name' | 'type' | EIP712TypedDataFieldKeySpecifier)[];
export type EIP712TypedDataFieldFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ElectedMirrorKeySpecifier = ('mirrorId' | 'profile' | 'timestamp' | ElectedMirrorKeySpecifier)[];
export type ElectedMirrorFieldPolicy = {
	mirrorId?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnabledModuleKeySpecifier = ('contractAddress' | 'inputParams' | 'moduleName' | 'redeemParams' | 'returnDataParms' | EnabledModuleKeySpecifier)[];
export type EnabledModuleFieldPolicy = {
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	inputParams?: FieldPolicy<any> | FieldReadFunction<any>,
	moduleName?: FieldPolicy<any> | FieldReadFunction<any>,
	redeemParams?: FieldPolicy<any> | FieldReadFunction<any>,
	returnDataParms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnabledModulesKeySpecifier = ('collectModules' | 'followModules' | 'referenceModules' | EnabledModulesKeySpecifier)[];
export type EnabledModulesFieldPolicy = {
	collectModules?: FieldPolicy<any> | FieldReadFunction<any>,
	followModules?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModules?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EncryptedFieldsOutputKeySpecifier = ('animation_url' | 'content' | 'external_url' | 'image' | 'media' | EncryptedFieldsOutputKeySpecifier)[];
export type EncryptedFieldsOutputFieldPolicy = {
	animation_url?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	external_url?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EncryptedMediaKeySpecifier = ('altTag' | 'cover' | 'height' | 'mimeType' | 'size' | 'url' | 'width' | EncryptedMediaKeySpecifier)[];
export type EncryptedMediaFieldPolicy = {
	altTag?: FieldPolicy<any> | FieldReadFunction<any>,
	cover?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EncryptedMediaSetKeySpecifier = ('medium' | 'original' | 'small' | EncryptedMediaSetKeySpecifier)[];
export type EncryptedMediaSetFieldPolicy = {
	medium?: FieldPolicy<any> | FieldReadFunction<any>,
	original?: FieldPolicy<any> | FieldReadFunction<any>,
	small?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EncryptionParamsOutputKeySpecifier = ('accessCondition' | 'encryptedFields' | 'encryptionProvider' | 'providerSpecificParams' | EncryptionParamsOutputKeySpecifier)[];
export type EncryptionParamsOutputFieldPolicy = {
	accessCondition?: FieldPolicy<any> | FieldReadFunction<any>,
	encryptedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	encryptionProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	providerSpecificParams?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnsOnChainIdentityKeySpecifier = ('name' | EnsOnChainIdentityKeySpecifier)[];
export type EnsOnChainIdentityFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EoaOwnershipOutputKeySpecifier = ('address' | EoaOwnershipOutputKeySpecifier)[];
export type EoaOwnershipOutputFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Erc20KeySpecifier = ('address' | 'decimals' | 'name' | 'symbol' | Erc20KeySpecifier)[];
export type Erc20FieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	decimals?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Erc20AmountKeySpecifier = ('asset' | 'value' | Erc20AmountKeySpecifier)[];
export type Erc20AmountFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Erc20OwnershipOutputKeySpecifier = ('amount' | 'chainID' | 'condition' | 'contractAddress' | 'decimals' | Erc20OwnershipOutputKeySpecifier)[];
export type Erc20OwnershipOutputFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	chainID?: FieldPolicy<any> | FieldReadFunction<any>,
	condition?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	decimals?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExploreProfileResultKeySpecifier = ('items' | 'pageInfo' | ExploreProfileResultKeySpecifier)[];
export type ExploreProfileResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExplorePublicationResultKeySpecifier = ('items' | 'pageInfo' | ExplorePublicationResultKeySpecifier)[];
export type ExplorePublicationResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeCollectModuleSettingsKeySpecifier = ('amount' | 'contractAddress' | 'followerOnly' | 'recipient' | 'referralFee' | 'type' | FeeCollectModuleSettingsKeySpecifier)[];
export type FeeCollectModuleSettingsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	followerOnly?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>,
	referralFee?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeFollowModuleSettingsKeySpecifier = ('amount' | 'contractAddress' | 'recipient' | 'type' | FeeFollowModuleSettingsKeySpecifier)[];
export type FeeFollowModuleSettingsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeedItemKeySpecifier = ('collects' | 'comments' | 'electedMirror' | 'mirrors' | 'reactions' | 'root' | FeedItemKeySpecifier)[];
export type FeedItemFieldPolicy = {
	collects?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	electedMirror?: FieldPolicy<any> | FieldReadFunction<any>,
	mirrors?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	root?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FollowConditionOutputKeySpecifier = ('profileId' | FollowConditionOutputKeySpecifier)[];
export type FollowConditionOutputFieldPolicy = {
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FollowOnlyReferenceModuleSettingsKeySpecifier = ('contractAddress' | 'type' | FollowOnlyReferenceModuleSettingsKeySpecifier)[];
export type FollowOnlyReferenceModuleSettingsFieldPolicy = {
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FollowRevenueResultKeySpecifier = ('revenues' | FollowRevenueResultKeySpecifier)[];
export type FollowRevenueResultFieldPolicy = {
	revenues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FollowerKeySpecifier = ('totalAmountOfTimesFollowed' | 'wallet' | FollowerKeySpecifier)[];
export type FollowerFieldPolicy = {
	totalAmountOfTimesFollowed?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FollowerNftOwnedTokenIdsKeySpecifier = ('followerNftAddress' | 'tokensIds' | FollowerNftOwnedTokenIdsKeySpecifier)[];
export type FollowerNftOwnedTokenIdsFieldPolicy = {
	followerNftAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	tokensIds?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FollowingKeySpecifier = ('profile' | 'totalAmountOfTimesFollowing' | FollowingKeySpecifier)[];
export type FollowingFieldPolicy = {
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	totalAmountOfTimesFollowing?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FreeCollectModuleSettingsKeySpecifier = ('contractAddress' | 'followerOnly' | 'type' | FreeCollectModuleSettingsKeySpecifier)[];
export type FreeCollectModuleSettingsFieldPolicy = {
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	followerOnly?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenerateModuleCurrencyApprovalKeySpecifier = ('data' | 'from' | 'to' | GenerateModuleCurrencyApprovalKeySpecifier)[];
export type GenerateModuleCurrencyApprovalFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GlobalProtocolStatsKeySpecifier = ('totalBurntProfiles' | 'totalCollects' | 'totalComments' | 'totalFollows' | 'totalMirrors' | 'totalPosts' | 'totalProfiles' | 'totalRevenue' | GlobalProtocolStatsKeySpecifier)[];
export type GlobalProtocolStatsFieldPolicy = {
	totalBurntProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCollects?: FieldPolicy<any> | FieldReadFunction<any>,
	totalComments?: FieldPolicy<any> | FieldReadFunction<any>,
	totalFollows?: FieldPolicy<any> | FieldReadFunction<any>,
	totalMirrors?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	totalProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRevenue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LimitedFeeCollectModuleSettingsKeySpecifier = ('amount' | 'collectLimit' | 'contractAddress' | 'followerOnly' | 'recipient' | 'referralFee' | 'type' | LimitedFeeCollectModuleSettingsKeySpecifier)[];
export type LimitedFeeCollectModuleSettingsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	collectLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	followerOnly?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>,
	referralFee?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LimitedTimedFeeCollectModuleSettingsKeySpecifier = ('amount' | 'collectLimit' | 'contractAddress' | 'endTimestamp' | 'followerOnly' | 'recipient' | 'referralFee' | 'type' | LimitedTimedFeeCollectModuleSettingsKeySpecifier)[];
export type LimitedTimedFeeCollectModuleSettingsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	collectLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	endTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	followerOnly?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>,
	referralFee?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogKeySpecifier = ('address' | 'blockHash' | 'blockNumber' | 'data' | 'logIndex' | 'removed' | 'topics' | 'transactionHash' | 'transactionIndex' | LogKeySpecifier)[];
export type LogFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	blockHash?: FieldPolicy<any> | FieldReadFunction<any>,
	blockNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	logIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	removed?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionHash?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionIndex?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaKeySpecifier = ('altTag' | 'cover' | 'height' | 'mimeType' | 'size' | 'url' | 'width' | MediaKeySpecifier)[];
export type MediaFieldPolicy = {
	altTag?: FieldPolicy<any> | FieldReadFunction<any>,
	cover?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaOutputKeySpecifier = ('altTag' | 'cover' | 'item' | 'source' | 'type' | MediaOutputKeySpecifier)[];
export type MediaOutputFieldPolicy = {
	altTag?: FieldPolicy<any> | FieldReadFunction<any>,
	cover?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaSetKeySpecifier = ('medium' | 'original' | 'small' | MediaSetKeySpecifier)[];
export type MediaSetFieldPolicy = {
	medium?: FieldPolicy<any> | FieldReadFunction<any>,
	original?: FieldPolicy<any> | FieldReadFunction<any>,
	small?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetadataAttributeOutputKeySpecifier = ('displayType' | 'traitType' | 'value' | MetadataAttributeOutputKeySpecifier)[];
export type MetadataAttributeOutputFieldPolicy = {
	displayType?: FieldPolicy<any> | FieldReadFunction<any>,
	traitType?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetadataOutputKeySpecifier = ('animatedUrl' | 'attributes' | 'content' | 'contentWarning' | 'cover' | 'description' | 'encryptionParams' | 'image' | 'locale' | 'mainContentFocus' | 'media' | 'name' | 'tags' | MetadataOutputKeySpecifier)[];
export type MetadataOutputFieldPolicy = {
	animatedUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentWarning?: FieldPolicy<any> | FieldReadFunction<any>,
	cover?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	encryptionParams?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	mainContentFocus?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MirrorKeySpecifier = ('appId' | 'canComment' | 'canDecrypt' | 'canMirror' | 'collectModule' | 'collectNftAddress' | 'createdAt' | 'hasCollectedByMe' | 'hidden' | 'id' | 'isGated' | 'metadata' | 'mirrorOf' | 'onChainContentURI' | 'profile' | 'reaction' | 'referenceModule' | 'stats' | MirrorKeySpecifier)[];
export type MirrorFieldPolicy = {
	appId?: FieldPolicy<any> | FieldReadFunction<any>,
	canComment?: FieldPolicy<any> | FieldReadFunction<any>,
	canDecrypt?: FieldPolicy<any> | FieldReadFunction<any>,
	canMirror?: FieldPolicy<any> | FieldReadFunction<any>,
	collectModule?: FieldPolicy<any> | FieldReadFunction<any>,
	collectNftAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hasCollectedByMe?: FieldPolicy<any> | FieldReadFunction<any>,
	hidden?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isGated?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	mirrorOf?: FieldPolicy<any> | FieldReadFunction<any>,
	onChainContentURI?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	reaction?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModule?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MirrorEventKeySpecifier = ('profile' | 'timestamp' | MirrorEventKeySpecifier)[];
export type MirrorEventFieldPolicy = {
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModuleFeeAmountKeySpecifier = ('asset' | 'value' | ModuleFeeAmountKeySpecifier)[];
export type ModuleFeeAmountFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModuleInfoKeySpecifier = ('name' | 'type' | ModuleInfoKeySpecifier)[];
export type ModuleInfoFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('ach' | 'addProfileInterests' | 'addReaction' | 'authenticate' | 'broadcast' | 'claim' | 'createAttachMediaData' | 'createBurnProfileTypedData' | 'createCollectTypedData' | 'createCommentTypedData' | 'createCommentViaDispatcher' | 'createFollowTypedData' | 'createMirrorTypedData' | 'createMirrorViaDispatcher' | 'createPostTypedData' | 'createPostViaDispatcher' | 'createProfile' | 'createSetDefaultProfileTypedData' | 'createSetDispatcherTypedData' | 'createSetFollowModuleTypedData' | 'createSetFollowNFTUriTypedData' | 'createSetProfileImageURITypedData' | 'createSetProfileImageURIViaDispatcher' | 'createSetProfileMetadataTypedData' | 'createSetProfileMetadataViaDispatcher' | 'createToggleFollowTypedData' | 'createUnfollowTypedData' | 'hidePublication' | 'proxyAction' | 'refresh' | 'removeProfileInterests' | 'removeReaction' | 'reportPublication' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	ach?: FieldPolicy<any> | FieldReadFunction<any>,
	addProfileInterests?: FieldPolicy<any> | FieldReadFunction<any>,
	addReaction?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticate?: FieldPolicy<any> | FieldReadFunction<any>,
	broadcast?: FieldPolicy<any> | FieldReadFunction<any>,
	claim?: FieldPolicy<any> | FieldReadFunction<any>,
	createAttachMediaData?: FieldPolicy<any> | FieldReadFunction<any>,
	createBurnProfileTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createCollectTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommentTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommentViaDispatcher?: FieldPolicy<any> | FieldReadFunction<any>,
	createFollowTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createMirrorTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createMirrorViaDispatcher?: FieldPolicy<any> | FieldReadFunction<any>,
	createPostTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createPostViaDispatcher?: FieldPolicy<any> | FieldReadFunction<any>,
	createProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	createSetDefaultProfileTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createSetDispatcherTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createSetFollowModuleTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createSetFollowNFTUriTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createSetProfileImageURITypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createSetProfileImageURIViaDispatcher?: FieldPolicy<any> | FieldReadFunction<any>,
	createSetProfileMetadataTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createSetProfileMetadataViaDispatcher?: FieldPolicy<any> | FieldReadFunction<any>,
	createToggleFollowTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	createUnfollowTypedData?: FieldPolicy<any> | FieldReadFunction<any>,
	hidePublication?: FieldPolicy<any> | FieldReadFunction<any>,
	proxyAction?: FieldPolicy<any> | FieldReadFunction<any>,
	refresh?: FieldPolicy<any> | FieldReadFunction<any>,
	removeProfileInterests?: FieldPolicy<any> | FieldReadFunction<any>,
	removeReaction?: FieldPolicy<any> | FieldReadFunction<any>,
	reportPublication?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NFTKeySpecifier = ('chainId' | 'collectionName' | 'contentURI' | 'contractAddress' | 'contractName' | 'description' | 'ercType' | 'name' | 'originalContent' | 'owners' | 'symbol' | 'tokenId' | NFTKeySpecifier)[];
export type NFTFieldPolicy = {
	chainId?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionName?: FieldPolicy<any> | FieldReadFunction<any>,
	contentURI?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	contractName?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	ercType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	originalContent?: FieldPolicy<any> | FieldReadFunction<any>,
	owners?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NFTContentKeySpecifier = ('animatedUrl' | 'metaType' | 'uri' | NFTContentKeySpecifier)[];
export type NFTContentFieldPolicy = {
	animatedUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	metaType?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NFTsResultKeySpecifier = ('items' | 'pageInfo' | NFTsResultKeySpecifier)[];
export type NFTsResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewCollectNotificationKeySpecifier = ('collectedPublication' | 'createdAt' | 'notificationId' | 'wallet' | NewCollectNotificationKeySpecifier)[];
export type NewCollectNotificationFieldPolicy = {
	collectedPublication?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationId?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewCommentNotificationKeySpecifier = ('comment' | 'createdAt' | 'notificationId' | 'profile' | NewCommentNotificationKeySpecifier)[];
export type NewCommentNotificationFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationId?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewFollowerNotificationKeySpecifier = ('createdAt' | 'isFollowedByMe' | 'notificationId' | 'wallet' | NewFollowerNotificationKeySpecifier)[];
export type NewFollowerNotificationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	isFollowedByMe?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationId?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewMentionNotificationKeySpecifier = ('createdAt' | 'mentionPublication' | 'notificationId' | NewMentionNotificationKeySpecifier)[];
export type NewMentionNotificationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	mentionPublication?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewMirrorNotificationKeySpecifier = ('createdAt' | 'notificationId' | 'profile' | 'publication' | NewMirrorNotificationKeySpecifier)[];
export type NewMirrorNotificationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationId?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	publication?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewReactionNotificationKeySpecifier = ('createdAt' | 'notificationId' | 'profile' | 'publication' | 'reaction' | NewReactionNotificationKeySpecifier)[];
export type NewReactionNotificationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationId?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	publication?: FieldPolicy<any> | FieldReadFunction<any>,
	reaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NftImageKeySpecifier = ('chainId' | 'contractAddress' | 'tokenId' | 'uri' | 'verified' | NftImageKeySpecifier)[];
export type NftImageFieldPolicy = {
	chainId?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenId?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	verified?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NftOwnershipChallengeResultKeySpecifier = ('id' | 'text' | 'timeout' | NftOwnershipChallengeResultKeySpecifier)[];
export type NftOwnershipChallengeResultFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	timeout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NftOwnershipOutputKeySpecifier = ('chainID' | 'contractAddress' | 'contractType' | 'tokenIds' | NftOwnershipOutputKeySpecifier)[];
export type NftOwnershipOutputFieldPolicy = {
	chainID?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	contractType?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenIds?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OnChainIdentityKeySpecifier = ('ens' | 'proofOfHumanity' | 'sybilDotOrg' | 'worldcoin' | OnChainIdentityKeySpecifier)[];
export type OnChainIdentityFieldPolicy = {
	ens?: FieldPolicy<any> | FieldReadFunction<any>,
	proofOfHumanity?: FieldPolicy<any> | FieldReadFunction<any>,
	sybilDotOrg?: FieldPolicy<any> | FieldReadFunction<any>,
	worldcoin?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrConditionOutputKeySpecifier = ('criteria' | OrConditionOutputKeySpecifier)[];
export type OrConditionOutputFieldPolicy = {
	criteria?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OwnerKeySpecifier = ('address' | 'amount' | OwnerKeySpecifier)[];
export type OwnerFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedAllPublicationsTagsResultKeySpecifier = ('items' | 'pageInfo' | PaginatedAllPublicationsTagsResultKeySpecifier)[];
export type PaginatedAllPublicationsTagsResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedFeedResultKeySpecifier = ('items' | 'pageInfo' | PaginatedFeedResultKeySpecifier)[];
export type PaginatedFeedResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedFollowersResultKeySpecifier = ('items' | 'pageInfo' | PaginatedFollowersResultKeySpecifier)[];
export type PaginatedFollowersResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedFollowingResultKeySpecifier = ('items' | 'pageInfo' | PaginatedFollowingResultKeySpecifier)[];
export type PaginatedFollowingResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedNotificationResultKeySpecifier = ('items' | 'pageInfo' | PaginatedNotificationResultKeySpecifier)[];
export type PaginatedNotificationResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedProfilePublicationsForSaleResultKeySpecifier = ('items' | 'pageInfo' | PaginatedProfilePublicationsForSaleResultKeySpecifier)[];
export type PaginatedProfilePublicationsForSaleResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedProfileResultKeySpecifier = ('items' | 'pageInfo' | PaginatedProfileResultKeySpecifier)[];
export type PaginatedProfileResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedPublicationResultKeySpecifier = ('items' | 'pageInfo' | PaginatedPublicationResultKeySpecifier)[];
export type PaginatedPublicationResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedResultInfoKeySpecifier = ('next' | 'prev' | 'totalCount' | PaginatedResultInfoKeySpecifier)[];
export type PaginatedResultInfoFieldPolicy = {
	next?: FieldPolicy<any> | FieldReadFunction<any>,
	prev?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedTimelineResultKeySpecifier = ('items' | 'pageInfo' | PaginatedTimelineResultKeySpecifier)[];
export type PaginatedTimelineResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedWhoCollectedResultKeySpecifier = ('items' | 'pageInfo' | PaginatedWhoCollectedResultKeySpecifier)[];
export type PaginatedWhoCollectedResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatedWhoReactedResultKeySpecifier = ('items' | 'pageInfo' | PaginatedWhoReactedResultKeySpecifier)[];
export type PaginatedWhoReactedResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PendingApproveFollowsResultKeySpecifier = ('items' | 'pageInfo' | PendingApproveFollowsResultKeySpecifier)[];
export type PendingApproveFollowsResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('appId' | 'canComment' | 'canDecrypt' | 'canMirror' | 'collectModule' | 'collectNftAddress' | 'collectedBy' | 'createdAt' | 'hasCollectedByMe' | 'hidden' | 'id' | 'isGated' | 'metadata' | 'mirrors' | 'onChainContentURI' | 'profile' | 'reaction' | 'referenceModule' | 'stats' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	appId?: FieldPolicy<any> | FieldReadFunction<any>,
	canComment?: FieldPolicy<any> | FieldReadFunction<any>,
	canDecrypt?: FieldPolicy<any> | FieldReadFunction<any>,
	canMirror?: FieldPolicy<any> | FieldReadFunction<any>,
	collectModule?: FieldPolicy<any> | FieldReadFunction<any>,
	collectNftAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	collectedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hasCollectedByMe?: FieldPolicy<any> | FieldReadFunction<any>,
	hidden?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isGated?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	mirrors?: FieldPolicy<any> | FieldReadFunction<any>,
	onChainContentURI?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	reaction?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModule?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileKeySpecifier = ('attributes' | 'bio' | 'coverPicture' | 'dispatcher' | 'followModule' | 'followNftAddress' | 'handle' | 'id' | 'interests' | 'isDefault' | 'isFollowedByMe' | 'isFollowing' | 'metadata' | 'name' | 'onChainIdentity' | 'ownedBy' | 'picture' | 'stats' | ProfileKeySpecifier)[];
export type ProfileFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	coverPicture?: FieldPolicy<any> | FieldReadFunction<any>,
	dispatcher?: FieldPolicy<any> | FieldReadFunction<any>,
	followModule?: FieldPolicy<any> | FieldReadFunction<any>,
	followNftAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	interests?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	isFollowedByMe?: FieldPolicy<any> | FieldReadFunction<any>,
	isFollowing?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	onChainIdentity?: FieldPolicy<any> | FieldReadFunction<any>,
	ownedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileFollowModuleSettingsKeySpecifier = ('contractAddress' | 'type' | ProfileFollowModuleSettingsKeySpecifier)[];
export type ProfileFollowModuleSettingsFieldPolicy = {
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileOwnershipOutputKeySpecifier = ('profileId' | ProfileOwnershipOutputKeySpecifier)[];
export type ProfileOwnershipOutputFieldPolicy = {
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfilePublicationRevenueResultKeySpecifier = ('items' | 'pageInfo' | ProfilePublicationRevenueResultKeySpecifier)[];
export type ProfilePublicationRevenueResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileSearchResultKeySpecifier = ('items' | 'pageInfo' | 'type' | ProfileSearchResultKeySpecifier)[];
export type ProfileSearchResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileStatsKeySpecifier = ('commentsTotal' | 'id' | 'mirrorsTotal' | 'postsTotal' | 'publicationsTotal' | 'totalCollects' | 'totalComments' | 'totalFollowers' | 'totalFollowing' | 'totalMirrors' | 'totalPosts' | 'totalPublications' | ProfileStatsKeySpecifier)[];
export type ProfileStatsFieldPolicy = {
	commentsTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mirrorsTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	postsTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationsTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCollects?: FieldPolicy<any> | FieldReadFunction<any>,
	totalComments?: FieldPolicy<any> | FieldReadFunction<any>,
	totalFollowers?: FieldPolicy<any> | FieldReadFunction<any>,
	totalFollowing?: FieldPolicy<any> | FieldReadFunction<any>,
	totalMirrors?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPublications?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProviderSpecificParamsOutputKeySpecifier = ('encryptionKey' | ProviderSpecificParamsOutputKeySpecifier)[];
export type ProviderSpecificParamsOutputFieldPolicy = {
	encryptionKey?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProxyActionErrorKeySpecifier = ('lastKnownTxId' | 'reason' | ProxyActionErrorKeySpecifier)[];
export type ProxyActionErrorFieldPolicy = {
	lastKnownTxId?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProxyActionQueuedKeySpecifier = ('queuedAt' | ProxyActionQueuedKeySpecifier)[];
export type ProxyActionQueuedFieldPolicy = {
	queuedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProxyActionStatusResultKeySpecifier = ('status' | 'txHash' | 'txId' | ProxyActionStatusResultKeySpecifier)[];
export type ProxyActionStatusResultFieldPolicy = {
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	txId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicMediaResultsKeySpecifier = ('media' | 'signedUrl' | PublicMediaResultsKeySpecifier)[];
export type PublicMediaResultsFieldPolicy = {
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	signedUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicationMetadataStatusKeySpecifier = ('reason' | 'status' | PublicationMetadataStatusKeySpecifier)[];
export type PublicationMetadataStatusFieldPolicy = {
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicationRevenueKeySpecifier = ('publication' | 'revenue' | PublicationRevenueKeySpecifier)[];
export type PublicationRevenueFieldPolicy = {
	publication?: FieldPolicy<any> | FieldReadFunction<any>,
	revenue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicationSearchResultKeySpecifier = ('items' | 'pageInfo' | 'type' | PublicationSearchResultKeySpecifier)[];
export type PublicationSearchResultFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicationStatsKeySpecifier = ('commentsTotal' | 'id' | 'totalAmountOfCollects' | 'totalAmountOfComments' | 'totalAmountOfMirrors' | 'totalDownvotes' | 'totalUpvotes' | PublicationStatsKeySpecifier)[];
export type PublicationStatsFieldPolicy = {
	commentsTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	totalAmountOfCollects?: FieldPolicy<any> | FieldReadFunction<any>,
	totalAmountOfComments?: FieldPolicy<any> | FieldReadFunction<any>,
	totalAmountOfMirrors?: FieldPolicy<any> | FieldReadFunction<any>,
	totalDownvotes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalUpvotes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicationValidateMetadataResultKeySpecifier = ('reason' | 'valid' | PublicationValidateMetadataResultKeySpecifier)[];
export type PublicationValidateMetadataResultFieldPolicy = {
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	valid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('allPublicationsTags' | 'approvedModuleAllowanceAmount' | 'challenge' | 'claimableHandles' | 'claimableStatus' | 'defaultProfile' | 'doesFollow' | 'enabledModuleCurrencies' | 'enabledModules' | 'exploreProfiles' | 'explorePublications' | 'feed' | 'feedHighlights' | 'followerNftOwnedTokenIds' | 'followers' | 'following' | 'generateModuleCurrencyApprovalData' | 'globalProtocolStats' | 'hasTxHashBeenIndexed' | 'internalPublicationFilter' | 'mutualFollowersProfiles' | 'nftOwnershipChallenge' | 'nfts' | 'notifications' | 'pendingApprovalFollows' | 'ping' | 'profile' | 'profileFollowModuleBeenRedeemed' | 'profileFollowRevenue' | 'profileInterests' | 'profileOnChainIdentity' | 'profilePublicationRevenue' | 'profilePublicationsForSale' | 'profiles' | 'proxyActionStatus' | 'publication' | 'publicationMetadataStatus' | 'publicationRevenue' | 'publications' | 'recommendedProfiles' | 'rel' | 'search' | 'timeline' | 'txIdToTxHash' | 'unknownEnabledModules' | 'userSigNonces' | 'validatePublicationMetadata' | 'verify' | 'whoCollectedPublication' | 'whoReactedPublication' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	allPublicationsTags?: FieldPolicy<any> | FieldReadFunction<any>,
	approvedModuleAllowanceAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	challenge?: FieldPolicy<any> | FieldReadFunction<any>,
	claimableHandles?: FieldPolicy<any> | FieldReadFunction<any>,
	claimableStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	doesFollow?: FieldPolicy<any> | FieldReadFunction<any>,
	enabledModuleCurrencies?: FieldPolicy<any> | FieldReadFunction<any>,
	enabledModules?: FieldPolicy<any> | FieldReadFunction<any>,
	exploreProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	explorePublications?: FieldPolicy<any> | FieldReadFunction<any>,
	feed?: FieldPolicy<any> | FieldReadFunction<any>,
	feedHighlights?: FieldPolicy<any> | FieldReadFunction<any>,
	followerNftOwnedTokenIds?: FieldPolicy<any> | FieldReadFunction<any>,
	followers?: FieldPolicy<any> | FieldReadFunction<any>,
	following?: FieldPolicy<any> | FieldReadFunction<any>,
	generateModuleCurrencyApprovalData?: FieldPolicy<any> | FieldReadFunction<any>,
	globalProtocolStats?: FieldPolicy<any> | FieldReadFunction<any>,
	hasTxHashBeenIndexed?: FieldPolicy<any> | FieldReadFunction<any>,
	internalPublicationFilter?: FieldPolicy<any> | FieldReadFunction<any>,
	mutualFollowersProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	nftOwnershipChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	nfts?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingApprovalFollows?: FieldPolicy<any> | FieldReadFunction<any>,
	ping?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	profileFollowModuleBeenRedeemed?: FieldPolicy<any> | FieldReadFunction<any>,
	profileFollowRevenue?: FieldPolicy<any> | FieldReadFunction<any>,
	profileInterests?: FieldPolicy<any> | FieldReadFunction<any>,
	profileOnChainIdentity?: FieldPolicy<any> | FieldReadFunction<any>,
	profilePublicationRevenue?: FieldPolicy<any> | FieldReadFunction<any>,
	profilePublicationsForSale?: FieldPolicy<any> | FieldReadFunction<any>,
	profiles?: FieldPolicy<any> | FieldReadFunction<any>,
	proxyActionStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	publication?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationMetadataStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationRevenue?: FieldPolicy<any> | FieldReadFunction<any>,
	publications?: FieldPolicy<any> | FieldReadFunction<any>,
	recommendedProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	rel?: FieldPolicy<any> | FieldReadFunction<any>,
	search?: FieldPolicy<any> | FieldReadFunction<any>,
	timeline?: FieldPolicy<any> | FieldReadFunction<any>,
	txIdToTxHash?: FieldPolicy<any> | FieldReadFunction<any>,
	unknownEnabledModules?: FieldPolicy<any> | FieldReadFunction<any>,
	userSigNonces?: FieldPolicy<any> | FieldReadFunction<any>,
	validatePublicationMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	verify?: FieldPolicy<any> | FieldReadFunction<any>,
	whoCollectedPublication?: FieldPolicy<any> | FieldReadFunction<any>,
	whoReactedPublication?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactionEventKeySpecifier = ('profile' | 'reaction' | 'timestamp' | ReactionEventKeySpecifier)[];
export type ReactionEventFieldPolicy = {
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	reaction?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RelayErrorKeySpecifier = ('reason' | RelayErrorKeySpecifier)[];
export type RelayErrorFieldPolicy = {
	reason?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RelayerResultKeySpecifier = ('txHash' | 'txId' | RelayerResultKeySpecifier)[];
export type RelayerResultFieldPolicy = {
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	txId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReservedClaimableHandleKeySpecifier = ('expiry' | 'handle' | 'id' | 'source' | ReservedClaimableHandleKeySpecifier)[];
export type ReservedClaimableHandleFieldPolicy = {
	expiry?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevenueAggregateKeySpecifier = ('total' | RevenueAggregateKeySpecifier)[];
export type RevenueAggregateFieldPolicy = {
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevertCollectModuleSettingsKeySpecifier = ('contractAddress' | 'type' | RevertCollectModuleSettingsKeySpecifier)[];
export type RevertCollectModuleSettingsFieldPolicy = {
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevertFollowModuleSettingsKeySpecifier = ('contractAddress' | 'type' | RevertFollowModuleSettingsKeySpecifier)[];
export type RevertFollowModuleSettingsFieldPolicy = {
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetDefaultProfileBroadcastItemResultKeySpecifier = ('expiresAt' | 'id' | 'typedData' | SetDefaultProfileBroadcastItemResultKeySpecifier)[];
export type SetDefaultProfileBroadcastItemResultFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	typedData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetDefaultProfileEIP712TypedDataKeySpecifier = ('domain' | 'types' | 'value' | SetDefaultProfileEIP712TypedDataKeySpecifier)[];
export type SetDefaultProfileEIP712TypedDataFieldPolicy = {
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetDefaultProfileEIP712TypedDataTypesKeySpecifier = ('SetDefaultProfileWithSig' | SetDefaultProfileEIP712TypedDataTypesKeySpecifier)[];
export type SetDefaultProfileEIP712TypedDataTypesFieldPolicy = {
	SetDefaultProfileWithSig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetDefaultProfileEIP712TypedDataValueKeySpecifier = ('deadline' | 'nonce' | 'profileId' | 'wallet' | SetDefaultProfileEIP712TypedDataValueKeySpecifier)[];
export type SetDefaultProfileEIP712TypedDataValueFieldPolicy = {
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SybilDotOrgIdentityKeySpecifier = ('source' | 'verified' | SybilDotOrgIdentityKeySpecifier)[];
export type SybilDotOrgIdentityFieldPolicy = {
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	verified?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SybilDotOrgIdentitySourceKeySpecifier = ('twitter' | SybilDotOrgIdentitySourceKeySpecifier)[];
export type SybilDotOrgIdentitySourceFieldPolicy = {
	twitter?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SybilDotOrgTwitterIdentityKeySpecifier = ('handle' | SybilDotOrgTwitterIdentityKeySpecifier)[];
export type SybilDotOrgTwitterIdentityFieldPolicy = {
	handle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagResultKeySpecifier = ('tag' | 'total' | TagResultKeySpecifier)[];
export type TagResultFieldPolicy = {
	tag?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimedFeeCollectModuleSettingsKeySpecifier = ('amount' | 'contractAddress' | 'endTimestamp' | 'followerOnly' | 'recipient' | 'referralFee' | 'type' | TimedFeeCollectModuleSettingsKeySpecifier)[];
export type TimedFeeCollectModuleSettingsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	endTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	followerOnly?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>,
	referralFee?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionErrorKeySpecifier = ('reason' | 'txReceipt' | TransactionErrorKeySpecifier)[];
export type TransactionErrorFieldPolicy = {
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	txReceipt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionIndexedResultKeySpecifier = ('indexed' | 'metadataStatus' | 'txHash' | 'txReceipt' | TransactionIndexedResultKeySpecifier)[];
export type TransactionIndexedResultFieldPolicy = {
	indexed?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	txReceipt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionReceiptKeySpecifier = ('blockHash' | 'blockNumber' | 'byzantium' | 'confirmations' | 'contractAddress' | 'cumulativeGasUsed' | 'effectiveGasPrice' | 'from' | 'gasUsed' | 'logs' | 'logsBloom' | 'root' | 'status' | 'to' | 'transactionHash' | 'transactionIndex' | 'type' | TransactionReceiptKeySpecifier)[];
export type TransactionReceiptFieldPolicy = {
	blockHash?: FieldPolicy<any> | FieldReadFunction<any>,
	blockNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	byzantium?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmations?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	cumulativeGasUsed?: FieldPolicy<any> | FieldReadFunction<any>,
	effectiveGasPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	gasUsed?: FieldPolicy<any> | FieldReadFunction<any>,
	logs?: FieldPolicy<any> | FieldReadFunction<any>,
	logsBloom?: FieldPolicy<any> | FieldReadFunction<any>,
	root?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionHash?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnknownCollectModuleSettingsKeySpecifier = ('collectModuleReturnData' | 'contractAddress' | 'type' | UnknownCollectModuleSettingsKeySpecifier)[];
export type UnknownCollectModuleSettingsFieldPolicy = {
	collectModuleReturnData?: FieldPolicy<any> | FieldReadFunction<any>,
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnknownFollowModuleSettingsKeySpecifier = ('contractAddress' | 'followModuleReturnData' | 'type' | UnknownFollowModuleSettingsKeySpecifier)[];
export type UnknownFollowModuleSettingsFieldPolicy = {
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	followModuleReturnData?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnknownReferenceModuleSettingsKeySpecifier = ('contractAddress' | 'referenceModuleReturnData' | 'type' | UnknownReferenceModuleSettingsKeySpecifier)[];
export type UnknownReferenceModuleSettingsFieldPolicy = {
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceModuleReturnData?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSigNoncesKeySpecifier = ('lensHubOnChainSigNonce' | 'peripheryOnChainSigNonce' | UserSigNoncesKeySpecifier)[];
export type UserSigNoncesFieldPolicy = {
	lensHubOnChainSigNonce?: FieldPolicy<any> | FieldReadFunction<any>,
	peripheryOnChainSigNonce?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WalletKeySpecifier = ('address' | 'defaultProfile' | WalletKeySpecifier)[];
export type WalletFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WhoReactedResultKeySpecifier = ('profile' | 'reaction' | 'reactionAt' | 'reactionId' | WhoReactedResultKeySpecifier)[];
export type WhoReactedResultFieldPolicy = {
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	reaction?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorldcoinIdentityKeySpecifier = ('isHuman' | WorldcoinIdentityKeySpecifier)[];
export type WorldcoinIdentityFieldPolicy = {
	isHuman?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AccessConditionOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessConditionOutputKeySpecifier | (() => undefined | AccessConditionOutputKeySpecifier),
		fields?: AccessConditionOutputFieldPolicy,
	},
	AndConditionOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AndConditionOutputKeySpecifier | (() => undefined | AndConditionOutputKeySpecifier),
		fields?: AndConditionOutputFieldPolicy,
	},
	ApprovedAllowanceAmount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApprovedAllowanceAmountKeySpecifier | (() => undefined | ApprovedAllowanceAmountKeySpecifier),
		fields?: ApprovedAllowanceAmountFieldPolicy,
	},
	Attribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeKeySpecifier | (() => undefined | AttributeKeySpecifier),
		fields?: AttributeFieldPolicy,
	},
	AuthChallengeResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthChallengeResultKeySpecifier | (() => undefined | AuthChallengeResultKeySpecifier),
		fields?: AuthChallengeResultFieldPolicy,
	},
	AuthenticationResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticationResultKeySpecifier | (() => undefined | AuthenticationResultKeySpecifier),
		fields?: AuthenticationResultFieldPolicy,
	},
	CanCommentResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CanCommentResponseKeySpecifier | (() => undefined | CanCommentResponseKeySpecifier),
		fields?: CanCommentResponseFieldPolicy,
	},
	CanDecryptResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CanDecryptResponseKeySpecifier | (() => undefined | CanDecryptResponseKeySpecifier),
		fields?: CanDecryptResponseFieldPolicy,
	},
	CanMirrorResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CanMirrorResponseKeySpecifier | (() => undefined | CanMirrorResponseKeySpecifier),
		fields?: CanMirrorResponseFieldPolicy,
	},
	ClaimableHandles?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClaimableHandlesKeySpecifier | (() => undefined | ClaimableHandlesKeySpecifier),
		fields?: ClaimableHandlesFieldPolicy,
	},
	CollectConditionOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectConditionOutputKeySpecifier | (() => undefined | CollectConditionOutputKeySpecifier),
		fields?: CollectConditionOutputFieldPolicy,
	},
	CollectedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectedEventKeySpecifier | (() => undefined | CollectedEventKeySpecifier),
		fields?: CollectedEventFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CreateBurnEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateBurnEIP712TypedDataKeySpecifier | (() => undefined | CreateBurnEIP712TypedDataKeySpecifier),
		fields?: CreateBurnEIP712TypedDataFieldPolicy,
	},
	CreateBurnEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateBurnEIP712TypedDataTypesKeySpecifier | (() => undefined | CreateBurnEIP712TypedDataTypesKeySpecifier),
		fields?: CreateBurnEIP712TypedDataTypesFieldPolicy,
	},
	CreateBurnEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateBurnEIP712TypedDataValueKeySpecifier | (() => undefined | CreateBurnEIP712TypedDataValueKeySpecifier),
		fields?: CreateBurnEIP712TypedDataValueFieldPolicy,
	},
	CreateBurnProfileBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateBurnProfileBroadcastItemResultKeySpecifier | (() => undefined | CreateBurnProfileBroadcastItemResultKeySpecifier),
		fields?: CreateBurnProfileBroadcastItemResultFieldPolicy,
	},
	CreateCollectBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCollectBroadcastItemResultKeySpecifier | (() => undefined | CreateCollectBroadcastItemResultKeySpecifier),
		fields?: CreateCollectBroadcastItemResultFieldPolicy,
	},
	CreateCollectEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCollectEIP712TypedDataKeySpecifier | (() => undefined | CreateCollectEIP712TypedDataKeySpecifier),
		fields?: CreateCollectEIP712TypedDataFieldPolicy,
	},
	CreateCollectEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCollectEIP712TypedDataTypesKeySpecifier | (() => undefined | CreateCollectEIP712TypedDataTypesKeySpecifier),
		fields?: CreateCollectEIP712TypedDataTypesFieldPolicy,
	},
	CreateCollectEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCollectEIP712TypedDataValueKeySpecifier | (() => undefined | CreateCollectEIP712TypedDataValueKeySpecifier),
		fields?: CreateCollectEIP712TypedDataValueFieldPolicy,
	},
	CreateCommentBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCommentBroadcastItemResultKeySpecifier | (() => undefined | CreateCommentBroadcastItemResultKeySpecifier),
		fields?: CreateCommentBroadcastItemResultFieldPolicy,
	},
	CreateCommentEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCommentEIP712TypedDataKeySpecifier | (() => undefined | CreateCommentEIP712TypedDataKeySpecifier),
		fields?: CreateCommentEIP712TypedDataFieldPolicy,
	},
	CreateCommentEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCommentEIP712TypedDataTypesKeySpecifier | (() => undefined | CreateCommentEIP712TypedDataTypesKeySpecifier),
		fields?: CreateCommentEIP712TypedDataTypesFieldPolicy,
	},
	CreateCommentEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCommentEIP712TypedDataValueKeySpecifier | (() => undefined | CreateCommentEIP712TypedDataValueKeySpecifier),
		fields?: CreateCommentEIP712TypedDataValueFieldPolicy,
	},
	CreateFollowBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateFollowBroadcastItemResultKeySpecifier | (() => undefined | CreateFollowBroadcastItemResultKeySpecifier),
		fields?: CreateFollowBroadcastItemResultFieldPolicy,
	},
	CreateFollowEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateFollowEIP712TypedDataKeySpecifier | (() => undefined | CreateFollowEIP712TypedDataKeySpecifier),
		fields?: CreateFollowEIP712TypedDataFieldPolicy,
	},
	CreateFollowEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateFollowEIP712TypedDataTypesKeySpecifier | (() => undefined | CreateFollowEIP712TypedDataTypesKeySpecifier),
		fields?: CreateFollowEIP712TypedDataTypesFieldPolicy,
	},
	CreateFollowEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateFollowEIP712TypedDataValueKeySpecifier | (() => undefined | CreateFollowEIP712TypedDataValueKeySpecifier),
		fields?: CreateFollowEIP712TypedDataValueFieldPolicy,
	},
	CreateMirrorBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateMirrorBroadcastItemResultKeySpecifier | (() => undefined | CreateMirrorBroadcastItemResultKeySpecifier),
		fields?: CreateMirrorBroadcastItemResultFieldPolicy,
	},
	CreateMirrorEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateMirrorEIP712TypedDataKeySpecifier | (() => undefined | CreateMirrorEIP712TypedDataKeySpecifier),
		fields?: CreateMirrorEIP712TypedDataFieldPolicy,
	},
	CreateMirrorEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateMirrorEIP712TypedDataTypesKeySpecifier | (() => undefined | CreateMirrorEIP712TypedDataTypesKeySpecifier),
		fields?: CreateMirrorEIP712TypedDataTypesFieldPolicy,
	},
	CreateMirrorEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateMirrorEIP712TypedDataValueKeySpecifier | (() => undefined | CreateMirrorEIP712TypedDataValueKeySpecifier),
		fields?: CreateMirrorEIP712TypedDataValueFieldPolicy,
	},
	CreatePostBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePostBroadcastItemResultKeySpecifier | (() => undefined | CreatePostBroadcastItemResultKeySpecifier),
		fields?: CreatePostBroadcastItemResultFieldPolicy,
	},
	CreatePostEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePostEIP712TypedDataKeySpecifier | (() => undefined | CreatePostEIP712TypedDataKeySpecifier),
		fields?: CreatePostEIP712TypedDataFieldPolicy,
	},
	CreatePostEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePostEIP712TypedDataTypesKeySpecifier | (() => undefined | CreatePostEIP712TypedDataTypesKeySpecifier),
		fields?: CreatePostEIP712TypedDataTypesFieldPolicy,
	},
	CreatePostEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePostEIP712TypedDataValueKeySpecifier | (() => undefined | CreatePostEIP712TypedDataValueKeySpecifier),
		fields?: CreatePostEIP712TypedDataValueFieldPolicy,
	},
	CreateSetDispatcherBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetDispatcherBroadcastItemResultKeySpecifier | (() => undefined | CreateSetDispatcherBroadcastItemResultKeySpecifier),
		fields?: CreateSetDispatcherBroadcastItemResultFieldPolicy,
	},
	CreateSetDispatcherEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetDispatcherEIP712TypedDataKeySpecifier | (() => undefined | CreateSetDispatcherEIP712TypedDataKeySpecifier),
		fields?: CreateSetDispatcherEIP712TypedDataFieldPolicy,
	},
	CreateSetDispatcherEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetDispatcherEIP712TypedDataTypesKeySpecifier | (() => undefined | CreateSetDispatcherEIP712TypedDataTypesKeySpecifier),
		fields?: CreateSetDispatcherEIP712TypedDataTypesFieldPolicy,
	},
	CreateSetDispatcherEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetDispatcherEIP712TypedDataValueKeySpecifier | (() => undefined | CreateSetDispatcherEIP712TypedDataValueKeySpecifier),
		fields?: CreateSetDispatcherEIP712TypedDataValueFieldPolicy,
	},
	CreateSetFollowModuleBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetFollowModuleBroadcastItemResultKeySpecifier | (() => undefined | CreateSetFollowModuleBroadcastItemResultKeySpecifier),
		fields?: CreateSetFollowModuleBroadcastItemResultFieldPolicy,
	},
	CreateSetFollowModuleEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetFollowModuleEIP712TypedDataKeySpecifier | (() => undefined | CreateSetFollowModuleEIP712TypedDataKeySpecifier),
		fields?: CreateSetFollowModuleEIP712TypedDataFieldPolicy,
	},
	CreateSetFollowModuleEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetFollowModuleEIP712TypedDataTypesKeySpecifier | (() => undefined | CreateSetFollowModuleEIP712TypedDataTypesKeySpecifier),
		fields?: CreateSetFollowModuleEIP712TypedDataTypesFieldPolicy,
	},
	CreateSetFollowModuleEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetFollowModuleEIP712TypedDataValueKeySpecifier | (() => undefined | CreateSetFollowModuleEIP712TypedDataValueKeySpecifier),
		fields?: CreateSetFollowModuleEIP712TypedDataValueFieldPolicy,
	},
	CreateSetFollowNFTUriBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetFollowNFTUriBroadcastItemResultKeySpecifier | (() => undefined | CreateSetFollowNFTUriBroadcastItemResultKeySpecifier),
		fields?: CreateSetFollowNFTUriBroadcastItemResultFieldPolicy,
	},
	CreateSetFollowNFTUriEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetFollowNFTUriEIP712TypedDataKeySpecifier | (() => undefined | CreateSetFollowNFTUriEIP712TypedDataKeySpecifier),
		fields?: CreateSetFollowNFTUriEIP712TypedDataFieldPolicy,
	},
	CreateSetFollowNFTUriEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetFollowNFTUriEIP712TypedDataTypesKeySpecifier | (() => undefined | CreateSetFollowNFTUriEIP712TypedDataTypesKeySpecifier),
		fields?: CreateSetFollowNFTUriEIP712TypedDataTypesFieldPolicy,
	},
	CreateSetFollowNFTUriEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetFollowNFTUriEIP712TypedDataValueKeySpecifier | (() => undefined | CreateSetFollowNFTUriEIP712TypedDataValueKeySpecifier),
		fields?: CreateSetFollowNFTUriEIP712TypedDataValueFieldPolicy,
	},
	CreateSetProfileImageUriBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetProfileImageUriBroadcastItemResultKeySpecifier | (() => undefined | CreateSetProfileImageUriBroadcastItemResultKeySpecifier),
		fields?: CreateSetProfileImageUriBroadcastItemResultFieldPolicy,
	},
	CreateSetProfileImageUriEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetProfileImageUriEIP712TypedDataKeySpecifier | (() => undefined | CreateSetProfileImageUriEIP712TypedDataKeySpecifier),
		fields?: CreateSetProfileImageUriEIP712TypedDataFieldPolicy,
	},
	CreateSetProfileImageUriEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetProfileImageUriEIP712TypedDataTypesKeySpecifier | (() => undefined | CreateSetProfileImageUriEIP712TypedDataTypesKeySpecifier),
		fields?: CreateSetProfileImageUriEIP712TypedDataTypesFieldPolicy,
	},
	CreateSetProfileImageUriEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetProfileImageUriEIP712TypedDataValueKeySpecifier | (() => undefined | CreateSetProfileImageUriEIP712TypedDataValueKeySpecifier),
		fields?: CreateSetProfileImageUriEIP712TypedDataValueFieldPolicy,
	},
	CreateSetProfileMetadataURIBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetProfileMetadataURIBroadcastItemResultKeySpecifier | (() => undefined | CreateSetProfileMetadataURIBroadcastItemResultKeySpecifier),
		fields?: CreateSetProfileMetadataURIBroadcastItemResultFieldPolicy,
	},
	CreateSetProfileMetadataURIEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetProfileMetadataURIEIP712TypedDataKeySpecifier | (() => undefined | CreateSetProfileMetadataURIEIP712TypedDataKeySpecifier),
		fields?: CreateSetProfileMetadataURIEIP712TypedDataFieldPolicy,
	},
	CreateSetProfileMetadataURIEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetProfileMetadataURIEIP712TypedDataTypesKeySpecifier | (() => undefined | CreateSetProfileMetadataURIEIP712TypedDataTypesKeySpecifier),
		fields?: CreateSetProfileMetadataURIEIP712TypedDataTypesFieldPolicy,
	},
	CreateSetProfileMetadataURIEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetProfileMetadataURIEIP712TypedDataValueKeySpecifier | (() => undefined | CreateSetProfileMetadataURIEIP712TypedDataValueKeySpecifier),
		fields?: CreateSetProfileMetadataURIEIP712TypedDataValueFieldPolicy,
	},
	CreateToggleFollowBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateToggleFollowBroadcastItemResultKeySpecifier | (() => undefined | CreateToggleFollowBroadcastItemResultKeySpecifier),
		fields?: CreateToggleFollowBroadcastItemResultFieldPolicy,
	},
	CreateToggleFollowEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateToggleFollowEIP712TypedDataKeySpecifier | (() => undefined | CreateToggleFollowEIP712TypedDataKeySpecifier),
		fields?: CreateToggleFollowEIP712TypedDataFieldPolicy,
	},
	CreateToggleFollowEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateToggleFollowEIP712TypedDataTypesKeySpecifier | (() => undefined | CreateToggleFollowEIP712TypedDataTypesKeySpecifier),
		fields?: CreateToggleFollowEIP712TypedDataTypesFieldPolicy,
	},
	CreateToggleFollowEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateToggleFollowEIP712TypedDataValueKeySpecifier | (() => undefined | CreateToggleFollowEIP712TypedDataValueKeySpecifier),
		fields?: CreateToggleFollowEIP712TypedDataValueFieldPolicy,
	},
	CreateUnfollowBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateUnfollowBroadcastItemResultKeySpecifier | (() => undefined | CreateUnfollowBroadcastItemResultKeySpecifier),
		fields?: CreateUnfollowBroadcastItemResultFieldPolicy,
	},
	DegreesOfSeparationReferenceModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DegreesOfSeparationReferenceModuleSettingsKeySpecifier | (() => undefined | DegreesOfSeparationReferenceModuleSettingsKeySpecifier),
		fields?: DegreesOfSeparationReferenceModuleSettingsFieldPolicy,
	},
	Dispatcher?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DispatcherKeySpecifier | (() => undefined | DispatcherKeySpecifier),
		fields?: DispatcherFieldPolicy,
	},
	DoesFollowResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DoesFollowResponseKeySpecifier | (() => undefined | DoesFollowResponseKeySpecifier),
		fields?: DoesFollowResponseFieldPolicy,
	},
	EIP712TypedDataDomain?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EIP712TypedDataDomainKeySpecifier | (() => undefined | EIP712TypedDataDomainKeySpecifier),
		fields?: EIP712TypedDataDomainFieldPolicy,
	},
	EIP712TypedDataField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EIP712TypedDataFieldKeySpecifier | (() => undefined | EIP712TypedDataFieldKeySpecifier),
		fields?: EIP712TypedDataFieldFieldPolicy,
	},
	ElectedMirror?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ElectedMirrorKeySpecifier | (() => undefined | ElectedMirrorKeySpecifier),
		fields?: ElectedMirrorFieldPolicy,
	},
	EnabledModule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnabledModuleKeySpecifier | (() => undefined | EnabledModuleKeySpecifier),
		fields?: EnabledModuleFieldPolicy,
	},
	EnabledModules?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnabledModulesKeySpecifier | (() => undefined | EnabledModulesKeySpecifier),
		fields?: EnabledModulesFieldPolicy,
	},
	EncryptedFieldsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EncryptedFieldsOutputKeySpecifier | (() => undefined | EncryptedFieldsOutputKeySpecifier),
		fields?: EncryptedFieldsOutputFieldPolicy,
	},
	EncryptedMedia?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EncryptedMediaKeySpecifier | (() => undefined | EncryptedMediaKeySpecifier),
		fields?: EncryptedMediaFieldPolicy,
	},
	EncryptedMediaSet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EncryptedMediaSetKeySpecifier | (() => undefined | EncryptedMediaSetKeySpecifier),
		fields?: EncryptedMediaSetFieldPolicy,
	},
	EncryptionParamsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EncryptionParamsOutputKeySpecifier | (() => undefined | EncryptionParamsOutputKeySpecifier),
		fields?: EncryptionParamsOutputFieldPolicy,
	},
	EnsOnChainIdentity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnsOnChainIdentityKeySpecifier | (() => undefined | EnsOnChainIdentityKeySpecifier),
		fields?: EnsOnChainIdentityFieldPolicy,
	},
	EoaOwnershipOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EoaOwnershipOutputKeySpecifier | (() => undefined | EoaOwnershipOutputKeySpecifier),
		fields?: EoaOwnershipOutputFieldPolicy,
	},
	Erc20?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Erc20KeySpecifier | (() => undefined | Erc20KeySpecifier),
		fields?: Erc20FieldPolicy,
	},
	Erc20Amount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Erc20AmountKeySpecifier | (() => undefined | Erc20AmountKeySpecifier),
		fields?: Erc20AmountFieldPolicy,
	},
	Erc20OwnershipOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Erc20OwnershipOutputKeySpecifier | (() => undefined | Erc20OwnershipOutputKeySpecifier),
		fields?: Erc20OwnershipOutputFieldPolicy,
	},
	ExploreProfileResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExploreProfileResultKeySpecifier | (() => undefined | ExploreProfileResultKeySpecifier),
		fields?: ExploreProfileResultFieldPolicy,
	},
	ExplorePublicationResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExplorePublicationResultKeySpecifier | (() => undefined | ExplorePublicationResultKeySpecifier),
		fields?: ExplorePublicationResultFieldPolicy,
	},
	FeeCollectModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeeCollectModuleSettingsKeySpecifier | (() => undefined | FeeCollectModuleSettingsKeySpecifier),
		fields?: FeeCollectModuleSettingsFieldPolicy,
	},
	FeeFollowModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeeFollowModuleSettingsKeySpecifier | (() => undefined | FeeFollowModuleSettingsKeySpecifier),
		fields?: FeeFollowModuleSettingsFieldPolicy,
	},
	FeedItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeedItemKeySpecifier | (() => undefined | FeedItemKeySpecifier),
		fields?: FeedItemFieldPolicy,
	},
	FollowConditionOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FollowConditionOutputKeySpecifier | (() => undefined | FollowConditionOutputKeySpecifier),
		fields?: FollowConditionOutputFieldPolicy,
	},
	FollowOnlyReferenceModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FollowOnlyReferenceModuleSettingsKeySpecifier | (() => undefined | FollowOnlyReferenceModuleSettingsKeySpecifier),
		fields?: FollowOnlyReferenceModuleSettingsFieldPolicy,
	},
	FollowRevenueResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FollowRevenueResultKeySpecifier | (() => undefined | FollowRevenueResultKeySpecifier),
		fields?: FollowRevenueResultFieldPolicy,
	},
	Follower?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FollowerKeySpecifier | (() => undefined | FollowerKeySpecifier),
		fields?: FollowerFieldPolicy,
	},
	FollowerNftOwnedTokenIds?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FollowerNftOwnedTokenIdsKeySpecifier | (() => undefined | FollowerNftOwnedTokenIdsKeySpecifier),
		fields?: FollowerNftOwnedTokenIdsFieldPolicy,
	},
	Following?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FollowingKeySpecifier | (() => undefined | FollowingKeySpecifier),
		fields?: FollowingFieldPolicy,
	},
	FreeCollectModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FreeCollectModuleSettingsKeySpecifier | (() => undefined | FreeCollectModuleSettingsKeySpecifier),
		fields?: FreeCollectModuleSettingsFieldPolicy,
	},
	GenerateModuleCurrencyApproval?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenerateModuleCurrencyApprovalKeySpecifier | (() => undefined | GenerateModuleCurrencyApprovalKeySpecifier),
		fields?: GenerateModuleCurrencyApprovalFieldPolicy,
	},
	GlobalProtocolStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GlobalProtocolStatsKeySpecifier | (() => undefined | GlobalProtocolStatsKeySpecifier),
		fields?: GlobalProtocolStatsFieldPolicy,
	},
	LimitedFeeCollectModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LimitedFeeCollectModuleSettingsKeySpecifier | (() => undefined | LimitedFeeCollectModuleSettingsKeySpecifier),
		fields?: LimitedFeeCollectModuleSettingsFieldPolicy,
	},
	LimitedTimedFeeCollectModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LimitedTimedFeeCollectModuleSettingsKeySpecifier | (() => undefined | LimitedTimedFeeCollectModuleSettingsKeySpecifier),
		fields?: LimitedTimedFeeCollectModuleSettingsFieldPolicy,
	},
	Log?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogKeySpecifier | (() => undefined | LogKeySpecifier),
		fields?: LogFieldPolicy,
	},
	Media?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaKeySpecifier | (() => undefined | MediaKeySpecifier),
		fields?: MediaFieldPolicy,
	},
	MediaOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaOutputKeySpecifier | (() => undefined | MediaOutputKeySpecifier),
		fields?: MediaOutputFieldPolicy,
	},
	MediaSet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaSetKeySpecifier | (() => undefined | MediaSetKeySpecifier),
		fields?: MediaSetFieldPolicy,
	},
	MetadataAttributeOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetadataAttributeOutputKeySpecifier | (() => undefined | MetadataAttributeOutputKeySpecifier),
		fields?: MetadataAttributeOutputFieldPolicy,
	},
	MetadataOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetadataOutputKeySpecifier | (() => undefined | MetadataOutputKeySpecifier),
		fields?: MetadataOutputFieldPolicy,
	},
	Mirror?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MirrorKeySpecifier | (() => undefined | MirrorKeySpecifier),
		fields?: MirrorFieldPolicy,
	},
	MirrorEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MirrorEventKeySpecifier | (() => undefined | MirrorEventKeySpecifier),
		fields?: MirrorEventFieldPolicy,
	},
	ModuleFeeAmount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModuleFeeAmountKeySpecifier | (() => undefined | ModuleFeeAmountKeySpecifier),
		fields?: ModuleFeeAmountFieldPolicy,
	},
	ModuleInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModuleInfoKeySpecifier | (() => undefined | ModuleInfoKeySpecifier),
		fields?: ModuleInfoFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	NFT?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NFTKeySpecifier | (() => undefined | NFTKeySpecifier),
		fields?: NFTFieldPolicy,
	},
	NFTContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NFTContentKeySpecifier | (() => undefined | NFTContentKeySpecifier),
		fields?: NFTContentFieldPolicy,
	},
	NFTsResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NFTsResultKeySpecifier | (() => undefined | NFTsResultKeySpecifier),
		fields?: NFTsResultFieldPolicy,
	},
	NewCollectNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewCollectNotificationKeySpecifier | (() => undefined | NewCollectNotificationKeySpecifier),
		fields?: NewCollectNotificationFieldPolicy,
	},
	NewCommentNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewCommentNotificationKeySpecifier | (() => undefined | NewCommentNotificationKeySpecifier),
		fields?: NewCommentNotificationFieldPolicy,
	},
	NewFollowerNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewFollowerNotificationKeySpecifier | (() => undefined | NewFollowerNotificationKeySpecifier),
		fields?: NewFollowerNotificationFieldPolicy,
	},
	NewMentionNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewMentionNotificationKeySpecifier | (() => undefined | NewMentionNotificationKeySpecifier),
		fields?: NewMentionNotificationFieldPolicy,
	},
	NewMirrorNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewMirrorNotificationKeySpecifier | (() => undefined | NewMirrorNotificationKeySpecifier),
		fields?: NewMirrorNotificationFieldPolicy,
	},
	NewReactionNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewReactionNotificationKeySpecifier | (() => undefined | NewReactionNotificationKeySpecifier),
		fields?: NewReactionNotificationFieldPolicy,
	},
	NftImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NftImageKeySpecifier | (() => undefined | NftImageKeySpecifier),
		fields?: NftImageFieldPolicy,
	},
	NftOwnershipChallengeResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NftOwnershipChallengeResultKeySpecifier | (() => undefined | NftOwnershipChallengeResultKeySpecifier),
		fields?: NftOwnershipChallengeResultFieldPolicy,
	},
	NftOwnershipOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NftOwnershipOutputKeySpecifier | (() => undefined | NftOwnershipOutputKeySpecifier),
		fields?: NftOwnershipOutputFieldPolicy,
	},
	OnChainIdentity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OnChainIdentityKeySpecifier | (() => undefined | OnChainIdentityKeySpecifier),
		fields?: OnChainIdentityFieldPolicy,
	},
	OrConditionOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrConditionOutputKeySpecifier | (() => undefined | OrConditionOutputKeySpecifier),
		fields?: OrConditionOutputFieldPolicy,
	},
	Owner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OwnerKeySpecifier | (() => undefined | OwnerKeySpecifier),
		fields?: OwnerFieldPolicy,
	},
	PaginatedAllPublicationsTagsResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedAllPublicationsTagsResultKeySpecifier | (() => undefined | PaginatedAllPublicationsTagsResultKeySpecifier),
		fields?: PaginatedAllPublicationsTagsResultFieldPolicy,
	},
	PaginatedFeedResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedFeedResultKeySpecifier | (() => undefined | PaginatedFeedResultKeySpecifier),
		fields?: PaginatedFeedResultFieldPolicy,
	},
	PaginatedFollowersResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedFollowersResultKeySpecifier | (() => undefined | PaginatedFollowersResultKeySpecifier),
		fields?: PaginatedFollowersResultFieldPolicy,
	},
	PaginatedFollowingResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedFollowingResultKeySpecifier | (() => undefined | PaginatedFollowingResultKeySpecifier),
		fields?: PaginatedFollowingResultFieldPolicy,
	},
	PaginatedNotificationResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedNotificationResultKeySpecifier | (() => undefined | PaginatedNotificationResultKeySpecifier),
		fields?: PaginatedNotificationResultFieldPolicy,
	},
	PaginatedProfilePublicationsForSaleResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedProfilePublicationsForSaleResultKeySpecifier | (() => undefined | PaginatedProfilePublicationsForSaleResultKeySpecifier),
		fields?: PaginatedProfilePublicationsForSaleResultFieldPolicy,
	},
	PaginatedProfileResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedProfileResultKeySpecifier | (() => undefined | PaginatedProfileResultKeySpecifier),
		fields?: PaginatedProfileResultFieldPolicy,
	},
	PaginatedPublicationResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedPublicationResultKeySpecifier | (() => undefined | PaginatedPublicationResultKeySpecifier),
		fields?: PaginatedPublicationResultFieldPolicy,
	},
	PaginatedResultInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedResultInfoKeySpecifier | (() => undefined | PaginatedResultInfoKeySpecifier),
		fields?: PaginatedResultInfoFieldPolicy,
	},
	PaginatedTimelineResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedTimelineResultKeySpecifier | (() => undefined | PaginatedTimelineResultKeySpecifier),
		fields?: PaginatedTimelineResultFieldPolicy,
	},
	PaginatedWhoCollectedResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedWhoCollectedResultKeySpecifier | (() => undefined | PaginatedWhoCollectedResultKeySpecifier),
		fields?: PaginatedWhoCollectedResultFieldPolicy,
	},
	PaginatedWhoReactedResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatedWhoReactedResultKeySpecifier | (() => undefined | PaginatedWhoReactedResultKeySpecifier),
		fields?: PaginatedWhoReactedResultFieldPolicy,
	},
	PendingApproveFollowsResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PendingApproveFollowsResultKeySpecifier | (() => undefined | PendingApproveFollowsResultKeySpecifier),
		fields?: PendingApproveFollowsResultFieldPolicy,
	},
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	Profile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileKeySpecifier | (() => undefined | ProfileKeySpecifier),
		fields?: ProfileFieldPolicy,
	},
	ProfileFollowModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileFollowModuleSettingsKeySpecifier | (() => undefined | ProfileFollowModuleSettingsKeySpecifier),
		fields?: ProfileFollowModuleSettingsFieldPolicy,
	},
	ProfileOwnershipOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileOwnershipOutputKeySpecifier | (() => undefined | ProfileOwnershipOutputKeySpecifier),
		fields?: ProfileOwnershipOutputFieldPolicy,
	},
	ProfilePublicationRevenueResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfilePublicationRevenueResultKeySpecifier | (() => undefined | ProfilePublicationRevenueResultKeySpecifier),
		fields?: ProfilePublicationRevenueResultFieldPolicy,
	},
	ProfileSearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileSearchResultKeySpecifier | (() => undefined | ProfileSearchResultKeySpecifier),
		fields?: ProfileSearchResultFieldPolicy,
	},
	ProfileStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileStatsKeySpecifier | (() => undefined | ProfileStatsKeySpecifier),
		fields?: ProfileStatsFieldPolicy,
	},
	ProviderSpecificParamsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProviderSpecificParamsOutputKeySpecifier | (() => undefined | ProviderSpecificParamsOutputKeySpecifier),
		fields?: ProviderSpecificParamsOutputFieldPolicy,
	},
	ProxyActionError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProxyActionErrorKeySpecifier | (() => undefined | ProxyActionErrorKeySpecifier),
		fields?: ProxyActionErrorFieldPolicy,
	},
	ProxyActionQueued?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProxyActionQueuedKeySpecifier | (() => undefined | ProxyActionQueuedKeySpecifier),
		fields?: ProxyActionQueuedFieldPolicy,
	},
	ProxyActionStatusResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProxyActionStatusResultKeySpecifier | (() => undefined | ProxyActionStatusResultKeySpecifier),
		fields?: ProxyActionStatusResultFieldPolicy,
	},
	PublicMediaResults?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicMediaResultsKeySpecifier | (() => undefined | PublicMediaResultsKeySpecifier),
		fields?: PublicMediaResultsFieldPolicy,
	},
	PublicationMetadataStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicationMetadataStatusKeySpecifier | (() => undefined | PublicationMetadataStatusKeySpecifier),
		fields?: PublicationMetadataStatusFieldPolicy,
	},
	PublicationRevenue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicationRevenueKeySpecifier | (() => undefined | PublicationRevenueKeySpecifier),
		fields?: PublicationRevenueFieldPolicy,
	},
	PublicationSearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicationSearchResultKeySpecifier | (() => undefined | PublicationSearchResultKeySpecifier),
		fields?: PublicationSearchResultFieldPolicy,
	},
	PublicationStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicationStatsKeySpecifier | (() => undefined | PublicationStatsKeySpecifier),
		fields?: PublicationStatsFieldPolicy,
	},
	PublicationValidateMetadataResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicationValidateMetadataResultKeySpecifier | (() => undefined | PublicationValidateMetadataResultKeySpecifier),
		fields?: PublicationValidateMetadataResultFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	ReactionEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactionEventKeySpecifier | (() => undefined | ReactionEventKeySpecifier),
		fields?: ReactionEventFieldPolicy,
	},
	RelayError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RelayErrorKeySpecifier | (() => undefined | RelayErrorKeySpecifier),
		fields?: RelayErrorFieldPolicy,
	},
	RelayerResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RelayerResultKeySpecifier | (() => undefined | RelayerResultKeySpecifier),
		fields?: RelayerResultFieldPolicy,
	},
	ReservedClaimableHandle?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReservedClaimableHandleKeySpecifier | (() => undefined | ReservedClaimableHandleKeySpecifier),
		fields?: ReservedClaimableHandleFieldPolicy,
	},
	RevenueAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevenueAggregateKeySpecifier | (() => undefined | RevenueAggregateKeySpecifier),
		fields?: RevenueAggregateFieldPolicy,
	},
	RevertCollectModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevertCollectModuleSettingsKeySpecifier | (() => undefined | RevertCollectModuleSettingsKeySpecifier),
		fields?: RevertCollectModuleSettingsFieldPolicy,
	},
	RevertFollowModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevertFollowModuleSettingsKeySpecifier | (() => undefined | RevertFollowModuleSettingsKeySpecifier),
		fields?: RevertFollowModuleSettingsFieldPolicy,
	},
	SetDefaultProfileBroadcastItemResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetDefaultProfileBroadcastItemResultKeySpecifier | (() => undefined | SetDefaultProfileBroadcastItemResultKeySpecifier),
		fields?: SetDefaultProfileBroadcastItemResultFieldPolicy,
	},
	SetDefaultProfileEIP712TypedData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetDefaultProfileEIP712TypedDataKeySpecifier | (() => undefined | SetDefaultProfileEIP712TypedDataKeySpecifier),
		fields?: SetDefaultProfileEIP712TypedDataFieldPolicy,
	},
	SetDefaultProfileEIP712TypedDataTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetDefaultProfileEIP712TypedDataTypesKeySpecifier | (() => undefined | SetDefaultProfileEIP712TypedDataTypesKeySpecifier),
		fields?: SetDefaultProfileEIP712TypedDataTypesFieldPolicy,
	},
	SetDefaultProfileEIP712TypedDataValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetDefaultProfileEIP712TypedDataValueKeySpecifier | (() => undefined | SetDefaultProfileEIP712TypedDataValueKeySpecifier),
		fields?: SetDefaultProfileEIP712TypedDataValueFieldPolicy,
	},
	SybilDotOrgIdentity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SybilDotOrgIdentityKeySpecifier | (() => undefined | SybilDotOrgIdentityKeySpecifier),
		fields?: SybilDotOrgIdentityFieldPolicy,
	},
	SybilDotOrgIdentitySource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SybilDotOrgIdentitySourceKeySpecifier | (() => undefined | SybilDotOrgIdentitySourceKeySpecifier),
		fields?: SybilDotOrgIdentitySourceFieldPolicy,
	},
	SybilDotOrgTwitterIdentity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SybilDotOrgTwitterIdentityKeySpecifier | (() => undefined | SybilDotOrgTwitterIdentityKeySpecifier),
		fields?: SybilDotOrgTwitterIdentityFieldPolicy,
	},
	TagResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagResultKeySpecifier | (() => undefined | TagResultKeySpecifier),
		fields?: TagResultFieldPolicy,
	},
	TimedFeeCollectModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimedFeeCollectModuleSettingsKeySpecifier | (() => undefined | TimedFeeCollectModuleSettingsKeySpecifier),
		fields?: TimedFeeCollectModuleSettingsFieldPolicy,
	},
	TransactionError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionErrorKeySpecifier | (() => undefined | TransactionErrorKeySpecifier),
		fields?: TransactionErrorFieldPolicy,
	},
	TransactionIndexedResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionIndexedResultKeySpecifier | (() => undefined | TransactionIndexedResultKeySpecifier),
		fields?: TransactionIndexedResultFieldPolicy,
	},
	TransactionReceipt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionReceiptKeySpecifier | (() => undefined | TransactionReceiptKeySpecifier),
		fields?: TransactionReceiptFieldPolicy,
	},
	UnknownCollectModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnknownCollectModuleSettingsKeySpecifier | (() => undefined | UnknownCollectModuleSettingsKeySpecifier),
		fields?: UnknownCollectModuleSettingsFieldPolicy,
	},
	UnknownFollowModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnknownFollowModuleSettingsKeySpecifier | (() => undefined | UnknownFollowModuleSettingsKeySpecifier),
		fields?: UnknownFollowModuleSettingsFieldPolicy,
	},
	UnknownReferenceModuleSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnknownReferenceModuleSettingsKeySpecifier | (() => undefined | UnknownReferenceModuleSettingsKeySpecifier),
		fields?: UnknownReferenceModuleSettingsFieldPolicy,
	},
	UserSigNonces?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSigNoncesKeySpecifier | (() => undefined | UserSigNoncesKeySpecifier),
		fields?: UserSigNoncesFieldPolicy,
	},
	Wallet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WalletKeySpecifier | (() => undefined | WalletKeySpecifier),
		fields?: WalletFieldPolicy,
	},
	WhoReactedResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WhoReactedResultKeySpecifier | (() => undefined | WhoReactedResultKeySpecifier),
		fields?: WhoReactedResultFieldPolicy,
	},
	WorldcoinIdentity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorldcoinIdentityKeySpecifier | (() => undefined | WorldcoinIdentityKeySpecifier),
		fields?: WorldcoinIdentityFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;