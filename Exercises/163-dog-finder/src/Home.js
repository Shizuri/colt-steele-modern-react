import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className='display-3'>Click a Dog!</h1>
                <Link to='/dogs/whiskey'>Whiskey</Link>
                <Link to='/dogs/hazel'>Hazel</Link>
                <Link to='/dogs/tubby'>Tubby</Link>
            </div>
        );
    }
}

export default Home;