import { useState } from 'react'
import Search from './components/Search'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const doesNameAlreadyExist = () => {
    return persons.some(person => person.name === newName)
  }

  const handleNameSubmit = (event) => {
    event.preventDefault();
    if (doesNameAlreadyExist()) {
      alert(`hey ${newName} exist already bucko`);
    } else {
      const newPerson = {name: newName, phone: newPhone}
      setPersons(persons.concat(newPerson));
    }
  }

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  }
  const handlePhoneInputChange = (event) => {
    setNewPhone(event.target.value);
  }
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  }

  const filterdListOfPeople = persons.filter(person => person.name.toLowerCase().includes(newSearch))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <Search text="Filter shown with: " value={newSearch} handleNewChange={handleSearchChange}/>
      <PersonForm 
        handleNameSubmit={handleNameSubmit}
        newName={newName}
        handleNameInputChange={handleNameInputChange}
        newPhone={newPhone}
        handlePhoneInputChange={handlePhoneInputChange}
      />
      <h2>Numbers</h2>
      <Persons filterdListOfPeople={filterdListOfPeople}/>
    </div>
  )
}

export default App