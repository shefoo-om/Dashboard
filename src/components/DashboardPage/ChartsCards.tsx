/* eslint-disable @next/next/no-img-element */
import AreaChartComponent from "./Charts/AreaChart";
import BarChartCom from "./Charts/BarChart";
import { Progress } from "../ui/progress";

import icon1 from "@/assets/icons/users.png";
import icon2 from "@/assets/icons/files.png";
import icon3 from "@/assets/icons/money.png";
import icon4 from "@/assets/icons/image.png";

const CardsItems = [
    {
        id: 1,
        title: "users",
        number: "32,099",
        icon: icon3,
        percent: 33

    },
    {
        id: 2,
        title: "Clicks",
        number: "2,42M",
        icon: icon2, percent: 85
    },
    {
        id: 3,
        title: "Sales",
        number: "2,400$",
        icon: icon4,
        percent: 75
    },
    {
        id: 4,
        title: "Items",
        number: "320",
        icon: icon1,
        percent: 45
    },

];

const ChartCard = (<>
    <div className=" h-[10%] w-full flex flex-col">
        <p className="headerTitle"> Sales Overview </p>
        <p className="text-sm font-semibold text-secondColor"> <span className="text-green-500">+5% more</span> in 2021 </p>
    </div>
    <div className="h-[80%] w-full overflow-auto">
        <AreaChartComponent />
    </div>
</>);
const LineChart = (<>
    <div className="w-full h-[60%]">
        <BarChartCom />
    </div>
    <div className="w-full h-[10%]">
        <div className=" h-[10%] w-full flex flex-col">
            <p className="headerTitle"> Active Users </p>
            <p className="text-sm font-semibold text-secondColor"> <span className="text-green-500">(+23) more</span> than last week</p>
        </div>
    </div>
    <div className="w-full h-[20%] min-h-[130px] flex flex-nowrap justify-between items-center pt-4 overflow-x-auto">
        {CardsItems.map((item) => (
            <div key={item.id} className="w-[24%] min-w-[85px] flex flex-wrap gap-y-2">
                <div className="flex w-5/6 items-center">
                    <div className="size-6 bg-bgBlue rounded-[6px] flex justify-center items-center">
                        <img src={item.icon.src} alt="" className="text-white size-[15px]" />
                    </div>
                    <p className="text-secondColor text-sm ml-2 font-medium">{item.title}</p>
                </div>
                <div className="w-[90%] flex flex-wrap gap-y-1">
                    <p className="w-full text-base mx-auto">{item.number}</p>
                    <Progress value={item.percent} className="mx-auto" />
                </div>
            </div>
        ))}


    </div>
</>)
export default function ChartsCards() {
    return (
        <div className="w-full flex flex-wrap justify-between items-center gap-y-5 pt-[18px]">
            <div className="MainCards h-[445px] w-[59%] max-xl:w-[49%] max-lg:w-full flex flex-col justify-between items-center py-6 px-5">
                {ChartCard}
            </div>
            <div className="MainCards h-[445px] w-[39%] max-xl:w-[49%] max-lg:w-full flex flex-col justify-between items-center py-6 px-5">
                {LineChart}
            </div>
        </div>
    )
}
