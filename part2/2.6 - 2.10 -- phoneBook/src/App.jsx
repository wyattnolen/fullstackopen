import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const doesNameAlreadyExist = () => {
    return persons.some(person => person.name === newName)
  }

  const handleNameSubmit = (event) => {
    event.preventDefault();
    if (doesNameAlreadyExist()) {
      alert(`hey ${newName} exist already bucko`);
    } else {
      const newPerson = {name: newName}
      setPersons(persons.concat(newPerson));
    }

  }

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={handleNameSubmit}>
        <div>
          name: <input onChange={handleNameInputChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => <p key={person.name}>{person.name}</p>)
      }
    </div>
  )
}

export default App