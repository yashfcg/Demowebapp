import { QUERY_SEARCH_POSTS } from "@/graphql/searchQuery";
import { getApolloClient } from "./apolloClient";

export async function searchPosts(keyword:string) {
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
            query: QUERY_SEARCH_POSTS,
            variables :  { searchTerm: keyword },
            fetchPolicy: "no-cache"
        });
        if(!data.data)throw "No results found";
        // console.log(data);
        return data;
    }catch(e){
        console.log(e);
        return null;
    }
}