/* eslint-disable @next/next/no-img-element */
import type { BillingInformationDetails, InvoicesInformationDetails, TransactionDetails } from "@/types/Billing"
import { MoveDown, MoveUp, Pen, Trash } from "lucide-react"
import lineImg from "@/assets/billing/lineImg.png"

const InvoicesInformationDetails: InvoicesInformationDetails[] = [
  { "id": 1, "date": "March 01, 2020", "invoice_number": "#MS-415646", "amount": 180 },
  { "id": 2, "date": "February 10, 2021", "invoice_number": "#RV-126749", "amount": 250 },
  { "id": 3, "date": "February 10, 2021", "invoice_number": "#RV-126749", "amount": 250 },
  { "id": 4, "date": "April 05, 2020", "invoice_number": "#QW-103578", "amount": 120 },
  { "id": 5, "date": "June 25, 2019", "invoice_number": "#MS-415646", "amount": 180 },
  { "id": 6, "date": "March 01, 2019", "invoice_number": "#AR-803481", "amount": 300 }
]


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

const FirstComponent = (
  <div className="row-span-2 col-span-2 h-max flex flex-wrap justify-between items-center gap-4">
    <div className="billingFirstCardBg h-[260px] flex-auto w-max max-[1439px]:w-full flex flex-col justify-between items-center p-7">
      <div className="h-max w-full flex justify-between items-center">
        <p className="headerTitle">Visa Gold</p>
        <div className="size-12">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#FFFFFF" style={{ color: "#FFFFFF" }} height="48px" width="48px" xmlns="http://www.w3.org/2000/svg">
            <g><path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 6.654a6.786 6.786 0 0 1 2.596 5.344A6.786 6.786 0 0 1 12 17.34a6.786 6.786 0 0 1-2.596-5.343A6.786 6.786 0 0 1 12 6.654zm-.87-.582A7.783 7.783 0 0 0 8.4 12a7.783 7.783 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854zm1.742 11.854A7.783 7.783 0 0 0 15.6 12a7.783 7.783 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854z"></path></g>
          </svg>
        </div>
      </div>
      <div className="h-max w-full flex flex-col justify-between items-start pt-8">
        <p className="w-full text-2xl font-bold">7812   2139   0823   7916</p>
        <div className="w-full flex items-center gap-4 pt-3">
          <div className="flex flex-col">
            <p className="text-[10px]">VALID THRU</p>
            <p className="text-base font-bold">05/24</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-[10px]">CVV</p>
            <p className="text-base font-bold">09X</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div className="MainCards h-[260px] flex-auto max-[1439px]:w-full flex flex-col justify-between items-center p-7">
      <div className="billingSecondCardBg w-full p-5 flex justify-between items-center mb-8">
        <div className="flex flex-col">
          <p className="text-[10px] font-semibold">Credit Balance</p>
          <p className="text-4xl font-bold">$25,215</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="white" style={{ color: "white" }} height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
            <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
          </svg>
          <img src={lineImg.src} alt="" />
        </div>
      </div>
      <span className="w-full m-0 text-[10px] text-secondColor font-medium">NEWEST</span>
      <div className="w-full flex justify-between items-center ">
        <div className="flex justify-between items-center gap-5">
          <div className="size-11 rounded-full bg-[#191f42] flex justify-center items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#01b574" style={{ color: "rgb(1, 181, 116)" }} height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></svg>
          </div>
          <div className="flex flex-col justify-between items-center">
            <span className="text-sm font-semibold">Bill &amp; Taxes</span>
            <span className="text-secondColor text-sm">Today, 16:36</span>
          </div>
        </div>
        <span className="text-sm font-bold">-$154.50</span>
      </div>
    </div>
    <div className="MainCards min-h-[185px] h-max w-full flex flex-col justify-between items-center gap-y-5 p-7">
      <div className="h-max w-full flex justify-between items-center">
        <p className="headerTitle">Payment Method</p>
        <button className="text-xs font-bold bg-bgBlue px-5 py-2 rounded-xl duration-300 hover:scale-110">ADD NEW CARD</button>
      </div>
      <div className="w-full flex flex-wrap justify-between items-center gap-3 gap-y-5">
        <div className="w-[48%] max-md:w-full border-[#4a5568] border-2 rounded-xl p-4 flex justify-between items-center">
          <div className="flex justify-between items-center gap-5">
            <div className="flex justify-center items-center">
              <svg width="21px" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.63158" cy="7.49999" r="6.63158" fill="#EB001B"></circle><circle cx="14.3685" cy="7.49999" r="6.63158" fill="#F79E1B"></circle></svg>
            </div>
            <div className="flex flex-col justify-between items-center">
              <span className="text-sm font-semibold">7812 2139 0823 XXXX</span>
            </div>
          </div>
          <Pen width={20} height={20} className="hover:scale-105 duration-200 cursor-pointer" />
        </div>
        <div className="w-[48%] max-md:w-full border-[#4a5568] border-2 rounded-xl p-4 flex justify-between items-center">
          <div className="flex justify-between items-center gap-5">
            <div className="flex justify-center items-center">
              <svg width="25px" viewBox="0 0 25 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.6708 2.96349C12.6568 4.15055 13.653 4.81298 14.4034 5.20684C15.1744 5.61099 15.4333 5.87013 15.4304 6.23147C15.4245 6.78459 14.8153 7.02862 14.2452 7.03812C13.2505 7.05475 12.6723 6.74889 12.2125 6.51753L11.8542 8.32341C12.3155 8.55247 13.1696 8.75217 14.0554 8.76087C16.1345 8.76087 17.4947 7.65543 17.5021 5.94145C17.5102 3.76625 14.7087 3.64579 14.7278 2.67348C14.7344 2.37871 14.9956 2.06408 15.568 1.98406C15.8512 1.94368 16.6332 1.91274 17.5198 2.35252L17.8677 0.605286C17.391 0.418253 16.7782 0.239136 16.0153 0.239136C14.0583 0.239136 12.6819 1.35962 12.6708 2.96349V2.96349ZM21.2115 0.389687C20.8319 0.389687 20.5118 0.628245 20.3691 0.99433L17.3991 8.63249H19.4767L19.8901 7.40183H22.429L22.6689 8.63249H24.5L22.902 0.389687H21.2115ZM21.5021 2.61641L22.1016 5.7116H20.4596L21.5021 2.61641ZM10.1518 0.389687L8.51418 8.63249H10.4939L12.1308 0.389687H10.1518ZM7.22303 0.389687L5.16233 6.00003L4.32878 1.22966C4.23097 0.697187 3.84472 0.389687 3.41579 0.389687H0.0471011L0 0.629037C0.691574 0.790671 1.47729 1.0514 1.95326 1.33033C2.24457 1.50067 2.32775 1.64964 2.42336 2.05458L4.00214 8.63249H6.0945L9.3021 0.389687H7.22303Z" fill="white"></path></svg>
            </div>
            <div className="flex flex-col justify-between items-center">
              <span className="text-sm font-semibold">7812 2139 0823 XXXX</span>
            </div>
          </div>
          <Pen width={18} height={18} className="hover:scale-105 duration-200 cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
)

