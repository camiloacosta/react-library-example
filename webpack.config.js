const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'storybook-demo',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      '@emotion/core': path.resolve(__dirname, './node_modules/@emotion/core'),
      '@emotion/styled': path.resolve(__dirname, './node_modules/@emotion/styled'),
      'emotion-theming': path.resolve(__dirname, './node_modules/emotion-theming'),
    } 
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom'
    },
    '@emotion/core': {
      commonjs: '@emotion/core',
      commonjs2: '@emotion/core'
    },
    '@emotion/styled': {
      commonjs: '@emotion/styled',
      commonjs2: '@emotion/styled'
    },
    'emotion-theming': {
      commonjs: 'emotion-theming',
      commonjs2: 'emotion-theming'
    }
  }
}