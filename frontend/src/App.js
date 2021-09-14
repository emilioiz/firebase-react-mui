import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import './App.css'

import { Admin, GenericNotFound, Home, Theme } from './pages'
import { NavBar } from './components'

function App() {
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
