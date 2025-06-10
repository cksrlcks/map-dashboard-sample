import type { Device } from "../type";
import DeviceMarker from "./DeviceMarker";
import DeviceRangeMarker from "./DeviceRangeMarker";

type DeviceProps = {
  data: Device;
};

export default function Device({ data }: DeviceProps) {
  return (
    <>
      <DeviceMarker position={data.position} name={data.name} />
      <DeviceRangeMarker position={data.position} range={data.range} />
    </>
  );
}
