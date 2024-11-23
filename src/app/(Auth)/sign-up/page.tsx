import { NavbarAuth } from "@/components/Authentication/Navbar/NavbarAuth"
import "../global.css"
import Link from "next/link"
import { Facebook, Linkedin, Mails } from "lucide-react"
import { FormSignIn } from "@/components/Authentication/formSignUp/page"

const LinksSocail = [
  { id: 1, icon: Facebook, links: "https://www.facebook.com" },
  { id: 2, icon: Linkedin, links: "https://www.linkedin.com" },
  { id: 3, icon: Mails, links: "https://www.gmail.com" }
]


export default function SignUpPage() {
  return (
    <div className="bgMain h-max w-full flex flex-wrap justify-between relative">
      <div className="w-full">
        <NavbarAuth />
      </div>
      <div className="AuthBg w-[49%] max-lg:hidden  flex justify-center items-center capitalize">
        <div className="">
          <h6>INSPIRED BY THE FUTURE:</h6>
          <p>Shefo will comming</p>
        </div>
      </div>
      <div className="max-lg:w-full w-[49%] h-max min-h-[1250px] overflow-auto flex flex-col justify-center items-center py-20">
        <div className="pt-6 px-6 mx-auto max-w-96">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-3xl font-bold text-white mx-auto">Welcome!</h3>
            <p className="text-sm text-white font-normal">Use these awesome forms to login or create new account in your project for free.</p>
          </div>
        </div>
        <div className=" bgFormBoxmain h-[750px] w-[380px] max-sm:w-3/4 flex justify-center items-center rounded-xl p-[2px]">
          <div className="bgFormBox h-full w-full border-2 border-transparent rounded-xl flex flex-col justify-around items-center px-9 py-5">
            <p className="text-lg font-semibold">Register with</p>
            <div className="w-full h-20 flex justify-center gap-5">
              {LinksSocail.map((ele) => (
                <div key={ele.id} className="rounded-xl w-16 h-16 bgFormBoxmain p-[2px]">
                  <Link href={ele.links} target="_blank" className="bgFormBox w-full h-full rounded-xl hover:opacity-90 flex justify-center items-center duration-200">
                    <ele.icon className="size-5" />
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-base text-secondColor">or</p>
            <FormSignIn />
            <p className="text-center text-sm text-secondColor">
              Already have an account ?{"  "}
              <Link href={'/sign-in'} className="text-white font-semibold duration-200">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
