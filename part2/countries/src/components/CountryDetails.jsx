const CountryDetails = ({ country }) => (
	<div>
		<h3>Country Details</h3>
		<p>Name: {country.name.common}</p>
		<p>Capital: {country.capital}</p>
		
			Languages:
			<ul>
				{country.languages ? (
					Object.entries(country.languages).map(([code, name]) => (
						<li key={code}>{`${name} (${code.toUpperCase()})`}</li>
					))
				) : (
					<li>No languages available</li>
				)}
			</ul>
		
		<img src={country.flags.png} alt={country.flags.alt} />
	</div>
);

export default CountryDetails;
