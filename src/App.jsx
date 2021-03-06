import React from 'react'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import Inicio from './components/Inicio'
import Login from './components/Login'
import Admin from './components/Admin'
import Menu from './components/Menu'
const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path='/' component={Inicio}></Route>
         <Route path="/login" exact component={Login}></Route>
         <Route path ="/admin" exact component={Admin}></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App

