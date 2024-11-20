import Link from "next/link";
import "./global.css"
import { LayoutDashboard, LogIn, UserCog, UserRoundPen } from "lucide-react";

export function NavbarAuth() {
    return (
        <nav className="NavbarAuth">
            <div className="AuthBgTitle">
                Shefo
            </div>
            <div className="flex justify-between items-center gap-4">
                <Link href={"/"} className="text-white flex flex-nowrap gap-1 items-center linkHover">
                    <LayoutDashboard className="size-5" />
                    <p className="AuthBgLink">Dashboard</p>
                </Link>
                <Link href={"/profile"} className="text-white flex flex-nowrap gap-1 items-center linkHover">
                    <UserRoundPen className="size-5" />
                    <p className="AuthBgLink">Profile</p>
                </Link>
                <Link href={"/sign-up"} className="text-white flex flex-nowrap gap-1 items-center linkHover">
                    <UserCog className="size-5" />
                    <p className="AuthBgLink">Sign Up</p>
                </Link>
                <Link href={"/sign-in"} className="text-white flex flex-nowrap gap-1 items-center linkHover dura">
                    <LogIn className="size-5" />
                    <p className="AuthBgLink">Sign In</p>
                </Link>
            </div>
            <div className="pl-2">
                <Link className="text-white capitalize font-semibold text-base px-3 py-2 bg-bgBlue hover:brightness-105 duration-300 rounded-lg" href={"/"}>discover</Link>
            </div>
        </nav>
    );
}
