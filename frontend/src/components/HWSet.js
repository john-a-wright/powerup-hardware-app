// simple wrapper for formatting hwsets in the table
import React from 'react'

export function HWSet(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.capacity}</td>
            <td>{props.availability}</td>
        </tr>
    )
}
