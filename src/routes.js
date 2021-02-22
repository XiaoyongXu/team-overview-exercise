import React from 'react'
import path from './utils/path'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import TeamOverview from './scenes/TeamOverview'
import TeamDetails from './scenes/TeamDetails'
import UserDetails from './scenes/UserDetails'

const Routes = () => {
  return (
    <Router>
        <div>
          <Switch>
            <Route path={path.teamDetails} component={TeamDetails} />
            <Route path={path.userDetails} component={UserDetails} />
            <Route path="/" component={TeamOverview} />
            <Redirect to="/" />
          </Switch>
        </div>
    </Router>
  )
}

export default Routes
