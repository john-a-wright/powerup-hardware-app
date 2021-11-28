import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp';
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
    }

    // rendering the whole site
    render() {
        return (
            <>
                <div className="App login-overflow">

                    <h1 className="gradient-text">
                        PowerUp Hardware
                    </h1>

                    <hr
                        style={{
                            color: 'blue',
                            backgroundColor: 'blue',
                            height: 10
                        }} />

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
            </>

        );
    }
}

export default App;