import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'placeholder',
            isLoaded: false
        }
        console.log('Insite constructor()');
    }
    componentDidMount() {
        //load data
        axios.get('https://api.github.com/zen').then(response => {
            setTimeout(
                function () {
                    this.setState({ quote: response.data, isLoaded: true });
                }.bind(this), 1500
            );
        });
        //set state with that data
        console.log('Insite componentDidMount()');
    }
    componentDidUpdate() {
        console.log('Insite componentDidUpdate()');
    }
    render() {
        console.log('Insite render()');
        return (
            <div>
                {this.state.isLoaded ?
                    <div>
                        <h1>Always remember</h1>
                        <p>{this.state.quote}</p>
                    </div>
                    :
                    <div className="loader"></div>
                }

            </div>
        );
    }
}

export default ZenQuote;