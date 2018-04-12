import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createItems, addItem } from 'Reducers/Items';

import Button from 'Components/Button';

class Home extends Component {
    constructor (props) {
        super(props);
        this.addRandomNumber = this.addRandomNumber.bind(this);
    }

    componentDidMount() {
        this.props.handleCreateItems();
    }

    addRandomNumber () {
        this.props.handleAddItem(Math.random());
    }

    render() {
        return (
            <React.Fragment>
                <div className="home">
                    {
                        this.props.items.map((number, index) => {
                            return <div key={index}>{number}</div>
                        })
                    }
                </div>
                <Button handler={this.addRandomNumber} />
            </React.Fragment>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleCreateItems: () => {
            dispatch(createItems());
        },
        handleAddItem: (number) => {
            dispatch(addItem(number));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);