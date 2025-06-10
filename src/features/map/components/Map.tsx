import styles from "./Map.module.css";
import RootMap from "./RootMap";
import VesselMarker from "./VesselMarker";
import useVessels from "../hooks/useVessels";
import Device from "./Device";
import useDevice from "../hooks/useDevice";

const INITIAL_MAP_CENTER = {
  lat: 35.049106912862484,
  lng: 129.00636920049143,
};

export default function Map() {
  const { data: device, isLoading: isLoadingDevice } = useDevice();
  const { data: vessels, isLoading: isLoadingVessel } = useVessels();

  return (
    <div className={styles.map}>
      {isLoadingDevice && (
        <div className={styles.deviceLoading}>
          디바이스 정보를 가져오는 중입니다.
        </div>
      )}

      {isLoadingVessel && <div className={styles.vesselLoading} />}
      <RootMap defaultCenter={INITIAL_MAP_CENTER} defaultZoom={16}>
        {device && <Device data={device} />}
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
