import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component{
  state={
    toggle:false
  }
  
  Toggle = () => this.setState({toggle:!this.state.toggle});

  render(){
    return(
      <>
      <div className="Navbar">
        <button onClick={this.Toggle}>
          =
        </button>
        <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
          <li><NavLink className="menu" activeClassName="menu-active" to="/Vircom-Team-Web">Home</NavLink></li>
          <li><NavLink className="menu" activeClassName="menu-active" to="/about">About Us</NavLink></li>
          <li><NavLink className="menu" activeClassName="menu-active" to="/contact">Contact Us</NavLink></li>
          <img src={process.env.PUBLIC_URL + '/vircom-logo.png'} alt="Logo"/>
        </ul>
      </div>
      <hr></hr>
      </>
    );
  }
}