import { AppSidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AnalyticsCards from "@/components/AnalyticsCards";
import FrontCard from "@/components/frontCard";
import ChartsCards from "@/components/ChartsCards";

export default function Home() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full mx-12 max-lg:px-5 max-sm:mx-0 relative">
          {/* <SidebarTrigger /> */}
          <Navbar route="Dashboard" />
          <AnalyticsCards />
          <FrontCard />
          <ChartsCards />
          <div className="h-[1000px]">how are you</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
