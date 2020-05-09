import React from 'react';

export const Total = ({ parts }) => {
    const total = parts.reduce((a, b) => {
        return { exercises: a.exercises + b.exercises }
    })
    return (
        <p>Number of exercises {total.exercises}</p>
    )
}