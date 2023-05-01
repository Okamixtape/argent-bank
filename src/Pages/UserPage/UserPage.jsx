import React from 'react'

import { useSelector } from 'react-redux'

import Account from '../../Components/Account/Account'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import UserHeader from '../../Components/UserHeader/UserHeader'

const UserPage = () => {
  const userState = useSelector((state) => state.user)

  document.title = `Argent Bank - ${
    userState.firstName + ' ' + userState.lastName
  }`

  const accountA = {
    title: 'Argent Bank Checking (x8349)',
    description: 'Available Balance',
    amount: '$2,082.79',
  }

  const accountB = {
    title: 'Argent Bank Savings (x6712)',
    description: 'Available Balance',
    amount: '$10,928.42',
  }

  const accountC = {
    title: 'Argent Bank Credit Card (x8349)',
    description: 'Current Balance',
    amount: '$184.30',
  }

  return (
    <>
      <Header user={userState} />
      <main className="main bg-dark">
        <UserHeader />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title={accountA.title}
          description={accountA.description}
          amount={accountA.amount}
        />
        <Account
          title={accountB.title}
          description={accountB.description}
          amount={accountB.amount}
        />
        <Account
          title={accountC.title}
          description={accountC.description}
          amount={accountC.amount}
        />
      </main>
      <Footer />
    </>
  )
}

export default UserPage
