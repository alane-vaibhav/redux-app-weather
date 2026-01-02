import { createStore } from "redux";
import { WeatherReducer } from "./reducer/weatherReducer";

const Store = createStore(WeatherReducer);

export default Store;
