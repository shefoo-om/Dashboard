import { StaticImageData } from "next/image";

export interface NavbarDetails {
    id: number;
    name: string;
    email: string;
}
export interface PercentProgress {
    id: number;
    percent: number
    time: string;
}

export interface CarInformation {
    id: number;
    title: string;
    value: string;
    icon?: StaticImageData;
    chart?: string;
}

export interface profileInformation {
    id: number;
    name: string;
    mobile: string;
    email: string;
    location: string;
    social: SocailUrl[];
}

interface SocailUrl {
    facebook: string;
    x: string;
    insta: string;
}