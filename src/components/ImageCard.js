import React from "react";
import styled from "styled-components/macro";

const StyledImageCard = styled.div`
  background-image: url("${(props) => props.imageURLMobile}");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2em 4em;
  margin: 0 auto;
  text-align: center;
  height: 40em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & h2 {
    font-family: "Fraunces", serif;
    font-size: 2em;
    color: var(--very-dark-desaturated-blue);
    line-height: 1.4em;
    margin: 0 auto;
    max-width: 600px;
  }

  & p {
    margin: 0 auto;
    padding: 2em 0;
    color: var(--very-dark-desaturated-blue);
    line-height: 1.8em;
    max-width: 600px;
  }

  @media (min-width: 550px) {
    height: 45em;
  }

  @media (min-width: 720px) {
    height: 48em;
  }

  @media (min-width: 750px) {
    height: 50em;
  }

  @media (min-width: 800px) {
    height: 58em;
  }

  @media (min-width: 950px) {
    background-image: url("${(props) => props.imageURLDesktop}");
    background-position: center center;
    height: 35em;
    justify-content: flex-end;
  }
`;

function ImageCard({ header, body, imageURLDesktop, imageURLMobile }) {
  return (
    <StyledImageCard
      imageURLDesktop={imageURLDesktop}
      imageURLMobile={imageURLMobile}
    >
      <h2>{header}</h2>
      <p>{body}</p>
    </StyledImageCard>
  );
}

export default ImageCard;
