import React from "react";
import styles from "./TopButtons.module.css"

export const TopButtons = ()=> {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className={styles.topButtons}>
        {cities.map((city) => (
            <button key={city.id}>{city.title}</button>
        ))}
    </div>
  );
}