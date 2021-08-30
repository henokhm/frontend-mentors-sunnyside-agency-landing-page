import React from "react";
import styled from "styled-components/macro";

import Jumbotron from "./Jumbotron";
import ImageCard from "./ImageCard";
import jumbotronsData from "../fixtures/jumbotronsData";
import imageCardsData from "../fixtures/imageCardsData";

const StyledMain = styled.main``;

function Main() {
  return (
    <StyledMain>
      {jumbotronsData.map((data) => (
        <Jumbotron {...data} key={data.id} />
      ))}
      {imageCardsData.map((data) => (
        <ImageCard {...data} key={data.id} />
      ))}
    </StyledMain>
  );
}

export default Main;
