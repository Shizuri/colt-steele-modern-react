import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className='display-3'>Click a Dog!</h1>
                <div className='Home-dogs'>
                    {this.props.dogs.map(dog => <Link className='Home-dog' key={uuid()} to={`/dogs/${dog.src}`}>
                        <img className='Home-dog-picture' src={`/images/${dog.src}.jpg`} alt={dog.name} />
                        <p>{dog.name}</p>
                    </Link>)}
                </div>
            </div>
        );
    }
}

export default Home;