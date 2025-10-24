import React from "react";

interface CareerIntroProps {
  intro: string;
}

const CareerIntro: React.FC<CareerIntroProps> = ({ intro }) => {
  const [firstPart, ...restParts] = intro.split("||").map((part) => part.trim());
  const email = "recruiting@flairsoft.net";

  return (
    <div className="bg-white mt-8 px-4 sm:px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-5xl mx-auto text-left space-y-6">
        {/* First part */}
        <p className="text-lg sm:text-xl text-center text-gray-700 leading-relaxed">
          {firstPart}
        </p>

        {/* Remaining parts */}
        {restParts.length > 0 && (
          <div className="space-y-4 pt-4 pl-8 text-center">
            {restParts.map((part, index) => {
              const parts = part.split(email);
              return (
                <p
                  key={index}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed"
                >
                  {parts.map((text, i) => (
                    <React.Fragment key={i}>
                      {text}
                      {i < parts.length - 1 && (
                        <span className="text-blue-600 font-semibold">{email}</span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerIntro;