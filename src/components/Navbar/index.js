import React from "react";
import Styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";

const Navbar = () => {
  return (
    <header className="bg-gray-900 sm:px-4 sm:py-3">
      <nav className="px-2 pt-2 pb-4 flex justify-between sm:p-0">
        <div className="flex">
          <StyledNavLink
            className="nav-link"
            to="/"
            exact
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            className="nav-link"
            to="/about"
          >
            About
          </StyledNavLink>
        </div>
        <Link
          href="https://github.com/mossen/list"
          className="nav-link"
        >
          <GithubIcon />
        </Link>
      </nav>
    </header>
  );
};

// Just showing the usage of styled components otherwise activeClassName can be used
const StyledNavLink = Styled(NavLink)`
  border: 1px solid transparent;

  &.active {
    border-color: green;
  }
`;

const Link = Styled.a`
  width: 2.5rem;
  color: white;
`;

export default Navbar;
