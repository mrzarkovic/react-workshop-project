import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from 'Components/Table/Row'

export default class Table extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render () {
        return (
            <table>
                <thead>
                    <Row item={ this.props.header } type='header' />
                </thead>
                <tbody>
                    {
                        this.props.items.map((item, index) => {
                            return <Row item={ item } key={ index } />
                        })
                    }
                </tbody>
            </table>
        );
    }
}
