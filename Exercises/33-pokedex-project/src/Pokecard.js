import React, { Component } from 'react';
import './Pokecard.css'

class Pokecard extends Component {
    toThreeDigits(id) {
        id = id.toString();
        if (id.length === 3) {
            return id;
        } else if (id.length === 2) {
            return '0' + id;
        } else if (id.length === 1) {
            return '00' + id;
        }
    }

    render() {
        const { id, name, type, base_experience } = this.props;
        const fancyImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.toThreeDigits(id)}.png`;

        return (
            <div className='Pokecard'>
                <div className='Pokecard-name'>{this.props.name}</div   >
                <img src={fancyImage} alt={name} />
                <div>Type: {type}</div>
                <div>EXP: {base_experience}</div>
            </div>
        );
    }
}


export default Pokecard;