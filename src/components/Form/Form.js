import './Form.css'
import React, {useRef } from 'react';


const Form = (props) => {

    // const [enteredUsername, setEnteredUsername] = useState('')
    // const [enteredAge, setEnteredAge] = useState('')


    //instead of using state for input elements which re-renders for each key stroke
    // we can avoid these unnecessary re-renders by using refs to store references of dom elements and access its value;

    const nameInputRef=useRef();
    const ageInputRef=useRef();
    const collegeInputRef=useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const enteredName=nameInputRef.current.value;
        const enteredAge=ageInputRef.current.value;
        const enteredCollegeName=collegeInputRef.current.value;
        

        if (enteredName.trim().length === 0 || enteredCollegeName.trim().length===0) {
            props.onChangeModalVisibility(true, 'Please enter valid data (non empty values)')
            return;
        }

        console.log(enteredAge)

        if (enteredAge <= 0) {
            props.onChangeModalVisibility(true, 'Please enter valid age (>0)')
            ageInputRef.current.value=''
            return;
        }

        const userDetails = {
            id: Math.random().toString(),
            username: enteredName,
            age: enteredAge,
            collegeName:enteredCollegeName
        }

        console.log(userDetails)

        props.onSubmit(userDetails)

        // setEnteredAge('')
        // setEnteredUsername('')

        nameInputRef.current.value='';
        ageInputRef.current.value='';
        collegeInputRef.current.value='';
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

                    <div className='new-user__control'>
                        <label>College Name</label>
                        <input type='text' ref={collegeInputRef}></input>
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