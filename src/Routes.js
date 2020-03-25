import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Home} />
    </Switch>
  );
}

export default Routes;