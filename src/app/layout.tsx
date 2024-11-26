"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/MainNavbar/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const allowedPaths = ["dashboard", "profile", "tables", "billing"].map(path => `/${path}`);
  const route = pathname.replace("/", "");

  return (
    <html lang="en">
      <body>
        {allowedPaths.includes(pathname) ? (
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full px-6 max-sm:mx-0 max-sm:px-4 py-6 relative">
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
