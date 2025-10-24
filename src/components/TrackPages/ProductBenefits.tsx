import Image from "next/image";

export default function ProductBenefit({
  benefits,
  bgsrc,
}: {
  benefits: string;
  bgsrc: string;
}) {
  return (
    <div className=" w-full h-auto flex justify-center items-center relative py-20">
      <Image src={bgsrc} alt="" fill className="object-cover z-0" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90.36deg,_#FFFFFF_50%,_rgba(255,255,255,0.15)_149.82%)] rounded-lg pointer-events-none" />
      <div className="w-[70%] min-w-80 flex flex-col gap-5 z-20">
        <h1 className="text-[#152B3D] text-xl md:text-2xl lg:text-4xl font-[700] font-archivo">
          How does it benefit you?
        </h1>
        <ul className="max-w-[700px]  list-disc list-outside pl-4">
          {benefits.split("\n").map((benefit) => {
            return (
              <li
                key={benefit}
                className="max-w-[959px] text-lg font-inter mt-4"
              >
                <p>
                  <span className="font-[600]">{benefit.split(":")[0]}</span>
                  {benefit.includes(":") && (
                    <span className="font-[400]">
                      : {benefit.split(":")[1].trim()}
                    </span>
                  )}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
