import { getApolloClient } from "./apolloClient";
import { QUERY_CLIENT_LOGOS, QUERY_FOOTER_DATA, QUERY_HEADER_DATA, QUERY_HERO_CONTENT, QUERY_LATEST_TECH } from "@/graphql/homepageQueries";
interface ClientLogo {
    featuredImage: {
        node: {
          altText: string;
          sourceUrl: string;
          mediaDetails : {
            height : number ,
            width : number 
          }
        };
      };
  }
export async function getAllClientLogos() {
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
        query: QUERY_CLIENT_LOGOS,
        fetchPolicy: "no-cache"
        });
        if (!data || !data.data || !data.data.allClients || !data.data.allClients.nodes) {
            throw new Error("No Client data found");
        }
        const logoLinks = data?.data.allClients.nodes.map((partner:ClientLogo) => ({
            featuredImage: {
                sourceUrl: partner.featuredImage.node.sourceUrl,
                altText: partner.featuredImage.node.altText,
                height : partner.featuredImage.node.mediaDetails.height,
                width : partner.featuredImage.node.mediaDetails.width,
            },
        })) || [];
        // console.log(logoLinks.length);
    
        return {
            logoLinks 
        };
    }catch(e){
        console.error("Error fetching partner logos:", e);
        return { logoLinks: [] };
    }
    
}

interface HeroContentInterface{
    homePageFields :{
        heroHeading : string
        heroPara : string
        herovideo : {
            node :{
                mediaItemUrl : string
            }
        }
        heroVideoposter :{
            node :{
                sourceUrl : string
            }
        }
        homePageBanner :{
        node :{
            sourceUrl : string
        }
      }
    }
}
export async function getHeroContent(date : number){
    console.log(date);
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
        query: QUERY_HERO_CONTENT,
        fetchPolicy: "no-cache"
        });
        if (!data || !data.data || !data.data.homepage ) {
            throw new Error("No hero content found");
        }
        const heroContent :HeroContentInterface = data.data.homepage;
        
        return heroContent
    }catch(e){
        console.error("Error fetching hero content:", e);
        return null;
    }
}
interface HeaderContentInterface{
    headerfields :{
        
        mainlogo :{
        node :{
            mediaDetails: {
                width: number,
                height: number
            }
            sourceUrl : string
        }
      }
    }
}
export async function getHeaderContent(){
    
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
        query: QUERY_HEADER_DATA,
        fetchPolicy: "no-cache"
        });
        if (!data || !data.data || !data.data.header ) {
            throw new Error("No hero content found");
        }
        const headerContent :HeaderContentInterface = data.data.header;
        
        return headerContent
    }catch(e){
        console.error("Error fetching hero content:", e);
        return null;
    }
}
interface FooterContentInterface{
    footerFields:{
        copyright : string ,
        address : {
            address :string,
            addressHeading : string
        },
        flairsoft :{
            logoHeading : string,
            flairsoft_logo :{
                node : {
                    sourceUrl : string
                }
            }
        },
        flairsoftFederal :{
            flairsoftFederalLogoHeading : string,
            flairsoftFederalLogo :{
                node : {
                    sourceUrl : string
                }
            }
        },
        telephone: {
            telLink: string,
            display: string,
        },
        mail: {
            mailtoLink: string,
            display: string,
        },
        location :{
            locationHeading : string,
            locations : string,
        }
    }
}
export async function getFooterContent(){
    
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
        query: QUERY_FOOTER_DATA,
        fetchPolicy: "no-cache"
        });
        if (!data || !data.data || !data.data.footer ) {
            throw new Error("No footer content found");
        }
        const footerContent : FooterContentInterface = data.data.footer;
        //console.log(footerContent)
        return footerContent
    }catch(e){
        console.error("Error fetching footer content:", e);
        return null;
    }
}


interface LatestTechInterface{
    title : string 
    latestTechFields :{
        description : string
        heading : string
        techShowcasingImage :{
        node :{
            sourceUrl : string
            mediaDetails : {
                width : number 
                height : number
            }
        }
      }
    }
}

export async function getLatestTech(){
    try{
        const apolloClient = getApolloClient();
        const data = await apolloClient.query({
        query: QUERY_LATEST_TECH,
        fetchPolicy: "no-cache"
        });
        if (!data || !data.data || !data.data.latestTechnologies || !data.data.latestTechnologies.nodes ) {
            throw new Error("No latest tech content found");
        }
        const latestTechArr : LatestTechInterface[] = data.data.latestTechnologies.nodes.map((element : LatestTechInterface)=>{
            return element;
        }) 
        //console.log(latestTechArr.length);
        return latestTechArr;
    }catch(e){
        console.log("error fetching latest tech" , e);
        return [];
    }
}



