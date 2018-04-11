import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button as MButton } from 'react-materialize';

export default class Button extends Component {
    static propTypes = {
        handler: PropTypes.func.isRequired
    };

    shouldComponentUpdate (nextProps, nextState) {
        if (this.props.handler === nextProps.handler && this.state === nextState) {
            return false;
        }

        return true;
    }

    render () {
        console.log('Button.render');
        return (
            <MButton onClick={ this.props.handler }>
                Increment
            </MButton>
        );
    }
}
