import React, { Component } from 'react';
import LoginForm from '../../components/Authentication/LoginForm/LoginForm';
import classes from './Authentication.css';

class Authentication extends Component {
    render() {
        return (
            <div className={classes.Login}>
                <LoginForm />
            </div>
        )
    }
}

export default Authentication;