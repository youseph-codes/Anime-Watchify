import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Projects(props) {
  const currentProjects = {
    name: "Projects",
    description: "A list of projects that i have done and are coming soon",
  };

  return (
    <section className="center">
      <h1>{capitalizeFirstLetter(currentProjects.name)}</h1>
      <p>Below are some of the links to my projects and there github repos!</p>

      <h3>search displayed below</h3>
      <br />
      <br />
  
      <br />
      <br />

      <div className="flex-row ">

      </div>
    </section>
  );
}

export default Projects;
