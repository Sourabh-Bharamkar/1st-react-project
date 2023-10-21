import './Form.css'
import React, {useRef } from 'react';


const Form = (props) => {

    // const [enteredUsername, setEnteredUsername] = useState('')
    // const [enteredAge, setEnteredAge] = useState('')


    //instead of using state for input elements which re-renders for each key stroke
    // we can avoid these unnecessary re-renders by using refs to store references of dom elements and access its value;

    const nameInputRef=useRef();
    const ageInputRef=useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const enteredName=nameInputRef.current.value;
        const enteredInputAge=ageInputRef.current.value;
        

        if (enteredName.trim().length === 0) {
            props.onChangeModalVisibility(true, 'Please enter valid name and age (non empty values)')
            return;
        }

        console.log(enteredInputAge)

        if (enteredInputAge <= 0) {
            props.onChangeModalVisibility(true, 'Please enter valid age (>0)')
            ageInputRef.current.value=''
            return;
        }

        const userDetails = {
            id: Math.random().toString(),
            username: enteredName,
            age: enteredInputAge
        }

        console.log(userDetails)

        props.onSubmit(userDetails)

        // setEnteredAge('')
        // setEnteredUsername('')

        nameInputRef.current.value='';
        ageInputRef.current.value=''
        //generally we should avoid manipulating dom like above but here it is okay as we are not adding new node or changing css etc...

    }



    return (
        <div>
            <form className='new-user__form' onSubmit={formSubmitHandler}>

                <div className='new-user__controls'>
                    <div className='new-user__control'>
                        <label> Username </label>
                        <input type='text' ref={nameInputRef} ></input>
                    </div>

                    <div className='new-user__control'>
                        <label> Age (Years) </label>
                        <input type="number"  ref={ageInputRef} ></input>
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