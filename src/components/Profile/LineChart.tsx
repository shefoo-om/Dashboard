/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Page A", uv: 400 },
    { name: "Page B", uv: 350 },
    { name: "Page C", uv: 320 },
    { name: "Page D", uv: 278 },
    { name: "Page E", uv: 380 },
    { name: "Page F", uv: 390 },
    { name: "Page G", uv: 410 },
];
// @ts-ignore
const CustomTooltip = ({ active, payload }) => {
// const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#1e1e1eb2] text-[#fff] rounded-lg text-sm z-30 h-10 w-10 m-5 felx flex-col gap-3">
                <div className="bg-[#000000ca] rounded-t-lg font-bold w-full py-2">
                    <p className="ml-2">
                        {/* {label} */}
                    </p>
                </div>
                <div className="w-full h-4/6 items-center ml-2 mt-2 font-semibold">
                    {/* <p className="">Websites: {payload[0].value}</p> */}
                    {/* <p className="">Mobile Apps: {payload[1].value}</p> */}
                </div>
            </div>
        );
    }
    return null;
};

const LineChartForProfile: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={100} height={100} data={data}>
            <Tooltip content={<CustomTooltip active={undefined} payload={undefined}/>} />
            {/* <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} /> */}
            <Line type="monotone" dataKey="uv" dot={false} strokeWidth={4} stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartForProfile;
