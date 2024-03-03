import React, { useEffect, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { getCitiesByName } from "../../Services/WeatherService";
import styles from "./Inputs.module.css";

export const Inputs = ({ setUnit }) => {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      const getCitiesData = async () => {
        await getCitiesByName({ q: city, limit: "5" }).then(setCityData);
      };

      if (city.trim() === "") {
        setCityData([]);
      } else {
        getCitiesData();
      }
    }, 300); // A timeout is added to makesure to fetch the data, when the user has stopped typing.

    return () => clearTimeout(delay);
  }, [city]);

  console.log(cityData)

  return (
    <div className={styles.inputs}>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search for city..."
            onChange={(e) => setCity(e.currentTarget.value.trim())}
          />
          <div className={styles.suggessions}>
            {cityData?.map((city, index) => (
              <span key={index}>{city.name} {`(${city.state}, ${city.country})`}</span>
            ))}
          </div>
        </div>

        <UilSearch className="icon" />
        <UilLocationPoint className="icon" />
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
