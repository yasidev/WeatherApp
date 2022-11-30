import React from "react";
import HoursForcast from "./HoursForcast";

export default function Weather({ data }) {
  return (
    <div className="weather">
      <div className="weather-title">
        <div>
          <h3>{data?.city?.country}</h3>
          <h2>{data?.city?.name}</h2>
        </div>
        <div className="weather-title-temp">
          <h2>{Math.floor(data?.list[0]?.main?.temp)}°</h2>
          <img
            src={`http://openweathermap.org/img/wn/${data?.list[0]?.weather[0]?.icon}@2x.png`}
          />
        </div>
      </div>
      <div className="weather-info">
        <div>
          <p className="weather-info-firstP">wind speed:</p>
          <p className="weather-info-secondP">{data?.list[0]?.wind?.speed}</p>
        </div>
        <div>
          <p className="weather-info-firstP">feels like:</p>
          <p className="weather-info-secondP">
            {data?.list[0]?.main?.feels_like}
          </p>
        </div>
        <div>
          <p className="weather-info-firstP">humidity:</p>
          <p className="weather-info-secondP">
            {data?.list[0]?.main?.humidity}
          </p>
        </div>
        <div>
          <p className="weather-info-firstP">pressure:</p>
          <p className="weather-info-secondP">
            {data?.list[0]?.main?.pressure}
          </p>
        </div>
      </div>
      <div className="forcast">
        <HoursForcast data={data} />
      </div>
    </div>
  );
}
