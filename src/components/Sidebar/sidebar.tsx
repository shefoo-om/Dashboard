"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  CreditCard,
  Home,
  ChartNoAxesColumnIncreasing,
  UserCog,
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
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Tables", url: "/tables", icon: ChartNoAxesColumnIncreasing },
  { title: "Billing", url: "/billing", icon: CreditCard },
];
const items2 = [
  { title: "Profile", url: "/profile", icon: UserCog },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="sidebarStyle bg-[#060B26] h-[92.5%] w-[250px] rounded-3xl my-4 mx-4">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase m-3 text-center font-semibold text-xl">
            <Link href={"/dashboard"}>
              <span className="text-center m-auto">Dashboard</span>
            </Link>
          </SidebarGroupLabel>
          <hr className="hrStyle" />
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {items1.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`w-full w-full h-14 active:bg-transparent rounded-2xl ${pathname === item.url
                      ? "bg-[#1A1F37] hover:bg-[#1A1F37]"
                      : "bg-transparent hover:bg-transparent"
                      }`}
                  >
                    <Link
                      href={item.url}
                      className="font-semibold flex gap-x-4"
                    >
                      <div
                        className={`w-[32px] h-[32px] rounded-[12px] transition-colors felx flex items-center justify-center ${pathname === item.url
                          ? "bg-bgBlue"
                          : "bg-[#1A1F37]"
                          }`}
                      >
                        <item.icon
                          className={`w-[15px] h-[15px] font-bold justify-center ${pathname === item.url
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
            <SidebarGroupLabel className="uppercase text-[#FFFFFF] text-sm font-medium py-2">
              Accountpages
            </SidebarGroupLabel>
            <SidebarMenu>
              {items2.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`w-full w-52 h-14 active:bg-transparent rounded-2xl ${pathname === item.url
                      ? "bg-[#1A1F37] hover:bg-[#1A1F37]"
                      : "bg-transparent hover:bg-transparent"
                      }`}
                  >
                    <Link
                      href={item.url}
                      className="font-semibold flex gap-x-4"
                    >
                      <div
                        className={`w-[32px] h-[32px] rounded-[12px] transition-colors felx flex items-center justify-center ${pathname === item.url
                          ? "bg-bgBlue"
                          : "bg-[#1A1F37]"
                          }`}
                      >
                        <item.icon
                          className={`w-[15px] h-[15px] justify-center ${pathname === item.url
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


// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// import {
//   CreditCard,
//   Home,
//   ChartNoAxesColumnIncreasing,
//   UserCog,
// } from "lucide-react";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";

// const items1 = [
//   { title: "Dashboard", url: "/dashboard", icon: Home },
//   { title: "Tables", url: "/tables", icon: ChartNoAxesColumnIncreasing },
//   { title: "Billing", url: "/billing", icon: CreditCard },
// ];
// const items2 = [
//   { title: "Profile", url: "/profile", icon: UserCog },
// ];

// export function AppSidebar() {
//   const pathname = usePathname();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const handleItemClick = () => {
//     setIsSidebarOpen(false); // Close the sidebar when an item is clicked
//   };

//   return (
//     <>
//       {isSidebarOpen && (
//         <Sidebar className="sidebarStyle bg-[#060B26] h-[92.5%] w-[250px] rounded-3xl my-4 mx-4">
//           <SidebarContent>
//             <SidebarGroup>
//               <SidebarGroupLabel className="uppercase m-3 text-center font-semibold text-xl">
//                 <Link href={"/dashboard"} onClick={handleItemClick}>
//                   <span className="text-center m-auto">Dashboard</span>
//                 </Link>
//               </SidebarGroupLabel>
//               <hr className="hrStyle" />
//               <SidebarGroupContent className="mt-2">
//                 <SidebarMenu>
//                   {items1.map((item) => (
//                     <SidebarMenuItem key={item.title}>
//                       <SidebarMenuButton
//                         asChild
//                         className={`w-full h-14 active:bg-transparent rounded-2xl ${
//                           pathname === item.url
//                             ? "bg-[#1A1F37] hover:bg-[#1A1F37]"
//                             : "bg-transparent hover:bg-transparent"
//                         }`}
//                       >
//                         <Link
//                           href={item.url}
//                           onClick={handleItemClick}
//                           className="font-semibold flex gap-x-4"
//                         >
//                           <div
//                             className={`w-[32px] h-[32px] rounded-[12px] transition-colors flex items-center justify-center ${
//                               pathname === item.url
//                                 ? "bg-bgBlue"
//                                 : "bg-[#1A1F37]"
//                             }`}
//                           >
//                             <item.icon
//                               className={`w-[15px] h-[15px] font-bold justify-center ${
//                                 pathname === item.url
//                                   ? "text-white"
//                                   : "text-bgBlue"
//                               }`}
//                             />
//                           </div>
//                           <span className="text-[#FFFFFF] text-sm">
//                             {item.title}
//                           </span>
//                         </Link>
//                       </SidebarMenuButton>
//                     </SidebarMenuItem>
//                   ))}
//                 </SidebarMenu>
//                 <SidebarGroupLabel className="uppercase text-[#FFFFFF] text-sm font-medium py-2">
//                   Account Pages
//                 </SidebarGroupLabel>
//                 <SidebarMenu>
//                   {items2.map((item) => (
//                     <SidebarMenuItem key={item.title}>
//                       <SidebarMenuButton
//                         asChild
//                         className={`w-full h-14 active:bg-transparent rounded-2xl ${
//                           pathname === item.url
//                             ? "bg-[#1A1F37] hover:bg-[#1A1F37]"
//                             : "bg-transparent hover:bg-transparent"
//                         }`}
//                       >
//                         <Link
//                           href={item.url}
//                           onClick={handleItemClick}
//                           className="font-semibold flex gap-x-4"
//                         >
//                           <div
//                             className={`w-[32px] h-[32px] rounded-[12px] transition-colors flex items-center justify-center ${
//                               pathname === item.url
//                                 ? "bg-bgBlue"
//                                 : "bg-[#1A1F37]"
//                             }`}
//                           >
//                             <item.icon
//                               className={`w-[15px] h-[15px] justify-center ${
//                                 pathname === item.url
//                                   ? "text-white"
//                                   : "text-bgBlue"
//                               }`}
//                             />
//                           </div>
//                           <span className="text-[#FFFFFF] text-sm">
//                             {item.title}
//                           </span>
//                         </Link>
//                       </SidebarMenuButton>
//                     </SidebarMenuItem>
//                   ))}
//                 </SidebarMenu>
//               </SidebarGroupContent>
//             </SidebarGroup>
//           </SidebarContent>
//         </Sidebar>
//       )}
//       {!isSidebarOpen && (
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="fixed top-4 left-4 bg-blue-500 text-white p-2 rounded z-50"
//         >
//           Open Sidebar
//         </button>
//       )}
//     </>
//   );
// }
