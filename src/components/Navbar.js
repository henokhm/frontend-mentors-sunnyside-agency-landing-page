import React from "react";
import styled from "styled-components/macro";

import HeaderCTA from "./HeaderCTA";

const StyledNav = styled.nav`
  /* Mobile Styles */

  display: ${(props) => (props.isHamburgerMenuOpen ? "initial" : "none")};
  position: absolute;
  top: 1.5em;
  right: 0em;
  width: 90%;
  margin: 1em;
  clip-path: polygon(100% 0, 95% 7%, 0 7%, 0% 99%, 100% 100%);
  padding: 4em;
  transform: translateY(2em);
  background-color: var(--white);

  & ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    & li {
      color: var(--very-dark-grayish-blue);
      text-decoration: none;
      display: inline-block;
      padding: 1em;
      cursor: pointer;

      &:hover,
      &:active {
        color: var(--dark-blue);
      }
    }
  }

  /* Desktop Styles */

  @media (min-width: 651px) {
    display: unset;
    position: unset;
    width: auto;
    margin: 0;
    padding: 0;
    transform: unset;
    clip-path: unset;
    background-color: transparent;

    & ul {
      flex-direction: row;
      margin: 0;
      // align-items: center;
  
      & li {
        padding: 0 0  0 1.5em;
        color: var(--white);
  
        &:hover,
        &:active {
          color: #eee;
        }
      }
  }
`;

function Navbar({ isHamburgerMenuOpen }) {
  console.log(isHamburgerMenuOpen);
  return (
    <StyledNav isHamburgerMenuOpen={isHamburgerMenuOpen}>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>
          <HeaderCTA />
        </li>
      </ul>
    </StyledNav>
  );
}

export default Navbar;
