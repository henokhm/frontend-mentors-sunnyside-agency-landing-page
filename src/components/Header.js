import React, { useState } from "react";
import styled from "styled-components/macro";

import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import heroImageDesktop from "../images/desktop/image-header.jpg";
import heroImageMobile from "../images/mobile/image-header.jpg";
import { ReactComponent as SunnysideLogo } from "../images/logo.svg";
import arrowDownSVG from "../images/icon-arrow-down.svg";

const StyledPageHeader = styled.header`
  padding: 1em;
  background-image: url(${heroImageMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  height: 90vh;
  position: relative;

  @media (min-width: 430px) {
    background-position: center 70%;
  }

  @media (min-width: 480px) {
    background-position: center 80%;
  }

  @media (min-width: 540px) {
    background-position: center 50%;
  }

  @media (min-width: 560px) {
    background-image: url(${heroImageDesktop});
  }
`;

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeadline = styled.h1`
  font-family: var(--ff-secondary);
  font-weight: 900;
  font-size: 2.5em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.2em;
  color: var(--white);
  text-align: center;
  margin-top: 2.5em;
`;

const StyledArrowDown = styled.img`
  display: block;
  margin: 3em auto;
  height: 7em;
  width: 2em;
`;

function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prevState) => !prevState);
  };

  return (
    <StyledPageHeader>
      <StyledTopBar>
        <SunnysideLogo />
        <Hamburger toggleHamburgerMenu={toggleHamburgerMenu} />
        <Navbar isHamburgerMenuOpen={isHamburgerMenuOpen} />
      </StyledTopBar>
      <StyledHeadline>We are creatives</StyledHeadline>
      <StyledArrowDown src={arrowDownSVG} alt="arrow down icon" />
    </StyledPageHeader>
  );
}

export default Header;
