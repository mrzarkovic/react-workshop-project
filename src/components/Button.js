import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button as MButton } from 'react-materialize';

export default class Button extends Component {
    static propTypes = {
        handler: PropTypes.func.isRequired,
        text: PropTypes.string
    };

    shouldComponentUpdate (nextProps, nextState) {
        if (this.props.text === nextProps.text && this.state === nextState) {
            return false;
        }

        return true;
    }

    render () {
        console.log('Button.render');
        return (
            <button onClick={ this.props.handler } id="button">
                {this.props.text}
            </button>
        );
    }
}
