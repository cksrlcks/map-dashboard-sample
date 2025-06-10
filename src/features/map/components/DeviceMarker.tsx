import { AdvancedMarker } from "@vis.gl/react-google-maps";
import styles from "./DeviceMarker.module.css";

type DeviceMarkerProps = React.ComponentProps<typeof AdvancedMarker> & {
  name?: string;
};

export default function DeviceMarker(props: DeviceMarkerProps) {
  return (
    <AdvancedMarker {...props}>
      <div className={styles.marker}>
        <span className={styles.markerName}>{props.name}</span>
      </div>
    </AdvancedMarker>
  );
}
