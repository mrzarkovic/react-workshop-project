import React, { Component } from 'react';
import { Button as MButton } from 'react-materialize';

import withPropsLog from 'Wrappers/withPropsLog';

class ButtonTabsHolder extends Component {
    render () {
        return (
            <div>
                {
                    this.props.tabs.map((tab, index) => {
                        return <MButton disabled={ this.props.activeTab == tab.id } onClick={ this.props.tabClickHandler } value={ tab.id } key={ index }>{ tab.label }</MButton>
                    })
                }
            </div>
        );
    }
}

export default withPropsLog(ButtonTabsHolder);