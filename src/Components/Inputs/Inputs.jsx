import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import styles from "./Inputs.module.css";

export const Inputs = ({ setUnit }) => {
  const [city, setCity] = useState("")

  const handleSearchClick = () => {
    
  }
  return (
    <div className={styles.inputs}>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for city..." onChange={(e) => setCity(e.currentTarget.value)}/>
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
