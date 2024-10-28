import { useState, useEffect } from "react";
import Search from "./components/Search";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import countriesService from "./services/countries";
import weatherServices from "./services/weather";

const App = () => {
	const [searchInput, setSearchInput] = useState("");
	const [allCountries, setAllCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [weather, setWeather] = useState(null)

	useEffect(() => {
		countriesService.getAll().then(setAllCountries);
	}, []);

	useEffect(() => {
		if (searchInput) {
			const results = allCountries.filter((country) =>
				country.name.toLowerCase().includes(searchInput.toLowerCase())
			);
			setFilteredCountries(results);

			if (results.length === 1) {
				const selectedCountryName = results[0].name;
				countriesService.getByName(selectedCountryName).then(setSelectedCountry);
			} else {
				setSelectedCountry(null);
			}
		} else {
			setFilteredCountries([]);
			setSelectedCountry(null);
		}
	}, [searchInput, allCountries]);

	useEffect(() => {
		if (selectedCountry) {
			const latlng = selectedCountry.latlng;
			setWeather(weatherServices.getWeatherByLocation(latlng));
		}
		

	}, [selectedCountry])

	const handleSearchChange = (event) => setSearchInput(event.target.value);

	const handleCountrySelect = (countryName) => {
		setSearchInput(countryName);
	};

	return (
		<div>
			<pre> { JSON.stringify(weather, null, 4)}</pre>
			<h2>Country Lookup</h2>
			<form onSubmit={(e) => e.preventDefault()}>
				<Search
					text="Search by country name: "
					value={searchInput}
					handleNewChange={handleSearchChange}
				/>
				<button type="button" onClick={() => setSearchInput("")}>
					Clear
				</button>
			</form>

			<h2>Countries</h2>
			{selectedCountry ? (
				<CountryDetails country={selectedCountry} />
			) : (
				<CountryList filteredCountries={filteredCountries} onCountryClick={handleCountrySelect} />
			)}
		</div>
	);
};

export default App;
