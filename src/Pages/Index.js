import React,{Component} from 'react';
import Navbar from './Nav.js';

export default class Index extends Component{
    state={
      toggle:false
    }
    
    Toggle = () => this.setState({toggle:!this.state.toggle});
  
    render(){
      return(
        <>
        <div className="Nav">
          
        </div>
        </>
      );
    }
  }