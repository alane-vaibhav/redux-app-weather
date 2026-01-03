import { useEffect, useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/actions/weatherActions";
import Search from "./components/Search";
import Card from "./components/Card";
import ForcastDetails from "./components/ForcastDetails";

function App() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weatherDetails.city);

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, []);
  return (
    <div className="p-10 flex flex-col items-center gap-10">
      <div className="sticky top-0 p-10 z-10 bg-base-100 w-full flex flex-col items-center">
        <h1 className="text-3xl mb-6">Weather Dashboard</h1>
        <Search />
        <Card />
        <ForcastDetails />
      </div>
    </div>
  );
}

export default App;
