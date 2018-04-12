import React, { Component } from 'react';

class UsersProfile extends Component {
    render() {
        return (
            <div className="users">
                Users profile strana: {this.props.match.params.id}
            </div>
        );
    }
}

export default UsersProfile;