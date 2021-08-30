import React from "react";
import styled from "styled-components/macro";

const StyledTestimonial = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;

  & img {
    border-radius: 50%;
    width: 50%;
    padding: 1.5em;
    max-width: 200px;
  }

  & blockquote {
    text-align: center;
    color: var(--very-dark-grayish-blue);
    line-height: 1.4em;
  }

  &.testimonial__meta {
    display: flex;
    flex-direction: column;
    padding: 2.5em;
  }

  &.testimonial__author {
    font-family: "Fraunces", serif;
    color: var(--very-dark-desaturated-blue);
    padding-bottom: 0.5em;
  }

  &.testimonial__position {
    font-size: 0.75em;
    color: var(--grayish-blue);
  }

  @media (min-width: 850px) {
    width: 50%;
  }

  @media (min-width: 1100px) {
    width: 33%;
  }
`;

function Testimonial({ author, position, body, photoURL }) {
  return (
    <StyledTestimonial>
      <img src={`${process.env.PUBLIC_URL}${photoURL}`} alt={author} />
      <blockquote>
        <p>{body}</p>
        <footer>
          <div class="testimonial__meta">
            <cite class="testimonial__author">{author}</cite>
            <span class="testimonial__position">{position}</span>
          </div>
        </footer>
      </blockquote>
    </StyledTestimonial>
  );
}

export default Testimonial;
