import React from 'react';
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends React.Component {
    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
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
                question: 'Who is Tom Cruz?',
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

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];
        
        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout);
            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'failure'}
            })
        }
    }

    isQuizFinished () {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all the questions</h1>
                    {
                        this.state.isFinished 
                        ? <FinishedQuiz />
                        : <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1} 
                            state={this.state.answerState} />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;