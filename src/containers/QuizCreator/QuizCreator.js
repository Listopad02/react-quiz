import React from "react";
import classes from './QuizCreator.css';
import Button from '../../components/UI/Button/Button';

export default class QuizCreator extends React.Component {
    submitHandler = e => {
        e.preventDefault();
    }
    addQuestionHandler = () => {
        console.log('test');
    }
    createQuizHandler = () => {
        console.log('test');
    }

    render () {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Create a new test</h1>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" />
                        <hr />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />

                        <select></select>
                        <Button type="primary" onClick={this.addQuestionHandler}>Add question</Button>
                        <Button type="success" onClick={this.createQuizHandler}>Create test</Button>
                    </form>
                </div>
            </div>
        )
    }
}