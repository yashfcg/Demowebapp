"use client";

import Image from "next/image";
import { useState } from "react";
import Portal from "../Global/Portal";
import { CrossIcon, LinkedInIcon } from "../ui/Icons";

interface ManagamentInterface {
  title: string;
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
  managementFields: {
    bio: string | null;
    position: string;
    linkedin: string;
  };
}

const ManagementCard = ({
  management,
  onClose,
}: {
  management: ManagamentInterface;
  onClose: () => void;
}) => {
  if (!management.managementFields.bio) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/40 flex justify-center items-center px-4">
      <div className="w-full max-w-[940px] max-h-[90vh] relative p-6 sm:p-10 rounded-xl bg-[#E8EEFA] overflow-y-auto">
        <button
          className="absolute right-4 top-4 hover:cursor-pointer"
          onClick={onClose}
        >
          <CrossIcon />
        </button>
        <div className="flex flex-col sm:flex-row items-center gap-6">
        <Image
  src={management.featuredImage?.node?.sourceUrl || "/fallback.png"}
  width={200}
  height={200}
  alt={management.featuredImage?.node?.altText || management.title}
  className="rounded-full object-cover"
/>
          <div className="flex-1">
            <h1 className="font-archivo font-bold text-2xl text-[#152B3D]">
              {management.title}
            </h1>
            <h2 className="font-inter font-medium text-[#3A3A3A] flex items-center gap-2">
              {management.managementFields.position}
              {management.managementFields.linkedin && (
                <a
                  href={management.managementFields.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <LinkedInIcon size="size-5" />
                </a>
              )}
            </h2>
            <p className="mt-4 font-inter text-[#152B3D] whitespace-pre-line">
              {management.managementFields.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Management({
  managementData,
}: {
  managementData: ManagamentInterface[];
}) {
  const [selected, setSelected] = useState<number>(-1);
  if (!managementData || managementData.length === 0) return null;

  return (
    <div className="w-full py-20 flex justify-center">
      {selected !== -1 && (
        <Portal>
          <ManagementCard
            management={managementData[selected]}
            onClose={() => setSelected(-1)}
          />
        </Portal>
      )}
      <div className="w-[70%] max-w-7xl flex flex-col items-start gap-16">
        <h1 className="font-archivo font-bold text-3xl sm:text-4xl text-[#152B3D]">
          Management
        </h1>

        {/* Responsive Grid with 4 columns on laptop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {managementData.map((management, index) => (
            <div
              key={management.title}
              className="flex flex-col items-center text-center gap-3 bg-white p-5 rounded-xl shadow hover:shadow-md transition-all"
            >
              <div className="w-32 h-32 relative">
              <Image
  src={management.featuredImage?.node?.sourceUrl ?? "/fallback.png"}
  alt={management.featuredImage?.node?.altText ?? management.title}
  width={200}
  height={200}
  className="rounded-full object-cover"
/>
              </div>
              <h1 className="mt-2 font-archivo font-bold text-lg text-[#152B3D]">
                {management.title}
              </h1>
              <h2 className="font-inter text-sm text-gray-600">
                {management.managementFields.position}
              </h2>
              <button
                onClick={() => setSelected(index)}
                className="mt-2 text-[#235ABD] text-sm font-medium underline hover:opacity-80"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}