import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { TopButtons } from "./Components/TopButtons/TopButtons"
import './App.css';
import { Inputs } from './Components/Inputs/Inputs';
import { TimeAndLocation } from './Components/TimeAndLocation/TimeAndLocation';

function App() {
  return (
  <div className='App'>
    <TopButtons/>
    <Inputs/>
    
    <TimeAndLocation/>
  </div>
  );
}

export default App;
