import { StaticImageData } from "next/image";

export interface AnalyticsCardsItem {
    id: number;
    typeData: string;
    number: string;
    persent: string;
    color: string;
    icon: StaticImageData;
};

export interface AreaChartItem {
    name: string;
    Websites: number;
    "Mopile Apps": number;
    amt: number
}

export interface BarChartItem {
    name: string;
    Sales: number;
}

export interface LastCardProjectDetails {
    id: number;
    icon: StaticImageData;
    company: string;
    members: StaticImageData[];
    budget: string;
    percent: number;
}

export interface LastCardOrdertDetails {
    id: number;
    icon: StaticImageData;
    title: string;
    history: string;
}
