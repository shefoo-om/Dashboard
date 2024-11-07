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

export interface profileInformation {
    id: number;
    name: string;
    mobile: string;
    email: string;
    location: string;
    socail: SocailUrl[];
}

interface SocailUrl {
    Facebook: string;
    X: string;
    Insta: string;
}