"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname from next/navigation

import {
  CreditCard,
  Home,
  ChartNoAxesColumnIncreasing,
  UserCog,
  Rocket,
  LogIn,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items1 = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Tables", url: "/tables", icon: ChartNoAxesColumnIncreasing },
  { title: "Billing", url: "/billing", icon: CreditCard },
];
const items2 = [
  { title: "Profile", url: "/profile", icon: UserCog },
  { title: "Sign In", url: "/sign-in", icon: LogIn },
  { title: "Sign Up", url: "/sign-up", icon: Rocket },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="sidebarStyle bg-[#060B26] h-[92.5%] rounded-3xl my-6 ml-2">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase m-3 text-center font-semibold text-xl">
            <span className="text-center m-auto">logo</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-5">
            <SidebarMenu>
              {items1.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`w-full w-full h-14 active:bg-transparent rounded-2xl ${
                      pathname === item.url
                        ? "bg-[#1A1F37] hover:bg-[#1A1F37]"
                        : "bg-transparent hover:bg-transparent"
                    }`}
                  >
                    <Link
                      href={item.url}
                      className="font-semibold flex gap-x-4"
                    >
                      <div
                        className={`w-[32px] h-[32px] rounded-[12px] transition-colors felx flex items-center justify-center ${
                          pathname === item.url
                            ? "bg-bgBlue"
                            : "bg-[#1A1F37]"
                        }`}
                      >
                        <item.icon
                          className={`w-[15px] h-[15px] font-bold justify-center ${
                            pathname === item.url
                              ? "text-white"
                              : "text-bgBlue"
                          }`}
                        />
                      </div>
                      <span className="text-[#FFFFFF] text-sm">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarGroupLabel className="uppercase text-[#FFFFFF] text-sm font-semibold">
              Accountpages
            </SidebarGroupLabel>
            <SidebarMenu>
              {items2.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`w-full w-52 h-14 active:bg-transparent rounded-2xl ${
                      pathname === item.url
                        ? "bg-[#1A1F37] hover:bg-[#1A1F37]"
                        : "bg-transparent hover:bg-transparent"
                    }`}
                  >
                    <Link
                      href={item.url}
                      className="font-semibold flex gap-x-4"
                    >
                      <div
                        className={`w-[32px] h-[32px] rounded-[12px] transition-colors felx flex items-center justify-center ${
                          pathname === item.url
                            ? "bg-bgBlue"
                            : "bg-[#1A1F37]"
                        }`}
                      >
                        <item.icon
                          className={`w-[15px] h-[15px] justify-center ${
                            pathname === item.url
                              ? "text-white"
                              : "text-bgBlue"
                          }`}
                        />
                      </div>
                      <span className="text-[#FFFFFF] text-sm">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
