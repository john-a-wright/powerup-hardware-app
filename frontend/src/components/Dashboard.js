import React, { useState, useEffect, useRef } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function Dashboard() {

    const [error, setError] = useState()
    const { currentUser, logout } = useAuth()
    const { history } = useHistory()

    const [currentSets, setCurrentSets] = React.useState("");
    const [userProjects, setUserProjects] = React.useState("");

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.pushState('/')
        } catch {
            setError('Failed to log out')
        }
    }

    const getCurrentSets = () => {
        const url = process.env.REACT_APP_URL_PREFIX + "/api/dashboard/hardware";
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((jsondata) => setCurrentSets(jsondata["message"]))
            .catch((err) => {
                console.log(err);
            });
    };

    const getUserProjects = () => {
        const url = process.env.REACT_APP_URL_PREFIX + "/api/dashboard/projects";
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((jsondata) => setUserProjects(jsondata["message"]))
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCurrentSets();
        getUserProjects();
    }, []);

    const joinRef = useRef()
    const [joinError, setJoinError] = useState('')
    const [loading, setLoading] = useState('')
    const [joinMessage, setJoinMessage] = useState('')

    function handleProjectJoining(e) {
        e.preventDefault() //prevent browser refreshing page

        setLoading(true);
        const data = { projectid: joinRef.current.value, user: currentUser.email};
        console.log(JSON.stringify(data))

        //POST request with body equal on data in JSON format
        fetch(process.env.REACT_APP_URL_PREFIX + "/api/dashboard/projects/join", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify(data),
            })
        .then((response) => response.json())
        //Then with the data from the response in JSON...
        .then((data) => {
            setJoinError('');
            console.log('Success:', data);
            setJoinMessage('Successfully joined project');
        })
        //Then with the error genereted...
        .catch((error) => {
            console.error('Error:', error);
            setJoinError('Failed to join project');
        });

        setLoading(false)

    }

    return (
        <>

            <div>
                <h1>
                    Your projects:
                </h1>
                <p>
                    {userProjects}
                </p>
            </div>

            <div>
                <h1>
                    Join a project:
                </h1>

                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "25vh" }}
                >
                    <div
                        className="w-100"
                        style={{ maxWidth: "450px" }}
                    >
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Enter Project ID</h2>
                                {joinError && <Alert variant="danger">{joinError}</Alert>}
                                {joinMessage && <Alert variant="success">{joinMessage}</Alert>}
                                <Form onSubmit={handleProjectJoining}>
                                    <Form.Group id="project_id">
                                        <Form.Label>Project ID</Form.Label>
                                        <Form.Control type="text" ref={joinRef} required />
                                    </Form.Group>
                                    <Button disabled={loading} className="w-100" type="submit">Join Project</Button>
                                </Form>

                            </Card.Body>
                        </Card>
                    </div>
                </Container>

            </div>


            <div>
                <h1>
                    Create a project:
                </h1>


            </div>




            <div>
                <h1>
                    Current Hardware Sets:
                </h1>
                <p>
                    {currentSets}
                </p>
            </div>








            <header>
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div
                        className="w-100"
                        style={{ maxWidth: "450px" }}
                    >
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Profile</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <strong> Email: </strong>{currentUser.email}
                                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text center mt-2">
                            <Button variant="link" onClick={handleLogout}>Log Out</Button>
                        </div>
                    </div>
                </Container>
            </header>

        </>
    )
}
