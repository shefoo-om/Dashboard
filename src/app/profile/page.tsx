/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type { NavbarDetails } from "@/types/Profile"
import React, { useState } from "react"

const NavbarDetails: NavbarDetails[] = [
  { name: "Khalid", email: "Khalid@simmmple.com" }
]

export default function ProfilePage() {
  // the bg of buttom
  const [activeTab, setActiveTab] = useState('Overview');
  const handleButtonClick = (tab: any) => {
    setActiveTab(tab);
  };



  return (
    <div className="w-full flex flex-col justify-between items-center gap-4 pb-2 pt-6">
      <div className="MainCards w-full flex justify-between items-center max-md:flex-col gap-2 p-5">
        <div className="w-1/2 max-md:w-full flex flex-col justify-between items-start max-md:items-center gap-2">
          {NavbarDetails.map((ele) => (
            <React.Fragment key={ele.name}>
              <p className="text-xl font-bold">{ele.name}</p>
              <p className="text-sm font-semibold text-secondColor">{ele.email}</p>
            </React.Fragment>
          ))}
        </div>
        <div className="min-w-max w-1/2 max-md:w-full flex max-md:flex-col justify-center items-center gap-3 px-2">
          <button
            onClick={() => handleButtonClick('Overview')}
            className={`min-w-36 max-md:w-full uppercase flex justify-center items-center gap-2 text-sm rounded-xl px-3 py-2 ${activeTab === 'Overview' ? 'bg-bgBlue' : ''} duration-500`}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="white" className="MuiTab-iconWrapper" style={{ color: "white" }} height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
              <path d="M440.9 136.3a4 4 0 000-6.91L288.16 40.65a64.14 64.14 0 00-64.33 0L71.12 129.39a4 4 0 000 6.91L254 243.88a4 4 0 004.06 0zM54 163.51a4 4 0 00-6 3.49v173.89a48 48 0 0023.84 41.39L234 479.51a4 4 0 006-3.46V274.3a4 4 0 00-2-3.46zM272 275v201a4 4 0 006 3.46l162.15-97.23A48 48 0 00464 340.89V167a4 4 0 00-6-3.45l-184 108a4 4 0 00-2 3.45z"></path>
            </svg>
            <span>Overview</span>
          </button>
          <button
            onClick={() => handleButtonClick('Teams')}
            className={`min-w-36 max-md:w-full uppercase flex justify-center items-center gap-2 text-sm rounded-xl px-3 py-2 ${activeTab === 'Teams' ? 'bg-bgBlue' : ''} duration-500`}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="white" className="MuiTab-iconWrapper" style={{ color: "white" }} height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
              <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4z"></path><path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"></path>
            </svg>
            <span>Teams</span>
          </button>
          <button
            onClick={() => handleButtonClick('Projects')}
            className={`min-w-36 max-md:w-full uppercase flex justify-center items-center gap-2 text-sm rounded-xl px-3 py-2 ${activeTab === 'Projects' ? 'bg-bgBlue' : ''} duration-500`}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="white" className="MuiTab-iconWrapper" style={{ color: "white" }} height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
              <path d="M469.54 120.52a16 16 0 00-25.54-4L382.56 178a16.12 16.12 0 01-22.63 0l-26.56-26.6a16 16 0 010-22.63l61.18-61.19a16 16 0 00-4.78-25.92C343.56 21 285.88 31.78 249.51 67.88c-30.9 30.68-40.11 78.62-25.25 131.53a15.89 15.89 0 01-4.49 16L53.29 367.46a64.17 64.17 0 1090.6 90.64l153.68-166.85a15.9 15.9 0 0115.77-4.57 179.3 179.3 0 0046.22 6.37c33.4 0 62.71-10.81 83.85-31.64 39.15-38.57 45.12-103.99 26.13-140.89zM99.48 447.15a32 32 0 1128.34-28.35 32 32 0 01-28.34 28.35z"></path>
            </svg>
            <span>Projects</span>
          </button>
        </div>
      </div>




      <div className="w-full flex flex-wrap justify-between items-center gap-2">
        <div className="w-[29%] max-[1440px]:w-full rounded-[20px]"></div>
        <div className="MainCards w-[40%] max-[1440px]:w-full"></div>
        <div className="MainCards w-[29%] max-[1440px]:w-full"></div>
      </div>
      <div className="w-full flex flex-wrap justify-between items-center gap-2">
        <div className="MainCards w-[29%] max-[1440px]:w-full"></div>
        <div className="MainCards w-[69%] max-[1440px]:w-full"></div>
      </div>

    </div>
  )
}
