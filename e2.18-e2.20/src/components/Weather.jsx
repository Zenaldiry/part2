const Weather = ({ country, city, temperature, icon, wind }) => {
  if (country.length === 1) {
    return (
      <div>
        <h2>Weather in {city}</h2>
        <div>temperature {temperature} ℃</div>
        <img src={` https://openweathermap.org/img/wn/${icon}@2x.png`} />
        <div>wind speed {wind} m/s</div>
      </div>
    );
  }
};
export default Weather;
