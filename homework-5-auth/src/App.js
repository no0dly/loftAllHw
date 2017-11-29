import React, { Component } from "react";
import {
  addListener,
  removeListener,
  isAuthorized
} from "./AuthorizeApi";
import {
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "./Home.js";
import Public from "./Public.js";
import Private from "./Private.js";
import Auth from "./Auth.js";
import "./App.css";

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized });
  };

  render() {
    const { isAuthorized } = this.state;
    return (
      <div>
        <ul className="nav">
          <li>
            <Link to="/auth">Войти</Link>
          </li>
          <li>
            <Link to="/private">Секретная страница</Link>
          </li>
          <li>
            <Link to="/public">Публичная страница</Link>
          </li>
          <li>
            <Link to="/">Главная</Link>
          </li>
        </ul>
        <hr />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/public" component={Public} />
            <Route path="/auth" component={Auth} />
            {!isAuthorized ? (
              <Redirect from="/private" to="/auth" />
            ) : (
              <Route path="/private" component={Private} />
            )}
            {!isAuthorized ? (
              <Redirect from="*" to="/" />
            ) : null}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
