import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Home from './components/Home'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>

  );
}

export default Routes;