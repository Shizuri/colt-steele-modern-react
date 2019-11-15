import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Jogurt extends Component {
    render() {
        return(
            <div>
                <p>Jogurt</p>
                <img src='https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/B6ADCE14-192F-4B0E-8498-A71B2F6F4A91/Derivates/C6F250B0-6E8F-47ED-BFAD-1C617B7E54A1.jpg' alt='jogurt' />
                <p><NavLink exact to='/'>Home</NavLink></p>
            </div>
        );
    }
}

export default Jogurt;