import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const StyledButton = styled.button(
  ({ theme }) => css`
    background-color: ${theme.colors.primary};
  `
)

export const Button = ({ onClick, label }) => {
  return (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
