import Link from "next/link";
import { MoveRight } from "lucide-react";

const FirstCard = (
  <div className="w-2/5 h-cardHeight flex flex-col flex-wrap justify-between pt-8 pl-5">
    <div className="h-[270px] flex flex-col flex-wrap justify-between font-medium">
      <div>
        <p className="text-secondColor w-full">Welcome back,</p>
        <p className="font-bold text-2xl w-full pt-3 pb-6">Mark johnson</p>
        <p className="text-secondColor">Glad to see you again!</p>
        <p className="text-secondColor">Ask me anything.</p>
      </div>
      <Link href={"/"} className="flex flex-nowrap items-center">
        Tap to record
        <p className="hover:translate-x-2 duration-300 pl-2">
          <MoveRight />
        </p>
      </Link>
    </div>
  </div>
);
const SecondCard = (
  <div className="h-cardHeight w-full flex flex-col justify-between p-6 pb-8">
    <div>
      <p className="font-bold text-lg">Satisfaction Rate</p>
      <p className="text-secondColor text-sm">From all projects</p>
    </div>
    <div className="staticRate"></div>
    <div className="littleCards m-auto w-11/12 h-20 px-4 pt-2 flex flex-nowrap justify-between items-center text-secondColor">
      <div className="self-start">0%</div>
      <div>
        <p className="text-white text-3xl font-bold text-center self-center">
          95%
        </p>
        <span className="text-xs">Based on likes</span>
      </div>
      <div className="self-start">100%</div>
    </div>
  </div>
);
export default function FrontCard() {
  return (
    <div className="w-full flex flex-wrap justify-between items-center pt-[18px]">
      <div className="firstCardFrontCards w-[41%] max-xl:w-full flex rounded-2xl">
        {FirstCard}
      </div>
      <div className="secondCardFrontCards w-[26%] max-xl:w-[48%] max-lg:w-full rounded-2xl">
        {SecondCard}
      </div>
      <div className="h-cardHeight w-[30%] max-xl:w-[48%] max-lg:w-full rounded-2xl">
        f
      </div>
    </div>
  );
}
