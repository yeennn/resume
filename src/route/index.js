import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from '../pages/welcome'
import Notfound from '../pages/notfound'
import Home from '../pages/home'


export default () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/home" component={Home} />
    <Route component={Notfound} />
  </Switch>
)