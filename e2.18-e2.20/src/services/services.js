import axios from "axios";
const api_key = import.meta.env.VITE_SOME_KEY;

const getAll = () => {
  return axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
    .then((response) => {
      return response.data;
    });
};

const getCounry = (country) => {
  return axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country[0]}`)
    .then((response) => {
      return response.data;
    });
};

const getWeather = (lat, lon) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    )
    .then((res) => {
      return res.data;
    });
};

export default { getAll, getCounry, getWeather };
