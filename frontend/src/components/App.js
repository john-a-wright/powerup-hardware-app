import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp';
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            names: [],
            loading: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({
            loading: true,
        })
        await fetch('/addname/' + this.state.name, {
            method: 'GET'
        });
        this.getNames()
    }

    render() {
        return (
            <div className="App">

                <h1>
                    PowerUp Hardware
                </h1>

                <header>
                    <Container
                        className="d-flex align-items-center justify-content-center"
                        style={{ minHeight: "100vh" }}
                    >
                        <div
                            className="w-100"
                            style={{ maxWidth: "450px" }}
                        >
                            <Router>
                                <AuthProvider>
                                    <Switch>
                                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                                        <PrivateRoute path="/update-profile" component={UpdateProfile} />
                                        <Route path="/signup" component={SignUp} />
                                        <Route path="/forgot-password" component={ForgotPassword} />
                                        <Route path="/" component={Login} />
                                        <Route path="/login" component={Login} />
                                    </Switch>
                                </AuthProvider>
                            </Router>
                        </div>
                    </Container>
                </header>
            </div>


        );
    }
}

export default App;