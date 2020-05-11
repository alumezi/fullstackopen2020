import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CountryDetails } from './CountryDetails';

export const App = (props) => {
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState('');
    const [firstCountry, setFirstCountry] = useState({});

    useEffect(() => {
        (async () => {
            try {
                if (!query) {
                    return
                }
                let response = await axios.get(`https://restcountries.eu/rest/v2/name/${query}`);
                setCountries(response.data);
                setFirstCountry(response.data[0]);

            } catch (e) {
                console.log(e.message);
            }
        })()
    }, [query])

    const showDetails = (event, country) => {
        event.preventDefault();
        setCountries([]);
        setFirstCountry(country)
        setQuery('');
    }
    return (
        <>
            find countries<input type="search" name="countries" onChange={event => setQuery(event.target.value)} value={query} />
            {countries.length > 10 ? <div>Too many matches, specify another filter</div> :
                (countries.length > 1 ? countries.map(country => <div key={country.name}>{country.name} <button onClick={event => showDetails(event, country)}>show</button></div>) :
                    <CountryDetails firstCountry={firstCountry} />
                )}
        </>
    )
}
