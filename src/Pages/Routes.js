import React from 'react';
import { Route, Switch } from "react-router-dom";
import IdolList from './IdolList';
import ModList from './ModList';
import IdolEditor from './IdolEditor';

class Routes extends React.Component {
  render () {
    return (
      <div id="page-wrap">
        <Switch>
          <Route exact path="/"><IdolList /></Route>
          <Route exact path="/idolList"><IdolList /></Route>
          <Route exact path="/modList"><ModList /></Route>
          <Route exact path="/idolEditor"><IdolEditor /></Route>
        </Switch>
      </div>
    );
  }
}


export default Routes;
