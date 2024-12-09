/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import CircularProgress from "@/components/Profile/PercentSVG";
import type { CarInformation, NavbarDetails, PercentProgress, profileInformation } from "@/types/Profile"
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react"

import img1 from "../../assets/profile/caricon.png"
import img2 from "../../assets/profile/power.png"
import LineChartForProfile from "@/components/Profile/LineChart";

const NavbarDetails: NavbarDetails[] = [
  { id: 1, name: "Khalid", email: "Khalid@simmmple.com" }
]
const PercentProgress: PercentProgress[] = [
  { id: 1, percent: 85, time: "1h 25 min" }
]

const CarInformation1: CarInformation[] = [
  { id: 1, title: "Battery Health", value: "76%", icon: img1 },
  { id: 2, title: "Consumption", value: "163W/km", icon: img2 }
]
const CarInformation2: CarInformation[] = [
  { id: 1, title: "Efficiency", value: "+20%" },
  { id: 2, title: "This Week", value: "1.342km" }
]

const ProfileInformation: profileInformation[] = [
  {
    id: 1,
    name: " Mark Johnson", mobile: " (44) 123 1234 123", email: "mark@simmmple.com", location: " United States",
    social: [{ facebook: "https://www.facebook.com", x: "https://www.twitter.com", insta: "https://www.instagram.com" }]
  }
]

export default function ProfilePage() {
  // the bg of buttom
  const [activeTab, setActiveTab] = useState('Overview');
  const handleButtonClick = (tab: any) => {
    setActiveTab(tab);
  };



  return (
    <div className="w-full flex flex-col justify-between items-center gap-y-8 pb-2 pt-6">
      <div className="MainCards w-full flex justify-between items-center max-md:flex-col gap-2 p-5">
        <div className="w-1/2 max-md:w-full flex flex-col justify-between items-start max-md:items-center gap-2">
          {NavbarDetails.map((ele) => (
            <React.Fragment key={ele.id}>
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

      <div className="w-full h-max grid grid-cols-4 max-[1400px]:grid-cols-1 gap-3 max-[1300px]:gap-y-5">
        <div className="billingSecondCardBg w-full h-full col-span-1 min-h-[350px] flex flex-col flex-wrap justify-between font-medium rounded-[20px] py-6 pl-8">
          <div>
            <p className="font-bold text-3xl w-full pb-1">Welcome back!</p>
            <p>Nice to see you, Mark Johnson!</p>
          </div>
          <Link href={"/"} className="flex flex-nowrap w-max items-center">
            Tap to record
            <p className="hover:translate-x-2 duration-300 pl-2">
              <MoveRight />
            </p>
          </Link>
        </div>

        <div className="MainCards w-full h-full col-span-2 min-h-[400px] flex flex-col justify-between items-center gap-3 pt-6 px-8">
          <div className="w-full h-max">
            <p className="headerTitle pb-2">Car Informations</p>
            <p className="text-secondColor">Hello, Mark Johnson! Your Car is ready.</p>
          </div>
          <div className="w-full h-full flex flex-nowrap max-md:flex-wrap justify-between items-center gap-5 py-2">
            {PercentProgress?.map((ele) => (
              <div key={ele.id} className="w-max max-md:w-full flex flex-col justify-between items-center gap-y-3">
                <div className="w-[150px] h-[150px] flex justify-between items-center relative">
                  <CircularProgress percentage={ele.percent} />
                  <div className="w-full flex flex-col justify-between items-center absolute">
                    <p className="text-3xl font-bold">{ele.percent}%</p>
                    <p className="text-secondColor text-xs">Current Load</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-center">{ele.time}</p>
                  <p className="text-secondColor text-sm">Time to full charge</p>
                </div>
              </div>))}
            <div className="w-full max-md:w-full grid grid-cols-2 max-md:grid-cols-1 items-center gap-8">
              <div className="grid grid-rows-2 gap-8">
                {CarInformation1.map((car) => (
                  <div key={car.id} className="MainCards w-full overflow-hidden h-28 flex justify-between items-center px-5 gap-4">
                    <div className="w-max h-full flex flex-col justify-center items-start gap-3 my-3">
                      <p className="text-secondColor text-xs font-semibold">{car.title}</p>
                      <p className="text-2xl font-bold">{car.value}</p>
                    </div>
                    <div className="w-14 h-14 flex justify-between items-center rounded-lg bg-bgBlue">
                      <img src={car.icon?.src} alt="" className="size-6 mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-rows-2 gap-8">
                {CarInformation2.map((car) => (
                  <div key={car.id} className="MainCards w-full max-md:w-full h-28 flex justify-between items-center gap-4">
                    <div className="max-w-max w-2/5 h-full flex flex-col justify-center items-start gap-3 ml-5 my-3">
                      <p className="text-secondColor text-xs font-semibold">{car.title}</p>
                      <p className="text-2xl font-bold">{car.value}</p>
                    </div>
                    <div className="w-full h-full overflow-hidden flex justify-between items-center mr-5 my-3">
                      <LineChartForProfile />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        <div className="MainCards w-full h-full min-h-[340px] h-full col-span-1 flex flex-col justify-between items-center gap-y-5 pt-6 px-8">
          <div className="w-full h-max ">
            <p className="headerTitle pb-2">profile information</p>
            <p className="text-secondColor">Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
          </div>
          <ul className="text-secondColor w-full h-max space-y-2 text-start">
            {ProfileInformation.map((info) => (
              <React.Fragment key={info.mobile}>
                <li>Full Name: <span className="text-white ">{info.name}</span></li>
                <li>Mobile: <span className="text-white " >{info.mobile}</span></li>
                <li>Email: <span className="text-white ">{info.email}</span></li>
                <li>Location: <span className="text-white ">{info.location}</span></li>
                <li className="flex justify-between items-center gap-2 w-max">Social:
                  {info.social.map((ele) => (
                    <React.Fragment key={Math.random()}>
                      <a href={ele.facebook} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-105 duration-200">
                        <svg className="w-[18px] h-[18px]" color="white" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="FacebookIcon">
                          <path fill="white" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                        </svg>
                      </a>
                      <a href={ele.x} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-105 duration-200">
                        <svg className="w-[18px] h-[18px]" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="TwitterIcon">
                          <path fill="white" d="M21 3L3 21M3 3l18 18" stroke="white" strokeWidth="2"></path>
                        </svg>
                      </a>
                      <a href={ele.insta} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-105 duration-200">
                        <svg className="w-[18px] h-[18px]" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="InstagramIcon">
                          <path fill="white" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        </svg>
                      </a>
                    </React.Fragment>
                  ))}
                </li>
              </React.Fragment>
            ))}
          </ul>
          <div>

          </div>
        </div>
      </div>




      {/* <div className="w-full flex flex-wrap justify-between items-center gap-2">
        <div className="MainCards w-[29%] max-[1440px]:w-full"></div>
        <div className="MainCards w-[69%] max-[1440px]:w-full"></div>
      </div> */}

    </div>
  )
}
