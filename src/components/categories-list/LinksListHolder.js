import React, { Component } from 'react';

export default class LinksListHolder extends Component {
    render () {
        return (
            <ul>
                {
                    this.props.items.map((link, index) => {
                        return <li key={ index }>{ link }</li>
                    })
                }
            </ul>
        );
    }
}
