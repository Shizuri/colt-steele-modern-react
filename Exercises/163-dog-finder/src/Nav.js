import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className='Nav'>
                <NavLink className='Nav-link' activeClassName='Nav-active' exact to='/dogs'>Home</NavLink>
                {this.props.dogs.map(dog => <NavLink className='Nav-link' activeClassName='Nav-active' exact to={`/dogs/${dog.src}`} key={dog.name}>{dog.name}</NavLink>)}
            </nav>
        );
    }
}

export default Nav;