import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Progress } from "./ui/progress"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projectDetails = [
    { id: 1, icon: "", company: "Chakra Vision UI Version", members: [""], budget: "14,555", percent: 60 },
    { id: 1, icon: "", company: "Add Progress Track", members: [""], budget: "3,000", percent: 10 },
    { id: 1, icon: "", company: "Fix Platform Errors", members: [""], budget: "Not Set", percent: 100 },
    { id: 1, icon: "", company: "Launch our Mobile App", members: [""], budget: "20,500", percent: 100 },
    { id: 1, icon: "", company: "Add the New Pricing Page", members: [""], budget: "500", percent: 25 },
    { id: 1, icon: "", company: "Redesign New Online Shop", members: [""], budget: "2000", percent: 40 }
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
        <div className="w-full h-[80%] overflow-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[30%]">COMPANIES</TableHead>
                        <TableHead className="w-[15%]">MEMBERS</TableHead>
                        <TableHead className="w-[10%]">BUDGET</TableHead>
                        <TableHead className="text-center w-[19%]">COMPLETION</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>$250.00</TableCell>
                        <TableCell>
                            <div className="w-full flex flex-wrap">
                                <p className="w-3/4 mx-auto">30%</p>
                                <Progress value={30} className="w-3/4 mx-auto" />
                            </div>
                        </TableCell>
                    </TableRow>
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
        <div className="w-full flex flex-wrap justify-between items-center pt-[18px] gap-y-5">
            <div className="MainCards w-[65%] max-lg:w-[49%] max-md:w-full h-[561px] py-6 px-5">
                {FirstCard}
            </div>
            <div className="MainCards w-[30%] max-lg:w-[49%] max-md:w-full h-[561px] py-6 px-5">
                {SecondCard}
            </div>
        </div>
    )
}
