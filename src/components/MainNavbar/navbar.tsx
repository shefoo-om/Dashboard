"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; 
import {
  CreditCard,
  Home,
  ChartNoAxesColumnIncreasing,
  UserCog,
  Menu,
} from "lucide-react"; 

type Location = {
  route: string;
};

const items1 = [
  { id: 1, title: "Dashboard", url: "/dashboard", icon: Home },
  { id: 2, title: "Tables", url: "/tables", icon: ChartNoAxesColumnIncreasing },
  { id: 3, title: "Billing", url: "/billing", icon: CreditCard },
  { id: 4, title: "Profile", url: "/profile", icon: UserCog },
];

export function Navbar({ route }: Location) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-xs sticky top-4 flex flex-nowrap w-full justify-between items-center font-semibold min-h-[75px] py-3 px-3 rounded-xl z-50">
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

      <div className="flex flex-nowrap items-center gap-2 max-md:hidden">
        {items1.map((item) => (
          <div key={item.id}>
            <div
              className={`w-full h-10 px-2 flex items-center justfiy-center active:bg-transparent rounded-2xl ${
                pathname === item.url
                  ? "bg-[hsl(230,49%,30%)] hover:bg-[hsl(230,49%,30%)]"
                  : "bg-transparent hover:bg-transparent"
              }`}
            >
              <Link
                href={item.url}
                className="font-medium flex items-center gap-x-2"
              >
                <div
                  className={`w-[25px] h-[25px] rounded-[8px] transition-colors flex items-center justify-center ${
                    pathname === item.url ? "bg-bgBlue" : "bg-[hsl(230,49%,30%)]"
                  }`}
                >
                  <item.icon
                    className={`w-[15px] h-[15px] font-bold justify-center ${
                      pathname === item.url ? "text-white" : "text-bgBlue"
                    }`}
                  />
                </div>
                <span className="text-[#FFFFFF] text-sm">{item.title}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={toggleDropdown} className="p-2 focus:outline-none">
          <Menu className="size-6 text-white" /> 
        </button>

        {isOpen && (
          <div className="absolute right-0 w-36 bg-[#0a0b22] rounded-lg shadow-lg z-50">
            <div className="flex flex-col gap-1 p-2">
              {items1.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className={`flex items-center gap-x-2 p-2 rounded-lg ${
                    pathname === item.url ? "bg-bgBlue" : "hover:bg-bgBlue"
                  }`}
                  onClick={toggleDropdown} 
                >
                  <item.icon className="size-4 text-white" />
                  <span className="text-white text-sm">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}