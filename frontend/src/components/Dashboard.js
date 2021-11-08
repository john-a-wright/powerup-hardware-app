import React, { useState, useEffect } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Dashboard() {

    const [error, setError] = useState()
    const {currentUser, logout} = useAuth()
    const { history } = useHistory()

    const [currentSets, setCurrentSets] = React.useState("");

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.pushState('/login')
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

    useEffect(() => {
        getCurrentSets();
    }, []);

    return (
        <>
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
            <div>
                <h1>
                    Current Hardware Sets:
                </h1>
                <p>
                    {currentSets}
                </p>
            </div>
        
        </>
    )
}
