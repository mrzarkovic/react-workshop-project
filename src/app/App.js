import React, { Component } from 'react';

import AdCard from 'Components/ad-card/Card';
import { Row, Col } from 'react-materialize';

import { connect } from 'react-redux';
import { createAds, addAd } from 'Reducers/Ads';

class App extends Component {
    render() {
        console.log(this.props.ads);
        return (
            <Row>
                <Col s={8} offset="s2">
                    {
                        this.props.ads.map((ad, index) => {
                            return <AdCard ad={ad} key={index} />
                        })
                    }
                    <button onClick={() => {
                        this.props.handleAddAd({
                            title: 'Novi oglas #' + Math.random(),
                            description: 'Opis novog oglasa',
                            price: '200 din',
                            stats: {
                                viewsCount: 123,
                                renewed: false,
                                postedTime: 'Pre 2 nedelje',
                                followers: 3
                            },
                            location: 'Nis'
                        })
                    }}>Add an Ad</button>
                </Col>
            </Row>
        );
    }

    componentDidMount () {
        this.props.handleCreateAds();
    }
}

function mapStateToProps (state) {
    return {
        ads: state.ads
    }
}

function mapDispatchToProps (dispatch) {
    return {
        handleCreateAds: () => {
            dispatch(createAds());
        },
        handleAddAd: (ad) => {
            dispatch(addAd(ad));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);