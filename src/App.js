import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavbarComponent from './components/Navbar.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import User from './components/User.js';
import StockPage from './components/StockPage.js';
import Search from './components/Search.js';
import './App.css';

function App() {
    const [jwt, setJwt] = useState(
        sessionStorage.getItem('token') || null);
    const jwtAuth = (token, user) => {
        console.log(token);
        console.log(user);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', user.email);
        setJwt(token);
    };
    const logout = () => {
        sessionStorage.removeItem('token');
        setJwt(null);
    };

    return (
  <Router>
    <div className="App">
      <NavbarComponent jwt={jwt} logout={logout}></NavbarComponent>
      <Route exact path="/" component={Home} />
      <Route
          path="/login"
          render={props => <Login {...props} jwtAuth={jwtAuth} />}
      />
      <Route path="/register" component={Register} />
      <Route path="/user" component={User} />
      <Route path="/search" component={Search} />
      <Route path="/stock-page/:stock" component={StockPage} />
    </div>
  </Router>
    );
};

export default App;
