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

export const handlers = [vesselHandler];
