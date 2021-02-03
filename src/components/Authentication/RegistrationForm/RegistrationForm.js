import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classes from './RegistrationForm.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import axios from '../../../axios/stream-organizer-api';

class RegistrationForm extends Component {
    state = {
        email: "",
        username: "",
        password: "",
        repeatPassword: "",

        isEmailValid: false,
        isUsernameValid: false,
        isPasswordValid: false,
        isRepeatPasswordValid: false
    }

    onEmailChangeHandler = (event) => {
        let email = event.target.value;
        let isEmailValid = email.length > 0;
        this.setState({
            email: email,
            isEmailValid: isEmailValid
        });
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
        this.setState({ 
            password: password
        }, () => {
            this.checkPasswords();
        });
    }

    onRepeatPasswordChangeHandler = (event) => {
        let repeatPassword = event.target.value;
        this.setState({ 
            repeatPassword: repeatPassword
        }, () => {
            this.checkPasswords();
        });
    }

    checkPasswords = () => {
        let arePasswordsValid = this.state.password === this.state.repeatPassword;

        this.setState({
            isPasswordValid: arePasswordsValid,
            isRepeatPasswordValid: arePasswordsValid
        });
    }

    goToLogin = () => {
        this.props.history.push('/')
    }

    register = (event) => {
        event.preventDefault();

        let register = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            repeatPassword: this.state.repeatPassword
        };

        axios.post("/register", register).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        let isRegisterButtonEnabled = this.state.isEmailValid && this.state.isUsernameValid 
            && this.state.isPasswordValid && this.state.isRepeatPasswordValid;

        return (
            <Auxiliary>
                <div 
                    className={classes.LoginLink}
                    onClick={this.goToLogin} >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <p>LOGIN</p>
                </div>
                <form className={classes.RegistrationForm}>
                    <Input
                        id="email"
                        type="email"
                        value={this.state.email}
                        placeholder="Email"
                        required={true}
                        onChange={this.onEmailChangeHandler} />
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
                    <Input
                        id="repeat-password"
                        type="password"
                        value={this.state.repeatPassword}
                        placeholder="Repeat Password"
                        required={true}
                        onChange={this.onRepeatPasswordChangeHandler} />
                    <Button
                        disabled={!isRegisterButtonEnabled}
                        onClick={this.register}>
                        register
                    </Button>
                </form>
            </Auxiliary>
        )
    }
}

export default RegistrationForm;