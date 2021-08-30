import React from "react";
import Testimonial from "./Testimonial";
import testimonialsData from "../fixtures/testimonialsData.json";

function Testimonials() {
  return (
    <section>
      <h2>Client testimonials </h2>
      {testimonialsData.map((testimonial) => (
        <Testimonial {...testimonial} key={testimonial.author} />
      ))}
    </section>
  );
}

export default Testimonials;
