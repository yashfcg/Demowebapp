import Image from "next/image";

interface technologyPartnersInterface {
  featuredImage: {
    node: {
      altText: string;
      sourceUrl: string;
      mediaDetails: {
        width: number;
        height: number;
      };
    };
  };
}
export default function TechnologyPartner({
  techPartners,
}: {
  techPartners: technologyPartnersInterface[];
}) {
  if (techPartners.length == 0) return null;
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-[70%] min-w-80 py-20 flex flex-col items-start gap-20">
        <h1 className="font-archivo font-[700] text-xl sm:text-2xl md:text-4xl">
          Technology Partners
        </h1>
        <div className="w-full flex flex-wrap justify-evenly">
        {techPartners.map((partner, idx) => {
  const src = partner.featuredImage?.node?.sourceUrl?.trim();
  const alt = partner.featuredImage?.node?.altText || "Technology Partner";
  const width = partner.featuredImage?.node?.mediaDetails?.width || 200;
  const height = partner.featuredImage?.node?.mediaDetails?.height || 200;

  if (!src) return null; // skip if no image available

  return (
    <Image
      key={src + idx}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-contain"
    />
  );
})}
        </div>
      </div>
    </div>
  );
}
