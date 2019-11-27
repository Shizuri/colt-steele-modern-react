import React, { Component } from 'react';
import Dog from './Dog';
import Nav from './Nav';
import Home from './Home';
import { Route, Switch, Redirect } from 'react-router-dom';

class DogFinder extends Component {
    static defaultProps = {
        dogs: [
            {
                name: "Whiskey",
                age: 5,
                src: "whiskey",
                facts: [
                    "Whiskey loves eating popcorn.",
                    "Whiskey is a terrible guard dog.",
                    "Whiskey wants to cuddle with you!"
                ]
            },
            {
                name: "Hazel",
                age: 3,
                src: "hazel",
                facts: [
                    "Hazel has soooo much energy!",
                    "Hazel is highly intelligent.",
                    "Hazel loves people more than dogs."
                ]
            },
            {
                name: "Tubby",
                age: 4,
                src: "tubby",
                facts: [
                    "Tubby is not the brightest dog",
                    "Tubby does not like walks or exercise.",
                    "Tubby loves eating food."
                ]
            }
        ]
    }

    render() {
        const getDog = routeProps => {
            // let dogName = routeProps.match.params.dogName;
            // console.log('routeProps: ', routeProps);
            // console.log('dogName: ', dogName);
            
            //You can find a single dog here and pass it instead of all of the dogs
            return <Dog {...routeProps} dogs={this.props.dogs} />
        }
        return (
            <div>
                <Nav dogs={this.props.dogs}/>

                <Switch>
                    <Route exact path='/dogs/:dogName' render={getDog} />
                    <Route exact path='/dogs' render={(routeProps) => <Home dogs={this.props.dogs} {...routeProps} />} />
                    <Route render={() => <Redirect to='/dogs' />} />
                </Switch>
            </div>
        );
    }
}

export default DogFinder;