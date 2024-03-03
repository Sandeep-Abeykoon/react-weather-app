import React, { useEffect, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { getCitiesByName } from "../../Services/WeatherService";
import styles from "./Inputs.module.css";

export const Inputs = ({ setUnit }) => {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    const getCitiesData = async () => {
      await getCitiesByName({ q: city, limit: "5" }).then(setCityData);
    };
    if (city !== "") {
      getCitiesData();
    }
  }, [city]);

  return (
    <div className={styles.inputs}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for city..."
          onChange={(e) => setCity(e.currentTarget.value)}
        />
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
