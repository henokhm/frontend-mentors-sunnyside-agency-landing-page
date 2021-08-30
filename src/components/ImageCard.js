import React from "react";
import styled from "styled-components/macro";

const StyledImageCard = styled.div``;

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
