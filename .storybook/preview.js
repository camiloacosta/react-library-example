import React from 'react'
import { ThemeProvider } from 'emotion-theming'

const ALPHA_THEME = {
  colors: {
    primary: 'green'
  }
}

const BETA_THEME = {
  colors: {
    primary: 'purple'
  }
}

const THEMES = {
  alpha: ALPHA_THEME,
  beta: BETA_THEME
}

const withThemeProvider = (Story, context) => {
  const theme = THEMES[context.globals.theme] || ALPHA_THEME
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Switch themes',
    defaultValue: 'alpha',
    toolbar: {
      icon: 'box',
      items: [
        { value: 'alpha', title: 'Alpha' },
        { value: 'beta', title: 'Beta' },
      ]
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}