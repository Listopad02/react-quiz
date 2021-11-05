import React from 'react';
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends React.Component {
    state = {
        quiz: [
            {
                answers: [
                    {text: 'Good'},
                    {text: 'Not bad'},
                    {text: 'Not good'},
                    {text: 'Awful'}
                ]
            }
        ]
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all the questions</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers} />
                </div>
            </div>
        )
    }
}

export default Quiz;