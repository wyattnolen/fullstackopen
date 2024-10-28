const CountryList = ({ filteredCountries, onCountryClick }) => {
	if (filteredCountries.length > 10) {
		return <p>Too many results. Please refine your search.</p>;
	}

	return (
		<div>
			<p>Results</p>
			<ul>
				{filteredCountries.map(({ name, id }) => (
					<li key={id}>
						{name} - <button type="button" onClick={() => onCountryClick(name)}> Select</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CountryList;
