import { QUERY_ABOUT_US, QUERY_MANAGEMENT, QUERY_TECH_PARTNERS } from "@/graphql/aboutUsQueries";
import { getApolloClient } from "./apolloClient";

interface AboutUs  {
    featuredImage :{
        node :{
            altText : string
            sourceUrl : string
            mediaDetails: {
                width: number
                height : number
            }
        }
    }
    aboutUsFields :{
        bannerText : string
        companyDescription: string
        mission: string
        mottoOnAboutUsPage: string
        vision: string
    }
}

export async function getAboutUs(){
    try{
            const apolloClient = getApolloClient();
            const data = await apolloClient.query({
                query: QUERY_ABOUT_US,
                fetchPolicy: "no-cache"
            });
            if (!data || !data.data || !data.data.aboutUsPage) {
                throw new Error("No About us data found");
            }
            const aboutUsData : AboutUs= data?.data.aboutUsPage;
            
            return aboutUsData
        }catch(e){
            console.error("Error fetching About us:", e);
            return null;
        }
}

interface ManagementInterface {
    title: string
      featuredImage :{
        node :{
          altText : string
          sourceUrl:string
          mediaDetails :{
            width: number;
        height: number;
          }
        }
      }
      managementFields :{
        bio:string | null
        position:string
        linkedin : string
      }
}
export async function getManagement() {
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
            query: QUERY_MANAGEMENT,
            fetchPolicy: "no-cache"
        });
        if (!data || !data.data || !data.data.managements || !data.data.managements.nodes) {
            throw new Error("No Managament data found");
        }
        const managementData : ManagementInterface[] = data?.data.managements.nodes.map((management : ManagementInterface)=>{
            return management
        });
        //console.log(managementData.length);
        return managementData
    }catch(e){
        console.error("Error fetching Management data:", e);
        return [];
    }
}

interface technologyPartnersInterface {
    featuredImage :{
        node :{
            altText : string
            sourceUrl:string
            mediaDetails :{
                width: number;
                height: number;
            }
        }
    }
}
export async function getTechnologyPartners() {
    try {
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
            query: QUERY_TECH_PARTNERS,
            fetchPolicy: "no-cache"
        });
        if (!data || !data.data || !data.data.technologyPartners || !data.data.technologyPartners.nodes) {
            throw new Error("No Tech Partner data found");
        }
        const techPartners : technologyPartnersInterface[] = data?.data.technologyPartners.nodes.map((techPartner : technologyPartnersInterface)=>{
            return techPartner
        });
        //console.log(managementData.length);
        return techPartners
    }catch(e){
        console.error("Error fetching Tech Partner data:", e);
        return [];
    }
}
