import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import IdolList from './IdolList';
import ModList from './ModList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route exact path="/">
            <IdolList />
          </Route>
          <Route path="/about">
            <ModList />
          </Route>
        </Switch>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
