import React, { Component } from 'react';

export default function withPropsLog ( WrappedComponent ) {
    return class extends Component {

        componentDidUpdate() {
            console.log(this.props);
        }

        render () {
            return <WrappedComponent {...this.props} />;
        }
    }
}