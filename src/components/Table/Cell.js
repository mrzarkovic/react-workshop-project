import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cell extends Component {
    static defaultProps = {
        value: 'Cell value',
        type: PropTypes.string.isRequired
    };

    getHeaderCell () {
        return <th>{ this.props.value }</th>;
    }

    getBodyCell () {
        return <td>{ this.props.value }</td>
    }

    render () {
        if (this.props.type === 'header') {
            return this.getHeaderCell();
        } else {
            return this.getBodyCell();
        }
    }
}
