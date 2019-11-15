import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Stake extends Component {
    render() {
        return(
            <div>
                <p>Stake</p>
                <img src='https://www.thehealthy.com/wp-content/uploads/2018/04/shutterstock_298170545-800x450.jpg' alt='Stake'/>
                <p><NavLink exact to='/'>Home</NavLink></p>
            </div>
        );
    }
}

export default Stake;