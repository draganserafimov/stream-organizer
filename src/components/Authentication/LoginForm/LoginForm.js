import React, { Component } from 'react';
import classes from './LoginForm.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import axios from '../../../axios/stream-organizer-api';

class LoginForm extends Component {

    state = {
        username: "",
        password: "",

        isUsernameValid: false,
        isPasswordValid: false
    }

    onUsernameChangeHandler = (event) => {
        let username = event.target.value;
        let isUsernameValid = username.length > 0;
        this.setState({ 
            username: username,
            isUsernameValid: isUsernameValid
        });
    }

    onPasswordChangeHandler = (event) => {
        let password = event.target.value;
        let isPasswordValid = password.length > 0;
        this.setState({ 
            password: password,
            isPasswordValid: isPasswordValid 
        });
    }

    login = (event) => {
        event.preventDefault();
        
        let login = {
            username: this.state.username,
            password: this.state.password
        }

        // TODO handle login
        axios.post("/login", login).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        let isSubmitButtonEnabled = this.state.isUsernameValid && this.state.isPasswordValid;

        return (
            <form className={classes.LoginForm}>
                <Input
                    id="username"
                    type="text"
                    value={this.state.username}
                    placeholder="Username"
                    required={true}
                    onChange={this.onUsernameChangeHandler} />
                <Input
                    id="password"
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    required={true}
                    onChange={this.onPasswordChangeHandler} />
                <Button
                    disabled={!isSubmitButtonEnabled}
                    onClick={this.login}>
                    log in
                </Button>
            </form>
        )
    }
}

export default LoginForm;