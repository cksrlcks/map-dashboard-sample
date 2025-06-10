import { useEffect, useState } from "react";
import type { Device } from "../type";

export default function useDevice() {
  const [device, setDevice] = useState<Device | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/device");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDevice(data);
      } catch {
        console.error("Error fetching device data:");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDeviceData();
  }, []);

  return {
    data: device,
    isLoading,
  };
}
