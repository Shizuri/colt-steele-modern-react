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
        // console.log(hand1);

        for (let i = 0; i < 4; i++) {
            hand2.push(hand1.splice(Math.floor(Math.random() * hand1.length), 1)[0]);
        }
        // console.log('Hand 1: ', hand1);
        // console.log('Hand 2: ', hand2);
        let sum1 = hand1.reduce((a, b) => ({base_experience: a.base_experience + b.base_experience}));
        console.log(sum1);

        return (
            {
                hand1: hand1,
                hand2: hand2
            }
        );
    }

    render() {
        const { hand1, hand2 } = this.makeTwoHands();
        // console.log('Hand 1: ', hand1);
        // console.log('Hand 2: ', hand2);
        const st = {
            textAlign: 'center',
            color: 'darkred'
        }

        return (
            <div>
                <h1 style={st}>Pokegame</h1>
                <Pokedex2 pokecards={hand1} />
                <Pokedex2 pokecards={hand2} />
            </div>
        );
    }
}

export default Pokegame;