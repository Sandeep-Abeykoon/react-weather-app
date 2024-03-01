import { TopButtons } from "./Components/TopButtons/TopButtons"
import './App.css';
import { Inputs } from './Components/Inputs/Inputs';
import { TimeAndLocation } from './Components/TimeAndLocation/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails/TemperatureAndDetails';
import { Forecast } from "./Components/Forecast/Forecast";

function App() {
  return (
  <div className='App'>
    <TopButtons/>
    <Inputs/>
    <TimeAndLocation/>
    <TemperatureAndDetails/>
    <Forecast title="Hourly"/>
    <Forecast title="Daily"/>
  </div>
  );
}

export default App;
