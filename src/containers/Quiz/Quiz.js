import React from 'react';
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends React.Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'How are you?',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    {text: 'Good', id: 1},
                    {text: 'Not bad', id: 2},
                    {text: 'Just bad', id: 3},
                    {text: 'Awful', id: 4}
                ]
            },
            {
                question: 'Who is Tom Cruz',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    {text: 'Singer', id: 1},
                    {text: 'Actor', id: 2},
                    {text: 'Writer', id: 3},
                    {text: 'Nobody', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('AnswerId: ', answerId);
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all the questions</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers}
                                question={this.state.quiz[0].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1} />
                </div>
            </div>
        )
    }
}

export default Quiz;