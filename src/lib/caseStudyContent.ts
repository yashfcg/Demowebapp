
import { getApolloClient } from "./apolloClient";
import { QUERY_CASE_STUDY, QUERY_CASE_STUDY_SLUGS } from "@/graphql/caseStudyQueries";

interface CaseStudyInterface {
    title : string ,
    slug : string ,
    caseStudyField : {
        bannerText : string
        challenge : string
        impact : string
        quoteCitation : string
        quoteText : string
        solution : string
    },
    featuredImage: {
        node: {
            altText: string;
            sourceUrl: string;
            mediaDetails : {
                height : number ,
                width : number 
            }
        };
    },
}

export async function getAllCaseStudyBySlug(slug : string) {
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
            query: QUERY_CASE_STUDY,
            variables :  { slug: slug },
            fetchPolicy: "no-cache"
        });
        if (!data || !data.data || !data.data.caseStudy) {
            throw new Error("No casestudy data found");
        }
        const caseStudy : CaseStudyInterface= data?.data.caseStudy;
    
        return caseStudy
    }catch(e){
        console.error("Error fetching Case Studies:", e);
        return null;
    }
    
}

interface CaseStudyCardInterface {
    title : string ,
    slug : string ,
    caseStudyField : {
        quoteCitation : string
        quoteText : string
    }
    
}
export async function getAllCaseStudySlugs() {
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
            query: QUERY_CASE_STUDY_SLUGS,
            fetchPolicy: "no-cache"
        });
        if (!data || !data.data || !data.data.caseStudies) {
            throw new Error("No casestudy slug data found");
        }
        const caseStudySlugs : CaseStudyCardInterface[]= data?.data.caseStudies.nodes.map((caseCard : CaseStudyCardInterface)=>({
            title: caseCard.title,
            slug: caseCard.slug,
            caseStudyField : {
                quoteCitation : caseCard.caseStudyField.quoteCitation,
                quoteText : caseCard.caseStudyField.quoteText,
            }
        })) || [];
        // console.log(caseStudySlugs.length);
        return caseStudySlugs
    }catch(e){
        console.error("Error fetching Case Studies slug:", e);
        return [];
    }
    
}

// interface CaseStudySlugs {
//     title : string ,
//     slug : string ,
// }