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
      isOpen: false,
      user: true
    }
  }

  toggleNavbar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))

  }

  isAuthenticated = () => {
    return typeof localStorage.getItem('authenticated') === 'string';
  }

  getUserName = () => {
    const user = JSON.parse(JSON.stringify(localStorage.getItem('user')))
    return user;
  }

  logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('authenticated');
    window.location.reload();
  }


  render() {
    const { isOpen } = this.state
    return (
      <React.Fragment>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            <span>NoteManager{this.isAuthenticated() && (
              <span className="ml-3 text-secondary">{this.getUserName()}</span>
            )}</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              {!this.isAuthenticated() ? (
                <NavItem>
                  <NavLink>Login</NavLink>
                </NavItem>
              ) : (
                  <NavItem>
                    <NavLink onClick={this.logOut}>Log Out</NavLink>
                  </NavItem>
                )}
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}


export default NoteNav;
