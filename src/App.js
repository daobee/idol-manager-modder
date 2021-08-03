import React from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';
import "react-awesome-button/dist/themes/theme-amber.css";
import 'react-toastify/dist/ReactToastify.css';

import Sider from './Pages/Sider';
import Routes from './Pages/Routes';

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
        <ToastContainer />
        <Sider isMenuOpen={this.state.isMenuOpen} handleMenu={this.handleMenu}/>
        <Routes />
      </div>
    );
  }
}


export default App;
