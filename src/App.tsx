import "./App.css";
import Dashboard from "./components/Dashboard";
import Chart from "./features/chart/components/Chart";
import Map from "./features/map/components/Map";

function App() {
  return (
    <Dashboard>
      <Map />
      <Chart />
    </Dashboard>
  );
}

export default App;
