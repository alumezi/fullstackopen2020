import React from 'react';

export const PersonForm = ({ addPerson, newName, newNumber, setNewName, setNewNumber }) => {
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