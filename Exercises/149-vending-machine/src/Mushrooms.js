import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';

class Mushrooms extends Component {
    render() {
        return (
            <div>
                <Message>
                    <p>Mushrooms</p>
                </Message>
                <img src='https://www.abelandcole.co.uk/media/453_14471_z.jpg' alt='Mushrooms' />
                <p><NavLink exact to='/'>Home</NavLink></p>
            </div>
        );
    }
}

export default Mushrooms;