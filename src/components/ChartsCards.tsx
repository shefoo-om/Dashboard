import { SalesCharts } from "./SalesCharts";

const ChartCard = (<>
    <div className=" h-[10%] w-full flex flex-col">
        <p className="text-lg font-bold"> Sales Overview </p>
        <p className="text-sm font-semibold text-secondColor"> <span className="text-green-500">+5% more</span> in 2021 </p>
    </div>
    <div className="h-[80%] w-full">
        {/* <SalesCharts /> */}
    </div>
</>);
const LineChart = (<>
    <div className="w-full h-[60%]">fs</div>
    <div className="w-full h-[10%]">fds</div>
    <div className="w-full h-[20%]">fsd</div>
</>)
export default function ChartsCards() {
    return (
        <div className="w-full flex flex-wrap justify-between items-center pt-[18px]">
            <div className="MainCards h-[445px] w-[59%] max-xl:w-[49%] max-lg:w-full flex flex-col justify-between items-center pt-8 px-5">
                {ChartCard}
            </div>
            <div className="MainCards h-[445px] w-[39%] max-xl:w-[49%] max-lg:w-full flex flex-col justify-between items-center py-8 px-5">
                {LineChart}
            </div>
        </div>
    )
}
