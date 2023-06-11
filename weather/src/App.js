import "./App.css";
import { useState } from "react";



const api = {
  key: "af70e65fae6e7135de1f93477452f60b",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1 className="h1"><b>Weather App</b></h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input className="input"
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="button" onClick={searchPressed}>Search</button>
          
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
        
          <div className="h1">
            {/* Location  */}
            <h1>{weather.name}</h1>
            <br></br>
            

            {/* Temperature Celsius  */}
            <h1>{weather.main.temp}°C</h1>
            <br></br>

            {/* Condition (Sunny ) */}
            <h1>{weather.weather[0].main}</h1>
            <br></br>
            <h1>({weather.weather[0].description})</h1>
            

          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
