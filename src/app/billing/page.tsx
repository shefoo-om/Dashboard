import type { BillingInformationDetails, TransactionDetails } from "@/types/Billing"
import { Pen, Trash } from "lucide-react"

const BillingInformationDetails: BillingInformationDetails[] = [
  { id: 1, name: "oliver liam", company: "viking burrito", email: "oliver@burrito.com", vatNumber: "FRB1235476" },
  { id: 2, name: "oliver liam", company: "viking burrito", email: "oliver@burrito.com", vatNumber: "FRB1235476" },
  { id: 3, name: "oliver liam", company: "viking burrito", email: "oliver@burrito.com", vatNumber: "FRB1235476" },
]

const TransactionDetails: TransactionDetails[] = [
  {
    when: "Today",
    details: [
      { id: 1, type: "", name: "", date: "", time: "", money: "", success: "" }
    ]
  }
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

// const Transaction = ({ Transaction }: { Transaction: TransactionDetails[] })=>(<></>)


export default function BillingPage() {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-y-5 py-2">
      <div className="w-full grid grid-rows-3 grid-flow-col gap-4"></div>
      <div className="w-full flex flex-wrap justify-between items-center gap-y-2">
        <div className="w-[61%] max-lg:w-[55%] max-md:w-full">
          <div className="MainCards w-full h-[555px] flex flex-wrap justify-between items-center py-6 px-5">
            <div className="h-[8%] w-full flex">
              <p className="headerTitle">Billing Information</p>
            </div>
            <div className="h-[91%] overflow-y-auto w-full flex flex-col justify-between items-center gap-5 pl-1">
              <BillingInformation BillingInformation={BillingInformationDetails} />
            </div>
          </div>
        </div>
        <div className="w-[38%] max-lg:w-[43%] max-md:w-full">
          <div className="MainCards w-full h-[555px] flex flex-wrap justify-between items-center py-6 px-5">
            <div className="h-[8%] w-full flex flex-wrap justify-between items-center gap-1">
              <p className="headerTitle w-2/5 min-w-max">Your Transaction{`'`}s</p>
              <p className="text-secondColor text-xs">23 - 30 March 2020</p>
            </div>
            <div className="h-[91%] overflow-y-auto w-full flex flex-col justify-between items-center">
              <div className="h-[33%]">w</div>
              <div className="h-[65%]">d</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
