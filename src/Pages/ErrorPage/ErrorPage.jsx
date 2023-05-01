import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../Components/Header/Header'

import './errorpage.css'

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="error-header">
        <h1>ERROR 404</h1>
        <NavLink to={'/'}>Back to Homepage</NavLink>
      </div>
    </div>
  )
}

export default ErrorPage
