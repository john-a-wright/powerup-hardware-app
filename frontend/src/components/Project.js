import React from 'react'
import { Container } from 'react-bootstrap'

export function Project(props) {
    return (
        <Container className="d-flex align-items-center justify-content-center">
            <div
                className="w-100"
                style={{ maxWidth: "450px" }}
            >
                <h3>{props.name}</h3>
                <p>Project ID: {props.id}</p>
                <p>Description: {props.description}</p>

                <strong>Current hardware:</strong>
                {props.HWSets.map(set => (
                    <p key={set[0]}>{set[0]}: {set[1]}</p>
                ))}

                <strong>Users:</strong>
                {props.users.map(u => (
                    <p key={u}>{u}</p>
                ))}
            </div>
        </Container>
    )
}
