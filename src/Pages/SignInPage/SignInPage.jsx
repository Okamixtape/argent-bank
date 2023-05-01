import React from 'react'

import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import SignInForm from '../../Components/SignInForm/SignInForm'

const SignInPage = () => {
  document.title = 'Argent Bank - Sign In'
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </>
  )
}

export default SignInPage
