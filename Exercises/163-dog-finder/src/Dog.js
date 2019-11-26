import React, { Component } from 'react';
import uuid from 'uuid/v4';

class Dog extends Component {
    render() {
        const dog = this.props.dogs.find(dog => dog.src === this.props.match.params.dogName);
        const {name, age, src, facts} = dog;

        return (
            <div style={{ border: '1px solid black' }}>
                <img src={`/images/${src}.jpg`} alt={name} />
                <h2>{name}</h2>
                <p>{age} years old</p>
                <ul>
                    {facts.map(fact => <li key={uuid()}>{fact}</li>)}
                </ul>
            </div>
        );
    }
}

export default Dog;