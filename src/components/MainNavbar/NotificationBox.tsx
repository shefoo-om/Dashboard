/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Bell, Clock3 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import img1 from "@/assets/raymond.png";
import img2 from "@/assets/www.jpg";
import img3 from "@/assets/payment.png";

const listNotification = [
  {
    id: "1",
    img: img1,
    title: "new message",
    body: "From Laur",
    time: "13 minutes ago",
  },
  {
    id: "2",
    img: img2,
    title: "new album",
    body: "by taylor swift",
    time: "1 day",
  },
  {
    id: "3",
    img: img3,
    body: "payment successfully completed",
    time: "2 days",
  },
];
export default function NotificationBox() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Bell className="size-5 text-white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-6 mt-5 w-[299.33px] bg-[#061e52] text-white font-semibold rounded-2xl border-transparent capitalize">
          <div className="grid grid-rows gap-2 w-full ">
            {listNotification.map((item) => (
              <DropdownMenuItem
                key={item.id}
                className="flex flex-nowrap justify-around items-center w-full h-[63.75px] bg-[#061e52] hover:bg-[#061e52] focus:bg-[#061e52]"
              >
                <div className="size-9">
                  <img
                    src={item.img.src}
                    alt=""
                    className="size-full rounded-xl"
                  />
                </div>
                <div className="grid grid-rows gap-1 w-10/12 text-white hover:text-white">
                  <div className="text-sm">
                    <span className="text-[15px] font-bold">{item.title} </span>
                    {item.body}
                  </div>
                  <span className="w-max pl-2 flex flex-nowrap justify-start items-center text-xs">
                    <Clock3 className="size-4 items-center" />
                    <span className="pl-1 lowercase">{item.time}</span>
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
