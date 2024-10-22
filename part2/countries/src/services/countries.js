import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";
const getAllUrl = `${baseUrl}/all`;
const getCountryUrl = `${baseUrl}/name`;

const getAll = () => {
	return axios
		.get(getAllUrl)
		.then((response) => response.data.map(data => data.name.common))
		.catch((error) => console.error("Error fetching all countries:", error));
};

const getByName = (name) => {
	return axios
		.get(`${getCountryUrl}/${name}`)
		.then((response) => response.data)
		.catch((error) => console.error(`Error fetching country by name: ${name}`, error));
};

export default { getAll, getByName };
