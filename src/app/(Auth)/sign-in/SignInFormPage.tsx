"use client";

import { useActionState, useState } from "react";
import { LoginYarab } from "./actions";
import { useFormStatus } from "react-dom";
import Loader from "@/app/loading";

export function LoginForm() {
    const [state, formAction] = useActionState(LoginYarab, undefined);

    const { pending } = useFormStatus();
    const [isLoading, setIsLoading] = useState(false);

    // Show loading page when the form is pending
    if (pending && !isLoading) {
        setIsLoading(true);
    }

    if (isLoading) {
        return <Loader />;
    }


    return (
        <form action={formAction} className="w-full">
            <div className="flex flex-col gap-1 pb-5">
                <label htmlFor="firstName" className="font-semibold text-sm">Email</label>
                <div className="bgFormBoxmain p-[2px] rounded-xl">
                    <div className="bgFormBox rounded-xl p-2 w-full h-full">
                        <input
                            id="email"
                            name="email"
                            placeholder="email"
                            className="w-full focus-visible:outline-none bgFormBox text-sm" />
                    </div>
                </div>
                {state?.errors?.email && (
                    <div className="text-sm text-red-500">{state.errors.email}</div>
                )}
            </div>

            <div className="flex flex-col gap-1 pb-5">
                <label htmlFor="password" className="font-semibold text-sm">Password</label>
                <div className="bgFormBoxmain p-[2px] rounded-xl">
                    <div className="bgFormBox rounded-xl p-2 w-full h-full">
                        <input
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            className="focus-visible:outline-none bgFormBox text-sm w-full" />
                    </div>
                </div>
                {state?.errors?.password && (
                    <div className="text-sm text-red-500">{state.errors.password}</div>
                )}
            </div>
            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <div className="bgFormBoxmain w-[120px] p-[2px] mx-auto flex justify-center items-center rounded-xl">
            <button
                disabled={pending}
                type="submit"
                className={`w-full bgFormBox rounded-xl py-1 font-semibold duration-200 ${pending ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}`} >
                {pending ? "Loading" : "Login"}
            </button>
        </div>
    );
}