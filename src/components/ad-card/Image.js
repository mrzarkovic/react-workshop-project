import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
    static propTypes = {
        src: PropTypes.string,
        alt: PropTypes.string
    };

    static defaultProps = {
        src: 'http://www.kupujemprodajem.com/images/no_photo100.png'
    };

    render() {
        return (
            <div className="image-holder">
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        );
    }
}
