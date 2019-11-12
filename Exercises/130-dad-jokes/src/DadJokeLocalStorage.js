import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';
import './DadJokeLocalStorage.css';

class DadJokeLocalStorage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
            loaded: false
        }
        this.getTenJokes = this.getTenJokes.bind(this);
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
        this.clearLocalStorage = this.clearLocalStorage.bind(this);
        this.loadJokesFromLS = this.loadJokesFromLS.bind(this);
    }

    componentDidMount() {
        if (localStorage.length === 0) {
            this.getTenJokes();
        } else {
            this.loadJokesFromLS();
        }
    }

    async getTenJokes() {
        this.setState({ loaded: false });
        const options = { headers: { Accept: 'application/json' } };
        const url = 'https://icanhazdadjoke.com/';

        let newJokes = [];

        for (let i = 0; i < 10; i++) {
            console.log(`Iteration number: ${i}`);
            const response = await axios.get(url, options);
            const { id, joke } = response.data;
            const newJoke = {
                id: id,
                joke: joke,
                points: 0
            };
            const same = this.state.jokes.some(j => j.id === id);

            if (!same) {
                newJokes.push(newJoke);
            } else {
                i--;
            }
        }

        let allJokes = [...this.state.jokes, ...newJokes];
        allJokes.sort((a, b) => b.points - a.points);
        this.setState(st => {
            return ({
                jokes: allJokes,
                loaded: true
            })
        });

        localStorage.clear();
        for (let i = 0; i < allJokes.length; i++) {
            localStorage.setItem(allJokes[i].id, JSON.stringify(allJokes[i]));
        }
    }

    loadJokesFromLS() {
        let newJokes = [];
        for (let i = 0; i < localStorage.length; i++) {
            let { id, joke, points } = JSON.parse(localStorage.getItem(localStorage.key(i)));
            const newJoke = {
                id: id,
                joke: joke,
                points: points
            };
            newJokes.push(newJoke);
        }
        newJokes.sort((a, b) => b.points - a.points);
        this.setState(st => ({
            jokes: newJokes,
            loaded: true
        }));
    }

    upVote(jokeId) {
        this.setState(st => {
            let newArray = st.jokes.map(joke => {
                if (joke.id === jokeId) {
                    joke.points = joke.points + 1;
                    localStorage.setItem(joke.id, JSON.stringify(joke));
                    return joke;
                } else {
                    return joke;
                }
            })
            newArray.sort((a, b) => b.points - a.points);

            return ({
                jokes: newArray
            })
        });
    }

    downVote(jokeId) {
        this.setState(st => {
            let newArray = st.jokes.map(joke => {
                if (joke.id === jokeId) {
                    joke.points = joke.points - 1;
                    localStorage.setItem(joke.id, JSON.stringify(joke));
                    return joke;
                } else {
                    return joke;
                }
            })
            newArray.sort((a, b) => b.points - a.points);

            return ({
                jokes: newArray
            })
        });
    }

    clearLocalStorage() {
        localStorage.clear();
    }

    showAllLocalStorage() {
        for (let i = 0; i < localStorage.length; i++) {
            console.log(localStorage.getItem(localStorage.key(i)));
        }
        console.log('localStorage.length: ', localStorage.length);
    }

    render() {
        return (
            <div className='DadJoke-container'>
                <div className='DadJoke-left-panel'>
                    <h1 className='DadJokes-name'>Dad <span className='DadJokes-name-jokes'>Jokes</span></h1>
                    <span className='DadJoke-laugh' role='img' aria-label='Face With Tears Of Joy'>
                        😂
                    </span>
                    <button onClick={this.getTenJokes} className='DadJoke-button'>Add more jokes</button>
                    <button onClick={this.clearLocalStorage} className='DadJoke-button'>Clear Local Storage</button>
                    <button onClick={this.showAllLocalStorage} className='DadJoke-button'>showAllLocalStorage</button>
                </div>

                <div className='DadJoke-jokes'>
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
            </div>
        );
    }
}

export default DadJokeLocalStorage;