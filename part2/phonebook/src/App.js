import React, { useState, useEffect } from 'react';
import {
    createPerson,
    getAll,
    deletePerson,
    updatePerson
} from './services/numbers';
import { PersonForm } from './PersonForm';
import { Filter } from './Filter';
import { Persons } from './Persons';
import { Notification } from './Notification';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [notification, setNotification] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAll()
            .then(data => setPersons(data))
            .catch(error => console.error(error))
    }, []);


    const removeEntry = (event, id, name) => {
        event.preventDefault();
        if (window.confirm(`Are you sure you want to delete ${name} ?`)) {
            deletePerson(id)
                .then(() => {
                    setPersons(persons.filter(item => item.id !== id))
                    addNotification(`Deleted ${name}`)
                })
                .catch(error => {
                    console.error(error)
                    addError(`Information of ${name} was deleted from server`);
                    setPersons(persons.filter(item => item.id === id));
                })
        }
    }

    const addNotification = (message) => {
        setNotification(message)
        setTimeout(() => {
            setNotification(null)
        }, 5000)
    }

    const addError = (message) => {
        setError(message);
        setTimeout(() => {
            setError(null)
        }, 5000)
    }

    const addPerson = (event) => {
        event.preventDefault();

        if (!newName) {
            return
        }

        let searchPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());

        if (searchPerson) {
            if (searchPerson.number !== newNumber) {
                if (window.confirm(`${searchPerson.name} is already added to the phonebook, replace the old number with the new one?`)) {
                    return updatePerson({ number: newNumber }, searchPerson.id)
                        .then(data => {
                            let index = persons.findIndex(item => item.id === data.id);
                            let personsCopy = [...persons];
                            personsCopy.splice(index, 1, data);
                            setPersons(personsCopy);
                            setNewName('');
                            setNewNumber('');
                            addNotification(`Updated ${data.name}`)
                        })
                        .catch(error => {
                            console.error(error);
                            if (error.response) {
                                addError(error.response.data.error);
                            } else {
                                addError(`Information of ${searchPerson.name} was deleted from server`);
                                setPersons(persons.filter(item => item.id !== searchPerson.id))
                            }
                        })
                }
            } else {
                return alert(`${newName} is already added to phonebook`);
            }
        }

        createPerson({ name: newName, number: newNumber })
            .then(data => {
                setPersons(persons.concat(data));
                setNewName('');
                setNewNumber('');
                addNotification(`Added ${data.name}`)
            })
            .catch(error => {
                console.error(error);
                if (error.response) {
                    addError(error.response.data.error);
                }
            })
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Notification message={notification} error={error} />
            <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <h3>Add a new</h3>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                newNumber={newNumber}
                setNewName={setNewName}
                setNewNumber={setNewNumber} />
            <h2>Numbers</h2>
            <Persons persons={persons} searchQuery={searchQuery} removeEntry={removeEntry} />
        </div>
    )
}

export default App