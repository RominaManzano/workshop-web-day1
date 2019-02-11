import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
} from 'reactstrap';

/*
  This navbar was adapted from a reactstrap example
  at https://reactstrap.github.io/components/navbar/
*/
class WcNavbar extends Component {
  state = {
    collapsed: true
  };

  toggleNavbar = () => {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          WORKSHOP
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <StyledNavItem>
              <Link to="/movies">
                Movies
              </Link>
            </StyledNavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default WcNavbar;

const StyledNavItem = styled(NavItem)`
  padding: 10px;

  a:hover, a:active {
    text-decoration: none;
  }
`;
