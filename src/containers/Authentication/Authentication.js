import React, { Component } from 'react';
import LoginForm from '../../components/Authentication/LoginForm/LoginForm';
import RegistrationForm from '../../components/Authentication/RegistrationForm/RegistrationForm';
import classes from './Authentication.css';

class Authentication extends Component {
    render() {
        return (
            <div className={classes.Login}>
                <RegistrationForm />
            </div>
        )
    }
}

export default Authentication;