import React from "react";
import styled from "styled-components/macro";

import hamburgerSVG from "../images/icon-hamburger.svg";

const StyledHamburgerSvg = styled.img`
  width: 1.5em;
  height: 1em;
  cursor: pointer;

  &:hover,
  &:active {
    width: 1.55em;
    height: 1.05em;
  }

  @media (min-width: 650px) {
    display: none;
  }
`;

function Hamburger({ toggleHamburgerMenu }) {
  return (
    <StyledHamburgerSvg
      src={hamburgerSVG}
      alt="hamburger icon"
      onClick={toggleHamburgerMenu}
    />
  );
}

export default Hamburger;
