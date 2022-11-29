import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Manual } from "./components/Manual";

export function App() {
  const apolloClient = new ApolloClient({
    uri: "https://api.lens.dev/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={apolloClient}>
      <Manual />
    </ApolloProvider>
  );
}
