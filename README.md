# Simple Component React library
This is a simple code base for a react component library with @emotion and storybook

[Library Documentation](https://camiloacosta.github.io/react-library-example)

## Implementation
After clone the repo and install the dependencies, just run `npm link`, then go to the main project and link the package with `npm link storybook-demo`, then you have to change the webpack config to set the alias for `react, @emotion/core, @emotion/styled, emotion-theming` like this:

```js
// webpack.config.js or whatever the file you configure webpack

{
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      '@emotion/core': path.resolve('./node_modules/@emotion/core'),
      '@emotion/styled': path.resolve('./node_modules/@emotion/styled'),
      'emotion-theming': path.resolve('./node_modules/emotion-theming')
    }
  }
}
```

You have to use `ThemProvider` from `emotion-theming` in order to set the theme to be used in the library

```jsx
import React from 'react';
import { ThemeProvider } from 'emotion-theming'
import { Button } from 'storybook-demo'

const theme = {
  colors: {
    primary: 'blue',
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={...} label="Hello World Button" />
    </ThemeProvider>
  );
}

export default App;
```