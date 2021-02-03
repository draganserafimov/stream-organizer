import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from '../../components/Authentication/LoginForm/LoginForm';
import RegistrationForm from '../../components/Authentication/RegistrationForm/RegistrationForm';
import classes from './Authentication.css';

class Authentication extends Component {
    render() {
        return (
            <div className={classes.Login}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LoginForm} />
                        <Route path="/register" component={RegistrationForm} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Authentication;