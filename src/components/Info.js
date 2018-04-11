import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Info extends Component {

    static propTypes = {
        info: PropTypes.string.isRequired
    };

    static defaultProps = {
        info: 'Nije poslat'
    };

    render() {
        return (
            <div>
                { this.props.info }
            </div>
        );
    }
}
