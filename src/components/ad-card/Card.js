import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from 'Components/ad-card/Image';

import 'Components/ad-card/Style.scss';

import { Row, Col } from 'react-materialize';

export default class Card extends Component {
    static propTypes = {
        ad: PropTypes.object.isRequired
    };

    render() {
        return (
            <Row className="ad-card" node="article">
                <Col s={2}>
                    <Image />
                </Col>
                <Col s={4}>
                    <h1>{this.props.ad.title}</h1>
                    <p>{this.props.ad.description}</p>
                </Col>
                <Col s={2}>
                    <span>{this.props.ad.price}</span>
                </Col>
                <Col s={2}>
                    <div>{this.props.ad.stats.viewsCount}</div>
                    {this.props.ad.stats.renewed && <div>(obnovljen)</div>}
                    <div>{this.props.ad.stats.postedTime}</div>
                    {this.props.ad.stats.followers && <div>{this.props.ad.stats.followers}</div>}
                </Col>
                <Col s={2}>
                    <span>{this.props.ad.location}</span>
                </Col>
            </Row>
        );
    }
}
