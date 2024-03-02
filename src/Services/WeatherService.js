import { DateTime } from "luxon";

const API_KEY = "5db6d5cd7f140ed2ede4003d3b70018f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const dateTimeFormat = "cccc, dd LLLL yyyy' | Local time: 'hh:mm a";
const timeFormat = "hh:mm a";

// Main function called from the app to get the weather data
const getWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await fetchWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
  return { ...formattedCurrentWeather }; // formattedForcastWeather is not returned as api plan restrictions
};

// Function to Format the current weather data
const formatCurrentWeather = (data) => {
  const {
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];
  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    localTime: formatTolocalTime(dt, dateTimeFormat),
    country,
    sunrise: formatTolocalTime(sunrise, timeFormat),
    sunset: formatTolocalTime(sunset, timeFormat),
    details,
    iconUrl: getIconUrl(icon),
    speed,
  };
};

// Function to return the icon url from the icon code
const getIconUrl = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// Function to format the Unix timestamp to datetime
const formatTolocalTime = (timestamp, format) => {
  const date = DateTime.fromSeconds(timestamp);
  return date.toFormat(format);
};

// Function to fetch weather data from the openweathermap api
const fetchWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const res = await fetch(url);
  return await res.json();
};

// const formatForecastWeather = (data) => {
//   let { timezone, daily, hourly } = data;
//   daily = daily.slice(1, 6).map((d) => {
//     return {
//       title: formatTolocalTime(d.dt, timezone, "ccc"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   hourly = daily.slice(1, 6).map((d) => {
//     return {
//       title: formatTolocalTime(d.dt, timezone, "hh:mm a"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   return { timezone, daily, hourly };
// };

// Main Function called to get the weather data

// const { lon, lat } = formattedCurrentWeather;

// const formattedForecastWeather = await getWeatherData("onecall", {
//   lon,
//   lat,
//   exclude: "current,minutely,alerts",
//   units: searchParams.units,
// }).then(formatForecastWeather);

export default getWeatherData;
