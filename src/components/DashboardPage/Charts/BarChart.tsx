/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { BarChartItem } from "@/types/Dashboard";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data : BarChartItem[] = [
  { name: "Jan", Sales: 400 },
  { name: "Feb", Sales: 300 },
  { name: "Mar", Sales: 270 },
  { name: "Apr", Sales: 450 },
  { name: "May", Sales: 320 },
  { name: "Jun", Sales: 400 },
]

// @ts-ignore

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1e1e1eb2] text-[#fff] rounded-lg text-sm z-30 h-20 w-36 m-5 felx flex-col gap-3">
        <div className="bg-[#000000ca] rounded-t-lg font-bold w-full py-2">
          <p className="ml-2">
            {label}
          </p>
        </div>
        <div className="w-full h-4/6 items-center ml-2 mt-2 font-semibold">
          <p>Sales: {payload[0].value}</p>
        </div>
      </div>
    );
  }
  return null;
};

export default function BarChartCom() {
  return (
    <ResponsiveContainer width="100%" height="100%" className="ml-[-15px]">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" height={0} />
        <XAxis hide dataKey="name" />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
        <Bar dataKey="Sales" fill="white" barSize={10} radius={[10, 10, 0, 0]} spacing={10}/>
      </BarChart>
    </ResponsiveContainer>
  );
}
