import React from "react";
import classes from './QuizList.css';
import {NavLink} from 'react-router-dom';

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