import React, { Component } from 'react';

class Box extends Component {

    render() {
        const { height, width, color, id } = this.props;
        console.log(id);
        const styl = {
            height: `${height}px`,
            width: width + 'px',
            backgroundColor: color
        }

        return (
            <div>
                <div style={styl}></div>
                <button onClick={() => this.props.removeBox(id)}>Remove box</button>
            </div>
        );
    }
}

export default Box;