import "../global.css"
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import type { Metadata } from 'next'
import Image from "next/image";
import bggg from "../../../assets/signUpImage.webp"

const NavbarAuth = dynamic(() =>
  import("@/components/Authentication/Navbar/NavbarAuth").then((mod) => mod.NavbarAuth)
);

const LoginForm = dynamic(() =>
  import("./SignInFormPage").then((mod) => mod.LoginForm)
);


export const metadata: Metadata = {
  title: 'Sign-In',
  description: "the sign in page"
}


export default function SignInPage() {
  return (
    <main className="bgMain h-screen w-full flex flex-wrap justify-between relative">
      <div className="w-full">
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <NavbarAuth />
        </Suspense>
      </div>
      <div className="AuthBg h-screen w-[49%] max-lg:hidden flex justify-center relative items-center capitalize">
        <Image
          src={bggg}
          alt="Picture of the Sign In"
          fill
          style={{
            objectFit: 'cover',
          }}
          sizes="50vw"
          priority
        />
        <div className="relative z-10 text-center">
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
            <Suspense fallback={<div>Loading Login Form...</div>}>
              <LoginForm />
              <div className="pt-2 text-secondColor">
                <h6>email:aa@aa.io</h6>
                <h6>pass:11221122</h6>
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}