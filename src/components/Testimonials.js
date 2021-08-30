import React from "react";
import styled from "styled-components/macro";

import Testimonial from "./Testimonial";
import testimonialsData from "../fixtures/testimonialsData.json";

const StyledTestimonials = styled.section`
  & h2 {
    font-family: "Fraunces", serif;
    font-size: 1.25em;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 3em 1em;
    color: var(--grayish-blue);
    text-align: center;
  }
`;

const StyledTestimonialsWrapper = styled.div`
  @media (min-width: 850px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 950px) {
  }
`;

function Testimonials() {
  return (
    <StyledTestimonials>
      <h2>Client testimonials </h2>
      <StyledTestimonialsWrapper>
        {testimonialsData.map((testimonial) => (
          <Testimonial {...testimonial} key={testimonial.author} />
        ))}
      </StyledTestimonialsWrapper>
    </StyledTestimonials>
  );
}

export default Testimonials;
