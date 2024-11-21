"use client";

import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


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

export const FormSignIn = () => {
    const methods = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const { register, handleSubmit, formState: { errors } } = methods;


    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)
    }

    return (
        <Form {...methods}>
            <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
                <FormItem className="flex flex-col pb-3">
                    <FormLabel htmlFor="firstName" className="font-semibold">First Name</FormLabel>
                    <div className="bgFormBoxmain p-[2px] rounded-xl">
                        <FormControl className="bgFormBox rounded-xl p-2 w-full h-full">
                            <input id="firstName"  {...register("firstName")} placeholder="ex: Shefo" className="focus-visible:outline-none text-sm" />
                        </FormControl>
                        {errors.firstName && <div>{errors.firstName.message}</div>}
                    </div>
                </FormItem>
                <FormItem className="flex flex-col pb-3">
                    <FormLabel htmlFor="lastName" className="font-semibold">Last Name</FormLabel>
                    <div className="bgFormBoxmain p-[2px] rounded-xl">
                        <FormControl className="bgFormBox rounded-xl p-2 w-full h-full">
                            <input id="lastName"  {...register("lastName")} placeholder="ex: Ronaldo" className="focus-visible:outline-none text-sm" />
                        </FormControl>
                        {errors.lastName && <div>{errors.lastName.message}</div>}
                    </div>
                </FormItem>
                <FormItem className="flex flex-col pb-3">
                    <FormLabel htmlFor="email" className="font-semibold">Email</FormLabel>
                    <div className="bgFormBoxmain p-[2px] rounded-xl">
                        <FormControl className="bgFormBox rounded-xl p-2 w-full h-full">
                            <input id="email"  {...register("email")} placeholder="ex: aaa@dd.com" className="focus-visible:outline-none text-sm" />
                        </FormControl>
                        {errors.email && <div>{errors.email.message}</div>}
                    </div>
                </FormItem>
                <FormItem className="flex flex-col pb-3">
                    <FormLabel htmlFor="password" className="font-semibold">Password</FormLabel>
                    <div className="bgFormBoxmain p-[2px] rounded-xl">
                        <FormControl className="bgFormBox rounded-xl p-2 w-full h-full">
                            <input id="password"  {...register("password")} placeholder="ex: Password123" className="focus-visible:outline-none text-sm" type="password" />
                        </FormControl>
                        {errors.password && <div>{errors.password.message}</div>}
                    </div>
                </FormItem>
                <div className="w-full p-2 flex justify-center items-center">
                    <button className="bg-bgBlue rounded-xl px-3 py-1 font-semibold hover:scale-105 duration-200" >
                        Submit
                    </button>
                </div>
            </form>
        </Form>

    )
}

// const SubmitButton = () => {
//     return (
//     <button>

//     </button>
// )
// }