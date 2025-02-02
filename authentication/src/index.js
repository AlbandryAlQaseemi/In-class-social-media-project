import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Contact'
import Home from './Home'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,
Route, Link} from 'react-router-dom'

ReactDOM.render(
  <Router>
  
    <Route exact path="/" component={App}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/Logout" component={App}/>

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
