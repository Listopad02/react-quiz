import React from "react";
import classes from './QuizList.css';
import {NavLink} from 'react-router-dom';
import axios from "axios";

export default class QuizList extends React.Component {
    state = {
        quizes: [],

    }

    renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz.id}>{quiz.name}</NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://react-quiz-9c4e1-default-rtdb.firebaseio.com/quizes.json');

            const quizes = [];
            Object.keys(response.data).forEach((key, i) => {
                quizes.push({
                    id: key,
                    name: `Test №${i + 1}`
                })
            })
            this.setState({
                quizes
            })
        } catch (e) {
            console.log(e);
        }
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