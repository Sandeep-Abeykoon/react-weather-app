import React from "react";
import styles from "./Forecast.module.css";

export const Forecast = ({ title = "", data }) => {
  console.log(data)
  return (
    <div className={styles.forecast}>
      <span className={styles.heading}>{`${title} Forecast`}</span>
      <hr />
      <div className={styles.dataContainer}>
        {data?.map((data, index) => (
          <div className={styles.dataComponent} key={index}>
            <span className={styles.time}>{data.localTime}</span>
            <img
              src={data.iconUrl}
              alt="Weather Icon"
            />
            <span className={styles.temperature}>{data.temp.toFixed()}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};
