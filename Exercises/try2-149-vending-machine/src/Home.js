import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        A discription of what a vending machine is.
                    </div>
                    <div>
                        <Link style={{ paddingRight: '10px' }} to='/soda'>Soda</Link>
                        <Link style={{ paddingRight: '10px' }} to='/chips'>Chips</Link>
                        <Link to='/sardines'>Sardines</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;