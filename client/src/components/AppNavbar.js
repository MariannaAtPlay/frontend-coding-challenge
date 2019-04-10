import React from 'react';
import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavLink,
	Badge
} from 'reactstrap';
import {
	IoIosList,
	IoIosSearch,
	IoIosArrowBack,
	IoIosArrowForward,
	IoIosCalendar
} from 'react-icons/io';
import moment from 'moment';
import AppDropdown from './AppDropdown';

class Navigation extends React.Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render = () => {
		return (
			<Navbar
				color="light"
				light
				expand="sm"
				className="border-bottom border-top mt-2 px-5 py-3"
			>
				<Container>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						{/*Pull left */}
						<Nav className="mr-auto" navbar>
							<AppDropdown
								campaigns={this.props.campaigns}
								handleCampaignChange={
									this.props.handleCampaignChange
								}
							/>

							<NavLink
								tag="li"
								className="ml-3 d-flex flex-nowrap align-items-center"
							>
								<IoIosList className="mr-3" />
								Pending
							</NavLink>
						</Nav>

						{/* Pull right */}
						<Nav className="ml-auto" navbar>
							<NavLink tag="li">
								<IoIosSearch />
							</NavLink>

							<NavLink
								tag="li"
								className="d-flex flex-nowrap text-nowrap align-items-center"
								id="calendar"
							>
								<IoIosArrowBack className="mr-4" size={20} />
								<IoIosCalendar className="mr-1" size={20} />
								Today, {moment().format('MMM Do')}
								<IoIosArrowForward className="ml-4" size={20} />
								<Badge
									pill
									id="calendar-step"
									className="ml-3 px-3 py-2 align-items-center"
								>
									1d
								</Badge>
							</NavLink>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		);
	};
}

export default Navigation;
