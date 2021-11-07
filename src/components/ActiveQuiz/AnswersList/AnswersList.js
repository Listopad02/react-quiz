import React from 'react';
import classes from './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        { props.answers.map((answer, i) => {
            return (
                <AnswerItem key={i} answer={answer} 
                            onAnswerClick={props.onAnswerClick} />
            )
        }) }
    </ul>
)

export default AnswersList;