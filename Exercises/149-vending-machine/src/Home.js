import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <div className='Home-text-container'>
                    <div className='Home-text'>Hello I am a vending machine.<br /> What would you like to eat?</div>
                    <div className='Home-links'>
                        <NavLink className='Home-single-link' exact to='/jogurt'>Jogurt</NavLink>
                        <NavLink className='Home-single-link' exact to='/mushrooms'>Mushrooms</NavLink>
                        <NavLink className='Home-single-link' exact to='/stake'>Stake</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;