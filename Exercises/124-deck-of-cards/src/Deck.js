import React, { Component } from 'react';
import axios from 'axios';

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedDeck: false,
            loadedCard: false,
            deckId: '',
            success: '',
            cardImgUrl: '',
            cardSuit: '',
            cardValue: ''
        }
        this.getDeck = this.getDeck.bind(this);
        this.getCardImage = this.getCardImage.bind(this);
    }

    componentDidMount() {
        this.getDeck();
    }

    async getDeck() {
        const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/';
        let response = 'Deck response';
        try {
            response = await axios.get(url);
            this.setState({
                deckId: response.data.deck_id,
                success: response.data.success,
                loadedDeck: true
            });
            this.getCardImage();
        } catch (error) {
            console.log('Deck error: ', error);
        }
    }

    async getCardImage() {
        const url = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`;
        let response = 'Card response';
        try {
            response = await axios.get(url);
            if (response.data.success) {
                this.setState({
                    loadedCard: true,
                    cardImgUrl: response.data.cards[0].image,
                    cardSuit: response.data.cards[0].suit,
                    cardValue: response.data.cards[0].value,
                    success: response.data.success
                });
            } else {
                alert(response.data.error);
            }

        } catch (error) {
            console.log('Card error: ', error);
        }
    }

    render() {
        return (
            <div>
                {this.state.loadedDeck ?
                    <div>
                        <button onClick={this.getCardImage}>New card</button>
                        {this.state.loadedCard ?
                            <div>
                                <img src={this.state.cardImgUrl} alt={`${this.state.cardValue} of ${this.state.cardSuit}`} />
                            </div>
                            : <h2>Loading card ...</h2>
                        }
                    </div>
                    : <h2>Loading deck ...</h2>
                }
            </div>
        );
    }
}

export default Deck;