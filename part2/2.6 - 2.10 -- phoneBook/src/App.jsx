import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
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
      <div>Filter shown with: <input onChange={handleSearchChange} value={newSearch}/></div>
      <form onSubmit={handleNameSubmit}>
        <div>
          name: <input onChange={handleNameInputChange} value={newName}/>
          phone: <input onChange={handlePhoneInputChange} value={newPhone}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        filterdListOfPeople.map(person => <p key={person.name}>{person.name} {person.phone}</p>)
      }
    </div>
  )
}

export default App