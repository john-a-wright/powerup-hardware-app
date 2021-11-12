import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to create an account')
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
                                <h2 className="text-center mb-4">Sign Up</h2>

                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required placeholder="Email"/>
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef} required placeholder="Password (at least 6 characters)"/>
                                    </Form.Group>
                                    <Form.Group id="password-confirm">
                                        <Form.Label>Password Confirmation</Form.Label>
                                        <Form.Control type="password" ref={passwordConfirmRef} required placeholder="Confirm passsword"/>
                                        <Form.Label></Form.Label>
                                    </Form.Group>

                                    <Button disabled={loading} className="w-100" type="submit">Sign up</Button>

                                </Form>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text center mt-2 white-font">
                            Already have an account? <Link to="/">Log In</Link>
                        </div>

                    </div>
                </Container>
            </header>

        </>
    )
}
