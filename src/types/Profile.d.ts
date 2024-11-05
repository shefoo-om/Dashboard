export interface NavbarDetails {
    name: string;
    email: string;
}
export interface profileInformation {
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