import React, { useState, useEffect, useRef } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Project } from './Project'
import { HWSet } from './HWSet'

export default function Dashboard() {

    // overhead state variables for maintaining updated dashboard
    const [error, setError] = useState()
    const { currentUser, logout } = useAuth()
    const { history } = useHistory()

    const [currentSets, setCurrentSets] = useState([]);
    const [userProjects, setUserProjects] = useState([]);

    // set hardware sets through state variable
    const loopHWSets = (jsondata) => {
        for (const [index, value] of jsondata["sets"].entries()) {
            setCurrentSets(currentSets => [...currentSets, value])
        }
    }

    // set user projects through state variable
    const displayProjects = (jsondata) => {
        for (const [index, value] of jsondata["userProjects"].entries()) {
            setUserProjects(userProjects => [...userProjects, value])
        }
    }

    // update 1 hardware set through state variable
    const updateSet = (data) => {
        var i;
        var j;
        var updatedSets = [];
        for (i = 0; i < currentSets.length; i++) {
            if (currentSets[i].name === data["newSet"]["name"]) {
                //found hwset in state array: loop back thru
                for (j = 0; j < currentSets.length; j++) {
                    if (j === i) {
                        var setToBeUpdated = currentSets[i]
                        setToBeUpdated.availability = data["newSet"]["availability"]

                        updatedSets.push(setToBeUpdated)
                    } else {
                        updatedSets.push(currentSets[j])
                    }
                }
            }
        }
        setCurrentSets(updatedSets)
    }

    // update 1 user project through state variable
    const updateProject = (data) => {
        var i;
        var j;
        var updatedProjects = [];
        for (i = 0; i < userProjects.length; i++) {
            if (userProjects[i].id === data["newProject"]["id"]) {
                //found project in state array: loop back thru
                for (j = 0; j < userProjects.length; j++) {
                    if (j === i) {
                        var projectToBeUpdated = userProjects[i]
                        projectToBeUpdated.checkedOutHW = data["newProject"]["checkedOutHW"]

                        updatedProjects.push(projectToBeUpdated)
                    } else {
                        updatedProjects.push(userProjects[j])
                    }
                }
            }
        }
        setUserProjects(updatedProjects)
    }

    // logout button action
    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.pushState('/')
        } catch {
            setError('Failed to log out')
        }
    }

    // update hw sets with api
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

    // update users projects with api
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

    // 
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
                setJoinMessage('');
                setJoinError('');
                console.log('Success on connection:', data);

                if (data["status"] === -1) {
                    setJoinError(data["error"]);
                    return;
                }

                setUserProjects(userProjects => [...userProjects, data["newlyJoinedProject"]])

                setJoinMessage('Successfully joined project');

            })
            //Then with the error generated...
            .catch((error) => {
                setJoinMessage('');
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

                if (data["status"] === -1) {
                    setCreateMessage('');
                    setCreateError(data["error"]);
                    return;
                }

                setUserProjects(userProjects => [...userProjects, data["newlyCreatedProject"]])

                setCreateMessage('Successfully created project');
            })
            //Then with the error generated...
            .catch((error) => {
                setCreateMessage('');
                console.error('Error:', error);
                setCreateError('Failed to create project');
            });

        setCreateLoading(false)

    }

    // END CREATE PROJECT

    // CHECKOUT
    const checkoutIDRef = useRef()
    const checkoutNameRef = useRef()
    const checkoutAmountRef = useRef()
    const [checkoutError, setCheckoutError] = useState('')
    const [checkoutLoading, setCheckoutLoading] = useState('')
    const [checkoutMessage, setCheckoutMessage] = useState('')

    function handleCheckout(e) {
        e.preventDefault() //prevent browser refreshing page

        setCheckoutLoading(true);
        const data = {
            id: checkoutIDRef.current.value,
            hwset: checkoutNameRef.current.value,
            amount: checkoutAmountRef.current.value,
            user: currentUser.email
        };
        console.log(JSON.stringify(data))

        //POST request with body equal on data in JSON format
        fetch(process.env.REACT_APP_URL_PREFIX + "/api/dashboard/hardware/checkout", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            //Then with the data from the response in JSON...
            .then((data) => {
                setCheckoutError('');
                console.log('Success network-wise:', data);

                if (data["status"] === -1) {
                    setCheckoutMessage('');
                    setCheckoutError(data["error"]);
                    return;
                }

                updateSet(data);
                updateProject(data);

                setCheckoutMessage('Successfully checked out hardware');
            })
            //Then with the error generated...
            .catch((error) => {
                setCheckoutMessage('');
                console.error('Error:', error);
                setCheckoutError('Failed checked out hardware');
            });

        setCheckoutLoading(false)

    }

    // END CHECKOUT

    // CHECKIN
    const checkinIDRef = useRef()
    const checkinNameRef = useRef()
    const checkinAmountRef = useRef()
    const [checkinError, setCheckinError] = useState('')
    const [checkinLoading, setCheckinLoading] = useState('')
    const [checkinMessage, setCheckinMessage] = useState('')

    function handleCheckin(e) {
        e.preventDefault() //prevent browser refreshing page

        setCheckinLoading(true);
        const data = {
            id: checkinIDRef.current.value,
            hwset: checkinNameRef.current.value,
            amount: checkinAmountRef.current.value,
            user: currentUser.email
        };
        console.log(JSON.stringify(data))

        //POST request with body equal on data in JSON format
        fetch(process.env.REACT_APP_URL_PREFIX + "/api/dashboard/hardware/checkin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            //Then with the data from the response in JSON...
            .then((data) => {
                setCheckinError('');
                console.log('Success network-wise:', data);

                if (data["status"] === -1) {
                    setCheckinMessage('');
                    setCheckinError(data["error"]);
                    return;
                }

                updateSet(data);
                updateProject(data);

                setCheckinMessage('Successfully checked in hardware');
            })
            //Then with the error genereted...
            .catch((error) => {
                console.error('Error:', error);
                setCheckinMessage('');
                setCheckinError('Failed to check in hardware');
            });

        setCheckinLoading(false)

    }

    // END CHECKIN


    // code for actually returning what react will render when dashboard component is needed
    return (
        <>
            {/* fragment to hold all the divs*/}
            <div className="container">

                {/*project display section*/}
                <div className="row">

                    <div className="white-font overflow-auto col-sm"
                        style={{
                            maxHeight: "600px",
                            minWidth: "800px"
                        }}>
                        <h1>
                            Your projects
                        </h1>

                        {/*user project display table*/}
                        <table className="table table-dark table-striped table-bordered table-format">
                            <thead>
                                <tr class="table-format">
                                    <th>Name</th>
                                    <th>Project ID</th>
                                    <th>Description</th>
                                    <th>Current Hardware</th>
                                    <th>Users</th>
                                </tr>
                            </thead>
                            <tbody class="table-format">
                                {userProjects.map(project => (
                                    <Project key={project.id}
                                        name={project.name}
                                        id={project.id}
                                        description={project.description}
                                        HWSets={project.checkedOutHW}
                                        users={project.users} />
                                ))}
                            </tbody>
                        </table>

                    </div>

                    {/*column for joining and creating project forms*/}
                    <div className="col-sm">

                        <Container
                            className="d-flex align-items-center justify-content-center"
                            style={{ minHeight: "25vh" }}
                        >
                            <div
                                className="w-100"
                                style={{ maxWidth: "450px" }}
                            >
                                <Card className="container-darkmode">
                                    <Card.Body>
                                        <h2 className="text-center mb-4">Join project</h2>
                                        {joinError && <Alert variant="danger">{joinError}</Alert>}
                                        {joinMessage && <Alert variant="success">{joinMessage}</Alert>}
                                        <Form onSubmit={handleProjectJoining}>
                                            <Form.Group id="join_project">
                                                <Form.Label>Enter project ID</Form.Label>
                                                <Form.Control type="text" ref={joinRef} required placeholder="ID" />
                                                <Form.Label></Form.Label>
                                            </Form.Group>
                                            <Button disabled={joinLoading} className="w-100" type="submit">Join Project</Button>
                                        </Form>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Container>

                        <hr className="break1" />

                        <Container
                            className="d-flex align-items-center justify-content-center"
                            style={{ minHeight: "25vh" }}
                        >
                            <div
                                className="w-100"
                                style={{ maxWidth: "450px" }}
                            >
                                <Card className="container-darkmode">
                                    <Card.Body>
                                        <h2 className="text-center mb-4">Create project</h2>
                                        {createError && <Alert variant="danger">{createError}</Alert>}
                                        {createMessage && <Alert variant="success">{createMessage}</Alert>}
                                        <Form onSubmit={handleProjectCreating}>
                                            <Form.Group id="create_project">
                                                <Form.Label>Enter a project name</Form.Label>
                                                <Form.Control type="text" ref={createNameRef} required placeholder="Name" />
                                                <Form.Label>Enter a project description</Form.Label>
                                                <Form.Control type="text" ref={createDescriptionRef} required placeholder="Description" />
                                                <Form.Label>Enter a project ID</Form.Label>
                                                <Form.Control type="text" ref={createIDRef} required placeholder="Positive number" />
                                                <Form.Label></Form.Label>
                                            </Form.Group>
                                            <Button disabled={createLoading} className="w-100" type="submit">Create project</Button>
                                        </Form>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Container>

                    </div>

                </div>
            </div>

            {/*blue horizontal line*/}
            <hr
                style={{
                    color: 'blue',
                    backgroundColor: 'blue',
                    height: 10,
                }}
            />

            {/*hardset set section of dashboard*/}
            <div className="container">
                <div className="row">

                    {/*column for displaying hardware sets*/}
                    <div className="white-font overflow-auto col-sm"
                        style={{
                            maxHeight: "600px",
                            minWidth: "800px"
                        }}>
                        <h1>
                            Available Hardware Sets
                        </h1>
                        {/*hardware set table display*/}
                        <table className="table table-dark table-striped table-bordered table-format">
                            <thead>
                                <tr class="table-format">
                                    <th>Name</th>
                                    <th>Capacity</th>
                                    <th>Availability</th>
                                </tr>
                            </thead>
                            <tbody class="table-format">
                                {currentSets.map(set => (
                                    <HWSet key={set.name}
                                        name={set.name}
                                        capacity={set.capacity}
                                        availability={set.availability} />
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/*column for hardware checkout/in cards*/}
                    <div className="col-sm">

                        <Container
                            className="d-flex align-items-center justify-content-center"
                            style={{ minHeight: "25vh" }}
                        >
                            <div
                                className="w-100"
                                style={{ maxWidth: "450px" }}
                            >
                                <Card className="container-darkmode">
                                    <Card.Body>
                                        <h2 className="text-center mb-4">Checkout hardware</h2>
                                        {checkoutError && <Alert variant="danger">{checkoutError}</Alert>}
                                        {checkoutMessage && <Alert variant="success">{checkoutMessage}</Alert>}
                                        <Form onSubmit={handleCheckout}>
                                            <Form.Group id="checkout">
                                                <Form.Label>Enter a project ID</Form.Label>
                                                <Form.Control type="text" ref={checkoutIDRef} required placeholder="ID" />
                                                <Form.Label>Enter a hardware set name</Form.Label>
                                                <Form.Control type="text" ref={checkoutNameRef} required placeholder="Set name" />
                                                <Form.Label>Enter an amount</Form.Label>
                                                <Form.Control type="text" ref={checkoutAmountRef} required placeholder="Amount to check out" />
                                                <Form.Label></Form.Label>
                                            </Form.Group>
                                            <Button disabled={checkoutLoading} className="w-100" type="submit">Checkout</Button>
                                        </Form>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Container>

                        <hr className="break2" />

                        <Container
                            className="d-flex align-items-center justify-content-center"
                            style={{ minHeight: "25vh" }}
                        >
                            <div
                                className="w-100"
                                style={{ maxWidth: "450px" }}
                            >
                                <Card className="container-darkmode">
                                    <Card.Body>
                                        <h2 className="text-center mb-4">Check-in hardware</h2>
                                        {checkinError && <Alert variant="danger">{checkinError}</Alert>}
                                        {checkinMessage && <Alert variant="success">{checkinMessage}</Alert>}
                                        <Form onSubmit={handleCheckin}>
                                            <Form.Group id="checkout">
                                                <Form.Label>Enter a project ID</Form.Label>
                                                <Form.Control type="text" ref={checkinIDRef} required placeholder="ID" />
                                                <Form.Label>Enter a hardware set name</Form.Label>
                                                <Form.Control type="text" ref={checkinNameRef} required placeholder="Set name" />
                                                <Form.Label>Enter an amount</Form.Label>
                                                <Form.Control type="text" ref={checkinAmountRef} required placeholder="Amount to check in" />
                                                <Form.Label></Form.Label>
                                            </Form.Group>
                                            <Button disabled={checkinLoading} className="w-100" type="submit">Check-in</Button>
                                        </Form>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>

            {/*blue horizontal line*/}
            <hr
                style={{
                    color: 'blue',
                    backgroundColor: 'blue',
                    height: 10,
                }}
            />

            {/*dataset display section of dashboard*/}
            <div>
                <Container
                    className="align-items-center justify-content-center"
                    style={{ minHeight: "25vh" }}
                >

                    <h1 className="white-font">Available Datasets</h1>

                    <table className="table table-dark table-striped table-bordered white-font overflow-auto center table-format"
                        style={{
                            maxHeight: "600px",
                            maxWidth: "1272px"
                        }}>
                        <thead>
                            <tr class="table-format">
                                <th>Name</th>
                                <th>Description</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody class="table-format">
                            <tr>
                                <td>Blood Pressure in Salt-Sensitive Dahl Rats</td>
                                <td>This database contains continuous blood pressure recordings for 9 Dahl SS rats and 6 Dahl SS.13BN rats, under high and low salt conditions.</td>
                                <td><a href="https://physionet.org/static/published-projects/bpssrat/blood-pressure-in-salt-sensitive-dahl-rats-1.0.0.zip">
                                    Download (3.4MB)
                                </a></td>
                            </tr>
                            <tr>
                                <td>Gait in Aging and Disease Database</td>
                                <td>Walking stride interval time series from 15 subjects.</td>
                                <td><a href="https://physionet.org/static/published-projects/gaitdb/gait-in-aging-and-disease-database-1.0.0.zip">
                                    Download (354.6KB)
                                </a></td>
                            </tr>
                            <tr>
                                <td>Long Term AF Database</td>
                                <td>This database includes 84 long-term ECG recordings of subjects with paroxysmal or sustained atrial fibrillation (AF). Each record contains two simultaneously recorded ECG signals digitized at 128 Hz …</td>
                                <td><a href="https://physionet.org/static/published-projects/ltafdb/long-term-af-database-1.0.0.zip">
                                    Download (1.7GB)
                                </a></td>
                            </tr>
                            <tr>
                                <td>MIT-BIH Arrhythmia Database</td>
                                <td>Two-channel ambulatory ECG recordings, obtained from 47 subjects studied by the BIH Arrhythmia Laboratory between 1975 and 1979.</td>
                                <td><a href="https://physionet.org/static/published-projects/mitdb/mit-bih-arrhythmia-database-1.0.0.zip">
                                    Download (73.5MB)
                                </a></td>
                            </tr>
                            <tr>
                                <td>MMG Database</td>
                                <td>Uterine magnetomyographic signals from 25 subjects recorded using a 151 channel Reproductive Assessment system.</td>
                                <td><a href="https://physionet.org/static/published-projects/mmgdb/mmg-database-1.0.0.zip">
                                    Download (215.7MB)
                                </a></td>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </div>

            {/*blue horizontal line*/}
            <hr
                style={{
                    color: 'blue',
                    backgroundColor: 'blue',
                    height: 10,
                }}
            />

            {/*log out section of the dashboard*/}
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "25vh" }}
            >
                <div
                    className="w-100"
                    style={{ maxWidth: "450px" }}
                >
                    <Card className="container-darkmode">
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

        </>
    )
}
