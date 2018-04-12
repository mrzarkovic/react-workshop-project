import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Cell from 'Components/table/Cell'

export default class Row extends Component {
    static propTypes = {
        item: PropTypes.array.isRequired,
        type: PropTypes.string
    };

    render() {
        return (
            <tr>
                {
                    this.props.item.map((value, index) => {
                        return <Cell type={this.props.type} value={value} key={index} />
                    })
                }
            </tr>
        );
    }
}
