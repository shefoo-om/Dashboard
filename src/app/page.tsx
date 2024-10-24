import { AppSidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AnalyticsCards from "@/components/AnalyticsCards";
import FrontCard from "@/components/frontCard";

export default function Home() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full mx-12 relative">
          {/* <SidebarTrigger /> */}
          <Navbar route="Dashboard" />
          <AnalyticsCards />
          <FrontCard />
          <div className="h-[1000px]">how are you</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
