import { getAllClientLogos } from "@/lib/homepageContent";
// import Image from "next/image";
import PartnerLogoCarousel from "./PartnerLogoCarousel";

// interface PartnersProps {
//   clients: CLientLogo[];
// }

// export default function PartnerLogos({ partners }: PartnersProps) {
//   console.log(partners);
//   return <div className="w-full h-auto bg-[white]"></div>;
// }
// export const revalidate = 60;
export default async function PartnerLogos() {
  const clients = await getAllClientLogos();
  // console.log(clients.logoLinks.length);
  if (!clients.logoLinks || clients.logoLinks.length == 0) {
    return <div></div>;
  } else
    return (
      <div className="w-full  bg-[white] flex flex-col gap-10 items-center justify-center py-10 ">
        <div className="w-[70%] min-w-80  flex flex-col items-center gap-5">
          <h1 className="text-center font-archivo text-2xl md:text-4xl font-[700] text-[#152B3D]">
            Trusted By
          </h1>
        </div>
        {/*w-[70%] max-w-[1287px]  min-w-80  items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-y-5 justify-items-center*/}
        <div className=" w-[70%] max-w-[1287px] min-w-80 flex items-center overflow-hidden  ">
          <PartnerLogoCarousel clients={clients.logoLinks} />
          {/* {clients.logoLinks.map((logoLink: CLientLogo) => {
            //   console.log(logoLink.featuredImage.height);

            return (
              <div
                key={logoLink.featuredImage.sourceUrl}
                className="h-[100px] border w-auto flex items-center justify-center"
              >
                <Image
                  src={logoLink.featuredImage.sourceUrl}
                  alt={logoLink.featuredImage.altText}
                  width={logoLink.featuredImage.width}
                  height={logoLink.featuredImage.height}
                  className="h-full w-auto object-contain border"
                  // className="col-span-1 scale-80 min-h-[60px] max-h-[100px] md:scale-100  w-auto  hover:grayscale-0 hover:opacity-100"
                />
              </div>
            );
          })} */}
        </div>
      </div>
    );
}
