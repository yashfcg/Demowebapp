"use client";
import { useState, useEffect } from "react";
import { ChevronUpIcon } from "../ui/Icons";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // Show after 300px scroll
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="z-[999]  hover:cursor-pointer fixed bottom-6 left-6 p-3 rounded-xl bg-primaryBlue text-white shadow-lg hover:bg-blue-700 transition"
      >
        <ChevronUpIcon color="white" strokeWidth="1" />
      </button>
    )
  );
}
