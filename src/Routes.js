import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Home from './components/Home'
const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Home} />
      </Switch>
    </Router>

  );
}

export default Routes;