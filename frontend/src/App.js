import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Container from '@mui/material/Container'
import useTheme from '@mui/material/styles/useTheme'

import './App.css'

import { NavBar } from './components'

import { setBrowserId, setSessionIds } from './lib/functions'
import { Pageview, DevRoutes } from './utilities'

function App() {
  const theme = useTheme()

  useEffect(() => {
    setBrowserId()
    setSessionIds()
  }, [])

  return (
    <Router>
      <Pageview />
      <NavBar />
      <Container sx={{ paddingTop: theme.spacing(2) }}>
        {/* Use when in production to hide develop routes during deployment */}
        {/* {window.location.hostname === 'localhost' ? <DevRoutes /> : <Routes />} */}
        <DevRoutes />
      </Container>
    </Router>
  )
}

export default App
