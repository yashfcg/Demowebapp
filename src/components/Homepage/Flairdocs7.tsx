import Image from "next/image";

export default function Flairdocs7({}) {
  const content = [
    { title: "Lower IT dependency" },
    { title: "Drive cost-saving improvements" },
    { title: "Increased business agility" },
    { title: "Rapid cost effective modernization" },
    { title: "Agile application adaptation" },
    { title: "Seamless agent support in remote areas" },
  ];
  const TickIcon = () => {
    return (
      <svg
        width="47"
        height="45"
        viewBox="0 0 47 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[25px] h-[25px] md:w-[45px] md:h-[45px]"
      >
        <path
          d="M22.5003 0.416748C10.3236 0.416748 0.416992 10.3233 0.416992 22.5001C0.416992 34.6768 10.3236 44.5834 22.5003 44.5834C34.6771 44.5834 44.5837 34.6768 44.5837 22.5001C44.5837 20.0135 44.1508 17.6289 43.3889 15.3963L39.8133 18.9719C40.0452 20.1114 40.167 21.2921 40.167 22.5001C40.167 32.241 32.2413 40.1667 22.5003 40.1667C12.7594 40.1667 4.83366 32.241 4.83366 22.5001C4.83366 12.7591 12.7594 4.83341 22.5003 4.83341C26.1065 4.83341 29.4608 5.92409 32.261 7.78792L35.4225 4.62638C31.7832 1.98963 27.3255 0.416748 22.5003 0.416748ZM43.0223 3.27205L20.292 26.0024L13.02 18.7304L9.8973 21.8531L20.292 32.2478L46.145 6.39477L43.0223 3.27205Z"
          fill="#2A72FF"
        />
      </svg>
    );
  };
  return (
    <div className="w-[100%] h-fit min-h-[100vh] py-10 relative flex justify-center items-center z-0 bg-[#152B3D]">
      <div className="absolute inset-0 z-10 bg-[linear-gradient(270.25deg,_#233849_2.72%,_rgba(35,56,73,0.8)_91.4%)]"></div>
      <Image
        src={"/assets/homepage/flairdocs7.png"}
        fill
        alt=""
        className="object-cover w-[100%]  md:block z-0"
      />
      <div className="z-20 flex justify-end w-[80%] min-w-80">
        <div className="flex flex-col gap-5 items-start  w-fit max-w-[850px] min-w-80 h-[60%] z-20">
          <h1 className="text-center font-archivo text-3xl md:text-5xl font-[700] text-[#EFF3FD]">
            Flairdocs 7.0
          </h1>
          <p className="text-[#EFF3FD] font-inter font-[600] text-lg md:text-2xl">
            A future-proof platform which is both powerful and adaptable to the
            complex and ever changing Right of Way business.
          </p>
          <p className="text-[#EFF3FD] font-inter font-[400] text-lg md:text-2xl">
            Flairdocs 7.0 engine allows end users with minimal programming
            experience to fully configure and customize the solution to fit
            their organization and process, including everything from data entry
            screens to workflow orchestration and business intelligence.{" "}
          </p>
          <div className="mt-5 pt-2 border-t-1 border-[#EFF3FD] grid w-full h-fit gap-y-2 grid-cols-1 sm:grid-cols-2">
            {content.map((element) => {
              return (
                <div
                  key={element.title}
                  className="flex items-center gap-2 min-w-80"
                >
                  <TickIcon />
                  <p className="text-base md:text-xl  text-[#EFF3FD] font-inter font-[400]">
                    {element.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
