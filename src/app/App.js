import React, { Component } from 'react';

import Info from 'Components/Info';
import Button from 'Components/Button';

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            result: 0
        }

        this.increment = this.increment.bind(this);
        console.log('App.constructor');
    }

    componentWillMount () {
        console.log('App.componentWillMount');
    }

    increment () {
        this.setState({
            result: this.state.result + 1
        });
    }

    render () {
        console.log('App.render');
        return (
            <div>
                Moja prva komponenta
                <Info info={ '' + this.state.result } />
                <Button handler={ this.increment } />
            </div>
        );
    }

    componentDidMount () {
        console.log('App.componentDidMount');
    }
}
