import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { Link } from 'react-router-dom';

class Dog extends Component {
    render() {
        const dog = this.props.dogs.find(dog => dog.src === this.props.match.params.dogName);
        const { name, age, src, facts } = dog;

        return (
            <div style={{ border: '1px solid blue', width: '50%', margin: '0 auto' }}>
                <img style={{ width: '90%', padding: '20px 0' }} src={`/images/${src}.jpg`} alt={name} />
                <h2>{name}</h2>
                <p>{age} years old</p>
                <ul>
                    {facts.map(fact => <li style={{ listStyleType: 'none'}} key={uuid()}>{fact}</li>)}
                </ul>
                <Link to='/dogs'>Back to all dogs</Link>
            </div>
        );
    }
}

export default Dog;