import React from 'react';

export const Persons = ({ persons, searchQuery, removeEntry }) => {
    return persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .map(person => <div key={person.id}>{person.name}  {person.number}
            <button onClick={event => removeEntry(event, person.id, person.name)}>delete</button>
        </div>)
}