import React, { Component } from 'react';
import Pokedex2 from './Pokedex2';

class Pokegame extends Component {
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

    makeTwoHands() {
        const hand1 = [...this.props.pokecards];
        const hand2 = [];

        for (let i = 0; i < 4; i++) {
            hand2.push(hand1.splice(Math.floor(Math.random() * hand1.length), 1)[0]);
        }

        let sum1 = hand1.reduce((a, b) => ({ base_experience: a.base_experience + b.base_experience })).base_experience;
        let sum2 = hand2.reduce((a, b) => ({ base_experience: a.base_experience + b.base_experience })).base_experience;

        let winner1 = false;
        let winner2 = false;
        if (sum1 >= sum2) {
            winner1 = true;
        } else {
            winner2 = true;
        }

        return (
            {
                hand1: hand1,
                hand2: hand2,
                sum1: sum1,
                sum2: sum2,
                winner1: winner1,
                winner2: winner2
            }
        );
    }

    render() {
        const { hand1, hand2, sum1, sum2, winner1, winner2 } = this.makeTwoHands();
        const style = {
            textAlign: 'center',
            color: 'darkred'
        }

        return (
            <div>
                <h1 style={style}>Pokegame</h1>
                <Pokedex2 pokecards={hand1} sum={sum1} isWinner={winner1} />
                <Pokedex2 pokecards={hand2} sum={sum2} isWinner={winner2} />
            </div>
        );
    }
}

export default Pokegame;