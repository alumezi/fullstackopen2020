import React from 'react';

export const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    const componentStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    return (
        <div style={componentStyle}>
            {message}
        </div>
    )
}