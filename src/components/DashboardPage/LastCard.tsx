import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Progress } from "../ui/progress"
import { LastCardOrdertDetails, LastCardProjectDetails } from "@/types/Dashboard"

// icons
import icon1 from "@/assets/imgForTable/ch.webp"
import icon2 from "@/assets/imgForTable/ad1.webp"
import icon3 from "@/assets/imgForTable/fi.webp"
import icon4 from "@/assets/imgForTable/spotify.webp"
import icon5 from "@/assets/imgForTable/ad.webp"
import icon6 from "@/assets/imgForTable/re.webp"

// imgs of membera
import mem1 from "@/assets/imgForTable/member/raymond.webp"
import mem2 from "@/assets/imgForTable/member/ressler.webp"
import mem3 from "@/assets/imgForTable/member/kem.webp"
import mem4 from "@/assets/imgForTable/member/glen.webp"
import mem5 from "@/assets/imgForTable/member/funny.webp"
import mem6 from "@/assets/imgForTable/member/bos.webp"
import Image from "next/image"

const projectDetails: LastCardProjectDetails[] = [
    { id: 1, icon: icon1, company: "Chakra Vision UI Version", members: [mem1, mem2, mem3, mem4], budget: "$14,555", percent: 60 },
    { id: 2, icon: icon2, company: "Add Progress Track", members: [mem1], budget: "$3,000", percent: 10 },
    { id: 3, icon: icon3, company: "Fix Platform Errors", members: [mem5, mem6, mem5], budget: "Not Set", percent: 100 },
    { id: 4, icon: icon4, company: "Launch our Mobile App", members: [mem3, mem2], budget: "$20,500", percent: 100 },
    { id: 5, icon: icon5, company: "Add the New Pricing Page", members: [mem1, mem5, mem4, mem6], budget: "$500", percent: 25 },
    { id: 6, icon: icon6, company: "Redesign New Online Shop", members: [mem5], budget: "$2000", percent: 40 }
]

const ordersDetails: LastCardOrdertDetails[] = [
    { id: 1, icon: icon1, title: "$2400, Design changes", history: "22 DEC 7:20 PM" },
    { id: 2, icon: icon2, title: "New order #1832412", history: "21 DEC 11 PM" },
    { id: 3, icon: icon3, title: "Server payments for April", history: "21 DEC 9:34 PM" },
    { id: 4, icon: icon5, title: "New card added for order #4395133", history: "20 DEC 2:20 AM" },
    { id: 5, icon: icon4, title: "New card added for order #4395133", history: "18 DEC 4:54 AM" },
    { id: 6, icon: icon6, title: "New order #9583120", history: "17 DEC" },
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
        <div className="w-full h-[80%] boxShadoooow">
            <Table className="w-full min-w-[550px] rounded-[4px] h-full overflow-scroll bg-transparent">
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
                                    <Image
                                        src={ele.icon}
                                        alt={`Member ${ele.members}`}
                                        priority
                                        width={20}
                                        height={20}
                                        className="rounded-md bg-transparent mr-3"
                                    />
                                    {ele.company}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center justify-center w-max text-center py-2 opacity-100">
                                    {ele.members.map((member, index) => (
                                        <div key={index} className="size-6 rounded-full border-2 border-[#121241] overflow-hidden ml-[-10px] hover:z-20 duration-500 ">
                                            <Image
                                                src={member}
                                                alt={`Member ${index + 1}`}
                                                priority
                                                className="w-full h-full"
                                                sizes="(max-width: 768px) 100vw, 50vw"
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
    <div className="h-full flex flex-col items-center gap-5">
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
                    +30%
                </span>
                <span className="ml-1">this month</span>
            </div>
        </div>
        <div className="w-full min-w-[220px] h-[80%] overflow-auto flex flex-col justify-between">
            {ordersDetails.map((ele) => (
                <div key={ele.id} className="flex w-full justify-between items-center">
                    <div className="size-7 bg-transparent">
                        <Image
                            src={ele.icon}
                            alt={`${ele.id}`}
                            width={16}
                            height={16}
                            className="bg-transparent rounded-md"
                            priority
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-[90%]">
                        <p className="text-[15px] font-bold">{ele.title}</p>
                        <p className="text-[13px] text-secondColor font-semibold"> {ele.history}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default function LastCard() {
    return (
        <div className="w-full flex flex-wrap justify-between items-center pt-[18px] gap-y-5">
            <div className="MainCards w-[65%] max-lg:w-[49%] max-md:w-full h-[561px] py-6 px-5">
                {FirstCard}
            </div>
            <div className="MainCards w-[34%] max-lg:w-[49%] max-md:w-full h-[561px] py-6 px-5">
                {SecondCard}
            </div>
        </div>
    )
}
