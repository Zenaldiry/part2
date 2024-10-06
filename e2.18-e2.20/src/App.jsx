import { useEffect, useState } from "react";
import server from "./services/services";
import Country from "./components/Country";
import Weather from "./components/Weather";
const App = () => {
  const [value, setvalue] = useState("");
  const [country, setCountry] = useState([]);
  const [choosen, setChoosen] = useState({});
  const [weather, setWeather] = useState({});

  //--------------------------------------------------------------------
  const handleButton = (event) => {
    let arr = [event.target.id];
    setCountry(arr);
  };
  const handleSearchInput = (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue === "") return;
    setvalue(inputValue);
  };
  //---------------------------------------------------------------------
  useEffect(() => {
    server
      .getAll()
      .then((data) => {
        const filteredCountries = data.filter((e) =>
          e.name.common.toLowerCase().includes(value.toLowerCase())
        );
        setCountry(filteredCountries.map((c) => c.name.common));
      })
      .catch((error) => {
        console.error(error, "missing countries");
      });
  }, [value]);

  const render = () => {
    if (country.length !== 0 && country.length !== 1 && value !== "") {
      return country.length > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : (
        country.map((c, i) => (
          <div key={i}>
            {c}
            <button id={c} onClick={handleButton}>
              show
            </button>
          </div>
        ))
      );
    } else if (value === "") {
      return <div>please enter a country</div>;
    }
  };

  useEffect(() => {
    if (country.length === 1) {
      server.getCounry(country).then((data) => {
        let res = {};
        res = {
          name: data.name.common,
          language: [Object.values(data.languages)],
          flag: data.flags.png,
          capital: data.capital,
          lat: data.capitalInfo.latlng[0],
          lon: data.capitalInfo.latlng[1],
        };
        setChoosen(res);
      });
    } else {
      return;
    }
  }, [country]);

  useEffect(() => {
    if (country.length === 1) {
      server.getWeather(choosen.lat, choosen.lon).then((data) => {
        let copy = {};
        copy = {
          city: data.name,
          temperature: (data.main.temp - 273.15).toFixed(2),
          icon: data.weather[0].icon,
          wind: data.wind.speed,
        };
        setWeather(copy);
      });
    }
  }, [country, choosen]);

  return (
    <div>
      <form>
        find country
        <input type="text" onChange={handleSearchInput} />
      </form>
      <div>{render()}</div>
      <Country country={country} choosen={choosen} />
      <Weather
        country={country}
        city={weather.city}
        temperature={weather.temperature}
        icon={weather.icon}
        wind={weather.wind}
      />
    </div>
  );
};

export default App;
