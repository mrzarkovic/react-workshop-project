import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import AdCard from 'Components/ad-card/Card';
import { Row, Col, Button } from 'react-materialize';

import { connect } from 'react-redux';
import { createAds, addAd } from 'Reducers/Ads';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: ''
        }
        this.handleAddNewAd = this.handleAddNewAd.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    componentWillMount () {
        this.delayedHandleTitleChange = debounce(e => {
            let title = e.target.value;
            console.log(e.target, title, this);
            this.setState({title});
        }, 300);
    }

    handleAddNewAd () {
        this.props.handleAddAd({
            title: this.state.title,
            description: 'Opis novog oglasa',
            price: '200 din',
            stats: {
                viewsCount: 123,
                renewed: false,
                postedTime: 'Pre 2 nedelje',
                followers: 3
            },
            location: 'Nis'
        });
        this.setState({title: ''});
    }

    handleTitleChange(e){
        e.persist();
        this.delayedHandleTitleChange(e);
    }
    
    render() {
        console.log(this.props.ads);
        console.log(this.state.title);
        return (
            <Row>
                <Col s={8} offset="s2">
                    {
                        this.props.ads.map((ad, index) => {
                            return <AdCard ad={ad} key={index} />
                        })
                    }
                    <input type="text" name="adTitle" placeholder="Enter Ad title" onChange={this.handleTitleChange}/>
                    <Button onClick={this.handleAddNewAd}>Add an Ad</Button>
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