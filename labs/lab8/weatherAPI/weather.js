
let axios = require("axios");

let API_KEY = "dd7aa85656e047df803150111252909";

async function getWeather(city) {
    try {
        let url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`;
        let response = await axios.get(url);

        let data = response.data;
        let location = data.location.name;
        let temp = data.current.temp;
        let condition = data.current.condition.text;

        console.log(`Current temperature in ${location} is ${temp}°C`);
        console.log(`Weather condition: ${condition}`);
    } catch (error) {
        console.error("Error: Unable to fetch weather information.");
        if (error.response) {
            console.error("Reason:", error.response.data.error.message);
        } else if (error.request) {
            console.error("Reason: No response received from WeatherAPI.");
        } else {
            console.error("Reason:", error.message);
        }
        process.exit(1);
    }
}

let args = process.argv.slice(2);

if (args.length === 0) {
    console.error("Error: Please provide city name");
    console.log("Usage: node weather.js <city_name>");
    console.log("Example: node weather.js 'Khon Kaen'");
    console.log("Note: Use quotes for city names with spaces");
    process.exit(1);
}

let city = args.join(" ");
getWeather(city);
