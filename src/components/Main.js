import React from "react";
import styled from "styled-components/macro";

import Jumbotron from "./Jumbotron";
import ImageCard from "./ImageCard";
import jumbotronsData from "../fixtures/jumbotronsData";
import imageCardsData from "../fixtures/imageCardsData";

const StyledMain = styled.main`
  & div {
    @media (min-width: 950px) {
      display: flex;
      flex-basis: 50%;
      flex-wrap: wrap;
    }
  }
`;

function Main() {
  return (
    <StyledMain>
      {jumbotronsData.map((data) => (
        <Jumbotron {...data} key={data.id} />
      ))}
      <div>
        {imageCardsData.map((data) => (
          <ImageCard {...data} key={data.id} />
        ))}
      </div>
    </StyledMain>
  );
}

export default Main;
