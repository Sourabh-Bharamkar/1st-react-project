
import './InvalidInputModal.css'
import React from 'react'
import ReactDom from 'react-dom'


const Backdrop = (props) => {

    const closeModalHandler=()=>{
        props.onChangeModalVisibility(false)
    }

    return (

        <div id="myModal" onClick={closeModalHandler} className='modal'>
        </div>
    )
}

const Modal = (props) => {

    const closeModalHandler = (e) => {
        props.onChangeModalVisibility(false)

    }

    return (
        <div className="modal-content">

            <div className="modal-header">
                <h2>Invalid Input</h2>
                <span className="close" onClick={closeModalHandler}>&times;</span>
            </div>

            <div className="modal-body">
                <p>{props.modalMessage}</p>
            </div>

            <div className="modal-footer">
                <button onClick={closeModalHandler}>Okay</button>
            </div>

        </div>
    )
}

const InvalidInputModal = (props) => {

    return (

        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onChangeModalVisibility={props.onChangeModalVisibility} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modal modalMessage={props.modalMessage} onChangeModalVisibility={props.onChangeModalVisibility}  />,document.getElementById('overlay-root'))}
        </React.Fragment>

    )
}

export default InvalidInputModal;