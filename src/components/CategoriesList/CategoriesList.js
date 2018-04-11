import React, { Component } from 'react';

import ButtonTabsHolder from 'Components/CategoriesList/ButtonTabsHolder';
import LinksListHolder from 'Components/CategoriesList/LinksListHolder';

export default class CategoriesList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeTab: 1,
            tabs: [
                {id: 1, label: 'Stvari', items: ['link1', 'link2', 'link3']},
                {id: 2, label: 'Usluge', items: ['link4', 'link5', 'link6']}
            ]
        }

        this.changeTab = this.changeTab.bind(this);
    }

    changeTab (e) {
        e.preventDefault();
        let tabName = e.target.value;
        this.setState({ activeTab: tabName });
    }

    render () {
        const activeTab = this.state.tabs.filter(tab => tab.id == this.state.activeTab)[0];

        return (
            <div>
                <ButtonTabsHolder activeTab={ this.state.activeTab } tabClickHandler={ this.changeTab } tabs={ this.state.tabs } />
                <LinksListHolder items={ activeTab.items } />
            </div>
        );
    }
}
