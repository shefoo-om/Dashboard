import { AppSidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AnalyticsCards from "@/components/AnalyticsCards";

export default function Home() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full p-6 relative">
          {/* <SidebarTrigger /> */}
          <Navbar route="Dashboard" />
          <AnalyticsCards />
          <div className="h-[1000px]">how are you</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
