import React from 'react'

import propTypes from 'prop-types'

import './featureitem.css'

const FeatureItem = ({ icon, label, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{label}</h3>
      <p>{description}</p>
    </div>
  )
}

FeatureItem.propTypes = {
  icon: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}

export default FeatureItem
