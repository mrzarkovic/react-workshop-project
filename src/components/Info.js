import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Info extends Component {
    static propTypes = {
        info: PropTypes.string.isRequired
    };

    static defaultProps = {
        info: 'Nije poslat'
    };

    constructor (props) {
        super(props);
        this.state = {
            currentResult: this.props.info
        }
    }

    componentWillReceiveProps (nextProps) {
        console.log('Deprecated: Info.componentWillReceiveProps');
        let nProps = nextProps;
        let cProps = this.props;
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        let nProps = nextProps;
        let pState = prevState;
        let nextState = {currentResult: nProps};
        return nextState;
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('Info.getSnapshotBeforeUpdate');
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log('Info.componentDidUpdate');
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('Deprecated: Info.componentWillUpdate');
    }

    componentWillUnmount () {
        console.log('Info.componentWillUnmount');
    }

    render () {
        return (
            <div>
                { this.props.info }
            </div>
        );
    }
}
