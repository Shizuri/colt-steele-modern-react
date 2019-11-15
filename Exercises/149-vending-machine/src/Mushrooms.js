import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Mushrooms extends Component {
    render() {
        return(
            <div>
                <p>Mushrooms</p>
                <img src='https://www.abelandcole.co.uk/media/453_14471_z.jpg' alt='Mushrooms'/>
                <p><NavLink exact to='/'>Home</NavLink></p>
            </div>
        );
    }
}

export default Mushrooms;