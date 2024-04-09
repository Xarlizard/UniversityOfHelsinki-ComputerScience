const Persons = ({persons, searchName = '', deletePerson}) =>                           //if no searchName value is given, it will count as empty
  <>
    {persons.map(person => {
      if (searchName === ''){                                                           //when the input field is empty, show every person
        return <Person key={person.id} person={person} deletePerson={deletePerson} />
      }
      if(person.name.toLowerCase().includes(searchName.toLowerCase())){                 //filter persons based on given input, showing matches only
        return <Person key={person.id} person={person} deletePerson={deletePerson} />
      }
    })}
  </>

const Person = ({person, deletePerson}) => 
  <>
    <p>
      {person.name} {person.number} <Delete person={person} deletePerson={deletePerson} />
    </p>
  </>

const Delete = ({person, deletePerson}) => <><button onClick={() => deletePerson(person)}>Delete</button></>

export default Persons