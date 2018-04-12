import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from 'Components/table/Row';
import { Table as MTable } from 'react-materialize';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
    }

    static propTypes = {
        header: PropTypes.array,
        items: PropTypes.array.isRequired
    };

    getHeader() {
        return (
            <thead>
                <Row item={this.props.header} type='header' />
            </thead>
        );
    }

    render() {
        return (
            <MTable striped bordered>
                {this.props.header.length && this.getHeader()}
                <tbody>
                    {
                        this.props.items.map((item, index) => {
                            return <Row item={item} key={index} />
                        })
                    }
                </tbody>
            </MTable>
        );
    }
}
