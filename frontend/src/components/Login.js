import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css';

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)

    }

    return (
        <>
            <header>
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "91vh" }}
                >
                    <div
                        className="w-100"
                        style={{ maxWidth: "450px" }}
                    >

                        <Card className="container-darkmode">
                            <Card.Body>
                                <h2 className="text-center mb-4">Log In</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef} required />
                                        <Form.Label></Form.Label>
                                    </Form.Group>

                                    <Button disabled={loading} className="w-100" type="submit">Log In</Button>

                                </Form>
                                <div className="w-100 text center mt-3">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </div>

                            </Card.Body>
                        </Card>

                        <div className="w-100 text center mt-2 white-font">
                            Need an account? <Link to="/signup">Sign Up</Link>
                        </div>

                    </div>
                </Container>
            </header>
        </>
    )
}

