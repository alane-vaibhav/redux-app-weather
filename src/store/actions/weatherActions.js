import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_CURRENT_ERROR,
  FETCH_CURRENT_PENDING,
  FETCH_CURRENT_SUCCESS,
  FETCH_FORECAST_ERROR,
  FETCH_FORECAST_PENDING,
  FETCH_FORECAST_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
  SET_CITY,
} from "../reducer/constant/weatherConstants";
import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherPending = () => {
  return {
    type: FETCH_WEATHER_PENDING,
    payload: "",
  };
};

export const fetchWeatherSuccess = () => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: "",
  };
};

export const fetchWeatherError = (error) => {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: error,
  };
};

export const fetchCurrentSuccess = (data) => {
  return {
    type: FETCH_CURRENT_SUCCESS,
    payload: data,
  };
};

export const fetchCurrentPending = () => {
  return {
    type: FETCH_CURRENT_PENDING,
    payload: "",
  };
};

export const fetchCurrentError = () => {
  return {
    type: FETCH_CURRENT_ERROR,
    payload: "",
  };
};

export const fetchForecastSuccess = (data) => {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload: data,
  };
};

export const fetchForecastPending = () => {
  return {
    type: FETCH_FORECAST_PENDING,
    payload: "",
  };
};
export const fetchForecastError = () => {
  return {
    type: FETCH_FORECAST_ERROR,
    payload: "",
  };
};

export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: city,
  };
};

export const fetchWeather = (city) => {
  return async (disptach) => {
    disptach(fetchCurrentPending());

    try {
      const response = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      const forecastResponse = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );

      disptach(fetchCurrentSuccess(response.data));
      disptach(fetchForecastSuccess(forecastResponse.data.list));
    } catch {
      disptach(fetchWeatherError("Something went wrong"));
    }
  };
};
