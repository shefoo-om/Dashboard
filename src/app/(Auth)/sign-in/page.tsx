import "../global.css"
import Link from "next/link";
import { NavbarAuth } from "@/components/Authentication/Navbar/NavbarAuth";
import { LoginForm } from "./SignInFormPage";


export default function SignInPage() {
  return (
    <main className="bgMain h-screen min-h-max w-full flex flex-wrap justify-between relative">
      <div className="w-full">
        <NavbarAuth />
      </div>
      <div className="AuthBg h-screen w-[49%] max-lg:hidden flex justify-center items-center capitalize">
        <div className="">
          <h6>INSPIRED BY THE FUTURE:</h6>
          <p>Shefo will comming</p>
        </div>
      </div>
      <div className="h-screen max-lg:w-full w-[49%] h-max overflow-auto flex flex-col justify-center items-center py-20">
        <div className="pt-6 px-6 mx-auto max-w-96">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-3xl font-bold text-white mx-auto">Nice to see you!</h3>
            <p className="text-sm text-white font-normal">Enter your email and password to sign in</p>
          </div>
        </div>
        <div className="w-[380px] max-sm:w-3/4 flex justify-center items-center rounded-xl p-[2px]">
          <div className="h-full w-full border-2 border-transparent rounded-xl flex flex-col justify-between items-center gap-2 px-9 py-5">
            <LoginForm />
            <p className="text-center text-sm text-gray-400 pt-3">
              Dont have an account?{" "}
              <Link href={'/sign-up'} className="text-white hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}