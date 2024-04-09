import { useState, useEffect } from 'react'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) =>{
    event.preventDefault()

    if(persons.find(v => v.name === newName)){return alert(`${newName} is already added to phonebook`)}

    const newPerson = {
      name:newName,
      number:newNumber
    }
    personService
      .create(newPerson)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchName} onChange={handleSearchName} />
      <h3>add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        newNumber={newNumber} 
        handleNewName={handleNewName} 
        handleNewNumber={handleNewNumber}/>
      <h3>Numbers</h3>
      <Persons persons={persons} searchName={searchName}/>
    </div>
  )
}

const Filter = ({value, onChange}) =>
  <>
    filter shown with: <input value={value} onChange={onChange} />
  </>

const PersonForm = ({addPerson, newName, handleNewName, newNumber, handleNewNumber}) =>
  <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNewName} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNewNumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>

const Persons = ({persons, searchName = ''}) =>                            //if no searchName value is given, it will count as empty
  <>
    {persons.map(person => {
      if (searchName === ''){                                               //when the input field is empty, show every person
        return <p key={person.name}>{person.name} {person.number}</p>
      }
      if(person.name.toLowerCase().includes(searchName.toLowerCase())){    //filter persons based on given input, showing matches only
        return <p key={person.name}>{person.name} {person.number}</p>
      }
    })}
  </>


export default App