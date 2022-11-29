import {
  ApolloCache,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import {
  CreatePostTypedDataDocument,
  CreatePostTypedDataMutation,
  CreatePostTypedDataMutationVariables,
  CreatePublicPostRequest,
} from "../graphql/generated";

export class CreatePost {
  constructor(readonly apolloClient: ApolloClient<NormalizedCacheObject>) {}

  async execute(request: CreatePublicPostRequest) {
    const { data } = await this.apolloClient.mutate<
      CreatePostTypedDataMutation,
      CreatePostTypedDataMutationVariables
    >({
      mutation: CreatePostTypedDataDocument,
      variables: { request },
    });

    if (!data) throw new Error("Unable to create post");

    return data.createPostTypedData;
  }
}
