import React, { Component } from 'react';

import Table from 'Components/Table/Table';
import { Row, Col } from 'react-materialize';

export default class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const header = ['Name', 'Item Name', 'Item Price'];
        const items = [
            ['Alvin', 'Eclair', '$0.87'],
            ['Alan', 'Jellybean', '$3.76'],
            ['Jonathan', 'Lollipop', '$7.00'],
        ];

        return (
            <Row>
                <Col s={8} offset="s2">
                    <Table header={ header } items={ items } />
                </Col>
            </Row>
        );
    }
}
