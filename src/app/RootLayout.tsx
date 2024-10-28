"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const allowedPaths = ["", "profile", "tables", "billing"].map(path => `/${path}`);
    const route = pathname === "/" || pathname === "" ? "Dashboard" : pathname.replace("/", "");

    return (
        <html lang="en">
            <body>
                {allowedPaths.includes(pathname) ? (
                    <SidebarProvider>
                        <AppSidebar />
                        <main className="w-full mx-8 max-lg:px-5 max-sm:mx-0 relative">
                            <Navbar route={route} />
                            {children}
                        </main>
                    </SidebarProvider>
                ) : (
                    children
                )}
            </body>
        </html>
    );
}
