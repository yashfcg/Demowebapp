"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface AwardCardProps {
  awards: {
    title: string;
    description: string;
  }[];
}

export default function AwardCarousel({ awards }: AwardCardProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-2 py-10 relative">
      {/* Custom arrow buttons */}
      <div className="swiper-button-prev-custom absolute top-1/2 -left-10 z-10 transform -translate-y-1/2 w-10 h-10 bg-white text-blue-700 rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-blue-700 hover:text-white transition">
        &lt;
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 -right-6 z-10 transform -translate-y-1/2 w-10 h-10 bg-white text-blue-700 rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-blue-700 hover:text-white transition">
        &gt;
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={2}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-10"
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 w-64 h-[260px] flex flex-col  ">
              <h3 className="text-lg font-semibold text-blue-700 mb-1 text-center">
                {award.title}
              </h3>
              <p className="text-gray-700 text-sm text-center">{award.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}