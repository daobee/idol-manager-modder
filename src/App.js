import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Sider from './Pages/Sider';
import IdolList from './Pages/IdolList';
import ModList from './Pages/ModList';

class App extends React.Component {
  render () {
    return (
      <div id="outer-container">
        <Sider />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/"><IdolList /></Route>
            <Route exact path="/idolList"><IdolList /></Route>
            <Route path="/modList"><ModList /></Route>
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
