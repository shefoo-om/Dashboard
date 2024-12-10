"use client";

import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { addUser } from "@/app/(Auth)/sign-in/User";


const schema = z.object({
    firstName: z.string().min(2, { message: "Username must be at least 2 characters" }),
    lastName: z.string().min(2, { message: "Last Name must be at least 2 characters" }),
    password: z.string()
        .min(8, { message: "The password must be at least 8 characters" })
        .regex(/[A-Z]/, { message: "The password must have at least one uppercase letter" })
        .regex(/[0-9]/, { message: "The password must have at least one number" })
    ,
    email: z.string().email()
})
type FormFields = z.infer<typeof schema>

export const FormSignup = () => {

    const methods = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const { register, handleSubmit, formState: { errors } } = methods;
    const router = useRouter(); 

    const generateRandomId = () => {
        return Math.random().toString(36).substring(2, 34);
    };
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const dataWithId = { ...data, id: generateRandomId() };
        try {
            // Add user to the users array
            addUser(dataWithId.id, dataWithId.email, dataWithId.firstName, dataWithId.lastName, dataWithId.password);
    
            // Create a session for the newly added user
            const response = await fetch("/src/app/api/sesions.ts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: dataWithId.id }),
            });
    
            if (response.ok) {
                // Try to parse JSON if the response is ok
                const responseData = await response.json();
                console.log('Session created successfully:', responseData);
                // Redirect to the dashboard page
                router.push("/dashboard");
            } else {
                // Handle non-OK response
                console.error("Error creating session:", await response.text());
            }
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };
    
    
    return (
        <Form {...methods}>
            <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
                <FormItem className="flex flex-col pb-5">
                    <FormLabel htmlFor="firstName" className="font-semibold">First Name</FormLabel>
                    <div className="bgFormBoxmain p-[2px] rounded-xl">
                        <FormControl className="bgFormBox rounded-xl p-2 w-full h-full">
                            <input id="firstName"  {...register("firstName")} placeholder="ex: Shefo" className="focus-visible:outline-none text-sm" />
                        </FormControl>
                        {errors.firstName && <div className="text-sm text-red-500">{errors.firstName.message}</div>}
                    </div>
                </FormItem>
                <FormItem className="flex flex-col pb-5">
                    <FormLabel htmlFor="lastName" className="font-semibold">Last Name</FormLabel>
                    <div className="bgFormBoxmain p-[2px] rounded-xl">
                        <FormControl className="bgFormBox rounded-xl p-2 w-full h-full">
                            <input id="lastName"  {...register("lastName")} placeholder="ex: Ronaldo" className="focus-visible:outline-none text-sm" />
                        </FormControl>
                        {errors.lastName && <div className="text-sm text-red-500">{errors.lastName.message}</div>}
                    </div>
                </FormItem>
                <FormItem className="flex flex-col pb-5">
                    <FormLabel htmlFor="email" className="font-semibold">Email</FormLabel>
                    <div className="bgFormBoxmain p-[2px] rounded-xl">
                        <FormControl className="bgFormBox rounded-xl p-2 w-full h-full">
                            <input id="email"  {...register("email")} placeholder="ex: aaa@dd.com" className="focus-visible:outline-none text-sm" />
                        </FormControl>
                        {errors.email && <div className="text-sm text-red-500">{errors.email.message}</div>}
                    </div>
                </FormItem>
                <FormItem className="flex flex-col pb-5">
                    <FormLabel htmlFor="password" className="font-semibold">Password</FormLabel>
                    <div className="bgFormBoxmain p-[2px] rounded-xl">
                        <FormControl className="bgFormBox rounded-xl p-2 w-full h-full">
                            <input id="password"  {...register("password")} placeholder="ex: Password123" className="focus-visible:outline-none text-sm" type="password" />
                        </FormControl>
                        {errors.password && <div className="text-sm text-red-500">{errors.password.message}</div>}
                    </div>
                </FormItem>
                <div className="bgFormBoxmain w-[150px] p-[2px] mx-auto flex justify-center items-center rounded-xl">
                    <button className="w-full bgFormBox hover:opacity-90 rounded-xl py-2 font-semibold duration-200" >
                        Submit
                    </button>
                </div>
            </form>
        </Form>

    )
}
