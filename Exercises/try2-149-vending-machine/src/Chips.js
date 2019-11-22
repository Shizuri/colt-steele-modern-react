import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chips extends Component{
    render(){
        return(
            <div>
                Chips Component with prop: {this.props.aProp}
                <br />
                <Link to='/'>Go back</Link>
            </div>
        );
    }
}

export default Chips;