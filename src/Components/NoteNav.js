import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NoteNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggleNavbar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))

  }
  render() {
    return (
      <React.Fragment>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            <span>NoteManager</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink>Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}


export default NoteNav;
