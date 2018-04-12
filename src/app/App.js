import React, { Component } from 'react';

import AdCard from 'Components/ad-card/Card';
import { Row, Col } from 'react-materialize';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ad: {
                title: 'Moj oglas',
                description: 'Opis mog oglasa',
                price: '114 din',
                stats: {
                    viewsCount: 300,
                    renewed: true,
                    postedTime: 'Pre 4 nedelje',
                    followers: 10
                },
                location: 'Beograd | Vozdovac'
            }
        }
    }

    render() {
        return (
            <Row>
                <Col s={8} offset="s2">
                    <AdCard ad={this.state.ad} />
                </Col>
            </Row>
        );
    }
}
