import React from 'react'

export function Project(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.id}</p>
            <p>{props.description}</p>
            <p>{props.HWSets}</p>
            <p>{props.users}</p>
        </div>
    )
}
