import React, { Component } from 'react';

class Dog extends Component {
    componentDidMount() {
        console.log('Dog did mount');
    }
    componentWillUnmount() {
        console.log('Dog will unmount');
    }
    render() {
        console.log('Dog rendered');
        return (
            <div>
                <h1>Dog Component</h1>
                <h3>This dog is named: {this.props.name}</h3>
                <img src='https://www.petmd.com/sites/default/files/breedopedia/6011_1100057901538_2082171_n--Muffin%20Gricus.jpg' alt='dog' />
            </div>
        );
    }
}

export default Dog;