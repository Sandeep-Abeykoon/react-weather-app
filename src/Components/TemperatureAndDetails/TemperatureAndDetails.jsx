import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import styles from "./TemperatureAndDetails.module.css";

const TemperatureAndDetails = ({
  weather: {
    description,
    iconUrl,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  unitSymbol,
}) => {
  return (
    <div className={styles.temperatureAndDetails}>
      <div className={styles.weather}>{description ? description : ""}</div>
      <div className={styles.details}>
        <img src={iconUrl} alt="Weather Icon" />
        <p>{temp?.toFixed()}{unitSymbol}</p>
        <div className={styles.basicStats}>
          <div className={styles.stat}>
            <UilTemperature />
            <span>Real Feel : </span>
            <span style={{ fontWeight: "bold" }}>{feels_like?.toFixed()}{unitSymbol}</span>
          </div>
          <div className={styles.stat}>
            <UilTear />
            <span>Humidity : </span>
            <span style={{ fontWeight: "bold" }}>{humidity}%</span>
          </div>
          <div className={styles.stat}>
            <UilWind />
            <span>Wind :</span>
            <span style={{ fontWeight: "bold" }}>{speed}Kmph</span>
          </div>
        </div>
      </div>

      <div className={styles.highLowStats}>
        <div className={styles.highLowStat}>
          <UilSun />
          <span>Rise:</span>
          <span className={styles.statValue}>{sunrise}</span>
          <span style={{ marginLeft: "10px", marginRight: "10px" }}>|</span>
        </div>

        <div className={styles.highLowStat}>
          <UilSunset />
          <span>Set:</span>
          <span className={styles.statValue}>{sunset}</span>
          <span style={{ marginLeft: "10px", marginRight: "10px" }}>|</span>
        </div>

        <div className={styles.highLowStat}>
          <UilSun />
          <span>High:</span>
          <span className={styles.statValue}>{temp_max.toFixed()}°</span>
          <span style={{ marginLeft: "10px", marginRight: "10px" }}>|</span>
        </div>

        <div className={styles.highLowStat}>
          <UilSun />
          <span>Low:</span>
          <span className={styles.statValue}>{temp_min.toFixed()}°</span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
