import AnalyticsCards from "@/components/DashboardPage/AnalyticsCards";
import FrontCard from "@/components/DashboardPage/frontCard";
import ChartsCards from "@/components/DashboardPage/ChartsCards";
import LastCard from "@/components/DashboardPage/LastCard";

export default function Dashboard() {
  return (
    <div className="pt-2">
      <AnalyticsCards />
      <FrontCard />
      <ChartsCards />
      <LastCard />
    </div>
  );
}
