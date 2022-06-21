import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4o1yj6x04us01xr7zoba6ds/master",
    cache: new InMemoryCache()
})