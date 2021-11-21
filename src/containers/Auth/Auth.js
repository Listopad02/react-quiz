import React from "react";
import classes from './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from "../../components/UI/Input/Input";

export default class Auth extends React.Component {
    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter valid Email!',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter valid Password!',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {
        console.log('login')
    }

    registerHandler = () => {
        console.log('register')
    }

    submitHandler = e => {
        e.preventDefault();
    }

    onChangeHandler = (e, controlName) => {
        console.log('test');
    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName, i) => {
            const control = this.state.formControls[controlName];
            return (
                <Input key={controlName + i} type={control.type} value={control.value}
                       valid={control.valid} touched={control.touched} label={control.label}
                       errorMessage={control.errorMessage} shouldValidate={!!control.validation}
                       onChange={e => this.onChangeHandler(e, controlName)} />
            )
        })
    }

    render () {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        { this.renderInputs() }
                        <Button type="success" onClick={this.loginHandler}>Enter</Button>
                        <Button type="primary" onClick={this.registerHandler}>Register</Button>
                    </form>
                </div>
            </div>
        )
    }
}