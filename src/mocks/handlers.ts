import { http, HttpResponse } from "msw";
import data from "./data.json";

const vesselsState = data.map(() => ({
  index: 0,
  direction: 1,
}));

const vesselHandler = http.get("/api/vessel", () => {
  const updatedFleet = data.map((vessel, i) => {
    const state = vesselsState[i];
    const path = vessel.path;

    const current = path[state.index];

    let next = state.index + state.direction;
    if (next >= path.length || next < 0) {
      state.direction *= -1;
      next = state.index + state.direction;
    }
    state.index = next;

    return {
      name: vessel.name,
      position: current,
    };
  });

  return HttpResponse.json(updatedFleet);
});

function getRandomValue(min: number, max: number) {
  return +(Math.random() * (max - min) + min).toFixed(2);
}

const chartHandler = http.get("/api/chart", () => {
  const randomValues = [
    {
      id: "pm25",
      label: "PM2.5 (µg/m³)",
      min: 0,
      max: 200,
      step: 5,
      standard: 50,
      value: getRandomValue(0, 200),
    },
    {
      id: "so2",
      label: "SO2 (ppm)",
      min: 0,
      max: 0.2,
      step: 5,
      standard: 0.05,
      value: getRandomValue(0, 0.2),
    },
    {
      id: "no2",
      label: "NO2 (ppm)",
      min: 0,
      max: 0.3,
      step: 4,
      standard: 0.05,
      value: getRandomValue(0, 0.3),
    },
  ];
  return HttpResponse.json(randomValues);
});

export const handlers = [vesselHandler, chartHandler];
