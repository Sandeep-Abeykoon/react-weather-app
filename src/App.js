import { TopButtons } from "./Components/TopButtons/TopButtons";
import "./App.css";
import { Inputs } from "./Components/Inputs/Inputs";
import { TimeAndLocation } from "./Components/TimeAndLocation/TimeAndLocation";
import TemperatureAndDetails from "./Components/TemperatureAndDetails/TemperatureAndDetails";
import { Forecast } from "./Components/Forecast/Forecast";
import getWeatherData from "./Services/WeatherService";
import { useEffect, useState } from "react";

function App() {
  const [coordinates, setCoordinates] = useState({
    lat: "6.9016086",
    lon: "80.0087746",
  });
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [hourlyWeatherForecast, setHourlyWeatherForecast] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [unitSymbol, setUnitSymbol] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeatherData({
        lat: coordinates.lat,
        lon: coordinates.lon,
        units: unit,
      })
        .then((data) => {
          setCurrentWeatherData(data.current);
          setHourlyWeatherForecast(data.hourly);
        })
        .then(() => {
          unit === "metric" ? setUnitSymbol("°C") : setUnitSymbol("K");
        });
    };

    // Fetch data every 15 minutes
    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, 15 * 60 * 1000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, [unit, coordinates]);

  return (
    <div className="App">
      <TopButtons setCoordinates={setCoordinates} />
      <Inputs setUnit={setUnit} setCoordinates={setCoordinates} />
      {currentWeatherData && (
        <>
          <TimeAndLocation weather={currentWeatherData} />
          <TemperatureAndDetails
            weather={currentWeatherData}
            unitSymbol={unitSymbol}
          />
        </>
      )}
      {hourlyWeatherForecast && (
        <>
          <Forecast
            title="Hourly"
            data={hourlyWeatherForecast}
            unitSymbol={unitSymbol}
          />
        </>
      )}
    </div>
  );
}

export default App;
