/* eslint-disable @next/next/no-img-element */
import icon1 from "@/assets/imgForTable/ch.png"
import icon2 from "@/assets/imgForTable/ad1.png"
import icon3 from "@/assets/imgForTable/fi.png"
import icon4 from "@/assets/imgForTable/spotify.png"
import icon5 from "@/assets/imgForTable/ad.png"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { EllipsisVertical } from "lucide-react"

const tableOneDetails = [
  { id: 1 }
]
const TableOne = (<></>)

const tableTwoDetails = [
  { id: 1, icon: icon1, project: "Chakra Vision UI Version", budget: "$14,555", percent: 60, status: "Working" },
  { id: 1, icon: icon2, project: "Add Progress Track", budget: "$3,000", percent: 100, status: "Done" },
  { id: 1, icon: icon3, project: "Fix Platform Errors", budget: "Not Set", percent: 30, status: "Canceled" },
  { id: 1, icon: icon4, project: "Launch our Mobile App", budget: "$20,500", percent: 0, status: "Canceled" },
  { id: 1, icon: icon5, project: "Add the New Pricing Page", budget: "$500", percent: 100, status: "Done" }]

const TableTwo = (
  <Table className="w-full min-w-[550px] rounded-[4px] overflow-auto bg-transparent">
    <TableHeader>
      <TableRow>
        <TableHead className="w-[30%]">PROJECT</TableHead>
        <TableHead className="w-[10%]">BUDGET</TableHead>
        <TableHead className="w-[10%]">STATUS</TableHead>
        <TableHead className="text-center w-[20%]">COMPLETION</TableHead>
        <TableHead className="text-center w-[10%]">ACTION</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {tableTwoDetails.map((ele) => (
        <TableRow key={ele.id} className="border-t-[1px] border-[#222a48]">
          <TableCell>
            <div className="w-full flex items-center">
              <img src={ele.icon.src} alt="" className="size-5 rounded-md bg-transparent mr-3" />
              {ele.project}
            </div>
          </TableCell>
          <TableCell>{ele.status}</TableCell>
          <TableCell>{ele.budget}</TableCell>
          <TableCell>
            <div className="w-1/2 flex flex-wrap mx-auto">
              <p className="w-full mx-auto">{ele.percent}%</p>
              <Progress value={ele.percent} className="w-full mx-auto" />
            </div>
          </TableCell>
          <TableCell>
            <div className="flex">
              <button className="mx-auto text-secondColor">
                <EllipsisVertical className="size-5" />
              </button>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
export default function page() {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-y-5 py-2">
      <div className="MainCards w-full h-[523.5px] flex flex-col justify-between items-center py-6 px-5">
        <div className=" h-[10%] w-full flex flex-col">
          <p className="headerTitle">Authors table</p>
        </div>
        <div className="h-[80%] w-full boxShadoooow">
          asd
        </div>
      </div>
      <div className="MainCards w-full min-h-[377px] h-max flex flex-col justify-between items-center py-6 px-5">
        <div className=" h-[10%] w-full flex flex-col gap-y-1">
          <p className="headerTitle">Projects table</p>
        </div>
        <div className="h-[88%] w-full boxShadoooow">
          {TableTwo}
        </div>
      </div>
    </div>
  )
}
