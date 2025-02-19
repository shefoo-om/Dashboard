import Link from "next/link";
import "./global.css"
// import { LayoutDashboard, LogIn, UserCog, UserRoundPen } from "lucide-react";

export function NavbarAuth() {
    return (
        <nav className="NavbarAuth">
            <div className="AuthBgTitle">
                <Link href={"/dashboard"}>
                    Shefo
                </Link>
            </div>
            <div className="bgFormBoxmain w-[100px] p-[2px] flex justify-center items-center rounded-xl" >
                <Link  className="w-full bgFormBox hover:opacity-90 rounded-xl py-[6px] font-semibold duration-200 text-white text-center" href={"/"} >
                    Discover
                </Link>
            </div>
        </nav>
    );
}
