import React from "react";
import classes from './QuizList.css';
import {NavLink} from 'react-router-dom';
import axios from "axios";

export default class QuizList extends React.Component {
    renderQuizes() {
        return [1, 2, 3].map((quiz, i) => {
            return (
                <li key={i}>
                    <NavLink to={'/quiz/' + quiz}>Test {quiz}</NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        axios.get('https://react-quiz-9c4e1-default-rtdb.firebaseio.com/quiz.json').then(response => {
            console.log(response);
        });
    }

    render () {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>List of tests</h1>
                    <ul>
                        { this.renderQuizes() }
                    </ul>
                </div>
            </div>
        )
    }
}