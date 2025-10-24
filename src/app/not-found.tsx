import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="w-full h-[60vh]  flex flex-col justify-center items-center gap-5">
      <h1 className="text-lg text-[#152B3D] md:text-2xl lg:text-4xl font-archivo">
        404 - Not Found
      </h1>
      <Link
        className="bg-[#235ABD] text-white inline-block   h-auto w-auto min-w-fit rounded text-sm font-[600] hover:cursor-pointer px-4 py-3 tracking-[0.1em]"
        href={"/"}
      >
        Return to Homepage
      </Link>
    </div>
  );
}
