import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

