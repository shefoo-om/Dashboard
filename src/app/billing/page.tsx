import type { BillingInformationDetails, TransactionDetails } from "@/types/Billing"
import { MoveDown, MoveUp, Pen, Trash } from "lucide-react"

const BillingInformationDetails: BillingInformationDetails[] = [
  { id: 1, name: "oliver liam", company: "viking burrito", email: "oliver@burrito.com", vatNumber: "FRB1235476" },
  { id: 2, name: "oliver liam", company: "viking burrito", email: "oliver@burrito.com", vatNumber: "FRB1235476" },
  { id: 3, name: "oliver liam", company: "viking burrito", email: "oliver@burrito.com", vatNumber: "FRB1235476" },
]
const TransactionDetails: TransactionDetails[] = [
  {
    when: "Today",
    details: [
      { id: 1, name: "Netflix", date: "27 March 2020", time: "12:30", meridiem: "AM", money: "2,500", success: "done" },
      { id: 2, name: "Stripe", date: "27 March 2020", time: "12:30", meridiem: "PM", money: "2,500", success: "pending" }
    ]
  },
  {
    when: "Yesterday",
    details: [
      { id: 3, name: "Apple", date: "27 March 2020", time: "12:30", meridiem: "PM", money: "2,500", success: "failed" },
      { id: 4, name: "HubSpot", date: "27 March 2020", time: "12:30", meridiem: "AM", money: "2,500", success: "done" },
      { id: 5, name: "HubSpot", date: "27 March 2020", time: "12:30", meridiem: "PM", money: "2,500", success: "pending" },
      { id: 6, name: "Webflow", date: "27 March 2020", time: "12:30", meridiem: "AM", money: "2,500", success: "done" },
    ]
  }
]

const BillingInformation = ({ BillingInformation }: { BillingInformation: BillingInformationDetails[] }) => (
  <>
    {BillingInformation.map((ele) => (
      <div key={ele.id} className="billingInfoBox h-[135px] w-[98%] flex justify-between gap-2 py-6 max-max-400:py-2 pl-4 pr-1 rounded-2xl">
        <div className="flex flex-wrap h-full w-10/12">
          <p className="text-base capitalize font-bold w-full">{ele.name}</p>
          <p className="text-sm text-secondColor capitalize text-xs w-full">Company Name: {ele.company}</p>
          <p className="text-sm text-secondColor capitalize text-xs w-full">Email Adress: {ele.email}</p>
          <p className="text-sm text-secondColor capitalize text-xs w-full">VAT Number: {ele.vatNumber}</p>
        </div>
        <div className="w-max h-max flex max-max-400:flex-wrap items-center pr-2 pl-3 font-bold">
          <p className="text-red-600 hover:text-red-400 hover:scale-105 duration-300 text-sm flex items-center cursor-pointer mr-3 max-max-400:mr-0"> <Trash className="size-3 mr-[2px]" /> Delete</p>
          <p className="text-secondColor hover:text-white hover:scale-105 duration-300 text-sm flex items-center cursor-pointer" > <Pen className="size-3 mr-[2px]" /> Edit</p>
        </div>
      </div>
    ))}
  </>
)

const TransactionCards = ({ TransactionCards }: { TransactionCards: TransactionDetails[] }) => (
  <>
    {TransactionCards.map((ele) => (
      <div className="flex flex-wrap mt-2" key={ele.when}>
        <p className="w-full text-xs font-semibold text-secondColor uppercase">{ele.when}</p>
        {ele.details.map((ele) => (
          <div key={ele.id} className="w-full min-h-[60px] h-max flex justify-between items-center gap-1 px-2 py-2">
            <div className="flex items-center gap-2 w-max">
              {ele.success === "done" ?
                <div className="size-9 flex justify-center items-center border-2 border-green-500 rounded-full text-green-500 hover:text-green-700 hover:border-green-700 cursor-pointer duration-200">
                  <MoveUp className="size-3" />
                </div>
                : ele.success === "pending" ?
                  <div className="flex justify-center items-center border-2 border-secondColor rounded-full text-secondColor hover:text-white hover:border-white cursor-pointer" style={{ width: "36px", height: "36px" }}>
                    <span className="font-bold text-lg"> ! </span>
                  </div>
                  : <div className="size-9 flex justify-center items-center border-2 border-red-600 rounded-full text-red-600 hover:text-red-800 hover:border-red-800 cursor-pointer duration-200">
                    <MoveDown className="size-3" />
                  </div>
              }
              <div className="flex flex-col pl-2">
                <p className="capitalize text-sm font-semibold">{ele.name}</p>
                <p className="text-secondColor text-xs">{ele.date},at {ele.time} {ele.meridiem}</p>
              </div>
            </div>
            {ele.success === "done" ? <p className="text-green-600 text-sm font-bold">+${ele.money}</p>
              : ele.success === "pending" ? <p className="text-secondColor text-sm font-bold">Pending</p>
                : <p className="text-red-600 text-sm font-bold">-${ele.money}</p>
            }
          </div>
        ))}
      </div>
    ))}
  </>
)

export default function BillingPage() {
  return (
    <div className="w-full h-max flex flex-col justify-between items-center gap-y-5 py-2">
      <div className="w-full h-full flex justify-between items-center max-lg:flex-wrap gap-4">
        <div className="w-2/3 h-max max-lg:w-full flex flex-wrap justify-between items-center gap-4">
          <div className="MainCards h-[260px] w-[49%] max-[1440px]:w-full">1</div>
          <div className="MainCards h-[260px] w-[49%] max-[1440px]:w-full">2</div>
          <div className="MainCards h-[185px] w-full">3</div>
        </div>
        <div className="MainCards h-full w-1/3 max-[1440px]:w-[40%] max-lg:w-full flex flex-col">
          <div className="h-full flex items-center justify-center">4</div>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-between items-center gap-y-2">
        <div className="w-[61%] max-lg:w-[54%] max-md:w-full">
          <div className="MainCards w-full h-[555px] flex flex-wrap justify-between items-center py-6 px-5">
            <div className="h-[8%] w-full flex">
              <p className="headerTitle">Billing Information</p>
            </div>
            <div className="h-[91%] overflow-y-auto w-full flex flex-col justify-between items-center gap-5 pl-1">
              <BillingInformation BillingInformation={BillingInformationDetails} />
            </div>
          </div>
        </div>
        <div className="w-[38%] max-lg:w-[45%] max-md:w-full">
          <div className="MainCards w-full h-[555px] flex flex-wrap justify-between items-center py-6 px-5">
            <div className="h-[8%] w-full flex flex-wrap justify-between items-center gap-1">
              <p className="headerTitle w-2/5 min-w-max">Your Transaction{`'`}s</p>
              <p className="text-secondColor text-xs">23 - 30 March 2020</p>
            </div>
            <div className="h-[91%] overflow-y-auto w-full">
              <TransactionCards TransactionCards={TransactionDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
