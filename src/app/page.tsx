import AnalyticsCards from "@/components/AnalyticsCards";
import FrontCard from "@/components/frontCard";
import ChartsCards from "@/components/ChartsCards";
import LastCard from "@/components/LastCard";

export default function Home() {
  return (
    <div className="pt-2">
      <AnalyticsCards />
      <FrontCard />
      <ChartsCards />
      <LastCard />
    </div>
  );
}
