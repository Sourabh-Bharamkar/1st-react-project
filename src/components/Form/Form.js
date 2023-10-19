import './Form.css'
import React, { useState } from 'react';


const Form = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (enteredUsername.trim().length === 0) {
            props.onChangeModalVisibility(true, 'Please enter valid name and age (non empty values)')
            return;
        }

        if (enteredAge < 0) {
            props.onChangeModalVisibility(true, 'Please enter valid age (>0)')
            setEnteredAge('')
            setEnteredUsername('')
            return;
        }

        const userDetails = {
            id: Math.random().toString(),
            username: enteredUsername,
            age: enteredAge
        }

        console.log(userDetails)

        props.onSubmit(userDetails)

        setEnteredAge('')
        setEnteredUsername('')

    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }


    return (
        <div>
            <form className='new-user__form' onSubmit={formSubmitHandler}>

                <div className='new-user__controls'>
                    <div className='new-user__control'>
                        <label> Username </label>
                        <input type='text' value={enteredUsername} onChange={usernameChangeHandler} ></input>
                    </div>

                    <div className='new-user__control'>
                        <label> Age (Years) </label>
                        <input type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                    </div>
                </div>

                <div className='new-user__actions'>
                    <button type='submit'>Add User</button>
                </div>

            </form>
        </div>
    )
}

export default Form;