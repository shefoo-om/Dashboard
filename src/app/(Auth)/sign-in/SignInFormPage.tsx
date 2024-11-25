"use client";

import { useActionState } from "react";
// import { useActionState } from "react";
import { LoginYarab } from "./actions";

export function LoginForm() {
    const [state, formAction] = useActionState(LoginYarab, undefined);

    return (
        <form className="flex max-w-[300px] flex-col gap-2">
            <div className="flex flex-col gap-2">
                <input id="email" name="email" placeholder="Email" />
            </div>
            {state?.errors?.email && (
                <p className="text-red-500">{state.errors.email}</p>
            )}

            <div className="flex flex-col gap-2">
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            {state?.errors?.password && (
                <p className="text-red-500">{state.errors.password}</p>
            )}
            <button formAction={formAction} type="submit">
                Login
            </button>    </form>
    );
}

// function SubmitButton() {
//     const { pending } = useFormStatus();

//     return (
//         <button disabled={pending} type="submit">
//             Login
//         </button>
//     );
// }