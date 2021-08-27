import React from "react";

function Testimonial({ author, position, body }) {
  console.log({ author, position, body });
  return (
    <div>
      <h3>{author}</h3>
      <p>{position}</p>
      <p>{body}</p>
    </div>
  );
}

export default Testimonial;
