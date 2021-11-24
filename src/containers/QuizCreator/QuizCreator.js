import React from "react";
import classes from './QuizCreator.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Select from "../../components/UI/Select/Select";
import {createControl} from '../../form/formFramework';

function createOptionControl(number) {
    return createControl({
        label: `Option ${number}`,
        errorMessage: 'Value can not be empty',
        id: number
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Enter a question',
            errorMessage: 'Question can not be empty'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}

export default class QuizCreator extends React.Component {
    state = {
        quiz: [],
        rightAnswerId: 1,
        formControls: createFormControls()
    }

    submitHandler = e => {
        e.preventDefault();
    }
    addQuestionHandler = () => {
        console.log('test');
    }
    createQuizHandler = () => {
        console.log('test');
    }
    changeHandler = (value, controlName) => {

    }
    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, i) => {
            const control = this.state.formControls[controlName];

            return (
                <React.Fragment key={controlName + i}>
                    <Input label={control.label} value={control.value} valid={control.valid} 
                        shouldValidate={!!control.validation} touched={control.touched}
                        errorMessage={control.errorMessage} 
                        onChange={e => this.changeHandler(e.target.value, controlName)} />
                    { i === 0 ? <hr /> : null }
                </React.Fragment>
            )
        })
    }

    selectChangeHandler = e => {
        this.setState({
            rightAnswerId: +e.target.value
        })
    }

    render () {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Create a new test</h1>
                    <form onSubmit={this.submitHandler}>
                        { this.renderControls() }

                        <Select label="Choose the correct answer" value={this.state.rightAnswerId}
                                onChange={this.selectChangeHandler}
                                options={[
                                    {text: 1, value: 1},
                                    {text: 2, value: 2},
                                    {text: 3, value: 3},
                                    {text: 4, value: 4}
                                ]} />
                        <Button type="primary" onClick={this.addQuestionHandler}>Add question</Button>
                        <Button type="success" onClick={this.createQuizHandler}>Create test</Button>
                    </form>
                </div>
            </div>
        )
    }
}