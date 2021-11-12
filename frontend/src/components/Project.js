import React from 'react'

export function Project(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.id}</td>
            <td>{props.description}</td>

            {concatinateHWSets(props.HWSets)}

            {concatinateUsers(props.users)}
        </tr>
    )
}

function concatinateUsers(array){
    let buffer = []

    array.map(item =>{
        buffer.push(<div>{item}</div>)
    })

    return (
        <td>
            {buffer}
        </td>
    )
}

function concatinateHWSets(array){
    let buffer = []

    array.map(set => {
        buffer.push(<div>{set[0]}: {set[1]}</div>)
    })

    return (
        <td>
            {buffer}
        </td>
    )
}
