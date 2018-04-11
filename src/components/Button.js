import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {

    static propTypes = {
        handler: PropTypes.func.isRequired
    };

    render() {
        return (
            <button onClick={ this.props.handler }>
                Increment
            </button>
        );
    }
}
