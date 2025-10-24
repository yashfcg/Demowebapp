import { getApolloClient } from "./apolloClient";
import { QUERY_ALL_INDUSTRY_FOR_MENU, QUERY_ALL_INDUSTRY_SLUGS, QUERY_ALL_INDUSTRY_SLUGS_HOMEPAGE, QUERY_INDUSTRY_BY_SLUG } from "@/graphql/industryQueries";

interface IndustrySlug{
    title : string ,
    slug : string
}

export async function getAllIndustrySlugs() {
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
            query: QUERY_ALL_INDUSTRY_SLUGS,
            fetchPolicy: "no-cache"
        });
        if (!data || !data.data || !data.data.industries || !data.data.industries.nodes) {
            throw new Error("No Industry slug data found");
        }
        const industrySlugs : IndustrySlug[]= data?.data.industries.nodes.map((Industry : IndustrySlug)=>({
            title: Industry.title,
            slug: Industry.slug,
        })) || [];
        // console.log(industrySlugs.length);
        return industrySlugs
    }catch(e){
        console.error("Error fetching Industry slug:", e);
        return [];
    }
    
}


interface IndustryCardHomepage{
    title : string ,
    slug : string ,
    industryFields : {
        industryDescriptionInMenu : string
        industryImageOnHomepage : {
            node : {
                sourceUrl : string
                altText : string
            }
        }
    }
}


export async function getAllIndustryCardHomePage() {
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
            query: QUERY_ALL_INDUSTRY_SLUGS_HOMEPAGE,
            fetchPolicy: "no-cache"
        });
        if (!data || !data.data || !data.data.industries || !data.data.industries.nodes) {
            throw new Error("No Industry Homepage data found");
        }
        const industryHomepageCards = data?.data.industries.nodes.map((Industry : IndustryCardHomepage)=>({
            title: Industry.title,
            slug: Industry.slug,
            sourceUrl : Industry.industryFields.industryImageOnHomepage.node.sourceUrl,
            altText : Industry.industryFields.industryImageOnHomepage.node.altText,
            industryDescriptionInMenu : Industry.industryFields.industryDescriptionInMenu
        })) || [];
        // console.log(industryHomepageCards.length);
        return industryHomepageCards
    }catch(e){
        console.error("Error fetching Industry slug:", e);
        return [];
    }
    
}

interface Industry{
    title : string 
    slug : string
    featuredImage : {
        node : {
            altText : string 
            sourceUrl : string
            mediaDetails : {
                height : number 
                width : number
            }
        }
    }
    industryFields : {
        bannerText : string
        benefitsAndFeatures : string
        industryEnablement : string
        industryEmpowerment : string
        feature1 :{
            featureHeading : string
            featurePara : string
            featureImage :{
                node :{
                    altText : string
                    sourceUrl : string
                    mediaDetails :{
                    width : number
                    height : number
                    }
                }
            }
        }
        feature2 :{
            featureHeading : string
            featurePara : string
            featureImage :{
                node :{
                    altText : string
                    sourceUrl : string
                    mediaDetails :{
                    width : number
                    height : number
                    }
                }
            }
        }
        feature3 :{
            featureHeading : string
            featurePara : string
            featureImage :{
                node :{
                    altText : string
                    sourceUrl : string
                    mediaDetails :{
                    width : number
                    height : number
                    }
                }
            }
        }
    }

}

export async function getIndustryBySlug(slug:string) {
    try{
            const apolloClient = getApolloClient();
            const data = await apolloClient.query({
                query: QUERY_INDUSTRY_BY_SLUG,
                variables :  { slug: slug },
                fetchPolicy: "no-cache"
            });
            if (!data || !data.data || !data.data.industry) {
                throw new Error("No industry data found");
            }
            const industry : Industry= data?.data.industry;
            // console.log(industry);
            return industry
        }catch(e){
            console.error("Error fetching industry:", e);
            return null;
        }
}


interface IndustryMenuItem{
    title : string 
    slug : string
    industryFields : {
        industryDescriptionInMenu : string
    }
}

export async function getAllIndustryMenuItem() {
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
            query: QUERY_ALL_INDUSTRY_FOR_MENU,
            fetchPolicy: "no-cache"
        });
        
        if (!data || !data.data || !data.data.industries || !data.data.industries.nodes) {
            throw new Error("No Industry Homepage data found");
        }
        const menuItem = data?.data.industries.nodes.map((Industry : IndustryMenuItem)=>({
            title: Industry.title,
            slug: Industry.slug,
            industryDescriptionInMenu : Industry.industryFields.industryDescriptionInMenu
        })) || [];
        // console.log(menuItem.length);
        return menuItem
    }catch(e){
        console.error("Error fetching Industry slug:", e);
        return [];
    }
    
}