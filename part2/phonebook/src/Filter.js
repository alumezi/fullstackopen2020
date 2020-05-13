import React from 'react';

export const Filter = ({ searchQuery, setSearchQuery }) => {
    return <>
        filter show with <input value={searchQuery} onChange={event => setSearchQuery(event.target.value)} />
    </>
}