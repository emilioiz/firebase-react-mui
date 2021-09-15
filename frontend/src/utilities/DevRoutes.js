import { Switch, Route } from 'react-router-dom'

import { Admin, GenericNotFound, Home, Theme } from '../pages'

export default function DevRoutes() {
  return (
    <Switch>
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route exact path='/' component={Home} />
        <Route path='/theme' component={Theme} />
        <Route component={GenericNotFound} />
      </Switch>
    </Switch>
  )
}
