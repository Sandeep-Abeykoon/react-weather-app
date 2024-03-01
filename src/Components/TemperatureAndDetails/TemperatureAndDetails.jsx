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

const TemperatureAndDetails = () => {
  return (
    <div className={styles.temperatureAndDetails}>
      <div className={styles.weather}>Cloudy</div>
      <div className={styles.details}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Simple_orange_circle.svg/2048px-Simple_orange_circle.svg.png"
          alt=""
        />
        <p>34°</p>
        <div className={styles.basicStats}>
          <div className={styles.stat}>
            <UilTemperature />
            <span>Real Feel : </span>
            <span style={{ fontWeight: "bold" }}>38°</span>
          </div>
          <div className={styles.stat}>
            <UilTear />
            <span>Humidity : </span>
            <span style={{ fontWeight: "bold" }}>65%</span>
          </div>
          <div className={styles.stat}>
            <UilWind />
            <span>Wind :</span>
            <span style={{ fontWeight: "bold" }}>11Kmph</span>
          </div>
        </div>
      </div>

      <div className={styles.highLowStats}>
        <div className={styles.highLowStat}>
          <UilSun />
          <span>Rise:</span>
          <span className={styles.statValue}>06:45 AM</span>
          <span style={{marginLeft: "10px" ,marginRight:"10px"}}>|</span>
        </div>

        <div className={styles.highLowStat}>
          <UilSunset />
          <span>Set:</span>
          <span className={styles.statValue}>07:35 PM</span>
          <span style={{marginLeft: "10px" ,marginRight:"10px"}}>|</span>
        </div>

        <div className={styles.highLowStat}>
          <UilSun />
          <span>High:</span>
          <span className={styles.statValue}>37°</span>
          <span style={{marginLeft: "10px" ,marginRight:"10px"}}>|</span>
        </div>

        <div className={styles.highLowStat}>
          <UilSun />
          <span>Low:</span>
          <span className={styles.statValue}>27°</span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
