import React from "react";
import { useSelector } from "react-redux";

const ForcastDetails = () => {
  const { forecast, loading, error } = useSelector(
    (state) => state.weatherDetails
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!forecast) return null;
  return (
    <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title">4 Days forecast</h2>
        {forecast?.map((item, index) => {
          return (
            <p key={index}>
              {item?.dt_txt}- {(item?.main?.temp - 273).toFixed(1)}°C
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ForcastDetails;
