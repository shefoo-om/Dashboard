import Link from "next/link";

const ThirdCard = () => (
    <div className="h-cardHeight w-full flex flex-col justify-between pt-6 pb-8">
        <div className="w-full flex flex-nowrap justify-between px-4 mb-10">
            <p className="headerTitle">Referral Tracking</p>
            <Link
                href={""}
                className="size-[37px] bg-[#1A1F37] rounded-2xl flex justify-center items-center"
                aria-label="Referral Tracking Options"
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
    </div>
);

export default ThirdCard;