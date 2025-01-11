
import React, { memo } from "react";
import Image from "next/image";
import img1 from '../../assets/FirstCardbg.webp';
import FirstCard from "./frontCardPieces/FirstCard";
import SecondCard from "./frontCardPieces/SecondCard";
import ThirdCard from "./frontCardPieces/ThirdCard";

const FrontCard = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center pt-[18px] gap-y-5">
      <div className="firstCardFrontCards w-[41%] max-xl:w-full flex relative">
        <Image
          src={img1}
          alt="photo for first Card {FrontCards}"
          fill
          className="rounded-[20px] bg-cover bg-center"
          priority
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