import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { TopButtons } from "./Components/TopButtons/TopButtons"
import './App.css';
import { Inputs } from './Components/Inputs/Inputs';
import { TimeAndLocation } from './Components/TimeAndLocation/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails/TemperatureAndDetails';

function App() {
  return (
  <div className='App'>
    <TopButtons/>
    <Inputs/>
    <TimeAndLocation/>
    <TemperatureAndDetails/>
  </div>
  );
}

export default App;
