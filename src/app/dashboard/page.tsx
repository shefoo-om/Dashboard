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


// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import Loader from "./components/Loader/Loader";

// export default function Home() {
//   const router = useRouter();
//   useEffect(() => {
//     router.push("/login");
//   }, []);
//   return (
//     <Loader />
//   );
// }
// 