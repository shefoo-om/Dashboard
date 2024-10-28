/* eslint-disable @next/next/no-img-element */

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Progress } from "./ui/progress"
// icons
import icon1 from "../assets/imgForTable/ch.png"
import icon2 from "../assets/imgForTable/ad1.png"
import icon3 from "../assets/imgForTable/fi.png"
import icon4 from "../assets/imgForTable/spotify.png"
import icon5 from "../assets/imgForTable/ad.png"
import icon6 from "../assets/imgForTable/re.png"

// imgs of member
import mem1 from "../assets/imgForTable/member/raymond.jpg"
import mem2 from "../assets/imgForTable/member/ressler.png"
import mem3 from "../assets/imgForTable/member/kem.png"
import mem4 from "../assets/imgForTable/member/glen.png"
import mem5 from "../assets/imgForTable/member/funny.png"
import mem6 from "../assets/imgForTable/member/bos.png"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projectDetails = [
    { id: 1, icon: icon1, company: "Chakra Vision UI Version", members: [mem1, mem2, mem3, mem4], budget: "$14,555", percent: 60 },
    { id: 1, icon: icon2, company: "Add Progress Track", members: [mem1], budget: "$3,000", percent: 10 },
    { id: 1, icon: icon3, company: "Fix Platform Errors", members: [mem5, mem6, mem5], budget: "Not Set", percent: 100 },
    { id: 1, icon: icon4, company: "Launch our Mobile App", members: [mem3, mem2], budget: "$20,500", percent: 100 },
    { id: 1, icon: icon5, company: "Add the New Pricing Page", members: [mem1, mem5, mem4, mem6], budget: "$500", percent: 25 },
    { id: 1, icon: icon6, company: "Redesign New Online Shop", members: [mem5], budget: "$2000", percent: 40 }
]

const FirstCard = (
    <div className="flex flex-col items-center justify-between gap-5">
        <div className=" h-[10%] w-full flex flex-col">
            <p className="headerTitle">Projects</p>
            <div className="text-sm font-semibold text-secondColor flex w-full items-center">
                <span className="flex items-center text-green-600">
                    <svg
                        className="mr-1"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="15px"
                        width="15px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    30 done
                </span>
                <span className="ml-1">this month</span>
            </div>
        </div>
        <div className="w-full  h-[80%]">
            <Table className="min-w-[550px] h-full overflow-scroll bg-transparent w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[30%]">COMPANIES</TableHead>
                        <TableHead className="w-[15%]">MEMBERS</TableHead>
                        <TableHead className="w-[10%]">BUDGET</TableHead>
                        <TableHead className="text-center w-[19%]">COMPLETION</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="h-[390px]">
                    {projectDetails.map((ele) => (
                        <TableRow key={ele.id} className="border-t-[1px] border-[#222a48]">
                            <TableCell>
                                <div className="w-full flex items-center">
                                    <img src={ele.icon.src} alt="" className="size-5 rounded-md bg-transparent mr-3" />
                                    {ele.company}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center justify-center w-max text-center py-2 opacity-100">
                                    {ele.members.map((member, index) => (
                                        <div key={index} className="size-6 rounded-full border-2 border-[#121241] overflow-hidden ml-[-10px] hover:z-20 duration-500 ">
                                            <img
                                                src={member.src}
                                                alt={`Member ${index + 1}`}
                                                className="w-full h-full"
                                            />
                                        </div>

                                    ))}
                                </div>
                            </TableCell>
                            <TableCell>{ele.budget}</TableCell>
                            <TableCell>
                                <div className="w-full flex flex-wrap">
                                    <p className="w-3/4 mx-auto">{ele.percent}%</p>
                                    <Progress value={ele.percent} className="w-3/4 mx-auto" />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    </div>
)
const SecondCard = (
    <div className="flex flex-col items-center">
        <div className=" h-[10%] w-full flex flex-col">
            <p className="headerTitle">Orders overview</p>
            <div className="text-sm font-semibold text-secondColor flex w-full items-center">
                <span className="flex items-center text-green-600">
                    <svg
                        className="mr-1"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="15px"
                        width="15px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    30 done
                </span>
                <span className="ml-1">this month</span>
            </div>
        </div>
        <div className="w-full"></div>
    </div>
)

export default function LastCard() {
    return (
        <div className="w-full flex flex-wrap justify-between items-center py-[18px] gap-y-5">
            <div className="MainCards w-[65%] max-lg:w-[49%] max-md:w-full h-[561px] py-6 px-5">
                {FirstCard}
            </div>
            <div className="MainCards w-[34%] max-lg:w-[49%] max-md:w-full h-[561px] py-6 px-5">
                {SecondCard}
            </div>
        </div>
    )
}
