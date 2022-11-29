import { gql, useQuery } from "@apollo/client";
import { useProfileQuery } from "../graphql/generated";

export function Manual() {
  const { data, loading } = useProfileQuery({
    variables: {
      profileId: "0x20e7",
    },
  });

  console.log({ data, loading });

  return null;
}
