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

    // click action for the login button
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
            <div className="row">
                <div className="col-sm">
                </div>

                <div className="col-sm">
                    <Container
                        className="d-flex align-items-center justify-content-center"
                        style={{ minHeight: "91vh" }}
                    >
                        <div
                            className="w-100"
                            style={{ maxWidth: "450px",
                                     minWidth: "450px" }}
                        >

                            <div class="card aboutCardBlue">
                                <div class="card-header aboutCardBlue">
                                    <h2 class="card-title">About us</h2>

                                </div>
                                <div class="card-body">
                                    <p class="card-text aboutText">PowerUp Hardware is a Hardware-as-a-Service proof of concept web application
                                        developed by Emran Khan, Jeesoo Min, John Wright, Ryan McSweeney, and Sophia Jiang.
                                        It features the ability to have multiple users, join and create projects, checkout
                                        hardware, check in hardware, and download datasets. We used Heroku as
                                        our cloud host with MongoDB as our database, React as our frontend, and Python Flask
                                        as our backend.</p>
                                </div>
                            </div>

                            <hr
                                style={{
                                    color: 'blue',
                                    backgroundColor: 'blue',
                                    height: 10,
                                }}
                            />

                            <div class="card aboutCardBlue">
                                <div class="card-header aboutCardBlue">
                                    <h2 class="card-title">Contact us</h2>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group aboutText">
                                        <li class="list-group-item contactList">Human Resources: John Wright <br/> - johnawright@utexas.edu</li>
                                        <li class="list-group-item contactList">Talent Accquistion: Ryan McSweeney <br/> - rmcsweeney@utexas.edu</li>
                                        <li class="list-group-item contactList">University Relations: Sophia Jiang <br/> - sopjiang@utexas.edu</li>
                                        <li class="list-group-item contactList">Customer Service: Jeesoo Min <br/> - alswltn@utexas.edu</li>
                                        <li class="list-group-item contactList">Quality Assurance: Emran Khan <br/> - emran.khan@utexas.edu</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </Container>
                </div>

                <div className="col-sm">
                    <Container
                        className="d-flex align-items-center justify-content-center"
                        style={{ minHeight: "91vh" }}
                    >
                        <div
                            className="w-100"
                            style={{ maxWidth: "450px",
                                     minWidth: "450px" }}
                        >

                            <Card className="container-darkmode">
                                <Card.Body>
                                    <h2 className="text-center mb-4">Log In</h2>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group id="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" ref={emailRef} required placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group id="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" ref={passwordRef} required placeholder="Password" />
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
                </div>

                <div className="col-sm">
                </div>

            </div>
        </>
    )
}

