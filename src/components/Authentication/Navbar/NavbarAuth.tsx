import Link from "next/link";
import "./global.css"
import { UserCog } from "lucide-react";

export function NavbarAuth() {
    return (
        <nav className="NavbarAuth">
            <div className="AuthBgTitle">
                Shefo
            </div>
            <div className="flex justify-between items-center gap-4">
                <Link href={"/"} className="text-white flex flex-nowrap gap-1 items-center">
                    {/* <UserCog className="size-5" /> */}
                    <p className="AuthBgLink">Dashboard</p>
                </Link>
                <Link href={"/profile"} className="text-white flex flex-nowrap gap-1 items-center">
                    {/* <UserCog className="size-5" /> */}
                    <p className="AuthBgLink">Profile</p>
                </Link>
                <Link href={"/sign-in"} className="text-white flex flex-nowrap gap-1 items-center">
                    <UserCog className="size-5" />
                    <p className="AuthBgLink">Sign In</p>
                </Link>
                <Link href={"/sign-up"} className="text-white flex flex-nowrap gap-1 items-center">
                    {/* <UserCog className="size-5" /> */}
                    <p className="AuthBgLink">Sign Up</p>
                </Link>

            </div>
            <div>
                <Link className="text-white pr-4" href={"/"}>discover</Link>
            </div>
        </nav>
    );
}
