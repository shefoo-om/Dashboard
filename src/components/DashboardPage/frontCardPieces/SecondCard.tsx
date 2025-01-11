const SecondCard = () => (
    <div className="h-cardHeight w-full flex flex-col justify-between pt-6 pb-8">
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
        <div className="w-full h-20 text-secondColor z-10 absolute bottom-5">
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

export default SecondCard;