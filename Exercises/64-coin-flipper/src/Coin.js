import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        let image = 'https://justflipacoin.com/img/share-a-coin.png';
        if(this.props.face === 'heads'){
            image = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg';
        }
        if(this.props.face === 'tails'){
            image = 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg';
        }
        return (
            <img className='Coin-coin-image' src={image} alt='face' />
        );
    }
}

export default Coin;