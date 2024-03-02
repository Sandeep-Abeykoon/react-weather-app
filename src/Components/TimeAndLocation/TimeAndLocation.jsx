import React from "react";
import styles from "./TimeAndLocation.module.css";

export const TimeAndLocation = ({
  weather: { localTime, localDate, name, country },
}) => {
  return (
    <div className={styles.timeAndLocation}>
      <p className={styles.dateTime}>
        {`${localDate} | Local time: ${localTime}`}
      </p>
      <div className={styles.city}>{`${name}, ${country}`}</div>
    </div>
  );
};
