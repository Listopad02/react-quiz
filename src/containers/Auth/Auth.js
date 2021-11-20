import React from "react";
import classes from './Auth.css';
import Button from '../../components/UI/Button/Button'

export default class Auth extends React.Component {
    loginHandler = () => {
        console.log('login')
    }

    registerHandler = () => {
        console.log('register')
    }

    submitHandler = e => {
        e.preventDefault();
    }

    render () {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <input type="text" />
                        <input type="text" />
                        <Button type="success" onClick={this.loginHandler}>Enter</Button>
                        <Button type="primary" onClick={this.registerHandler}>Register</Button>
                    </form>
                </div>
            </div>
        )
    }
}