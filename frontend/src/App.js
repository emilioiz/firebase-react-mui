import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Container from '@mui/material/Container'
import useTheme from '@mui/material/styles/useTheme'

import './App.css'

import { NavBar } from './components'

import { setBrowserId, setSessionIds } from './lib/functions'
import { Pageview, Routes, DevRoutes } from './utilities'

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
        {window.location.hostname === 'localhost' ? <DevRoutes /> : <Routes />}
      </Container>
    </Router>
  )
}

export default App
