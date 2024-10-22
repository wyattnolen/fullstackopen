import { useState, useEffect } from "react";
import Search from "./components/Search";
import countriesService from "./services/countries";

const App = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [allCountries, setAllCountries] = useState(null);
	const [country, setCountry] = useState(null);

	useEffect(() => {
		countriesService
		.getAll()
		.then(returnedCountries => {
			setAllCountries(returnedCountries);
		})
		
	}, []);

	useEffect(() => {
		console.log("effect run, searching for ", searchQuery);

		if (searchQuery !== "") {
			console.log("fetching country data...");
			countriesService
			.getByName(searchQuery)
			.then(returnedCountry => {
				setCountry(returnedCountry);
			})
			
		}
	}, [searchQuery]);

	const handleSearchChange = (event) => {
		setSearchInput(event.target.value);
	};

	const onSearch = (event) => {
		event.preventDefault();
		setSearchQuery(searchInput);
	};

	// const filteredListOfPeople = persons.filter((person) =>
	// 	person.name.toLowerCase().includes(newSearch)
	// );

	return (
		<div>
			debug:
			searchInput: {searchInput}
			searchQuery: {searchQuery}
			<h2>Country Lookup</h2>
			<form onSubmit={onSearch}>
				<Search
					text="Search by country name: "
					value={searchInput}
					handleNewChange={handleSearchChange}
				/>
				<button type="submit">Search</button>
			</form>
			<h2>Countries</h2>
			<pre>
				{JSON.stringify(allCountries, null, 2)}
			</pre>
			<pre>
				{JSON.stringify(country, null, 2)}
			</pre>

			
		</div>
	);
};

export default App;
