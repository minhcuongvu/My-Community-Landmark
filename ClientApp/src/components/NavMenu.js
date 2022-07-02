import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default class NavMenu extends Component {
  // static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    const { collapsed } = this.state;
    this.setState(!collapsed);
  }

  render() {
    const { collapsed } = this.state;
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__container__inner" tag={Link} to="/">
            <a className="logo" href="/#">
              <img
                src="/directory-logo.svg"
                alt="logo"
                height={54}
                width={240}
              />
            </a>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!collapsed}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">
                    Fetch data
                  </NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </div>
        </div>
      </header>
    );
  }
}
