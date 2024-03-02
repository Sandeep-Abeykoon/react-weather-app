import { TopButtons } from "./Components/TopButtons/TopButtons";
import "./App.css";
import { Inputs } from "./Components/Inputs/Inputs";
import { TimeAndLocation } from "./Components/TimeAndLocation/TimeAndLocation";
import TemperatureAndDetails from "./Components/TemperatureAndDetails/TemperatureAndDetails";
import { Forecast } from "./Components/Forecast/Forecast";
import getWeatherData from "./Services/WeatherService";
import { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeatherData({
        lat: "6.9387469",
        lon: "79.8541134",
        units: units,
      }).then(setWeatherData);
    };

    fetchWeather();
  }, [units]);

  console.log(weatherData)

  return (
    <div className="App">
      <TopButtons />
      <Inputs />
      {weatherData && (
        <>
          <TimeAndLocation weather={weatherData.current} />
          <TemperatureAndDetails weather={weatherData.current} />
        </>
      )}

      <Forecast title="Hourly" />
      <Forecast title="Daily" />
    </div>
  );
}

export default App;
