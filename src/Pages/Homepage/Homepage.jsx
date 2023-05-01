import React from 'react'

import { useSelector } from 'react-redux'

import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import FeatureItem from '../../Components/FeatureItem/FeatureItem'

import iconChat from '../../Components/FeatureItem/icon-chat.png'
import iconMoney from '../../Components/FeatureItem/icon-money.png'
import iconSecurity from '../../Components/FeatureItem/icon-security.png'

import './homepage.css'

const Homepage = () => {
  document.title = 'Argent Bank - Homepage'
  const isLogged = useSelector((state) => state.user.isLogged)
  const userData = useSelector((state) => state.user)

  const features = [
    {
      icon: iconChat,
      label: 'You are our #1 priority',
      description:
        'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      icon: iconMoney,
      label: 'More savings means higher rates',
      description:
        'The more you save with us, the higher your interest rate will be!',
    },
    {
      icon: iconSecurity,
      label: 'Security you can trust',
      description:
        'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ]
  return (
    <>
      {isLogged ? <Header user={userData} /> : <Header />}
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {features.map((item, index) => (
            <FeatureItem
              key={index}
              label={item.label}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Homepage
