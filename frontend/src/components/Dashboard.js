import React, { useState, useEffect, useRef } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Project } from './Project'

export default function Dashboard() {

    const [error, setError] = useState()
    const { currentUser, logout } = useAuth()
    const { history } = useHistory()

    const [currentSets, setCurrentSets] = useState([]);
    const [userProjects, setUserProjects] = useState([]);

    const loopHWSets = (jsondata) => {
        for (const [index, value] of jsondata["message"].entries()){
            setCurrentSets(currentSets => [...currentSets, value])
        }
    }

    const displayProjects = (jsondata) => {
        for (const [index, value] of jsondata["userProjects"].entries()){
            setUserProjects(userProjects => [...userProjects, value])
        }
    }

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
            .then((jsondata) => loopHWSets(jsondata))
            .catch((err) => {
                console.log(err);
            });
    };

    const getUserProjects = () => {
        const url = process.env.REACT_APP_URL_PREFIX + "/api/dashboard/projects/" + currentUser.email;
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((jsondata) => displayProjects(jsondata))
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCurrentSets();
        getUserProjects();
    }, []);


    // JOIN EXISTING PROJECT
    const joinRef = useRef()
    const [joinError, setJoinError] = useState('')
    const [joinLoading, setJoinLoading] = useState('')
    const [joinMessage, setJoinMessage] = useState('')

    function handleProjectJoining(e) {
        e.preventDefault() //prevent browser refreshing page

        setJoinLoading(true);
        const data = { projectid: joinRef.current.value, user: currentUser.email };
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

        setJoinLoading(false)

    }
    // END JOIN EXISTING PROJECT

    // CREATE PROJECT
    const createIDRef = useRef()
    const createNameRef = useRef()
    const createDescriptionRef = useRef()
    const [createError, setCreateError] = useState('')
    const [createLoading, setCreateLoading] = useState('')
    const [createMessage, setCreateMessage] = useState('')

    function handleProjectCreating(e) {
        e.preventDefault() //prevent browser refreshing page

        setJoinLoading(true);
        const data = { projectid: joinRef.current.value, user: currentUser.email };
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

        setJoinLoading(false)

    }

    // END CREATE PROJECT

    // CHECKOUT
    const checkoutIDRef = useRef()
    const checkoutNameRef = useRef()
    const checkoutAmmountRef = useRef()
    const [checkoutError, setCheckoutError] = useState('')
    const [checkoutLoading, setCheckoutLoading] = useState('')
    const [checkoutMessage, setCheckoutMessage] = useState('')

    function handleCheckout(e) {
        e.preventDefault() //prevent browser refreshing page

        setJoinLoading(true);
        const data = { projectid: joinRef.current.value, user: currentUser.email };
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

        setJoinLoading(false)

    }

    // END CHECKOUT name={project.name} id={project.id} description={project.description}


    return (
        <>

            <div className="white-font">
                <h1>
                    Your projects:
                </h1>
                {userProjects.map(project => (
                    <Project key={project.id} 
                    name={project.name} 
                    id={project.id} 
                    description={project.description} 
                    HWSets={project.checkedOutHW} 
                    users={project.users}/>
                ))}

            </div>

            <div>

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
                                <h2 className="text-center mb-4">Join project</h2>
                                {joinError && <Alert variant="danger">{joinError}</Alert>}
                                {joinMessage && <Alert variant="success">{joinMessage}</Alert>}
                                <Form onSubmit={handleProjectJoining}>
                                    <Form.Group id="join_project">
                                        <Form.Label>Enter project ID</Form.Label>
                                        <Form.Control type="text" ref={joinRef} required />
                                        <Form.Label></Form.Label>
                                    </Form.Group>
                                    <Button disabled={joinLoading} className="w-100" type="submit">Join Project</Button>
                                </Form>

                            </Card.Body>
                        </Card>
                    </div>
                </Container>

            </div>

            <div>

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
                                <h2 className="text-center mb-4">Create project</h2>
                                {createError && <Alert variant="danger">{createError}</Alert>}
                                {createMessage && <Alert variant="success">{createMessage}</Alert>}
                                <Form onSubmit={handleProjectCreating}>
                                    <Form.Group id="create_project">
                                        <Form.Label>Enter a project ID</Form.Label>
                                        <Form.Control type="text" ref={createIDRef} required />
                                        <Form.Label>Enter a project name</Form.Label>
                                        <Form.Control type="text" ref={createNameRef} required />
                                        <Form.Label>Enter a project description</Form.Label>
                                        <Form.Control type="text" ref={createDescriptionRef} required />
                                        <Form.Label></Form.Label>
                                    </Form.Group>
                                    <Button disabled={createLoading} className="w-100" type="submit">Create project</Button>
                                </Form>

                            </Card.Body>
                        </Card>
                    </div>
                </Container>

            </div>




            <div className="white-font">
                <h1>
                    Available Hardware Sets:
                </h1>
                <p>
                    {currentSets}
                </p>

            </div>


            <div>

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
                                <h2 className="text-center mb-4">Checkout hardware</h2>
                                {checkoutError && <Alert variant="danger">{checkoutError}</Alert>}
                                {checkoutMessage && <Alert variant="success">{checkoutMessage}</Alert>}
                                <Form onSubmit={handleCheckout}>
                                    <Form.Group id="checkout">
                                        <Form.Label>Enter a project ID</Form.Label>
                                        <Form.Control type="text" ref={checkoutIDRef} required />
                                        <Form.Label>Enter a hardware set name</Form.Label>
                                        <Form.Control type="text" ref={checkoutNameRef} required />
                                        <Form.Label>Enter an ammount</Form.Label>
                                        <Form.Control type="text" ref={checkoutAmmountRef} required />
                                        <Form.Label></Form.Label>
                                    </Form.Group>
                                    <Button disabled={checkoutLoading} className="w-100" type="submit">Checkout</Button>
                                </Form>

                            </Card.Body>
                        </Card>
                    </div>
                </Container>

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
