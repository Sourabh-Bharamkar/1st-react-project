import Form from './components/Form/Form'
import ItemList from './components/ItemList/ItemList'
import React, { useState } from 'react';
import InvalidInputModal from './components/InvalidInputModal/InvalidInputModal'

function App() {

  const [usersList, setUsersList] = useState([])
  const [modalVisibility, setModalvisibility] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const onSubmitHandler = (user) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, user]
    })

    console.log(usersList)
  }

  const modalVisibilityHandler = (modalVisibility, message) => {
    setModalvisibility(modalVisibility)
    setModalMessage(message)
  }

  if (!modalVisibility) {
    return (
      <div>
        <Form onSubmit={onSubmitHandler} onChangeModalVisibility={modalVisibilityHandler}></Form>
        <ItemList usersList={usersList}></ItemList>
      </div>

    )
  }

  return (
    <div>
      <InvalidInputModal isVisible={modalVisibility} modalMessage={modalMessage} onChangeModalVisibility={modalVisibilityHandler}></InvalidInputModal>
      <Form onSubmit={onSubmitHandler} onChangeModalVisibility={modalVisibilityHandler}></Form>
      <ItemList usersList={usersList}></ItemList>
    </div>
  );
}

export default App;
