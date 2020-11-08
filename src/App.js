import React,{Component} from 'react';
import Mainpage from './Pages/Index.js';
import Contact from './Pages/Contact.js';
import About from './Pages/About.js';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

export default class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
        <Route exact path="/Vircom-Team-Web" component={Mainpage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}