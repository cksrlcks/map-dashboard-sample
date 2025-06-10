import styles from "./Map.module.css";
import DeviceMarker from "./DeviceMarker";
import RootMap from "./RootMap";
import VesselMarker from "./VesselMarker";
import useVessels from "../hooks/useVessels";

const INITIAL_MAP_CENTER = {
  lat: 35.049106912862484,
  lng: 129.00636920049143,
};

const DEVICE_CENTER = {
  lat: 35.049106912862484,
  lng: 129.00636920049143,
};

export default function Map() {
  const { vessels } = useVessels();

  return (
    <div className={styles.map}>
      <RootMap defaultCenter={INITIAL_MAP_CENTER} defaultZoom={16}>
        <DeviceMarker position={DEVICE_CENTER} name="Device 1" />
        {vessels?.map((vessel) => (
          <VesselMarker
            key={vessel.name}
            position={vessel.position}
            name={vessel.name}
          />
        ))}
      </RootMap>
    </div>
  );
}
