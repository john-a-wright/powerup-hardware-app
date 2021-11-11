import React from 'react'

export function HWSet(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Capacity: {props.capacity}</p>
            <p>Availability: {props.availability}</p>
        </div>
    )
}
