import React, { memo } from "react";
import Image from "next/image";
import img1 from '../../assets/FirstCardbg.webp'; // Ensure this image has a higher resolution
import FirstCard from "./frontCardPieces/FirstCard";
import SecondCard from "./frontCardPieces/SecondCard";
import ThirdCard from "./frontCardPieces/ThirdCard";

const FrontCard = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center pt-[18px] gap-y-5">
      <div className="firstCardFrontCards w-[41%] max-xl:w-full flex relative">
        {/* Use layout="fill" with objectFit to maintain aspect ratio */}
        <Image
          src={img1}
          alt="Background for first card"
          fill
          className="rounded-[20px] object-cover" // Use object-cover to maintain aspect ratio
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <FirstCard />
      </div>
      <div className="MainCards w-[26%] max-xl:w-[48%] max-lg:w-full">
        <SecondCard />
      </div>
      <div className="MainCards w-[30%] max-xl:w-[48%] max-lg:w-full">
        <ThirdCard />
      </div>
    </div>
  );
};

export default memo(FrontCard);