import { TopButtons } from "./Components/TopButtons/TopButtons";
import "./App.css";
import { Inputs } from "./Components/Inputs/Inputs";
import { TimeAndLocation } from "./Components/TimeAndLocation/TimeAndLocation";
import TemperatureAndDetails from "./Components/TemperatureAndDetails/TemperatureAndDetails";
import { Forecast } from "./Components/Forecast/Forecast";
import getWeatherData from "./Services/WeatherService";
import { useEffect, useState } from "react";

function App() {
  const [coordinates, setCoordinates] = useState(() => {
    const savedCoordinates = localStorage.getItem("weatherCoordinates");
    return savedCoordinates
      ? JSON.parse(savedCoordinates)
      : { lat: "", lon: "" };
  });
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [hourlyWeatherForecast, setHourlyWeatherForecast] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [unitSymbol, setUnitSymbol] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!coordinates.lat || !coordinates.lon) {
        setShowMessage(true);
        return;
      }

      await getWeatherData({
        lat: coordinates.lat,
        lon: coordinates.lon,
        units: unit,
      })
        .then((data) => {
          setCurrentWeatherData(data.current);
          setHourlyWeatherForecast(data.hourly);
          setShowMessage(false);
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

  useEffect(() => {
    localStorage.setItem("weatherCoordinates", JSON.stringify(coordinates));
  }, [coordinates]);

  return (
    <div className="App">
      <TopButtons setCoordinates={setCoordinates} />
      <Inputs setUnit={setUnit} setCoordinates={setCoordinates} />
      <div className={`message ${showMessage ? "show" : ""}`}>
        Search or select a city to get started...
      </div>
      {currentWeatherData && !showMessage && (
        <>
          <TimeAndLocation weather={currentWeatherData} />
          <TemperatureAndDetails
            weather={currentWeatherData}
            unitSymbol={unitSymbol}
          />
        </>
      )}
      {hourlyWeatherForecast && !showMessage && (
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
