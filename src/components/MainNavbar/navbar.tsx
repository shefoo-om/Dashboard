import { Home } from "lucide-react";
import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";

type Location = {
  route: string;
};

export function Navbar({ route }: Location) {
  return (
    <nav className="text-xs sticky top-4 flex flex-nowrap w-full justify-between items-center font-semibold min-h-[75px] max-md:h-[118px] py-3 px-3 rounded-xl z-50">
      <div className="grid grid-rows-2 w-max">
        <div className="flex flex-nowrap items-center gap-2">
          <Link href={"/dashboard"}>
            <Home className="size-3" />
          </Link>
          <p>/</p>
          <p className="capitalize">{route}</p>
        </div>
        <div className="text-base capitalize">{route}</div>
      </div>
      <div className="flex flex-nowrap items-center gap-2">
        <div>
          <SidebarTrigger className="size-7 hover:bg-transparent hover:text-white" />
        </div>
      </div>
    </nav>
  );
}
