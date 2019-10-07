import React, { Component } from 'react';

class Box extends Component {
    render() {
        let styling = {
            backgroundColor: this.props.color,
            width: '150px',
            height: '150px',
            display: 'inline-block'
        }
        return (
            <div style={styling}>
                
            </div>
        );
    }
}

export default Box;