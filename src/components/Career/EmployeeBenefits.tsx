import React from "react";

interface EmployeeBenefitsProps {
  sectionTitle: string;
  benefits: string;
}

const EmployeeBenefits: React.FC<EmployeeBenefitsProps> = ({ sectionTitle, benefits }) => {
  const parsedBenefits = benefits
    .split("\n")
    .filter((line) => line.includes("||"))
    .map((line) => {
      const [title, description] = line.split("||").map((s) => s.trim());
      return { title, description };
    });

  return (
    <section style={{ backgroundColor: "#f6f8f8" }} className="py-6 px-2 font-['Inter']">
      <h2 className="text-xl font-semibold text-center mb-3">{sectionTitle}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-1 gap-y-1 max-w-4xl mx-auto">
        {parsedBenefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white px-4 py-5 w-full rounded text-xs text-center shadow-sm hover:shadow transition max-h-[200px] flex flex-col justify-between "
          >
            <h3 className="font-semibold mb-0.5 text-sm">{benefit.title}</h3>
            <p className="text-gray-600 text-xs leading-snug">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeBenefits;