/* eslint-disable @next/next/no-img-element */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { EllipsisVertical } from "lucide-react"
import { FirstCardDetails, SecondCardDetails } from "@/types/Tables"

import icon1 from "@/assets/imgForTable/ch.png"
import icon2 from "@/assets/imgForTable/ad1.png"
import icon3 from "@/assets/imgForTable/fi.png"
import icon4 from "@/assets/imgForTable/spotify.png"
import icon5 from "@/assets/imgForTable/ad.png"

import mem1 from "@/assets/imgForTable/member/raymond.jpg"
import mem2 from "@/assets/imgForTable/member/ressler.png"
import mem3 from "@/assets/imgForTable/member/kem.png"
import mem4 from "@/assets/imgForTable/member/glen.png"
import mem5 from "@/assets/imgForTable/member/funny.png"
import mem6 from "@/assets/imgForTable/member/bos.png"

const tableOneDetails : FirstCardDetails[] = [
  { id: 1, img: mem1, author: "Raymond Reddington", email: "Raymond@simmmple.com", function: "Manager", type: "Organization", status: "online", history: "23/04/18" },
  { id: 2, img: mem2, author: "Donald Ressler", email: "Donald@simmmple.com", function: "Programator", type: "Developer", status: "offline", history: "11/01/19" },
  { id: 3, img: mem3, author: "Tom Keen", email: "Tom@simmmple.com", function: "Programator", type: "Developer", status: "online", history: "19/09/17" },
  { id: 4, img: mem4, author: "Glen Carter", email: "Glen@simmmple.com", function: "Executive", type: "Projects", status: "online", history: "24/12/08" },
  { id: 5, img: mem5, author: "Aram", email: "Aram@simmmple.com", function: "Programator", type: "Developer", status: "online", history: "04/10/21" },
  { id: 6, img: mem6, author: "Harold Cooper", email: "Harlod@simmmple.com", function: "Manager", type: "Organization", status: "offline", history: "14/09/20" },
]

const tableTwoDetails : SecondCardDetails[] = [
  { id: 1, icon: icon1, project: "Chakra Vision UI Version", budget: "$14,555", percent: 60, status: "Working" },
  { id: 2, icon: icon2, project: "Add Progress Track", budget: "$3,000", percent: 100, status: "Done" },
  { id: 3, icon: icon3, project: "Fix Platform Errors", budget: "Not Set", percent: 30, status: "Canceled" },
  { id: 4, icon: icon4, project: "Launch our Mobile App", budget: "$20,500", percent: 0, status: "Canceled" },
  { id: 5, icon: icon5, project: "Add the New Pricing Page", budget: "$500", percent: 100, status: "Done" }
]

const TableOne = (
  <Table className="w-full min-w-[550px] h-full rounded-[4px] overflow-auto bg-transparent">
    <TableHeader>
      <TableRow>
        <TableHead className="min-w-[35%] w-max">AUTHOR</TableHead>
        <TableHead className="w-[12.5%]">FUNCTION</TableHead>
        <TableHead className="text-center w-[12.5%]">STATUS</TableHead>
        <TableHead className="text-center w-[12.5%]">EMPLOYED</TableHead>
        <TableHead className="text-center w-[12.5%]">ACTION</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {tableOneDetails.map((ele) => (
        <TableRow key={ele.id} className="border-t-[1px] border-[#222a48]">
          <TableCell>
            <div className="w-full flex items-center">
              <img src={ele.img.src} alt="" className="size-9 rounded-[0.9375rem] bg-transparent mr-3" />
              <div className="flex flex-col">
                <div className="text-sm font-bold">{ele.author}</div>
                <div className="text-xs text-secondColor">{ele.email}</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex flex-col my-2">
              <p className="text-xs font-bold ">{ele.function}</p>
              <p className="text-xs font-semibold text-secondColor">{ele.type}</p>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex">
              {ele.status === "online" ? <p className="bg-green-600 mx-auto text-xs border-2 border-transparent rounded-lg py-[3px] px-2">{ele.status}</p>
                :
                <p className="mx-auto text-xs border-2 rounded-lg py-[2px] px-2">{ele.status}</p>}
            </div>
          </TableCell>
          <TableCell>
            <div className="flex">
              <p className="text-xs font-bold mx-auto">{ele.history}</p>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex">
              <button className="text-xs mx-auto text-secondColor">Edit</button>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

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
export default function TablesPage() {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-y-5 pb-2 pt-6">
      <div className="MainCards w-full min-h-[523.5px] h-max flex flex-col justify-between items-center py-6 px-5">
        <div className=" h-[10%] w-full flex flex-col">
          <p className="headerTitle">Authors table</p>
        </div>
        <div className="h-[88%] w-full boxShadoooow">
          {TableOne}
        </div>
      </div>
      <div className="MainCards w-full min-h-[377px] h-max flex flex-col justify-between items-center py-6 px-5">
        <div className=" h-[10%] w-full flex flex-col gap-y-1">
          <p className="headerTitle">Projects table</p>
        </div>
        <div className="h-[89.5%] w-full boxShadoooow">
          {TableTwo}
        </div>
      </div>
    </div>
  )
}
