"use client";

import Image from "next/image";

import {
  ChevronDownIcon,
  // ChevronRightIcon,
  ChevronUpIcon,
  HamburgerIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
} from "../ui/Icons";
import { useEffect, useRef, useState } from "react";
import GlobalButton from "../ui/GlobalButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Industry {
  title: string;
  slug: string;
  industryDescriptionInMenu: string;
}
// interface Product {
//   title: string;
//   slug: string;
//   desc: string;
// }

const IndustryMenu = ({
  industries,
  closeMenu,
}: {
  industries: Industry[];
  closeMenu: () => void;
}) => {
  // const products: Product[] = [
  //   {
  //     title: "DOTTrack",
  //     desc: "Managing real property planning, acquisition, operations, and data in the transportation industry.",
  //     slug: "/dottrack",
  //   },
  //   {
  //     title: "Outdoor Advertising and Control",
  //     desc: "Issuance, management and renewal of outdoor advertising sign permits.",
  //     slug: "/outdoor-advertising-and-control",
  //   },
  //   {
  //     title: "Highway Access Permitting",
  //     desc: "Permit submittal, review and issuance process for Highway work.",
  //     slug: "/highway-access-permitting",
  //   },
  //   {
  //     title: "EnviroTrack",
  //     desc: "Compliance with all environmental clearance and permitting processes.",
  //     slug: "/envirotrack",
  //   },
  //   {
  //     title: "UtilTrack",
  //     desc: "Managing utility coordination and installation with end-to-end workflow approvals and more.",
  //     slug: "/utiltrack",
  //   },
  // ];
  return (
    <div className="w-full  xl:w-fit  h-fit max-h-[80vh] md:max-h-[85vh] hide-scrollbar overflow-scroll   flex items-center justify-center bg-white shadow-[0_12px_32px_rgba(0,0,0,0.2)] ">
      <div className="w-[100%] min-w-80 md:min-w-60 flex flex-col gap-5">
        {/* <h1 className="font-archivo font-[700] text-4xl text-[#152B3D]">
          Industries
        </h1> */}
        <div className="w-full h-fit flex flex-col md:flex-row  justify-start md:gap-10">
          <div className="w-full  min-w-80 md:min-w-60 flex flex-col divide-y ">
            {industries.map((industry: Industry) => {
              return (
                <Link
                  key={industry.slug}
                  onClick={() => closeMenu()}
                  href={`/industry/${industry.slug}`}
                  className=" hover:bg-gray-200 py-2 px-2"
                >
                  <div className="group hover:cursor-pointer hover:text-[#235ABD] font-inter  hover:border-l-2 pl-2 hover:pl-3 text-[#152B3D] transition-all duration-200 smooth">
                    <h1 className=" font-[600] text-base inline-flex items-center gap-2 group-hover:gap-5 transition-all duration-200 smooth">
                      {industry.title}
                    </h1>
                    {/* {<ChevronRightIcon /> removed from above} */}
                    {/* <p className="text-sm">
                      {industry.industryDescriptionInMenu}
                    </p> */}
                  </div>
                </Link>
              );
            })}
          </div>
          {/*<div className=" flex-grow p-5 flex flex-col gap-2 md:gap-0 items-start z-20 justify-around relative">
            <div className="inset-0 bg-[#235ABD] opacity-5 z-10 absolute"></div>
            { <h1 className="font-archivo font-[600] text-2xl text-[#152B3D]">
              Products
            </h1> }
            {products.map((product: Product) => {
              return (
                <Link
                  key={product.title}
                  onClick={() => closeMenu()}
                  href={`/product/${product.slug}`}
                  className="z-20 max-w-[380px]"
                >
                  <div className="z-20 group hover:cursor-pointer hover:text-[#235ABD] font-inter  hover:border-l-2 pl-2 hover:pl-3 text-[#152B3D] transition-all duration-200 smooth">
                    <h1 className=" font-[600] text-base ">{product.title}</h1>
                    { <p className="text-sm">{product.desc}</p> }
                  </div>
                </Link>
              )
            })}
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

interface ProductMenuInterface {
  title: string;
  slug: string;
  productFields: {
    productDescriptionInMenu: string;
  };
}
const ProductMenu = ({
  products,
  closeMenu,
}: {
  products: ProductMenuInterface[];
  closeMenu: () => void;
}) => {
  //console.log(products);
  return (
    <div className="w-full xl:w-fit h-fit max-h-[80vh] md:max-h-[85vh] overflow-y-scroll hide-scrollbar   flex items-center justify-center bg-white shadow-[0_12px_32px_rgba(0,0,0,0.2)]">
      <div className="w-[100%] min-w-80 flex flex-col gap-5">
        {/* <h1 className="font-archivo font-[700] text-4xl text-[#152B3D]">
          Products
        </h1> */}
        <div className="w-full h-fit max-h-[80vh] flex flex-col flex-wrap justify-start divide-y">
          {products.map((product: ProductMenuInterface) => {
            return (
              <Link
                key={product.title}
                onClick={() => closeMenu()}
                href={`/product/${product.slug}`}
                className="z-20 max-w-[380px] min-w-80  hover:bg-gray-200 py-2 px-2"
              >
                <div className="z-20 group hover:cursor-pointer hover:text-[#235ABD] font-inter  hover:border-l-2 pl-2 hover:pl-3 text-[#152B3D] transition-all duration-200 smooth">
                  <h1 className=" font-[600] text-base ">{product.title}</h1>
                  {/* <p className="text-sm">
                    {product.productFields.productDescriptionInMenu}
                  </p> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const SearchMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const router = useRouter();
  const inputref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputref.current?.focus();
  }, []);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const value = new FormData(e.currentTarget).get("query");
    if (value == null || value == "") return;
    closeMenu();
    router.push(`/search?s=${value}`);
  }
  return (
    <div className="w-full h-fit py-5  flex items-center justify-center bg-white shadow-[0_4px_4px_-2px_rgba(0,0,0,0.2)]">
      <div className="w-[70%] min-w-80 flex flex-col items-end gap-5">
        <form className="w-[20%] min-w-60 flex gap-2" onSubmit={handleSubmit}>
          <input
            ref={inputref}
            type="text"
            name="query"
            className=" p-2 font-inter text-gray-700 border border-gray-700 rounded-lg"
            placeholder="Search keyword"
            maxLength={30}
          ></input>
          <button
            type="submit"
            className=" bg-primaryBlue rounded-lg flex items-center justify-center p-2 hover:cursor-pointer"
          >
            <SearchIcon color="white" />
          </button>
        </form>
      </div>
    </div>
  );
};
const CompanyMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className="w-full xl:w-fit h-fit   flex items-center justify-center bg-white shadow-[0_12px_32px_rgba(0,0,0,0.2)]">
      <div className="w-[100%] min-w-80 md:min-w-60 flex flex-col gap-5">
        {/* <h1 className="font-archivo font-[700] text-4xl text-[#152B3D]">
          Company
        </h1> */}
        <div className="w-full h-fit flex flex-col  justify-start divide-y">
          <Link
            href={"/about-us"}
            className="p-2 hover:bg-gray-200"
            onClick={() => closeMenu()}
          >
            <div className="hover:cursor-pointer hover:text-[#235ABD] font-inter  hover:border-l-2 pl-2 hover:pl-3 text-[#152B3D] transition-all duration-200 smooth">
              <h1 className=" font-[600] text-base">About Us</h1>
            </div>
          </Link>
          <Link
            href={""}
            className="p-2 hover:bg-gray-200"
            onClick={() => closeMenu()}
          >
            <div className=" hover:cursor-pointer hover:text-[#235ABD] font-inter  hover:border-l-2 pl-2 hover:pl-3 text-[#152B3D] transition-all duration-200 smooth">
              <h1 className=" font-[600] text-base whitespace-nowrap">
                {"News & Events"}
              </h1>
            </div>
          </Link>
          <Link
            href={"/awards-and-recognitions"}
            className="p-2 hover:bg-gray-200"
            onClick={() => closeMenu()}
          >
            <div className="hover:cursor-pointer hover:text-[#235ABD] font-inter  hover:border-l-2 pl-2 hover:pl-3 text-[#152B3D] transition-all duration-200 smooth">
              <h1 className=" font-[600] text-base ">
                {"Awards & Recognitions"}
              </h1>
            </div>
          </Link>
          {/* <Link href={""} onClick={() => closeMenu()}>
                <div className="hover:cursor-pointer hover:text-[#235ABD] font-inter  hover:border-l-2 pl-2 hover:pl-3 text-[#152B3D] transition-all duration-200 smooth">
                  <h1 className=" font-[600] text-base">{"Locations"}</h1>
                </div>
              </Link> */}

          <Link
            href={"/careers"}
            className="p-2 hover:bg-gray-200"
            onClick={() => closeMenu()}
          >
            <div className="hover:cursor-pointer hover:text-[#235ABD] font-inter  hover:border-l-2 pl-2 hover:pl-3 text-[#152B3D] transition-all duration-200 smooth">
              <h1 className=" font-[600] text-base">Careers</h1>
            </div>
          </Link>
          <Link
            href={"/blogs"}
            className="p-2 hover:bg-gray-200"
            onClick={() => closeMenu()}
          >
            <div className="hover:cursor-pointer hover:text-[#235ABD] font-inter  hover:border-l-2 pl-2 hover:pl-3 text-[#152B3D] transition-all duration-200 smooth">
              <h1 className=" font-[600] text-base">Blogs</h1>
            </div>
          </Link>
          <Link href={"/request-demo"} className="p-2 hover:bg-gray-200">
            <div className="hover:cursor-pointer hover:text-[#235ABD] font-inter  hover:border-l-2 pl-2 hover:pl-3 text-[#152B3D] transition-all duration-200 smooth">
              <h1 className=" font-[600] text-base whitespace-nowrap">
                Contact Us
              </h1>
            </div>
          </Link>

          {/* <div className="w-fit max-w-[413px] flex flex-col gap-5  md:border-r-1 pr-5"></div> */}
        </div>
      </div>
    </div>
  );
};

export function CrossIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

interface HeaderContentInterface {
  headerfields: {
    mainlogo: {
      node: {
        mediaDetails: {
          width: number;
          height: number;
        };
        sourceUrl: string;
      };
    };
  };
}
export default function Header({
  industries,
  products,
  headerData,
}: {
  headerData: HeaderContentInterface | null;
  industries: Industry[];
  products: ProductMenuInterface[];
}) {
  const industryButtonRef = useRef<HTMLButtonElement | null>(null);
  const productButtonRef = useRef<HTMLButtonElement | null>(null);
  const companyButtonRef = useRef<HTMLButtonElement | null>(null);
  const options: string[] = ["Industries", "Products", "Company"];
  const refMap: Record<string, React.RefObject<HTMLButtonElement | null>> = {
    Industries: industryButtonRef,
    Products: productButtonRef,
    Company: companyButtonRef,
  };
  const [postionX, setPositionX] = useState<string>();

  const [selected, setSelected] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(true);
  const initialScrollY = useRef(0);
  const pathname = usePathname();
  const closeMenu = (): void => {
    setSelected("");
  };
  useEffect(() => {
    setSelected("");
  }, [pathname]);

  useEffect(() => {
    if (selected == "") return;

    initialScrollY.current = window.scrollY;

    const handleScroll = () => {
      const scrolledDistance = Math.abs(
        window.scrollY - initialScrollY.current
      );

      if (scrolledDistance > 50) {
        setSelected("");
        setIsScrolled(true);
      } else {
      }
    };

    window.addEventListener("scroll", handleScroll);
    function getXCoordButton() {
      if (selected == "" || selected == "Mobile" || selected == "Search")
        return "0px";

      const currRef = refMap[selected];
      if (currRef.current) {
        const rect = currRef.current.getBoundingClientRect();
        const xcoord = rect.left;
        console.log(xcoord.toFixed(0));
        return `${xcoord}px`;
      }
      return "0px";
    }
    setPositionX(getXCoordButton());
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selected]);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const handleClickRequestDemo = (): void => {
  //   const el = document.getElementById("contact-demo-form");
  //   if (el) el.scrollIntoView({ behavior: "smooth" });
  // };
  const MobileMenu = () => {
    return (
      <div className="w-full h-fit py-5  flex items-center justify-center bg-white shadow-[0_4px_4px_-2px_rgba(0,0,0,0.2)]">
        <div className="w-[70%] min-w-80 flex items-start flex-col gap-5">
          <button
            onClick={() => setSelected("Industries")}
            className="text-base hover:cursor-pointer font-inter font-[600]  text-[#152B3D] border-l-2 pl-2"
          >
            Industries
          </button>
          <button
            onClick={() => setSelected("Products")}
            className="text-base hover:cursor-pointer font-inter font-[600]  text-[#152B3D] border-l-2 pl-2"
          >
            Products
          </button>
          <button
            onClick={() => setSelected("Company")}
            className="text-base hover:cursor-pointer font-inter font-[600]  text-[#152B3D] border-l-2 pl-2"
          >
            Company
          </button>
          <Link href={"/request-demo"}>
            <GlobalButton
              type="Primary"
              text={"Request Demo"}
              onPress={() => {}}
              size="small"
            />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-fit  fixed  flex-col z-50">
      <div
        className={`  z-50 h-20 w-full md:h-[12.5vh] flex justify-center ${
          isScrolled ? "bg-[#235ABD]" : "bg-transparent"
        } `}
      >
        <div className="w-[80%] md:w-[70%] h-[100%] flex items-center justify-between">
          <Link href={"/"} className=" h-[70%] flex items-center">
            <Image
              width={
                headerData?.headerfields?.mainlogo?.node?.mediaDetails?.width ??
                1677
              }
              height={
                headerData?.headerfields?.mainlogo?.node?.mediaDetails
                  ?.height ?? 444
              }
              alt="Flairdocs Logo"
              src={
                headerData?.headerfields?.mainlogo?.node?.sourceUrl ??
                "/assets/global/header/flairdocsLogoWhite.webp"
              }
              className="h-[70%] md:h-[100%]  w-auto"
            />
          </Link>
          <div className="xl:flex hidden w-[70%] justify-around items-center">
            {options.map((option) => {
              return (
                <button
                  ref={refMap[option]}
                  onClick={() =>
                    setSelected((prev) => (prev != option ? option : ""))
                  }
                  key={option}
                  className="text-lg hover:cursor-pointer font-inter font-[600] flex items-center text-white gap-2"
                >
                  {option}
                  {selected == option ? (
                    <ChevronUpIcon color="white" strokeWidth="2" />
                  ) : (
                    <ChevronDownIcon color="white" strokeWidth="2" />
                  )}
                </button>
              );
            })}
            <Link href={"/request-demo"}>
              <GlobalButton
                type="Secondary"
                text={"Request a Demo"}
                onPress={() => {}}
                size="small"
              />
            </Link>

            <div className="flex items-center gap-4">
              <a href="tel:+16148880700">
                <PhoneIcon color="white" size="size-4" />
              </a>
              <a href="mailto:info@flairdocs.com">
                <MailIcon color="white" size="size-5" />
              </a>
            </div>
            <button
              onClick={() =>
                setSelected((prev) => (prev != "Search" ? "Search" : ""))
              }
              className="hover:cursor-pointer text-lg font-[600] flex items-center text-white gap-2"
            >
              <SearchIcon color="white" />
              Search
            </button>
          </div>
          <div className="xl:hidden flex items-center gap-2 sm:gap-4">
            <a href="tel:+16148880700">
              <PhoneIcon color="white" size="size-4" />
            </a>
            <a href="mailto:info@flairdocs.com">
              <MailIcon color="white" size="size-5" />
            </a>
            <button
              className="text-white border-1 p-2 rounded-lg"
              onClick={() =>
                setSelected((prev) => {
                  if (prev != "") return "";
                  return "Mobile";
                })
              }
            >
              {selected == "" ? <HamburgerIcon /> : <CrossIcon />}
            </button>
          </div>
        </div>
      </div>
      {selected == "Industries" && postionX != null && (
        <div
          style={{
            left: postionX,
          }}
          className={`absolute w-full`}
        >
          {
            <IndustryMenu
              industries={industries}
              closeMenu={() => closeMenu()}
            />
          }
        </div>
      )}
      {selected == "Company" && postionX != null && (
        <div
          className={`absolute w-full`}
          style={{
            left: postionX,
          }}
        >
          {<CompanyMenu closeMenu={() => closeMenu()} />}
        </div>
      )}
      {selected == "Products" && postionX != null && (
        <div
          style={{
            left: postionX,
          }}
          className={`absolute w-full`}
        >
          {<ProductMenu products={products} closeMenu={() => closeMenu()} />}
        </div>
      )}

      {selected == "Mobile" && <MobileMenu />}
      {selected == "Search" && <SearchMenu closeMenu={() => closeMenu()} />}
    </div>
  );
}
