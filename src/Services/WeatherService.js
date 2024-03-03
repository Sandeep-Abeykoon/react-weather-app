import { DateTime } from "luxon";

const API_KEY = "5db6d5cd7f140ed2ede4003d3b70018f";
const BASE_URL = "https://api.openweathermap.org/";
const WEATHER_DATA_ROUTE = "data/2.5/";

const dateFormat = "cccc, dd LLLL yyyy";
const timeFormat = "hh:mm a";

// Main function called from the app to get the weather data
const getWeatherData = async (searchParams) => {
  getCitiesByName()
  const formattedCurrentWeather = await fetchAPIData(
    WEATHER_DATA_ROUTE + "weather",
    searchParams
  ).then(formatWeather);

  const formattedDailyForcastWeather = await fetchAPIData(
    WEATHER_DATA_ROUTE + "forecast",
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
const fetchAPIData = async (path, searchParams) => {
  const url = new URL(BASE_URL + path);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const res = await fetch(url);
  return await res.json();
};

const getCitiesByName = async (searchParams) => {
  const data = await fetchAPIData("geo/1.0/direct?", {
    q: "London",
    limit: "5",
  });
  console.log(data)
};

export default getWeatherData;
