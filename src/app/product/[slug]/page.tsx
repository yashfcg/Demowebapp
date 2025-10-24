// import ContactForDemo from "@/components/Global/ContactForDemo";
import LearnMore from "@/components/Global/LearnMore";
import ProductBenefit from "@/components/TrackPages/ProductBenefits";
import ProductFeatures from "@/components/TrackPages/ProductFeatures";
import TrackBanner from "@/components/TrackPages/TrackBanner";
import { getProductMetaData } from "@/lib/metaData";
import { getProductBySlug } from "@/lib/productContent";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const metaData = await getProductMetaData(slug);
  let keywords: string[] = [];
  if (metaData.keyWords && metaData.keyWords != "") {
    keywords = metaData.keyWords.split("\n").map((keyword: string) => keyword);
  }
  return {
    title: metaData.metaTitle,
    description: metaData.metaDescription,
    keywords: keywords,
    openGraph: {
      title: metaData.metaTitle,
      description: metaData.metaDescription,
      url: `https://flairdocs.com/product/${slug}`,
      siteName: "Flairdocs",
      locale: "en_US",
      type: "website",
    },
  };
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const productData = await getProductBySlug(slug);
  //console.log(productData);
  if (productData == null || !productData.productFields) return notFound();
  return (
    <div className="w-full h-auto ">
      <TrackBanner
        title={productData.title}
        description={productData.productFields.productDescription}
        src={productData.featuredImage.node.sourceUrl}
        altText={productData.featuredImage.node.altText}
        width={productData.featuredImage.node.mediaDetails.width}
        height={productData.featuredImage.node.mediaDetails.height}
        heroBannerSource={
          productData.productFields.heroBannerImage.node.sourceUrl
        }
      />
      <ProductFeatures features={productData.productFields.features} />
      <ProductBenefit
        benefits={productData.productFields.benefits}
        bgsrc={productData.productFields.benefitBackgroundImage.node.sourceUrl}
      />
      <LearnMore />
      {/* <ContactForDemo /> */}
    </div>
  );
}
