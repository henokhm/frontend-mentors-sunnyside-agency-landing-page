import React from "react";
import styled from "styled-components/macro";

const StyledJumbotron = styled.section`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;

  @media (min-width: 950px) {
    flex-direction: ${(props) =>
      props.flexDirectionReverse ? "row-reverse" : "row"};
    text-align: left;
  }
`;

const StyledContents = styled.div`
  padding: 3em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;

  & h2 {
    font-family: "Fraunces", serif;
    font-size: 2em;
    color: var(--very-dark-desaturated-blue);
    line-height: 1.4em;
    margin: 0;
  }

  & p {
    margin: 0;
    padding: 2em 0;
    color: var(--dark-grayish-blue);
    line-height: 1.8em;
  }

  & a {
    font-family: "Fraunces", serif;
    font-size: 1.1em;
    color: var(--very-dark-grayish-blue);
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    transition: all 0.5s ease-in-out;

    &:hover,
    &:active {
      color: var(--very-dark-desaturated-blue);
      transform: scale(1.03);
    }

    &::before {
      content: "";
      position: absolute;
      height: 0.5em;
      width: 8em;
      top: 0.6em;
      left: calc(50% - 4em);
      z-index: -1;
      background: var(--soft-red);
      border-radius: 4em;
    }

    &:active::before,
    &:hover::before {
      transform: translateY(5px);
    }
  }

  @media (min-width: 450px) {
    padding: 3em 3em;
  }

  @media (min-width: 500px) {
    padding: 4em 4em;
  }

  @media (min-width: 600px) {
    padding: 6em 6em;
  }

  @media (min-width: 950px) {
    padding: 4em 2em;
    width: 50%;
    align-items: flex-start;
  }

  @media (min-width: 1000px) {
    padding: 6em 4em;
  }
`;

const StyledImage = styled.img`
  width: 100%;

  @media (min-width: 950px) {
    width: 50%;
  }
`;

function Jumbotron({
  header,
  body,
  ctaText,
  imageURLDesktop,
  imageURLMobile,
  imageAlt,
  isImageOnLeft,
}) {
  return (
    <StyledJumbotron flexDirectionReverse={isImageOnLeft}>
      <StyledContents>
        <h2>{header}</h2>
        <p>{body}</p>
        <a href="#">{ctaText}</a>
      </StyledContents>
      <StyledImage
        src={`${process.env.PUBLIC_URL}${imageURLDesktop}`}
        srcset={`
            ${`${process.env.PUBLIC_URL}${imageURLMobile}`}  651w,
            ${`${process.env.PUBLIC_URL}${imageURLDesktop}`} 1440w
          `}
        alt={imageAlt}
      />
    </StyledJumbotron>
  );
}

export default Jumbotron;
