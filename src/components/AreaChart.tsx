/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Jan", "Websites": 400, "Mopile Apps": 200, amt: 2400 },
    { name: "Feb", "Websites": 300, "Mopile Apps": 600, amt: 2210 },
    { name: "Mar", "Websites": 270, "Mopile Apps": 450, amt: 2290 },
    { name: "Apr", "Websites": 450, "Mopile Apps": 150, amt: 2000 },
    { name: "May", "Websites": 320, "Mopile Apps": 400, amt: 2181 },
    { name: "Jun", "Websites": 400, "Mopile Apps": 500, amt: 2500 },
    { name: "Jul", "Websites": 250, "Mopile Apps": 300, amt: 2100 },
    { name: "Aug", "Websites": 180, "Mopile Apps": 260, amt: 2400 },
    { name: "Sep", "Websites": 600, "Mopile Apps": 350, amt: 2210 },
    { name: "Oct", "Websites": 280, "Mopile Apps": 480, amt: 2290 },
    { name: "Nov", "Websites": 320, "Mopile Apps": 500, amt: 2000 },
    { name: "Dec", "Websites": 500, "Mopile Apps": 600, amt: 2181 },
];

// @ts-ignore
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#1e1e1eb2] text-[#fff] rounded-lg text-sm z-30 h-24 w-36 m-5 felx flex-col gap-3">
                <div className="bg-[#000000ca] rounded-t-lg font-bold w-full py-2">
                    <p className="ml-2">
                        {label}
                    </p>
                </div>
                <div className="w-full h-4/6 items-center ml-2 mt-2 font-semibold">
                    <p className="">Websites: {payload[0].value}</p>
                    <p className="">Mobile Apps: {payload[1].value}</p>
                </div>
            </div>
        );
    }
    return null;
};
export default function AreaChartComponent() {
    return (
        <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0075FF" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#0075FF" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2CD9FF" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#2CD9FF" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" tick={{ fill: "white" }} />
                <YAxis axisLine={false} tick={{ fill: "white" }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
                <Area type="monotone" dataKey="Websites" stroke="#0075FF" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Mopile Apps" stroke="#2CD9FF" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}
