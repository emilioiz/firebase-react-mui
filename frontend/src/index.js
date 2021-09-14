import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#355E3B',
      light: '#589D62',
      dark: '#2C4E31',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFC145',
      light: '#FFB41F',
      dark: '#FFDD99',
      contrastText: '#FFFFFF'
    },
    background: {
      paper: '#000',
      default: '#fff'
    },
    common: {
      black: '#171A21',
      white: '#'
    },
    grey: {
      50: '#CDD6E0',
      100: '#C0CCD8',
      200: '#B4C2D0',
      300: '#A7B8C8',
      400: '#9BADCO',
      500: '#8EA3B8',
      600: '#7A93AC',
      700: '#758FA9',
      800: '#6885A1',
      900: '#5E7A97'
    },
    text: {
      primary: 'rgba(23,26,33,0.87)',
      secondary: 'rgba(23,26,33,0.6)',
      disabled: 'rgba(23,26,33,0.38)'
    }
  },
  typography: {
    fontFamily: `'Merriweather', serif`,
    fontWeightThin: 200,
    fontWeightSemiBold: 600,
    button: { fontFamily: `'Montserrat', san-serif` },
    body1: { fontFamily: `'Montserrat', san-serif` },
    body2: { fontFamily: `'Montserrat', san-serif` },
    caption: { fontFamily: `'Montserrat', san-serif` }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
