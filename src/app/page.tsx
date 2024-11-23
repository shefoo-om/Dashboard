"use client";
import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        router.push("/sign-up");
    }, []);
    return (
        <Loader />
    );
}
