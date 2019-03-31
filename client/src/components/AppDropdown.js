import React from 'react';
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

export default class AppDropdown extends React.Component {
	state = {
		isOpen: false,
		currentValue: {
			id: 'all',
			campaignName: 'All Campaigns'
		}
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	handleChange = (id) => {
		const { campaigns } = this.props;

		this.setState({
			currentValue:
				id === 'all'
					? {
							id: 'all',
							campaignName: 'All Campaigns'
					  }
					: campaigns.filter((camp) => camp.id === id)[0]
		});
	};

	render() {
		const { campaigns } = this.props;

		return (
			<Dropdown
				isOpen={this.state.isOpen}
				toggle={this.toggle}
				nav
				inNavbar
				className="border"
			>
				<DropdownToggle
					nav
					caret
					className="text-dark px-3"
					style={{ fontSize: 'larger' }}
				>
					{this.state.currentValue.campaignName}
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem
						key="all"
						onClick={(event) => this.handleChange('all', event)}
					>
						All Campaigns
					</DropdownItem>
					{campaigns.map((camp) => {
						return (
							<DropdownItem
								key={camp.id}
								onClick={(event) =>
									this.handleClick(camp.id, event)
								}
							>
								{camp.campaignName}
							</DropdownItem>
						);
					})}
				</DropdownMenu>
			</Dropdown>
		);
	}
}
