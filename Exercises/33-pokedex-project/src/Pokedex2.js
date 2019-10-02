import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
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