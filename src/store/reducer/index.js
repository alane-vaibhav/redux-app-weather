import { combineReducers } from "redux";
import { WeatherReducer } from "./weatherReducer";
const combineReducer = combineReducers({
  weatherDetails: WeatherReducer,
});

export default combineReducer;
