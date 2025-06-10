import { useMap } from "@vis.gl/react-google-maps";
import { useEffect, useRef } from "react";

type DeviceRangeMarkerProps = {
  position: google.maps.LatLngLiteral;
  range: number;
};

export default function DeviceRangeMarker({
  position,
  range,
}: DeviceRangeMarkerProps) {
  const circle = useRef(new google.maps.Circle()).current;

  circle.setOptions({
    center: position,
    radius: range,
    fillColor: "#FFCC00",
    fillOpacity: 0.2,
    strokeColor: "#FFCC00",
    strokeOpacity: 0.5,
    strokeWeight: 2,
  });

  const map = useMap();

  useEffect(() => {
    if (!map) return;
    circle.setMap(map);
    return () => {
      circle.setMap(null);
    };
  }, [map, circle]);

  return null;
}
