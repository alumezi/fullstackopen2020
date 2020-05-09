import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '5551245684' }
    ])
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

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
                {persons.map(person => <div key={person.name}>{person.name}  {person.number}</div>)}
            </div>
        </div>
    )
}

export default App