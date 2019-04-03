import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { IconContext } from 'react-icons';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Main from './components/AppCardList';
import * as API from './utils/api';

class App extends Component {
	state = {
		campaigns: [],
		cards: [],
		currentCampaign: 'CN201701182'
	};

	componentDidMount() {
		API.getInitialData().then((data) => {
			this.setState(data);
		});
	}

	handleCampaignChange = (campaignId) => {
		this.setState({
			currentCampaign: campaignId
		});
	};

	render() {
		const { currentCampaign, campaigns, cards } = this.state;
		const filteredCards =
			currentCampaign === 'all'
				? cards
				: cards.filter((card) => {
						return card.campaignId === currentCampaign;
				  });

		return (
			<IconContext.Provider
				value={{
					size: 32,
					style: { verticalAlign: 'middle' }
				}}
			>
				<AppNavbar
					campaigns={campaigns}
					handleCampaignChange={this.handleCampaignChange}
				/>
				<Main cards={filteredCards} />
			</IconContext.Provider>
		);
	}
}

export default App;
