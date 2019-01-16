import React, { Component } from 'react';
import {
  Redirect,
  Route,
  Link,
  Switch,
  BrowserRouter as Router} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import Header from './components/Header';
import Login from './components/Login';
import Registration from './components/Registration';
import Contacts from './components/Contacts';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Registration} />
            <PrivateRoute path="/" exact component={Contacts} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
