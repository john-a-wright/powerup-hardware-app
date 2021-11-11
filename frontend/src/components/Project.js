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
                <p>LIST HERE {props.HWSets}</p>
                <p>LIST HERE {props.users}</p>
            </div>
        </Container>
    )
}
