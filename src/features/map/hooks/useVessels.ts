import { useEffect, useState } from "react";
import type { Marker } from "../type";

export default function useVessels() {
  const [vessels, setVessels] = useState<Marker[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVesselData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/vessel");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVessels(data);
      } catch {
        console.error("Error fetching vessel data:");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVesselData();

    const timer = setInterval(fetchVesselData, 500);

    return () => clearInterval(timer);
  }, []);

  return {
    data: vessels,
    isLoading,
  };
}
