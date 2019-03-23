import React from "react";
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
  DropdownItem
} from "reactstrap";

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
      <Navbar color="light" light expand="sm">
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          {/*Pull left */}
          <Nav className="mr-auto" navbar>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  All Campaigns
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </Nav>

          {/* Pull right */}
          <Nav className="ml-auto" navbar>
            <NavItem>search</NavItem>
            <NavItem>today</NavItem>
            <NavItem>1d</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  };
}
