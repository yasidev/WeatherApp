import React from "react";

export default function ({ item }) {
  return (
    <div className="weather-item">
      <img
        src={`http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
      />
      <p>{item.weather[0].description}</p>
      <span>{item.dt_txt.slice(-8, -3)}</span>
      <div className="weather-item-temp">
        <span className="temp-max">{Math.floor(item.main.temp_max)}</span>
        <span className="temp-min">{Math.floor(item.main.temp_min)}</span>
      </div>
    </div>
  );
}
