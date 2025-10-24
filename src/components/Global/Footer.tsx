import Image from "next/image";
import { MailIcon, PhoneIcon } from "../ui/Icons";
// import Link from "next/link";
// import { getAllIndustrySlugs } from "@/lib/industryContent";
// import GlobalButton from "../ui/GlobalButton";
const props = {
  flairdocsLogo: "/assets/global/footer/flairdocsLogoFooter.png",
  flaisoftLogo: "/assets/global/footer/flairsoft.png",
  flaisoftFederalLogo: "/assets/global/footer/flairsoftFederal.png",
  HeadquartersAddress: "7720 Rivers Edge Dr.Suite 200 Columbus, OH 43235",
  contact: "(614) 888-0700 ext. 216",
  fax: "Fax : (614) 573-7255",
  mail: "info@flairdocs.com",
  cities: [
    "Lansing, MI",
    "Oklahoma City, OK",
    "Salem, OR",
    "Salt Lake City, UT",
    "Houston , TX",
  ],

  company: [
    { title: "About Us", src: "/about-us" },
    // { title: "Leadership", src: "" },
    { title: "News & Events", src: "" },
    { title: "Awards & Recognitions", src: "" },
    // { title: "Locations", src: "" },
    { title: "Careers", src: "" },
    { title: "Blog", src: "" },
  ],
};

