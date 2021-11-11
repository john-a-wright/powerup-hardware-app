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
    const createNameRef = useRef()
    const createDescriptionRef = useRef()
    const createIDRef = useRef()
    const [createError, setCreateError] = useState('')
    const [createLoading, setCreateLoading] = useState('')
    const [createMessage, setCreateMessage] = useState('')

    function handleProjectCreating(e) {
        e.preventDefault() //prevent browser refreshing page

        setCreateLoading(true);
        const data = { 
            name: createNameRef.current.value, 
            description: createDescriptionRef.current.value,
            id: createIDRef.current.value, 
            user: currentUser.email 
        };
        console.log(JSON.stringify(data))

        //POST request with body equal on data in JSON format
        fetch(process.env.REACT_APP_URL_PREFIX + "/api/dashboard/projects/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            //Then with the data from the response in JSON...
            .then((data) => {
                setCreateError('');
                console.log('Success:', data);
                setCreateMessage('Successfully create project');
            })
            //Then with the error genereted...
            .catch((error) => {
                console.error('Error:', error);
                setCreateError('Failed to create project');
            });

        setCreateLoading(false)

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

    /*  first two database links have rewritten descriptions in case plagiarism is a concern? doubtful; here are the originals
        This database contains continuous blood pressure recordings for 9 Dahl SS rats and 6 Dahl SS.13BN rats, under high and low salt conditions. 
        Walking stride interval time series from 15 subjects. */
    
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
                                        <Form.Label>Enter a project name</Form.Label>
                                        <Form.Control type="text" ref={createNameRef} required />
                                        <Form.Label>Enter a project description</Form.Label>
                                        <Form.Control type="text" ref={createDescriptionRef} required />
                                        <Form.Label>Enter a project ID</Form.Label>
                                        <Form.Control type="text" ref={createIDRef} required />
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
                                        <Form.Label>Enter an amount</Form.Label>
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
            
            <div>
                <Container
                    className="align-items-center justify-content-center"
                    style={{ minHeight: "25vh" }}
                >
                    <h3 class="white-font">
                        Blood Pressure in Salt-Sensitive Dahl Rats
                    </h3>
                    <p class="white-font">This database contains continuous blood pressure recordings for 9 Dahl SS rats and 6 Dahl SS.13BN rats, under high and low salt conditions.</p>
                    <p class="white-font">
                        <a href="https://physionet.org/static/published-projects/bpssrat/blood-pressure-in-salt-sensitive-dahl-rats-1.0.0.zip">
                            Download (3.4MB)
                        </a>
                    </p>    

                    <h3 class="white-font">
                        Gait in Aging and Disease Database
                    </h3>
                    <p class="white-font">Walking stride interval time series from 15 subjects.</p>
                    <p class="white-font">
                        <a href="https://physionet.org/static/published-projects/gaitdb/gait-in-aging-and-disease-database-1.0.0.zip">
                            Download (354.6KB)
                        </a>
                    </p>
                    
                    <h3 class="white-font">
                        Long Term AF Database
                    </h3>
                    <p class="white-font">This database includes 84 long-term ECG recordings of subjects with paroxysmal or sustained atrial fibrillation (AF). Each record contains two simultaneously recorded ECG signals digitized at 128 Hz …</p>
                    <p class="white-font">
                        <a href="https://physionet.org/static/published-projects/ltafdb/long-term-af-database-1.0.0.zip">
                            Download (1.7GB)
                        </a>
                    </p>

                    <h3 class="white-font">
                        MIT-BIH Arrhythmia Database
                    </h3>
                    <p class="white-font">Two-channel ambulatory ECG recordings, obtained from 47 subjects studied by the BIH Arrhythmia Laboratory between 1975 and 1979. </p>
                    <p class="white-font">
                        <a href="https://physionet.org/static/published-projects/mitdb/mit-bih-arrhythmia-database-1.0.0.zip">
                            Download (73.5MB)
                        </a>
                    </p>

                    <h3 class="white-font">
                        MMG Database
                    </h3>
                    <p class="white-font">Uterine magnetomyographic signals from 25 subjects recorded using a 151 channel Reproductive Assessment system.</p>
                    <p class="white-font">
                        <a href="https://physionet.org/static/published-projects/mmgdb/mmg-database-1.0.0.zip">
                            Download (215.7MB)
                        </a>
                    </p>

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
