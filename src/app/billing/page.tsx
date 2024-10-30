import type { BillingInformationDetails } from "@/types/Billing"
import { Pen, Trash } from "lucide-react"

const BillingInformationDetails: BillingInformationDetails[] = [
  { id: 1, name: "oliver liam", company: "viking burrito", email: "oliver@burrito.com", vatNumber: "FRB1235476" },
  { id: 2, name: "oliver liam", company: "viking burrito", email: "oliver@burrito.com", vatNumber: "FRB1235476" },
  { id: 3, name: "oliver liam", company: "viking burrito", email: "oliver@burrito.com", vatNumber: "FRB1235476" },
]
const BillingInformation = ({ BillingInformation }: { BillingInformation: BillingInformationDetails[] }) => (
  <>
    {BillingInformation.map((ele) => (
      <div key={ele.id} className="billingInfoBox h-[135px] w-[98%] flex justify-between gap-2 py-6 px-4 rounded-lg">
        <div className="flex flex-wrap h-full w-3/4">
          <p className="text-base capitalize font-bold w-full">{ele.name}</p>
          <p className="text-sm text-secondColor capitalize text-xs w-full">Company Name: {ele.company}</p>
          <p className="text-sm text-secondColor capitalize text-xs w-full">Email Adress: {ele.email}</p>
          <p className="text-sm text-secondColor capitalize text-xs w-full">VAT Number: {ele.vatNumber}</p>
        </div>
        <div className="w-max h-max flex items-center pr-3 pl-3 font-bold">
          <p className="text-red-600 hover:text-red-400 hover:scale-105 duration-300 text-base flex items-center cursor-pointer mr-3"> <Trash className="size-4 mr-[2px]" /> Delete</p>
          <p className="text-secondColor hover:text-white hover:scale-105 duration-300 text-base flex items-center cursor-pointer" > <Pen className="size-4 mr-[2px]" /> Edit</p>
        </div>
      </div>
    ))}
  </>
)


export default function BillingPage() {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-y-5 py-2">
      <div className="w-full grid grid-rows-3 grid-flow-col gap-4"></div>
      <div className="w-full flex justify-between items-center">
        <div className="w-[60%]">
          <div className="MainCards w-full min-h-[555px] h-max flex flex-wrap justify-between items-center py-6 px-5">
            <div className=" h-[8%] w-full flex flex-col">
              <p className="headerTitle">Billing Information</p>
            </div>
            <div className="h-[91%] w-full flex flex-col justify-between items-center gap-5 pl-1">
              <BillingInformation BillingInformation={BillingInformationDetails} />
            </div>
          </div>
        </div>
        <div className="w-[35%]"></div>
      </div>
    </div>
  )
}