// interface IndustrySlug {
//   title: string;
//   slug: string;
// }
// interface ProductForMenuInterface {
//   title: string;
//   slug: string;
//   productFields: {
//     productDescriptionInMenu: string;
//   };
// }
interface FooterContentInterface {
  footerFields: {
    copyright: string;
    address: {
      address: string;
      addressHeading: string;
    };
    flairsoft: {
      logoHeading: string;
      flairsoft_logo: {
        node: {
          sourceUrl: string;
        };
      };
    };
    flairsoftFederal: {
      flairsoftFederalLogoHeading: string;
      flairsoftFederalLogo: {
        node: {
          sourceUrl: string;
        };
      };
    };
    telephone: {
      telLink: string;
      display: string;
    };
    mail: {
      mailtoLink: string;
      display: string;
    };
    location: {
      locationHeading: string;
      locations: string;
    };
  };
}
export default async function Footer({
  footerData,
}: {
  footerData: FooterContentInterface | null;
}) {
  //   {
  //   products,
  //   industries,
  // }: {
  //   products: ProductForMenuInterface[];
  //   industries: IndustrySlug[];
  // }
  function splitCities(input: string | null | undefined) {
    if (
      input == undefined ||
      input == null ||
      typeof input !== "string" ||
      input.trim() === ""
    ) {
      return [];
    }

    return input
      .split(/\r?\n/) // handles both \n and \r\n
      .map((city) => city.trim()) // trim spaces from each line
      .filter((city) => city !== ""); // remove empty entries
  }
  let cityoptions = splitCities(footerData?.footerFields.location.locations);
  if (cityoptions.length == 0) {
    cityoptions = [...props.cities];
  }
  return (
    <div className="w-full min-h-[50vh] bg-[#235ABD] relative overflow-clip flex items-center justify-center">
      <Image
        src="/assets/global/footer/backgroundFooter.png"
        alt="footer background"
        height={1620}
        width={3820}
        className="h-full absolute top-0 left-0 z-0 object-cover"
      />

      <div className="relative w-[80vw] md:w-[70vw] h-full z-10  flex flex-col md:flex-row  justify-between">
        <p className="absolute text-[#EFF3FD] text-sm font-roboto font-extralight bottom-[0%] md:-bottom-[10%] left-[5%] md:left-[0%]">
          {footerData?.footerFields?.copyright ??
            "© 2025 Flairdocs. All Rights Reserved."}
        </p>
        <div className=" w-[100%] md:w-[35%] h-auto flex flex-col justify-start md:mt-0 mt-10">
          <p className="text-[#EFF3FD] text-xl font-[600] mt-0 font-roboto border-b-2 w-fit">
            {footerData?.footerFields.address.addressHeading ??
              "Corporate Headquarters"}
          </p>
          <div className="mt-3 flex items-center">
            {/* <HouseIcon color="#EFF3FD" /> */}
            <p className="ml-0 text-[#EFF3FD] text-base font-light  font-roboto">
              {footerData?.footerFields?.address?.address ??
                props.HeadquartersAddress}
            </p>
          </div>
          <div className="grid [grid-template-columns:max-content_max-content] mt-5 items-center gap-2">
            <div className="col-span-1">
              <PhoneIcon color="#EFF3FD" size="size-4" />
            </div>
            <a
              href={
                footerData?.footerFields.telephone.telLink ?? "tel:+16148880700"
              }
              className=""
            >
              <p className="ml-2 text-[#EFF3FD] font-light text-base font-roboto">
                {footerData?.footerFields.telephone.display ?? props.contact}
              </p>
            </a>
            <div className="col-span-1">
              <MailIcon color="#EFF3FD" size="size-5" />
            </div>
            <a
              href={
                footerData?.footerFields.mail.mailtoLink ??
                "mailto:info@flairdocs.com"
              }
            >
              <p className="ml-2 text-[#EFF3FD] font-light text-base font-roboto">
                {footerData?.footerFields.mail.display ?? props.mail}
              </p>
            </a>
          </div>

          {/* <div className="w-[70%] h-auto z-10 ">
            <Image
              src={props.flairdocsLogo}
              alt="Flairdocs logo"
              width={518}
              height={122}
              className="w-full h-auto "
            />
          </div> */}
          <div className="hidden w-[100%] h-auto  justify-between items-end md:mt-15 border">
            <div className="w-[45%] h-auto relative">
              {/* <p className="text-[#EFF3FD] text-xs font-light w-[150%] mb-2 font-roboto">
                Flairdocs is a product by
              </p> */}
              <Image
                src={
                  footerData?.footerFields.flairsoft.flairsoft_logo.node
                    .sourceUrl ?? props.flaisoftLogo
                }
                alt="Flairsoft logo"
                fill
                className="w-full h-auto"
              />
            </div>
            <div className="w-[45%] h-auto  mr-5 relative">
              <Image
                src={props.flaisoftFederalLogo}
                alt="Flairsoft logo"
                fill
                className="w-full h-auto "
              />
            </div>
          </div>

          <div className="mt-4">
            {/* <GlobalButton
              type="Secondary"
              text={"CONTACT US"}
              onPress={() => {}}
              size="normal"
            /> */}
          </div>
        </div>

        <div className="w-[100%] md:w-[60%] h-auto flex md:flex-row flex-col md:gap-10 gap-5 md:my-0 my-10">
          {/* <div className="w-auto min-w-fit h-auto flex flex-col gap-1">
            <h2 className="text-[#EFF3FD] font-[600] text-lg mb-2  border-b-2 w-fit font-roboto">
              Industries
            </h2>
            {industries.map((industry) => {
              return (
                <Link key={industry.slug} href={`/industry/${industry.slug}`}>
                  <h3
                    className="ml-1 text-[#EFF3FD] font-[400] text-lg font-roboto 
                  relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full
                  "
                  >
                    {industry.title}
                  </h3>
                </Link>
              );
            })}
          </div> */}

          {/* <div className="w-auto min-w-fit h-auto flex flex-col gap-1">
            <h2 className="text-[#EFF3FD] font-[600] text-lg mb-2  border-b-2 w-fit font-roboto">
              Products
            </h2>
            {products.map((product) => {
              return (
                <Link key={product.title} href={`/product/${product.slug}`}>
                  <h3
                    className="ml-1 text-[#EFF3FD] font-[400] text-lg font-roboto
                  relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full
                  "
                  >
                    {product.title}
                  </h3>
                </Link>
              );
            })}
          </div> */}
          <div className="w-full flex flex-col gap-5">
            <div className="w-full max-w-[400px]  h-fit mt-0 flex xl:flex-row flex-col justify-between xl:gap-0 gap-5">
              <div className="w-[40%] h-auto flex flex-col relative  gap-2">
                <p className="text-[#EFF3FD] text-base font-light  font-roboto text-nowrap">
                  {footerData?.footerFields.flairsoft.logoHeading ??
                    "Flairdocs is a product by"}
                </p>
                <Image
                  src={
                    footerData?.footerFields.flairsoft.flairsoft_logo.node
                      .sourceUrl ?? props.flaisoftLogo
                  }
                  alt="Flairsoft logo"
                  width={209}
                  height={76}
                  className="w-full h-auto object-cover "
                />
              </div>
              <div className="w-[40%] h-auto flex flex-col relative  gap-2">
                <p className="text-[#EFF3FD] text-base font-light  font-roboto text-nowrap">
                  {footerData?.footerFields.flairsoftFederal
                    .flairsoftFederalLogoHeading ?? "Also visit us at"}
                </p>
                <Image
                  src={
                    footerData?.footerFields.flairsoftFederal
                      .flairsoftFederalLogo.node.sourceUrl ??
                    props.flaisoftFederalLogo
                  }
                  alt="Flairsoft logo"
                  width={209}
                  height={76}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="w-auto h-auto flex flex-col gap-1">
              {/* <h2 className="text-[#EFF3FD] font-[600] text-lg mb-2  border-b-2 w-fit font-roboto">
              Company
            </h2>
            {props.company.map((comp) => {
              return (
                <Link key={comp.title} href={comp.src}>
                  <h3
                    className="ml-1 text-[#EFF3FD] font-[400] text-lg font-roboto min-w-fit text-nowrap 
                  relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full
                  "
                  >
                    {comp.title}
                  </h3>
                </Link>
              );
            })} */}
              <h2 className="text-[#EFF3FD] font-[400] text-lg my-2 uppercase border-b-2 w-fit font-roboto">
                {footerData?.footerFields.location.locationHeading ??
                  "Locations"}
              </h2>
              <div className="flex xl:flex-row flex-col gap-2 mt-2 xl:divide-x">
                {cityoptions.map((city) => {
                  return (
                    <h3
                      key={city}
                      className={` ml-0 pr-2 text-[#EFF3FD] font-[300] text-lg font-roboto min-w-fit text-nowrap`}
                    >
                      {city}
                    </h3>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
