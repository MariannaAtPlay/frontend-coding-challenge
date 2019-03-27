import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
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

export default class Navigation extends React.Component {
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
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					{/*Pull left */}
					<Nav className="mr-auto" navbar>
						<UncontrolledDropdown nav inNavbar className="border">
							<DropdownToggle
								nav
								caret
								className="text-dark px-3"
								style={{ fontSize: 'larger' }}
							>
								All Campaigns
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>Option 1</DropdownItem>
								<DropdownItem>Option 2</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>

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
							<IoIosArrowBack className="mr-3" size={20} />
							<IoIosCalendar className="mr-1" size={20} />
							Today, {moment().format('MMM Do')}
							<IoIosArrowForward className="ml-3" size={20} />
							<Badge
								tag="li"
								pill
								id="calendar-step"
								className="ml-3 px-3 py-2 align-items-center"
							>
								1d
							</Badge>
						</NavLink>
					</Nav>
				</Collapse>
			</Navbar>
		);
	};
}
