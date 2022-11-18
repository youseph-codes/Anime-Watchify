import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section>
      <h1 id="about" className="center">
        The ultimate anime searching web solution!
      </h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div>
      <p class="center"> Type in any anime title below to begin your search</p>
      
        
        
      </div>
    </section>
  );
}

export default About;
