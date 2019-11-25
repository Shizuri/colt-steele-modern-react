import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <h1 className='display-4'>A discription of what a vending machine is.</h1>
                    </div>
                    <div className='col display-4 nav flex-column'>
                        <Link to='/soda' className='nav-link'>Soda</Link>
                        <Link to='/chips' className='nav-link'>Chips</Link>
                        <Link to='/sardines' className='nav-link'>Sardines</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;