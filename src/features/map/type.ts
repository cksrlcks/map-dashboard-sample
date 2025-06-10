export type Marker = {
  name?: string;
  position: google.maps.LatLngLiteral;
};

export type Device = {
  name: string;
  position: google.maps.LatLngLiteral;
  range: number;
};
