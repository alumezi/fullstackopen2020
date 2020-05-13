import React, { useState, useEffect } from 'react';
import { createPerson, getAll, deletePerson } from './services/numbers';
import { PersonForm } from './PersonForm';
import { Filter } from './Filter';
import { Persons } from './Persons';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

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
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }

    const addPerson = (event) => {
        event.preventDefault();

        if (!newName) {
            return
        }

        if (persons.findIndex(person => person.name === newName) !== -1) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        const personObject = {
            name: newName,
            number: newNumber
        }
        createPerson(personObject)
            .then(data => {
                setPersons(persons.concat(data));
                setNewName('');
                setNewNumber('');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <h1>Phonebook</h1>
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