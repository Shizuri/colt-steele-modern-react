import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    static defaultProps = {
        pokecards: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    render() {
        const isWinner = this.props.isWinner;
        return (
            <div className='Pokedex'>
                <div className={isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}>{isWinner ? 'Winning Hand' : 'Losing Hand'}</div>
                <div>Total experience: {this.props.sum}</div>
                {this.props.pokecards.map(card =>
                    <div className='Pokedex-Pokecard' key={card.id}>
                        <Pokecard
                            id={card.id}
                            name={card.name}
                            type={card.type}
                            base_experience={card.base_experience} />
                    </div>)}
            </div>
        );
    }
}

export default Pokedex;