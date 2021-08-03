import React from 'react';
import { Route, Switch } from "react-router-dom";
import IdolList from './IdolList';
import ModList from './ModList';

class Routes extends React.Component {
  render () {
    return (
      <div id="page-wrap">
        <Switch>
          <Route exact path="/"><IdolList /></Route>
          <Route exact path="/idolList"><IdolList /></Route>
          <Route path="/modList"><ModList /></Route>
        </Switch>
      </div>
    );
  }
}


export default Routes;
