import React from 'react';
import './App.css';
import "react-awesome-button/dist/styles.css";
import { Route, Switch } from "react-router-dom";
import Sider from './Pages/Sider';
import IdolList from './Pages/IdolList';
import ModList from './Pages/ModList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }  

  handleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render () {
    return (
      <div id="outer-container">
        <Sider isMenuOpen={this.state.isMenuOpen} handleMenu={this.handleMenu}/>
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
