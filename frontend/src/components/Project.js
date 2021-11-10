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

/*const Project = props =>
        <div>
            <h2>{props.name}</h2>
            <p>ID: {props.id}</p>
            <p>Description: {props.description}</p>
            <p>(users and HWSets here in the future)</p>
        </div>; */
