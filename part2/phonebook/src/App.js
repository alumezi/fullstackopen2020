import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]);

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const addPerson = (event) => {
        event.preventDefault();

        if (persons.findIndex(person => person.name === newName) !== -1) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        const personObject = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(personObject));
        setNewName('');
    }

    return (
        <div>
            <h2>Phonebook</h2>
            filter show with <input value={searchQuery} onChange={event => setSearchQuery(event.target.value)} />
            <form onSubmit={addPerson}>
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
            <h2>Numbers</h2>
            <div >
                {
                    persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map(person => <div key={person.name}>{person.name}  {person.number}</div>)
                }
            </div>
        </div>
    )
}

export default App