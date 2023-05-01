import React from 'react'

import propTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { userLogout } from '../../Features/User/userSlice'

import ArgentBankLogo from './argentBankLogo.png'

import './header.css'

const Header = ({ user }) => {
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(userLogout())
  }

  if (user) {
    return (
      <nav className="main-nav">
        <NavLink to={'/'} className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        <div>
          <NavLink className="main-nav-item" to={'/profile'}>
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </NavLink>
          <NavLink className="main-nav-item" to={'/'} onClick={signOut}>
            <i className="fa fa-user-circle"></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="main-nav">
        <NavLink to={'/'} className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink className="main-nav-item" to={'/login'}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  user: propTypes.object,
}

export default Header
