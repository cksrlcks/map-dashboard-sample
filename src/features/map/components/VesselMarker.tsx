import { AdvancedMarker } from "@vis.gl/react-google-maps";
import styles from "./VesselMarker.module.css";

type VesselMarkerProps = React.ComponentProps<typeof AdvancedMarker> & {
  name?: string;
};

export default function VesselMarker(props: VesselMarkerProps) {
  return (
    <AdvancedMarker {...props}>
      <div className={styles.marker}>
        <span className={styles.markerName}>{props.name}</span>
      </div>
    </AdvancedMarker>
  );
}
