import React from "react";
import styles from "./Forecast.module.css";

export const Forecast = ({ title ="" }) => {
  return (
    <div className={styles.forecast}>
      <span className={styles.heading}>{`${title} Forecast`}</span>
      <hr />
      <div className={styles.dataContainer}>
        <div className={styles.dataComponent}>
          <span className={styles.time}>04:30 PM</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Simple_orange_circle.svg/2048px-Simple_orange_circle.svg.png"
            alt=""
          />
          <span className={styles.temperature}>22°</span>
        </div>
        <div className={styles.dataComponent}>
          <span className={styles.time}>04:30 PM</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Simple_orange_circle.svg/2048px-Simple_orange_circle.svg.png"
            alt=""
          />
          <span className={styles.temperature}>22°</span>
        </div>
        <div className={styles.dataComponent}>
          <span className={styles.time}>04:30 PM</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Simple_orange_circle.svg/2048px-Simple_orange_circle.svg.png"
            alt=""
          />
          <span className={styles.temperature}>22°</span>
        </div>
        <div className={styles.dataComponent}>
          <span className={styles.time}>04:30 PM</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Simple_orange_circle.svg/2048px-Simple_orange_circle.svg.png"
            alt=""
          />
          <span className={styles.temperature}>22°</span>
        </div>
        <div className={styles.dataComponent}>
          <span className={styles.time}>04:30 PM</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Simple_orange_circle.svg/2048px-Simple_orange_circle.svg.png"
            alt=""
          />
          <span className={styles.temperature}>22°</span>
        </div>
      </div>
    </div>
  );
};
