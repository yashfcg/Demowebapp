import { QUERY_PRODUCT_BY_SLUG, QUERY_PRODUCT_FOR_MENU } from "@/graphql/productQueries";
import { getApolloClient } from "./apolloClient";
interface ProductInterface{
    title : string
    slug : string
    productFields : {
        heroBannerImage : {
            node :{
                sourceUrl : string
            }
        }
        benefits : string
        features : string
        productDescription : string
        benefitBackgroundImage :{
            node :{
                sourceUrl : string
            }
        }
    }
    featuredImage :{
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
export async function getProductBySlug(slug:string) {
    try{
            const apolloClient = getApolloClient();
            const data = await apolloClient.query({
                query: QUERY_PRODUCT_BY_SLUG,
                variables :  { slug: slug },
                fetchPolicy: "no-cache"
            });
            if (!data || !data.data || !data.data.product) {
                throw new Error("No product data found");
            }
            const product : ProductInterface= data?.data.product;
            // console.log(product.productFields.heroBannerImage.node.sourceUrl);
            return product
        }catch(e){
            console.error("Error fetching industry:", e);
            return null;
        }
}

interface ProductForMenuInterface{
    title : string
    slug : string
    productFields : {
        productDescriptionInMenu : string
    }
}

export async function getAllProductsForMenu() {
    try{
            const apolloClient = getApolloClient();
            const data = await apolloClient.query({
                query: QUERY_PRODUCT_FOR_MENU,
                fetchPolicy: "no-cache"
            });
            if (!data || !data.data || !data.data.products || !data.data.products.nodes) {
                throw new Error("No product data found");
            }
            const productMenu : ProductForMenuInterface[]= data?.data.products.nodes.map((product : ProductForMenuInterface)=>{
                return product
            });
            // console.log(industry);
            return productMenu
        }catch(e){
            console.error("Error fetching industry:", e);
            return [];
        }
}
