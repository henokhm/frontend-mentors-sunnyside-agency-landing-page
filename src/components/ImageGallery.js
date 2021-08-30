import React from "react";
import styled from "styled-components/macro";

import imageGallaryData from "../fixtures/imageGallaryData.json";

const StyledImageGallary = styled.section`
  display: flex;
  flex-wrap: wrap;

  & img {
    width: 50%;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 950px) {
    & img {
      width: 25%;
    }
  }
`;

function ImageGallery() {
  return (
    <StyledImageGallary>
      {imageGallaryData.map((data) => (
        <img
          src={`${process.env.PUBLIC_URL}${data.imageURLDesktop}`}
          srcset={`
              ${`${process.env.PUBLIC_URL}${data.imageURLMobile}`}  651w,
              ${`${process.env.PUBLIC_URL}${data.imageURLDesktop}`} 1440w
            `}
          alt={data.imageAlt}
        />
      ))}
    </StyledImageGallary>
  );
}

export default ImageGallery;
