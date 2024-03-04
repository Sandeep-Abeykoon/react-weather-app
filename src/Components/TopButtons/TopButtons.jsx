import React from "react";
import styles from "./TopButtons.module.css";
import { getCitiesByName } from "../../Services/WeatherService";

export const TopButtons = ({ setCoordinates }) => {
  const handleCityClick = async (city) => {
    await getCitiesByName({ q: city, limit: "1" }).then((data) => {
      setCoordinates({ lat: data[0].lat, lon: data[0].lon });
    });
  };

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
        <button key={city.id} onClick={() => handleCityClick(city.title)}>
          {city.title}
        </button>
      ))}
    </div>
  );
};
