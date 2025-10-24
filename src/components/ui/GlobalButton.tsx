"use client";

import Link from "next/link";

interface ButtonProps {
  text: string;
  type: "Primary" | "Secondary";
  size: "large" | "normal" | "small";
  onPress: () => void | null;
}
interface LinkButtonProps {
  text: string;
  type: "Primary" | "Secondary" | "AntiPrimary";
  size: "large" | "normal" | "small" | "wide";
  link: string;
}
interface ScrollButtonProps {
  text: string;
  type: "Primary" | "Secondary";
  size: "large" | "normal" | "small";
  scrollToId: string;
}
export function ScrollingButton({
  text,
  type,
  size,
  scrollToId,
}: ScrollButtonProps) {
  const handleClick = (): void => {
    const el = document.getElementById(scrollToId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const baseClass =
    "inline-block self-start  h-auto w-auto min-w-fit rounded text-sm font-[600] hover:cursor-pointer";
  const variants = {
    Primary: "bg-[#2A72FF] font-inter text-[#EFF3FD] ",
    Secondary:
      "bg-transparent font-roboto border-2 border-[#EFF3FD] text-[#EFF3FD] ",
    normal: "px-3 py-2",
    small: "px-2 py-1",
    large: "px-4 py-3 tracking-[0.1em]",
  };

  return (
    <button
      className={`${baseClass} ${variants[type]} ${variants[size]}`}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
}
export default function GlobalButton({
  text,
  type,
  size,
  onPress,
}: ButtonProps) {
  const baseClass =
    "inline-block self-start  h-auto w-auto min-w-fit rounded text-sm font-[600] hover:cursor-pointer";
  const variants = {
    Primary: "bg-[#2A72FF] font-inter text-[#EFF3FD] ",
    Secondary:
      "bg-transparent font-roboto border-2 border-[#EFF3FD] text-[#EFF3FD] ",
    normal: "px-3 py-2",
    small: "px-2 py-1",
    large: "px-4 py-3 tracking-[0.1em]",
  };

  return (
    <button
      className={`${baseClass} ${variants[type]} ${variants[size]}`}
      onClick={() => onPress()}
    >
      {text}
    </button>
  );
}

export function GlobalLinkButton({ text, type, size, link }: LinkButtonProps) {
  const baseClass =
    "inline-block self-start  h-auto w-auto min-w-fit rounded text-sm font-[600] hover:cursor-pointer";
  const variants = {
    Primary: "bg-[#2A72FF] font-inter text-[#EFF3FD] border-2 border-[#2A72FF]",
    AntiPrimary:
      "bg-transparent hover:bg-[#2A72FF]/50 font-inter text-[#2A72FF] box-border border-2 border-[#2A72FF]",
    Secondary:
      "bg-transparent font-roboto border-2 border-[#EFF3FD] text-[#EFF3FD] ",
    normal: "px-3 py-2",
    small: "px-2 py-1",
    large: "px-4 py-3 tracking-[0.1em]",
    wide: "px-10 py-3 tracking-[0.1em]",
  };

  return (
    <Link
      href={link}
      className={`${baseClass} ${variants[type]} ${variants[size]}`}
    >
      {text}
    </Link>
  );
}
