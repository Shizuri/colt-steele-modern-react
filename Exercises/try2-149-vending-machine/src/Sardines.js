import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sardines extends Component{
    render(){
        return(
            <div>
                Sardines Component
                <br />
                <Link to='/'>Go back</Link>
            </div>
        );
    }
}

export default Sardines;