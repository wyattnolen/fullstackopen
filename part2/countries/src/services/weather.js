import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/3.0/onecall";

const getWeatherByLocation = (latlng) => {
	return axios
		.get(`${baseUrl}?lat=${latlng[0]}&lon=${latlng[0]}&exclude=&appid=${apiKey}`)
		.then((response) => response.data)
		.catch((error) => console.error("Error fetching all countries:", error));
};

export default { getWeatherByLocation };