const SecondComponent = ({ SecondComponent }: { SecondComponent: InvoicesInformationDetails[] }) => (
  <>
    {SecondComponent.map((ele) => (
      <li key={ele.id} className="flex justify-between items-center gap-1 py-2">
        <div className="flex flex-col justify-between items-start gap-2">
          <p className="font-bold">{ele.date}</p>
          <p className="text-secondColor text-xs">{ele.invoice_number}</p>
        </div>
        <div className="flex justify-between items-center gap-3">
          <p className="text-secondColor">${ele.amount}</p>
          <div className="flex justify-between items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#fff" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg">
              <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z"></path>
              <path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"></path>
            </svg>
            <span className="text-secondColor">&nbsp;PDF</span>
          </div>
        </div>
      </li>
    ))}
  </>
)

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
    <div className="w-full flex flex-col justify-between items-center gap-y-5 pb-2 pt-6">
      <div className="w-full h-full grid grid-rows-2 grid-flow-col max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:items-center gap-4">
        {FirstComponent}
        <div className="MainCards row-start-1 row-end-3 max-lg:w-full">
          <div className="max-h-[420px] max-[1439px]:max-h-[700px] max-lg:h-max overflow-hidden flex flex-wrap items-center gap-7 justify-center p-7">
            <div className="h-max w-full flex justify-between items-center">
              <p className="headerTitle">Invoices</p>
              <button className="text-xs font-bold bg-bgBlue px-5 py-2 rounded-xl duration-300 hover:scale-110">VIEW ALL</button>
            </div>
            <ul className="w-full max-h-[350px] max-[1439px]:max-h-[650px] overflow-auto flex flex-col pb-20">
              <SecondComponent SecondComponent={InvoicesInformationDetails} />
            </ul>
          </div>
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
    </div >
  )
}
