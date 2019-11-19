import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <h1>Search for a food</h1>
                <input
                    type='text'
                    placeholder='search for a food'
                    value={this.state.query}
                    onChange={this.handleChange}
                    name='query'
                />
                <Link to={`/food/${this.state.query}`}>GO!</Link>
            </div>
        );
    }
}

export default FoodSearch;