import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import useTheme from '@mui/material/styles/useTheme'

import './App.css'

import { Admin, GenericNotFound, Home, Theme } from './Pages'
import { NavBar } from './Components'

function App() {
  const theme = useTheme()
  console.log('MUI Theme:', theme)

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route exact path='/' component={Home} />
        <Route path='/theme' component={Theme} />
        <Route component={GenericNotFound} />
      </Switch>
    </Router>
  )
}

export default App
