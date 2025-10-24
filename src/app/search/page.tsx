import { searchPosts } from "@/lib/searchPosts";
import Link from "next/link";
import { notFound } from "next/navigation";
interface SearchResults {
  title: string;
  desc: string;
  slug: string;
}
interface CaseInterface {
  title: string;
  slug: string;
  content: {
    bannerText: string;
  };
}
interface IndustryInterface {
  title: string;
  slug: string;
  content: {
    bannerText: string;
  };
}
interface ProductInterface {
  title: string;
  slug: string;
  content: {
    productDescription: string;
  };
}
export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  function limitWords(str: string) {
    if (str == null || str == "") return "";
    return str.split(" ").slice(0, 50).join(" ") + "....";
  }
  const filters = await searchParams;
  if (!filters || !filters.s) return notFound();
  const data = await searchPosts(filters.s as string);
  let searchResults: SearchResults[] = [];
  //homepage result
  if (data && data.data) {
    if (
      data.data.homepages &&
      data.data.homepages.nodes &&
      data.data.homepages.nodes.length != 0 &&
      data.data.homepages.nodes[0].content &&
      data.data.homepages.nodes[0]?.content.heroPara
    ) {
      searchResults.push({
        title: "Flairdocs",
        desc: limitWords(data.data.homepages.nodes[0]?.content?.heroPara) || "",
        slug: "/",
      });
    }
  }
  //industry result
  if (data && data.data) {
    if (
      data.data.industries &&
      data.data.industries.nodes &&
      data.data.industries.nodes.length != 0
    ) {
      const tempArr: SearchResults[] = data.data.industries.nodes.map(
        (industry: IndustryInterface) => {
          return {
            title: industry.title,
            slug: `/industry/${industry.slug}`,
            desc: limitWords(industry.content.bannerText),
          };
        }
      );
      searchResults = [...searchResults, ...tempArr];
    }
  }
  //Product result
  if (data && data.data) {
    if (
      data.data.products &&
      data.data.products.nodes &&
      data.data.products.nodes.length != 0
    ) {
      const tempArr: SearchResults[] = data.data.products.nodes.map(
        (product: ProductInterface) => {
          return {
            title: product.title,
            slug: `/product/${product.slug}`,
            desc: limitWords(product.content.productDescription),
          };
        }
      );
      searchResults = [...searchResults, ...tempArr];
    }
  }
  //case study result
  if (data && data.data) {
    if (
      data.data.caseStudies &&
      data.data.caseStudies.nodes &&
      data.data.caseStudies.nodes.length != 0
    ) {
      const tempArr: SearchResults[] = data.data.caseStudies.nodes.map(
        (caseStudy: CaseInterface) => {
          return {
            title: caseStudy.title,
            slug: `/case-study/${caseStudy.slug}`,
            desc: limitWords(caseStudy.content.bannerText),
          };
        }
      );
      searchResults = [...searchResults, ...tempArr];
    }
  }
  //about-us result
  if (data && data.data) {
    if (
      data.data.aboutUsPages &&
      data.data.aboutUsPages.nodes &&
      data.data.aboutUsPages.nodes.length != 0 &&
      data.data.aboutUsPages.nodes[0].content &&
      data.data.aboutUsPages.nodes[0]?.content.companyDescription
    ) {
      searchResults.push({
        title: "About Us",
        desc:
          limitWords(
            data.data.aboutUsPages.nodes[0]?.content?.companyDescription
          ) || "",
        slug: "/about-us",
      });
    }
  }

  // console.log(searchResults);

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <div className="w-[70%] min-w-80 flex flex-col items-start gap-20 pt-30 pb-10">
        <h1 className=" font-archivo text-2xl md:text-4xl font-[700] text-[#152B3D]">
          {`Search results for : "${filters.s}"`}
        </h1>
        <div className="w-full min-w-80 flex flex-col items-start gap-10">
          {searchResults.length == 0 ? (
            <h1 className="text-[#152B3D] font-archivo text-2xl md:text-4xl font-[700]">
              No results found
            </h1>
          ) : (
            searchResults.map((searchRes: SearchResults) => {
              return (
                <Link
                  href={`${searchRes.slug}`}
                  key={searchRes.slug}
                  className="w-full"
                >
                  <div className="flex flex-col w-full border-b-1 gap-2 py-2 border-gray-400">
                    <h1 className="text-primaryBlue font-archivo text-2xl md:text-4xl font-[700]">
                      {searchRes.title}
                    </h1>
                    <p className="font-inter">{searchRes.desc}</p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
