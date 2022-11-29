import { useFeedQuery, useProfileQuery } from "../graphql/generated";

export function CodeGenHooks() {
  const { data: feedData } = useFeedQuery({
    variables: {
      profileId: "0x20e7",
    },
  });

  const { data: profileData } = useProfileQuery({
    variables: {
      profileId: "0x20e7",
    },
  });

  console.log({ feedData, profileData });

  return <div>Lens API</div>;
}
