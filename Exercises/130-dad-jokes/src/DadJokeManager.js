import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';

class DadJokeManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
            loaded: false
        }
        this.getJoke = this.getJoke.bind(this);
        this.getTenJokes = this.getTenJokes.bind(this);
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) {
            this.getTenJokes();
        }
    }

    async getJoke(iteration) {
        const options = { headers: { Accept: 'application/json' } };
        const url = 'https://icanhazdadjoke.com/';
        const response = await axios.get(url, options);
        const { id, joke } = response.data;
        const newJoke = {
            id: id,
            joke: joke,
            points: 0
        };
        const same = this.state.jokes.some(j => j.id === id);
        if (!same && iteration !== 9) {
            this.setState(st => ({
                jokes: [...st.jokes, newJoke]
            }));
        } else if (!same && iteration === 9) {
            this.setState(st => ({
                jokes: [...st.jokes, newJoke],
                loaded: true
            }));
        } else {
            this.getJoke(iteration);
        }
    }

    getTenJokes() {
        this.setState({loaded: false});
        for (let i = 0; i < 10; i++) {
            this.getJoke(i);
        }
    }

    upVote(jokeId) {
        this.setState(st => ({
            jokes: st.jokes.map(joke => {
                if (joke.id === jokeId) {
                    joke.points = joke.points + 1;
                    return joke;
                } else {
                    return joke;
                }
            })
        }));
    }

    downVote(jokeId) {
        this.setState(st => ({
            jokes: st.jokes.map(joke => {
                if (joke.id === jokeId) {
                    joke.points = joke.points - 1;
                    return joke;
                } else {
                    return joke;
                }
            })
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.getTenJokes}>Add more jokes</button>
                {this.state.loaded ?
                    this.state.jokes.map(j => <Joke
                        points={j.points}
                        joke={j.joke}
                        key={j.id}
                        id={j.id}
                        upVote={this.upVote}
                        downVote={this.downVote}
                    />)
                    : <p>Loading ...</p>
                }

            </div>
        );
    }
}

export default DadJokeManager;