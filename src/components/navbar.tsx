import { Home, UserCog } from "lucide-react";
import Link from "next/link";
import NotificationBox from "./NotificationBox";
type Location = {
  route: string;
};
export function Navbar({ route }: Location) {
  return (
    <nav className="text-xs sticky top-2 flex flex-nowrap w-full justify-between items-center font-semibold min-h-[4.6875rem] py-2 px-3 rounded-xl">
      <div className="grid grid-rows-2 w-max">
        <div className="flex flex-nowrap items-center gap-2">
          <Link href={"/"}>
            <Home className="size-3" />
          </Link>
          <p>/</p>
          <p>{route}</p>
        </div>
        <div className="text-base">{route}</div>
      </div>
      <div className="flex flex-nowrap items-center gap-2">
        <Link href={"/sign-in"} className="flex flex-nowrap gap-1 items-center">
          <UserCog className="size-5" />
          <p className="text-sm">Sign in</p>
        </Link>
        <div>
          <NotificationBox />
        </div>
      </div>
    </nav>
  );
}
