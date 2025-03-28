import React from "react";
import { AnalyticsCardsItem } from "@/types/Dashboard";

import icon1 from "@/assets/icons/users.webp";
import icon2 from "@/assets/icons/files.webp";
import icon3 from "@/assets/icons/money.webp";
import icon4 from "@/assets/icons/image.webp";
import Image from "next/image";

const CardsItems: AnalyticsCardsItem[] = [
  { id: 1, typeData: "today's Money", number: "$55,000", persent: "+55", color: "text-green-500", icon: icon3, },
  { id: 2, typeData: "today's users", number: "2300", persent: "+3", color: "text-green-500", icon: icon1, },
  { id: 3, typeData: "new clients", number: "+3,462", persent: "-2", color: "text-red-600", icon: icon2, },
  { id: 4, typeData: "total sales", number: "$103,430", persent: "+5", color: "text-green-500", icon: icon4, },
]

export default function AnalyticsCards() {
  return (
    <div className="flex flex-wrap gap-3 justify-between items-center w-full">
      {CardsItems.map((card) => (
        <div
          key={card.id}
          className="analyticsCards h-[87px] w-[24%] max-2xl:w-[48%] max-md:w-11/12 bg-black rounded-2xl flex justify-between items-center p-5 m-auto"
        >
          <div className="w-4/6 flex flex-wrap">
            <div className="w-full text-secondColor text-xs font-semibold">
              {card.typeData}
            </div>
            <div className="w-full text-[22px] font-semibold">
              {card.number}
              <span className={`text-base ${card.color}`}>
                {" "}
                {card.persent}%
              </span>
            </div>
          </div>
          <div className="size-[48px] bg-bgBlue rounded-xl flex justify-center items-center">
            <Image
              src={card.icon}
              alt={`icons${card.id}`}
              width={22}
              height={22}
              className="text-white"
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
}
