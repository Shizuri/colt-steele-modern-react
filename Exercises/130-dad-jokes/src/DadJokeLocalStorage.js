import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';

class DadJokeLocalStorage extends Component {
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
            this.setState(st => {
                console.log('iteration: ', iteration);
                return ({
                jokes: [...st.jokes, newJoke],
            })});
            localStorage.setItem(newJoke.id, JSON.stringify(newJoke));
        } else if (!same && iteration === 9) {
            // this.setState(st => ({
            //     jokes: [...st.jokes, newJoke],
            //     loaded: true
            // }));
            this.setState(st => {
                console.log('last iteration');
                return ({
                jokes: [...st.jokes, newJoke],
                loaded: true
            })});
            localStorage.setItem(newJoke.id, JSON.stringify(newJoke));
            let jokesSortedByPoints = [...this.state.jokes];
            jokesSortedByPoints.sort((a, b) => b.points - a.points);
            this.setState(st => ({
                jokes: jokesSortedByPoints
            }));
        } else {
            this.getJoke(iteration);
        }
    }

    async getTenJokes() {
        this.setState(st => ({ loaded: false }));
        for (let i = 0; i < 10; i++) {
            await this.getJoke(i);
        }
        // let jokesSortedByPoints = [...this.state.jokes];
        // jokesSortedByPoints.sort((a, b) => b.points - a.points);
        // this.setState(st => ({
        //     jokes: jokesSortedByPoints
        // }));
    }

    loadJokesFromLS() {
        let newJokes = [];
        for (let i = 0; i < localStorage.length; i++) {
            let {id, joke, points} = JSON.parse(localStorage.getItem(localStorage.key(i)));
            const newJoke = {
                id: id,
                joke: joke,
                points: points
            };
            newJokes.push(newJoke);
        }
        newJokes.sort((a, b) => b.points - a.points);
        this.setState(st =>({
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
            <div>
                <button onClick={this.getTenJokes}>Add more jokes</button>
                <button onClick={this.clearLocalStorage}>Clear Local Storage</button>
                <button onClick={this.showAllLocalStorage}>showAllLocalStorage</button>
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

export default DadJokeLocalStorage;