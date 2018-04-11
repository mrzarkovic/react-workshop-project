import React, { Component } from 'react';

import Table from 'Components/Table/Table';

export default class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const header = ['Name', 'Item Name', 'Item Price'];
        const items = [
            [1,2,3],
            [4,5,6]
        ];
        return (
            <div>
                <Table header={ header } items={ items } />
            </div>
        );
    }
}
