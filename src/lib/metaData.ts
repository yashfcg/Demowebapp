import { getApolloClient } from "./apolloClient";
import { QUERY_HOME_META_DATA } from "@/graphql/homepageQueries";
import {  QUERY_ABOUT_US_META_DATA } from "@/graphql/aboutUsQueries";
import { QUERY_INDUSTRY_META_DATA } from "@/graphql/industryQueries";
import { QUERY_PRODUCT_META_DATA } from "@/graphql/productQueries";
interface MetaData {
    metaTitle : string
    metaDescription : string 
    keyWords : string
    openGraphDescription : string
}
export async function getHomePageMetaData() {
    try{
            const apolloClient = getApolloClient();
            const data = await apolloClient.query({
                query: QUERY_HOME_META_DATA,
                fetchPolicy: "no-cache"
            });
            if (!data || !data.data || !data.data.homepage ||!data.data.homepage.metaData) {
                throw new Error("No Meta data found");
            }
            const metaData : MetaData = data.data.homepage.metaData;
            return metaData
            
        }catch(e){
            console.error("homepage metadata error:", e);
            return {
                metaTitle : "",
                metaDescription : "", 
                keyWords : "",
                openGraphDescription : ""
            }
        }
}
export async function getAboutUsMetaData() {
    try{
            const apolloClient = getApolloClient();
            const data = await apolloClient.query({
                query: QUERY_ABOUT_US_META_DATA,
                fetchPolicy: "no-cache"
            });
            if (!data || !data.data || !data.data.aboutUsPage ||!data.data.aboutUsPage.metaData) {
                throw new Error("No Meta data found");
            }
            const metaData : MetaData = data.data.aboutUsPage.metaData;
            return metaData
            
        }catch(e){
            console.error("Error fetching about us metadata :", e);
            return {
                metaTitle : "",
                metaDescription : "", 
                keyWords : "",
                openGraphDescription : ""
            }
        }
}
export async function getProductMetaData(slug : string) {
    try{
            const apolloClient = getApolloClient();
            const data = await apolloClient.query({
                query: QUERY_PRODUCT_META_DATA,
                variables :  { slug: slug },
                fetchPolicy: "no-cache"
            });
            if (!data || !data.data || !data.data.product ||!data.data.product.metaData) {
                throw new Error("No Meta data found");
            }
            const metaData : MetaData = data.data.product.metaData;
            return metaData
            
        }catch(e){
            console.error("Error fetching product metadata :", e);
            return {
                metaTitle : "",
                metaDescription : "", 
                keyWords : "",
                openGraphDescription : ""
            }
        }
}
export async function getIndustryMetaData(slug : string) {
    try{
            const apolloClient = getApolloClient();
            const data = await apolloClient.query({
                query: QUERY_INDUSTRY_META_DATA,
                variables :  { slug: slug },
                fetchPolicy: "no-cache"
            });
            if (!data || !data.data || !data.data.industry ||!data.data.industry.metaData) {
                throw new Error("No Meta data found");
            }
            const metaData : MetaData = data.data.industry.metaData;
            return metaData
            
        }catch(e){
            console.error("Error fetching Industry metadata :", e);
            return {
                metaTitle : "",
                metaDescription : "", 
                keyWords : "",
                openGraphDescription : ""
            }
        }
}