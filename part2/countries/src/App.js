import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const App = (props) => {
    const [countries, setCountries] = useState([{ name: "gemr" }, { name: "asdasd" }]);
    const [query, setQuery] = useState('');
    const [firstCountry, setFirstCountry] = useState({});

    useEffect(() => {
        (async () => {
            try {
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
                    <>
                        <h1>{firstCountry.name}</h1>
                        <p>Capital {firstCountry.capital}</p>
                        <p>Population {firstCountry.population}</p>
                        <h3>Languages</h3>
                        <ul>
                            {firstCountry.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
                        </ul>
                        <img src={firstCountry.flag} width="200" />
                    </>
                )}
        </>
    )
}
