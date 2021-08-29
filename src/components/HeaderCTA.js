import React from "react";
import styled from "styled-components/macro";

const StyledCTAButton = styled.button`
  text-decoration: none;
  color: var(--white);
  display: inline-block;
  margin-top: 1em;
  padding: 1em 1.5em;
  background: var(--yellow);
  border: 2px solid var(--yellow);
  border-radius: 2em;
  color: var(--dark-desaturated-cyan);
  font-family: "Fraunces", serif;
  font-size: 0.75em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:active {
    background: transparent;
  }

  @media (min-width: 651px) {
    margin-top: 0;
    background: var(--white);
    border: none;

    &:hover,
    &:active {
      background: #fffa;
    }
  }
`;

function HeaderCTA() {
  return <StyledCTAButton>Contact</StyledCTAButton>;
}

export default HeaderCTA;
