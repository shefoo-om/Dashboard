import { StaticImageData } from "next/image";

export interface FirstCardDetails {
    id: number;
    img: StaticImageData;
    author: string,
    email: string;
    function: string;
    type: string;
    status: string;
    history: string;
}
export interface SecondCardDetails {
    id: number;
    icon: StaticImageData;
    project: string,
    budget: string;
    percent: number;
    status: string;
}