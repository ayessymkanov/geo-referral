import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/main'
import Login from './components/login'
import Signup from './components/signup'
import Explanation from './components/explanation'
import Waiting from './components/waiting'
import ShareScreen from './components/shareScreen'
import Notify from './components/notify'
import NotFound from './components/notfound'
import RequireAuth from './components/requireAuth'

const requireAuth = Component => props => (
  <RequireAuth {...props}>
    <Component {...props} />
  </RequireAuth>
)

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/explanation' component={Explanation} />
      <Route path='/waiting' component={requireAuth(Waiting)} />
      <Route path='/share' component={requireAuth(ShareScreen)} />
      <Route path='/notify' component={requireAuth(Notify)} />
      <Route path='/' component={NotFound} />
    </Switch>
  </BrowserRouter>
)
