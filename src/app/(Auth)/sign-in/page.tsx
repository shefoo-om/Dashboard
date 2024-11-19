import { NavbarAuth } from "@/components/Authentication/Navbar/NavbarAuth"
import "../global.css"

export default function SignInPage() {
  return (
    <div className="h-screen w-full flex flex-wrap justify-center items-center relative">
      <div className="w-full">
      <NavbarAuth />
      </div>
      <div className="AuthBg w-[49%] max-lg:hidden h-full flex justify-center items-center capitalize">
        <div className="">
          <h6>INSPIRED BY THE FUTURE:</h6>
          <p>Shefo will comming</p>
        </div>
      </div>
      <div className="max-lg:w-full w-[49%] h-full flex justify-center items-center">SignIn Form</div>

    </div>
  )
}
