import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "69bc575d3e99a019f89932bb81cb72d4";

class App extends React.Component {
    gettingWeather = async (e) => {
      e.preventDefault();
      const city = e.target.city.value;
        const api_url = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await api_url.json();
        console.log(data);
    };
    render() {
        return (
            <div>
                <Info />
                <Form  weatherMethod = {this.gettingWeather}/>
                <Weather />
            </div>
        );
    }
}

export default App;
