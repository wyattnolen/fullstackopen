import { useState, useEffect } from "react";
import Search from "./components/Search";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newSearch, setNewSearch] = useState("");
	const [message, setMessage] = useState(null);
	const [messageType, setMessageType] = useState("error");

	useEffect(() => {
		personService.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);

	const doesNameAlreadyExist = () => {
		return persons.some((person) => person.name === newName);
	};

	const handleNameSubmit = (event) => {
		event.preventDefault();
		const newPerson = { name: newName, phone: newPhone };

		if (doesNameAlreadyExist()) {
			if (
				confirm(
					`${newPerson.name} already exist; do you want to update their phone number?`
				) == true
			) {
				const newPersonId = persons.find(
					(person) => person.name === newPerson.name
				).id;
				personService
					.update(newPersonId, newPerson)
					.then((returnedPerson) => {
						setPersons(
							persons.map((person) =>
								person.id !== newPersonId ? person : returnedPerson
							)
						);
						setNewName("");
						setNewPhone("");
					})
					.catch((error) => {
						setMessage(`${newPerson.name} does not exist in state`);
						setMessageType("error");
						setTimeout(() => {
							setMessage(null);
						}, 5000);
					});
			}
		} else {
			personService.create(newPerson).then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));
				setNewName("");
				setNewPhone("");

				setMessage(`${returnedPerson.name} has been successfully added`);
				setMessageType("success");
				setTimeout(() => {
					setMessage(null);
				}, 5000);
			});
		}
	};

	const handleNameDelete = (id) => {
		const person = persons.find((p) => p.id === id);

		if (
			confirm(`Do you want to remove ${person.name} from the phonebook?`) ==
			true
		) {
			personService
				.remove(id)
				.then((returnedPerson) => {
					setPersons(
						persons.filter((person) => person.id !== returnedPerson.id)
					);
				})
				.catch((error) => {
					setPersons(persons.filter((p) => p.id !== id));
				});
		} else {
			console.log(`${person.name} is safe... for now`);
			return;
		}
	};

	const handleNameInputChange = (event) => {
		setNewName(event.target.value);
	};
	const handlePhoneInputChange = (event) => {
		setNewPhone(event.target.value);
	};
	const handleSearchChange = (event) => {
		setNewSearch(event.target.value);
	};

	const filteredListOfPeople = persons.filter((person) =>
		person.name.toLowerCase().includes(newSearch)
	);

	return (
		<div>
			<Notification message={message} messageType={messageType} />

			<h2>Phonebook</h2>
			<Search
				text="Filter shown with: "
				value={newSearch}
				handleNewChange={handleSearchChange}
			/>
			<PersonForm
				handleNameSubmit={handleNameSubmit}
				newName={newName}
				handleNameInputChange={handleNameInputChange}
				newPhone={newPhone}
				handlePhoneInputChange={handlePhoneInputChange}
			/>
			<h2>Numbers</h2>
			<Persons
				handleNameDelete={handleNameDelete}
				filteredListOfPeople={filteredListOfPeople}
			/>
		</div>
	);
};

export default App;
