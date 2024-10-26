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
      <Link href={"/"} className="flex flex-nowrap w-max items-center">
        Tap to record
        <p className="hover:translate-x-2 duration-300 pl-2">
          <MoveRight />
        </p>
      </Link>
    </div>
  </div>
);
const SecondCard = (
  <div className="h-cardHeight w-full flex flex-col justify-between py-6 pb-8">
    <div className="px-4">
      <p className="headerTitle">Satisfaction Rate</p>
      <p className="text-secondColor text-sm">From all projects</p>
    </div>
    <div className="flex w-full justify-center">
      <svg
        style={{
          transform: "rotate(50deg)",
          overflow: "visible",
          width: "200px",
          height: "200px",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="100 100 200 200"
      >
        <linearGradient
          id="grd_f6k9ygicp068"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
          gradientTransform="rotate(90, .5, .5)"
        >
          <stop offset="0" stopColor="rgba(0, 117, 255, 0)"></stop>
          <stop offset="100" stopColor="#0075ff"></stop>
        </linearGradient>
        <circle
          cx="200"
          cy="200"
          r="92.5"
          stroke="#22234B"
          strokeWidth="15"
          fill="none"
        ></circle>
        <circle
          cx="200"
          cy="200"
          r="92.5"
          fill="none"
          strokeWidth="15"
          strokeDasharray="581.1946409141117"
          strokeDashoffset="116.23892818282229"
          strokeLinecap="round"
          stroke="url(#grd_f6k9ygicp068)"
          style={{
            transition: "stroke-dashoffset 400ms",
          }}
        ></circle>
      </svg>
      <div className="size-12 rounded-full bg-bgBlue flex justify-center items-center absolute top-[50%]">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          color="#fff"
          style={{ color: "rgb(255, 255, 255)", height: "30px", width: "30px" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM184 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm167.67 106.17c-12 40.3-50.2 69.83-95.62 69.83s-83.62-29.53-95.72-69.83a8 8 0 017.83-10.17h175.69a8 8 0 017.82 10.17zM328 256a24 24 0 1124-24 23.94 23.94 0 01-24 24z"></path>
        </svg>
      </div>
    </div>
    <div className="w-full h-20 text-secondColor z-10 absolute bottom-5 ">
      <div className="littleCards w-11/12 flex flex-nowrap justify-between items-center mx-auto px-4 py-2">
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
  </div>
);
const ThirdCard = (
  <div className="h-cardHeight w-full flex flex-col justify-between py-6 pb-8">
    <div className="w-full flex flex-nowrap justify-between px-4 mb-10">
      <p className="headerTitle">Referral Tracking</p>
      <Link
        href={""}
        className="size-[37px] bg-[#1A1F37] rounded-2xl flex justify-center items-center"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          color="#0075ff"
          style={{ color: "rgb(0, 117, 255)" }}
          height="18px"
          width="18px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
        </svg>
      </Link>
    </div>
    <div className="w-11/12 h-full m-auto flex flex-nowrap justify-between gap-2">
      <div className="w-5/12 flex flex-col justify-between items-start">
        <div className="littleCards min-h-[95px] w-full max-w-52 flex flex-col justify-between items-start p-3 pl-6">
          <p className="text-secondColor text-sm">Invited</p>
          <p className="text-lg font-bold">145 people</p>
        </div>
        <div className="littleCards min-h-[95px] w-full max-w-52 flex flex-col justify-between items-start p-3 pl-6">
          <p className="text-secondColor text-sm">Bonus</p>
          <p className="text-lg font-bold">1,465</p>
        </div>
      </div>
      <div className="w-7/12 size-52 flex justify-center items-center relative">
        <div className="flex flex-col justify-center items-center text-secondColor absolute ">
          <p>Safty</p>
          <p className="text-white text-5xl font-bold">9.4</p>
          <p className="">Total Score</p>
        </div>
        <svg className="size-44 max-md:size-40 max-xl:size-52" style={{
          transform: "rotate(-90deg)", overflow: "visible"
        }} xmlns="http://www.w3.org/2000/svg" viewBox="100 100 200 200">
          <linearGradient id="grd_gryamkf4rzq5" x1="0%" y1="0%" x2="0%" y2="100%" gradientTransform="rotate(90, .5, .5)"><stop offset="0" stopColor="rgba(5, 205, 153, 0)"></stop><stop offset="100" stopColor="#05CD99"></stop></linearGradient>
          <circle cx="200" cy="200" r="92.5" stroke="transparent" strokeWidth="15" fill="none"></circle>
          <circle cx="200" cy="200" r="92.5" fill="none" strokeWidth="15" strokeDasharray="581.1946409141117" strokeDashoffset="174.3583922742335" strokeLinecap="round" stroke="url(#grd_gryamkf4rzq5)" style={{ transition: "stroke-dashoffset 400ms" }}></circle>
        </svg>
      </div>
    </div>
  </div >
);
export default function FrontCard() {
  return (
    <div className="w-full flex flex-wrap justify-between items-center pt-[18px] gap-y-5">
      <div className="firstCardFrontCards w-[41%] max-xl:w-full flex ">
        {FirstCard}
      </div>
      <div className="MainCards w-[26%] max-xl:w-[48%] max-lg:w-full ">
        {SecondCard}
      </div>
      <div className="MainCards w-[30%] max-xl:w-[48%] max-lg:w-full">
        {ThirdCard}
      </div>
    </div>
  );
}
