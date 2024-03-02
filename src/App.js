import { TopButtons } from "./Components/TopButtons/TopButtons";
import "./App.css";
import { Inputs } from "./Components/Inputs/Inputs";
import { TimeAndLocation } from "./Components/TimeAndLocation/TimeAndLocation";
import TemperatureAndDetails from "./Components/TemperatureAndDetails/TemperatureAndDetails";
import { Forecast } from "./Components/Forecast/Forecast";
import getWeatherData from "./Services/WeatherService";
import { useEffect, useState } from "react";

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [hourlyWeatherForecast, setHourlyWeatherForecast] = useState(null);

  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeatherData({
        lat: "6.927079",
        lon: "79.861244",
        units: units,
      }).then((data) => {
        setCurrentWeatherData(data.current);
        setHourlyWeatherForecast(data.hourly);
      });
    };

    // Fetch data every 30 minutes
    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather(); 
    }, 15 * 60 * 1000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, [units]);

  console.log(currentWeatherData);
  return (
    <div className="App">
      <TopButtons />
      <Inputs />
      {currentWeatherData && (
        <>
          <TimeAndLocation weather={currentWeatherData} />
          <TemperatureAndDetails weather={currentWeatherData} />
        </>
      )}
      {hourlyWeatherForecast && (
        <>
          <Forecast title="Hourly" data={hourlyWeatherForecast} />
        </>
      )}
      {/* <Forecast title="Hourly" />
      <Forecast title="Daily" /> */}
    </div>
  );
}

export default App;
