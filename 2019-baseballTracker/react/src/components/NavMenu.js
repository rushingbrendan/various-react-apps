import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavbarBrand, NavbarToggler, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
//import './NavMenu.css';

export default props => (
  // <Navbar inverse fixedTop fluid collapseOnSelect>
  //   <Navbar.Header>
  //     <Navbar.Brand>
  //       <Link to={'/'}>baseballTracker</Link>
  //     </Navbar.Brand>
  //     <Navbar.Toggle />
  //   </Navbar.Header>
  //   <Navbar.Collapse>
  //     <Nav>
  //       <LinkContainer to={'/'} exact>
  //         <NavItem>
  //           Home
  //         </NavItem>
  //       </LinkContainer>
  //       <LinkContainer to={'/counter'}>
  //         <NavItem>
  //           Counter
  //         </NavItem>
  //       </LinkContainer>
  //       <LinkContainer to={'/baseballscoreboard'}>
  //         <NavItem>
  //           Baseball ScoreBoard
  //         </NavItem>
  //       </LinkContainer>
  //       <LinkContainer to={'/fetchdata'}>
  //         <NavItem>
  //           Fetch data
  //         </NavItem>
  //       </LinkContainer>
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar>

<Navbar color="light" light expand="md">
<NavbarBrand href="/">reactstrap</NavbarBrand>
  <Nav className="ml-auto" navbar>
    <LinkContainer to={'/baseballscoreboard'}>
      <NavItem>
        Baseball ScoreBoard
      </NavItem>
    </LinkContainer>
    <LinkContainer to={'/baseballscoreboard'}>
    <NavItem>
      <Link to={'/counter'}>GitHub</Link>
    </NavItem>
    </LinkContainer>    
  </Nav>
</Navbar>
);
