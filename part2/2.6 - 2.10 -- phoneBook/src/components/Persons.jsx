const Persons = ({ filterdListOfPeople }) => {
    return (
        filterdListOfPeople.map(person => <p key={person.id}>{person.name} {person.phone}</p>)
    )
}

export default Persons