import { TopButtons } from "./Components/TopButtons/TopButtons";
import "./App.css";
import { Inputs } from "./Components/Inputs/Inputs";
import { TimeAndLocation } from "./Components/TimeAndLocation/TimeAndLocation";
import TemperatureAndDetails from "./Components/TemperatureAndDetails/TemperatureAndDetails";
import { Forecast } from "./Components/Forecast/Forecast";
import getWeatherData from "./Services/WeatherService";
import { useEffect, useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeatherData({
        lat: "6.9387469",
        lon: "79.8541134",
      }).then(setCurrentWeather);
    };

    fetchWeather();
  }, []);

  console.log(currentWeather);

  return (
    <div className="App">
      <TopButtons />
      <Inputs />
      {currentWeather && (
        <>
          <TimeAndLocation weather={currentWeather}/>
          <TemperatureAndDetails weather={currentWeather} />
        </>
      )}

      <Forecast title="Hourly" />
      <Forecast title="Daily" />
    </div>
  );
}

export default App;
