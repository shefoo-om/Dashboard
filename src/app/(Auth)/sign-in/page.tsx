"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Mails } from "lucide-react"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavbarAuth } from "@/components/Authentication/Navbar/NavbarAuth";
import "../global.css"
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;
const LinksSocail = [
  { id: 1, icon: Facebook, links: "https://www.facebook.com" },
  { id: 2, icon: Linkedin, links: "https://www.linkedin.com" },
  { id: 3, icon: Mails, links: "https://www.gmail.com" }
]
export default function Home() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  function onSubmit(values: FormData) {
    console.log(values);
  }
  return (
    <main className="bgMain h-max w-full flex flex-wrap justify-between relative">
      <div className="w-full">
        <NavbarAuth />
      </div>
      <div className="AuthBg w-[49%] max-lg:hidden flex justify-center items-center capitalize">
        <div className="">
          <h6>INSPIRED BY THE FUTURE:</h6>
          <p>Shefo will comming</p>
        </div>
      </div>
      <div className="max-lg:w-full w-[49%] h-max overflow-auto flex flex-col justify-center items-center py-20">
        <div className="pt-6 px-6 mx-auto max-w-96">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-3xl font-bold text-white mx-auto">Welcome!</h3>
            <p className="text-sm text-white font-normal">Use these awesome forms to login or create new account in your project for free.</p>
          </div>
        </div>
        <div className=" bgFormBoxmain h-[650px] w-[380px] max-sm:w-3/4 flex justify-center items-center rounded-xl p-[2px]">
          <div className="bgFormBox h-full w-full border-2 border-transparent rounded-xl flex flex-col justify-between items-center gap-2 px-9 py-5">
            <p className="text-lg font-semibold">Register with</p>
            <div className="w-full h-20 flex justify-center gap-5">
              {LinksSocail.map((ele) => (
                <div key={ele.id} className="rounded-xl w-16 h-16 bgFormBoxmain p-[2px]">
                  <Link href={ele.links} target="_blank" className="bgFormBox w-full h-full rounded-xl hover:opacity-90 flex justify-center items-center">
                    <ele.icon className="size-5" />
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-base text-[#a0aec0] mb-3">or</p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email..."
                    {...form.register("email")}
                    className="bg-[#0F0B27] border-gray-700"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Your password..."
                    {...form.register("password")}
                    className="bg-[#0F0B27] border-gray-700"
                  />
                  {form.formState.errors.password && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Label htmlFor="remember">Remember me</Label>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                SIGN IN
              </Button>

              <p className="text-center text-sm text-gray-400">
                Dont have an account?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}