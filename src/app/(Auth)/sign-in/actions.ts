// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use server";

// import { z } from "zod";
// import { createSession, deleteSession } from "../_Authentication/formLogIn/lib/sesions";
// import { redirect } from "next/navigation";
// import { findUserByEmail } from "./User";
// import { cookies } from "next/headers";


// const loginSchema = z.object({
//     email: z.string().email({ message: "Invalid email address" }).trim(),
//     password: z
//         .string()
//         .min(8, { message: "Password must be at least 8 characters" })
//         .trim(),
// });

// export async function LoginYarab(prevState: any, formData: FormData) {
//     const result = loginSchema.safeParse(Object.fromEntries(formData));

//     if (!result.success) {
//         return {
//             errors: result.error.flatten().fieldErrors,
//         };
//     }

//     const { email, password } = result.data;
//     const user = findUserByEmail(email);

//     if (!user || user.password !== password) {
//         return {
//             errors: {
//                 email: ["Invalid email or password"],
//             },
//         };
//     }

//     // Clear any existing session
//     (await cookies()).delete("session");

//     // Create new session
//     await createSession(user.id);

//     redirect("/dashboard");
// }


// export async function logout() {
//     await deleteSession();
//     redirect("/sign-in");
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { z } from "zod";
import { createSession, deleteSession } from "../../api/sesions";
import { redirect } from "next/navigation";
import { findUserByEmail } from "./User";
import { cookies } from "next/headers";

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .trim(),
});

export async function LoginYarab(prevState: any, formData: FormData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    const { email, password } = result.data;
    const user = findUserByEmail(email);

    if (!user || user.password !== password) {
        return {
            errors: {
                email: ["Invalid email or password"],
            },
        };
    }

    // Clear any existing session
    (await cookies()).delete("session");

    // Create a new session
    await createSession(user.id);

    redirect("/dashboard");
}

export async function logout() {
    // Clear the session and redirect to login
    await deleteSession();
    redirect("/sign-in");
}
