import React, { useEffect, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { getCitiesByName } from "../../Services/WeatherService";
import styles from "./Inputs.module.css";

export const Inputs = ({ setUnit, setCoordinates }) => {
  const [fetchData, setFetchData] = useState(true);
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      const getCitiesData = async () => {
        await getCitiesByName({ q: city, limit: "5" }).then(setCityData);
      };

      if (city.trim() === "") {
        setCityData([]);
      } else if (fetchData) {
        console.log("Fetches Data");
        getCitiesData();
      }
    }, 300); // A timeout is added to makesure to fetch the data, when the user has stopped typing.

    return () => clearTimeout(delay);
  }, [city, fetchData]);

  const handleCityClick = (selectedCity) => {
    setFetchData(false);
    setCity(
      `${selectedCity.name}, ${selectedCity.state}, ${selectedCity.country}`
    );
    setCityData([]); // Clear suggestions after selection
    setCoordinates({ lat: selectedCity.lat, lon: selectedCity.lon });
  };

  return (
    <div className={styles.inputs}>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search for city..."
            value={city}
            onChange={(e) => {
              setCity(e.currentTarget.value.trim());
              setFetchData(true);
            }}
          />
          <div className={styles.suggessions}>
            {cityData?.map((city, index) => (
              <span key={index} onClick={() => handleCityClick(city)}>
                {city.name} {`(${city.state}, ${city.country})`}
              </span>
            ))}
          </div>
        </div>

        <UilSearch className="icon" />
        <UilLocationPoint
          className="icon"
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (location) => {
                setCoordinates({
                  lat: location.coords.latitude,
                  lon: location.coords.longitude,
                });
                setCity("")
              },
              (error) => {
                alert("Error Fetching your location");
                console.log(error)
              }
            );
          }}
        />
      </div>

      <div className={styles.temperatureUnits}>
        <button
          name="metric"
          className="icon"
          onClick={() => setUnit("metric")}
        >
          °C
        </button>
        <p>|</p>
        <button
          name="imperial"
          className="icon"
          onClick={() => setUnit("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};
