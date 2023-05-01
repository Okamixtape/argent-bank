import React from 'react'

import propTypes from 'prop-types'

import './account.css'

const Account = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

Account.propTypes = {
  title: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}

export default Account
