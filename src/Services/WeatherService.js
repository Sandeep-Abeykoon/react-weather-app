import { DateTime } from "luxon";

const API_KEY = "5db6d5cd7f140ed2ede4003d3b70018f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const dateFormat = "cccc, dd LLLL yyyy";
const timeFormat = "hh:mm a";

// Main function called from the app to get the weather data
const getWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await fetchWeatherData(
    "weather",
    searchParams
  ).then(formatWeather);

  const formattedDailyForcastWeather = await fetchWeatherData(
    "forecast",
    searchParams
  ).then(formatForcastWeather);

  return {
    current: formattedCurrentWeather,
    hourly: formattedDailyForcastWeather,
  };
};

// Function to Format the current weather data
const formatWeather = (data) => {
  const {
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset } = {}, // Destructure with default value to handle missing properties
    weather,
    wind: { speed },
  } = data;

  const { description, icon } = weather[0];
  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    name,
    localDate: formatTolocalDateTime(dt, dateFormat),
    localTime: formatTolocalDateTime(dt, timeFormat),
    country,
    sunrise: sunrise ? formatTolocalDateTime(sunrise, timeFormat) : "N/A",
    sunset: sunset ? formatTolocalDateTime(sunset, timeFormat) : "N/A",
    description,
    iconUrl: getIconUrl(icon),
    speed,
  };
};

const formatForcastWeather = (data) => {
  const daily = data.list.slice(0, 5);
  return daily.map((dailyData) => {
    const { localTime, iconUrl, temp } = formatWeather(dailyData);
    return { localTime, iconUrl, temp };
  });
};

// Function to return the icon url from the icon code
const getIconUrl = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// Function to format the Unix timestamp to datetime
const formatTolocalDateTime = (timestamp, format) => {
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
