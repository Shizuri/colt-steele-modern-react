import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Soda extends Component{
    render(){
        return(
            <div>
                Soda Component
                <br />
                <Link to='/'>Go back</Link>
            </div>
        );
    }
}

export default Soda;