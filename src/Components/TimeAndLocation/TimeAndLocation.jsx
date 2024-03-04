import React, { useEffect, useState } from "react";
import styles from "./TimeAndLocation.module.css";

export const TimeAndLocation = ({
  weather: { localTime, localDate, name, country },
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.timeAndLocation}>
      <span className={styles.dateTime}>
        <span>{localDate}</span>
        {isLargeScreen && <span>{"\u00A0|\u00A0"}</span>}
        <span className={styles.dateTime}>Local time: {localTime}</span>
      </span>
      <div className={styles.city}>{`${name}, ${country}`}</div>
    </div>
  );
};
