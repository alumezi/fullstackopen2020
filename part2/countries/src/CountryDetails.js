import React from 'react';
import { Weather } from './Weather';

export const CountryDetails = ({ firstCountry }) => {
    if (!firstCountry.languages) {
        return <></>;
    }

    return (
        <>
            <h1>{firstCountry.name}</h1>
            <p>Capital {firstCountry.capital}</p>
            <p>Population {firstCountry.population}</p>
            <h3>Languages</h3>
            <ul>
                {firstCountry.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <img src={firstCountry.flag} width="200" />
            <Weather countryName={firstCountry.name} />
        </>
    )
}
