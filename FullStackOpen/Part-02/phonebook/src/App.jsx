import { useState, useEffect } from 'react'
import personService from './services/persons'
import Notification from './components/Notification'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [deletedMessage, setDeletedMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) =>{
    event.preventDefault()

    const newPerson = {
      name:newName,
      number:newNumber
    }

    if(persons.find(v => v.name === newName)){                    //if name matches

      if(persons.find(v => v.number === newNumber)){              //and if number also matches

        return alert(`${newName} is already added to phonebook`)  //let user know that eprson already exists in registry

      }else if(window.confirm(`${newName} is already added to the phonebook, replace old number with a new one?`)){   //but if number doesn't match then let user decide whether to update or not the existing person's number

        const id = persons.find(v => v.name === newName).id   //we store the current person's id to properly request to the server an update about this id
        personService
          .update(id, newPerson)
          .then(response => {
            newPerson.id = response.data.id                   //we add the id (retrieved from server) to the newPerson object that is gonna be updated on local state
            setPersons(persons.map((person) => person.id == newPerson.id ? newPerson : person)) //when id matches, just change data from that specific person
            setNewName('')
            setNewNumber('')
            setSuccessMessage(
              `Person '${response.data.name}' has been successfuly updated on the server`
            )        
            setTimeout(() => {          
              setSuccessMessage(null)        
            }, 5000)
          })
      }

    }else if (newName != ''){                               //if name doesn't exist and it is not blank, add new person on the registry and trigger 'success' notification
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(
            `Person '${response.data.name}' has been successfuly added to the server`
          )        
          setTimeout(() => {          
            setSuccessMessage(null)        
          }, 5000)
        })
    }
  }

  const deletePerson = (thisPerson) => {                      //deletes person from server and triggers notification, based on succes (or not) of the request
    if(window.confirm(`Delete ${thisPerson.name} ?`)){
      personService
        .remove(thisPerson.id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== response.data.id))
          setDeletedMessage(
            `Person '${response.data.name}' has been successfuly removed from server`
          )        
          setTimeout(() => {          
            setDeletedMessage(null)        
          }, 5000)
        })
        .catch(() => {
          setErrorMessage(
            `Information of '${thisPerson.name}' was already been removed from server`
          )        
          setTimeout(() => {          
            setErrorMessage(null)        
          }, 5000)
        })
    }
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
      <Notification thisClass="error"   message={errorMessage}   />   {/*this message only triggers on server request error               */}
      <Notification thisClass="deleted" message={deletedMessage} />   {/*this message only triggers on successful delete                  */}
      <Notification thisClass="success" message={successMessage} />   {/*this message only triggers on successful events (adding/updating)*/}
      <Filter value={searchName} onChange={handleSearchName} />
      <h3>add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        newNumber={newNumber} 
        handleNewName={handleNewName} 
        handleNewNumber={handleNewNumber}/>
      <h3>Numbers</h3>
      <Persons persons={persons} searchName={searchName} deletePerson={deletePerson}/>
    </div>
  )
}

export default App