import "./index.css";
import { useState, useEffect } from "react";
import Weather from "./components/weather";
import Loading from "./img/loading.svg";
import { RiWindyFill, RiDropLine } from "react-icons/ri";
const axios = require("axios");

function App() {
  const data = new Date();
  const [allcity, setCity] = useState([]);

  const getTemp = (city) =>
    axios.get(
      `https://weather.contrateumdev.com.br/api/weather/city/?city=${encodeURI(
        city
      )}`
    );

  useEffect(() => {
    async function getCities() {
      const cities = [
        "Rio de Janeiro",
        "Rondonia",
        "Rio Grande do Sul",
        "Ceará",
      ];
      const promises = await Promise.all(cities.map((city) => getTemp(city)));

      const allCities = promises.map((promise) => promise.data);

      setCity(allCities);
    }

    getCities();
  }, []);

  return (
    <>
      <div className="row card-holder">
        {allcity.length ? (
          allcity.map((city) => (
            <div key={city.name} className="col-12 col-md-6">
              <div className="box">
                <div className="row ">
                  <div className="col city">{city.name}</div>
                  <div className="col-4 hours">
                    {data.getHours()}:
                    {data.getMinutes() < 10
                      ? "0" + data.getMinutes()
                      : data.getMinutes()}
                  </div>
                </div>
                <div>
                  {city && (
                    <Weather
                      icon={city.weather[0].icon.slice(0, 2)}
                      desc={city.weather[0].description}
                    />
                  )}
                </div>
                <div className="row">
                  <div className="col">
                    <div>
                      <RiWindyFill className="icon"></RiWindyFill>{" "}
                      {Math.floor(city.wind.speed || 0)} m/s
                    </div>
                    <div>
                      <RiDropLine className="icon"></RiDropLine>{" "}
                      {Math.floor(city.main.humidity || 0)}%
                    </div>
                  </div>
                  <div className="col">
                    <h1 className="temp">
                      {" "}
                      {Math.floor(city.main.temp || 0)}&deg;
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="loading">
            <img src={Loading} alt="Loading" />
            <p className="text-center">Carregando...</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
