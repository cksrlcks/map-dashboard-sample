import { useEffect, useState } from "react";
import type { ChartData } from "../type";

export default function useCharts() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    const fetchChartsData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/chart");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch {
        console.error("Error fetching chart data:");
      } finally {
        setIsLoading(false);
      }
    };

    fetchChartsData();

    const timer = setInterval(fetchChartsData, 1000);

    return () => clearInterval(timer);
  }, []);

  return {
    isLoading,
    data,
  };
}
