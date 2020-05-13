import React from 'react';

export const Persons = ({ persons, searchQuery }) => {
    return persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .map(person => <div key={person.name}>{person.name}  {person.number}</div>)
}