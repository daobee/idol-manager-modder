import React from 'react';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import { pushRotate as Menu } from 'react-burger-menu'
import IdolList from './IdolList';
import ModList from './ModList';

class App extends React.Component {
  render () {
    return (
      <div id="outer-container">
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <Link id="idolList" className="menu-item" to="/idolList">Idols</Link>
          <Link id="modList" className="menu-item" to="/modList">Mods</Link>
        </Menu>
        <div id="page-wrap">
          <Switch>
            <Route exact path="/idolList">
              <IdolList />
            </Route>
            <Route path="/modList">
              <ModList />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
