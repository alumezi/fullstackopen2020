import React, { useState, useEffect } from 'react';
import { createPerson, getAll } from './services/numbers';

const Filter = ({ searchQuery, setSearchQuery }) => {
    return <>
        filter show with <input value={searchQuery} onChange={event => setSearchQuery(event.target.value)} />
    </>
}

const PersonForm = ({ addPerson, newName, newNumber, setNewName, setNewNumber }) => {
    return <form onSubmit={addPerson}>
        <div>
            <div>
                name: <input value={newName} onChange={event => setNewName(event.target.value)} />
            </div>
            <div>
                number: <input value={newNumber} onChange={event => setNewNumber(event.target.value)} />
            </div>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
}

const Persons = ({ persons, searchQuery }) => {
    return persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .map(person => <div key={person.name}>{person.name}  {person.number}</div>)
}


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
            <Persons persons={persons} searchQuery={searchQuery} />
        </div>
    )
}

export default App