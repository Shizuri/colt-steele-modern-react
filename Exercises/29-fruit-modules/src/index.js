import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import fruits from './foods';
import { choice, remove } from './helpers';

class App extends Component {
    render() {
        const fruitsL = fruits;
        const fruit = choice(fruitsL);
        console.log('I\'d like one ' + fruit + ', please.');
        console.log(`Here you go: ${fruit}`);
        console.log(`Delicious! May I have another?`);
        let changedFruitArray = remove(fruitsL, fruit);
        console.log(`I’m sorry, we’re all out. We have ${changedFruitArray.length} left.`)
        console.log('---------------------');
        console.log('fruitsL is now: ', fruitsL);
        console.log('fruits is now: ', fruits);
        console.log('changedFruitArray is now: ', changedFruitArray);

        return (
            <div>
                {fruit}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
