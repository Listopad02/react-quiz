import React from "react";
import classes from './FinishedQuiz.css'

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1. </strong>
                    How are you?
                    <i className={'fa fa-times ' + classes.failure} />
                </li>
                <li>
                    <strong>2. </strong>
                    Who is Tom Cruz?
                    <i className={'fa fa-check ' + classes.success} />
                </li>
            </ul>
            <p>Correct: 4 of 10</p>
            <div>
                <button>Try again</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;