import { Switch, Route } from 'react-router-dom'

import { GenericNotFound, Home } from '../pages'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={GenericNotFound} />
    </Switch>
  )
}
