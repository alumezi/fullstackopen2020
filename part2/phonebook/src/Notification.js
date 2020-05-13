import React from 'react';

export const Notification = ({ message, error }) => {
    if (message === null && error === null) {
        return null
    }

    const componentStyle = {
        color: error ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    return (
        <div style={componentStyle}>
            {message || error}
        </div>
    )
}