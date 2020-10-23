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
          <li><NavLink  to="/home" activeClassName="linkscss">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </div>
      <hr></hr>
      </>
    );
  }
}