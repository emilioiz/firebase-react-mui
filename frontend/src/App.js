import { useEffect } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Container from '@mui/material/Container'
import useTheme from '@mui/material/styles/useTheme'

import './App.css'

import { Admin, GenericNotFound, Home, Theme } from './pages'
import { NavBar } from './components'

import { setBrowserId, setSessionIds } from './lib/functions'

function App() {
  const theme = useTheme()

  useEffect(() => {
    setBrowserId()
    setSessionIds()
  }, [])

  return (
    <Router>
      <NavBar />
      <Container sx={{ paddingTop: theme.spacing(2) }}>
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route exact path='/' component={Home} />
          <Route path='/theme' component={Theme} />
          <Route component={GenericNotFound} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
