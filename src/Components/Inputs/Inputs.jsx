import React, { useEffect, useState } from "react";
import { UilLocationPoint } from "@iconscout/react-unicons";
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
        getCitiesData();
      }
    }, 300); // A timeout is added to makesure to fetch the data, when the user has stopped typing.

    return () => clearTimeout(delay);
  }, [city, fetchData]);

  const handleSuggestionClick = (selectedCity) => {
    setFetchData(false);
    setCity(
      `${selectedCity.name ? selectedCity.name + ", " : ""}${
        selectedCity.state ? selectedCity.state + ", " : ""
      }${selectedCity.country || ""}`
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
              <span key={index} onClick={() => handleSuggestionClick(city)}>
                {`${city.name ? city.name + ", " : ""}${
                  city.state ? city.state + ", " : ""
                }${city.country || ""}`}
              </span>
            ))}
          </div>
        </div>

        <UilLocationPoint
          className="icon"
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (location) => {
                setCoordinates({
                  lat: location.coords.latitude,
                  lon: location.coords.longitude,
                });
                setCity("");
              },
              (error) => {
                alert("Error Fetching your location");
                console.log(error);
              }
            );
          }}
        />
      </div>

      <div className={styles.temperatureUnits}>
        <span
          className={styles.unit}
          name="metric"
          onClick={() => setUnit("metric")}
        >
          °C
        </span>
        <span>|</span>
        <span
          className={styles.unit}
          name="imperial"
          onClick={() => setUnit("imperial")}
        >
          °F
        </span>
      </div>
    </div>
  );
};
