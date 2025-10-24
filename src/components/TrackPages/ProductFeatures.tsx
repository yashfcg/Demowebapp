interface CurrentSection {
  title: string;
  items: string[];
}
export default function ProductFeatures({ features }: { features: string }) {
  //   const arr = features.split("->");
  const lines = features.split("\n");

  const sections: CurrentSection[] = [];
  let currentSection: CurrentSection | null = null;

  lines.forEach((line) => {
    if (line.startsWith("->")) {
      // New heading
      if (currentSection) sections.push(currentSection);
      currentSection = {
        title: line.slice(2).trim(),
        items: [],
      };
    } else if (currentSection) {
      currentSection.items.push(line.trim());
    }
  });

  if (currentSection) sections.push(currentSection);
  return null;
  // <div className="w-full h-auto py-10 flex justify-center items-center bg-[#152B3D]">
  //   <div className="w-[70%] min-w-80 h-fit ">
  //     <h1 className="font-archivo font-[700] text-[#EFF3FD] text-xl md:text-2xl lg:text-4xl">
  //       Product Features
  //     </h1>
  //     <div className="flex-col items-start flex-wrap md:max-h-[780px] font-inter text-[#EFF3FD]">
  //       {sections.map((section, i) => (
  //         <div key={i}>
  //           <h2 className="text-lg font-[600]">{section.title}</h2>
  //           <ul className="list-disc list-inside ">
  //             {section.items.map((item, j) => (
  //               <li key={j}>{item}</li>
  //             ))}
  //           </ul>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </div>
}
