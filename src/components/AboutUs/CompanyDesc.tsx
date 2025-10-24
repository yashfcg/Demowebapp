export default function CompanyDesc({
  companyDescription,
  companyMotto,
}: {
  companyDescription: string;
  companyMotto: string;
}) {
  return (
    <div className="w-full h-auto py-20 bg-white text-[#152B3D] flex items-center justify-center">
      <div className="w-[70%]  min-w-80 flex flex-col items-start gap-5 sm:pr-20 md:pr-40">
        <h1 className="font-archivo font-[700] text-xl sm:text-2xl md:text-4xl   ">
          Company
        </h1>
        <p className="font-inter font-[400] whitespace-pre-line">
          {companyDescription}
        </p>
        <p className="font-inter font-[600]">{companyMotto}</p>
      </div>
    </div>
  );
}
