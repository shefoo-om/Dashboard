"use client";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

export default function BarChartCom() {
  // const initial = {
  //   labels: [],
  //   datasets: [
  //     {
  //       label: "عدد الكلمات",
  //       data: [],
  //       backgroundColor: ["#c5993a"],
  //       borderRadius: 14,
  //     },
  //   ],
  // };

  // defaults.maintainAspectRatio = false;
  // defaults.responsive = true;
  // defaults.plugins.title.display = true;
  // defaults.plugins.title.align = "end";
  // defaults.plugins.title.font.size = 22;

  // ChartJS.defaults.backgroundColor = "white";
  // ChartJS.defaults.borderColor = "#47555d";
  // ChartJS.defaults.color = "white";
  // ChartJS.defaults.font.size = 18;
  // ChartJS.defaults.font.family = "Readex Pro";

  return (
    <>
      <BarChart width={330} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </>
  );
}
