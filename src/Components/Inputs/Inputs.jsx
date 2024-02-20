import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import styles from "./Inputs.module.css";

export const Inputs = () => {
  return (
    <div className={styles.inputs}>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for city..." />
        <UilSearch className="icon"/>
        <UilLocationPoint className="icon"/>
      </div>

      <div className={styles.temperatureUnits}>
        <button name="metric">°C</button>
        <p>|</p>
        <button name="imperial">°F</button>
      </div>
    </div>
  );
};
