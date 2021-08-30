import React from "react";
import styled from "styled-components/macro";

const StyledJumbotron = styled.section``;

const StyledContents = styled.div`
  & h2 {
  }

  & a {
    &:hover,
    &:active {
    }
  }
`;

const StyledImage = styled.img``;

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
