import React, {Component} from 'react';

export default class Contact extends Component{
    render(){
        return(
            <>
            <div className="contactus">
                <label>Name</label>
                <input type="text" placeholder="Name"></input>
                <br></br>
                <label>Email</label>
                <input type="text" placeholder="Email"></input>
                <br></br>
                <label>Phone</label>
                <input type="number" placeholder="Phone"></input>
                <br></br>
                <label>Message</label>
                <input type="text" placeholder="Message"></input>
            </div>
            </>
        );
    }
}