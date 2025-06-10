import { APIProvider, Map, type MapProps } from "@vis.gl/react-google-maps";

type RootMapProps = MapProps;

export default function RootMap(props: RootMapProps) {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
      <Map
        mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
        style={{ width: "100%", height: "100%" }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        {...props}
      />
    </APIProvider>
  );
}
