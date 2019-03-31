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
					{campaigns.map((camp) => {
						return (
							<DropdownItem key="{camp.id}">
								{camp.campaignName}
							</DropdownItem>
						);
					})}
				</DropdownMenu>
			</Dropdown>
		);
	}
}
