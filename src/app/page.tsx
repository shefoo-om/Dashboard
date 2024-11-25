"use client";
import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/sign-in");
        }, 5000 + Math.random() * 2000);

        return () => clearTimeout(timer);
    }, [router]); return (
        <Loader />
    );
}
