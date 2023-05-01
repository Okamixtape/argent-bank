import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { userUpdate } from '../../Features/User/userSlice'

import './userheader.css'

const UserHeader = () => {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.user)

  const [toggle, setToggle] = useState(false)

  const handleEditButton = () => {
    setToggle(!toggle)
  }

  const [userInput, setUserInput] = useState({ firstName: '', lastName: '' })

  const inputHandle = (e) => {
    setUserInput(() => ({
      ...userInput,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // To modify the user's data with the API (with user's token for authentication)
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userState.token}`,
      },
      body: JSON.stringify({
        firstName: userInput.firstName,
        lastName: userInput.lastName,
      }),
    })
    dispatch(userUpdate(userInput))
    handleEditButton()
  }

  return (
    <div className="header">
      {!toggle ? (
        <>
          <h1>
            Welcome back
            <br />
            {userState.firstName} {userState.lastName} !
          </h1>
          <button className="edit-button" onClick={handleEditButton}>
            Edit Name
          </button>
        </>
      ) : (
        <>
          <h1>Welcome back</h1>
          <form className="form-edit" onSubmit={handleSubmit}>
            <div className="form__inputs">
              <input
                name="firstName"
                onChange={inputHandle}
                className="edit-input"
                type="text"
                placeholder={userState.firstName}
                required
              />
              <input
                name="lastName"
                onChange={inputHandle}
                className="edit-input"
                type="text"
                placeholder={userState.lastName}
                required
              />
            </div>
            <div className="form__buttons">
              <button className="edit-button" type="submit">
                Save
              </button>
              <button className="edit-button" onClick={handleEditButton}>
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default UserHeader
