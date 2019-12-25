import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={RouterNavLink} to="/">Recipes</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/recipes/new">New recipe</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/contact">Contact us</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;