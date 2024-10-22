const Persons = ({ handleNameDelete, filteredListOfPeople }) => {
	return filteredListOfPeople.map((person) => (
		<div key={person.id}>
			<p>{person.name} {person.phone}</p>
            <button onClick={() => handleNameDelete(person.id)}>Delete {person.name}</button>
		</div>
	));
};

export default Persons;
