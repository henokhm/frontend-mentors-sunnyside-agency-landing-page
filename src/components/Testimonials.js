import React from "react";
import Testimonial from "./Testimonial";

const testimonialsData = [
  {
    author: "Emily R.",
    position: "Marketing Director",
    body: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  {
    author: "Thomas S.",
    position: "Chief Operating Officer",
    body: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
  },
  {
    author: "Jennie F.",
    position: "Business Owner",
    body: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
  },
];

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
