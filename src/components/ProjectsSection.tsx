import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

type Props = {};

const ProjectsSection: React.FC<Props> = props => {
  const dataCtx = useContext(DataContext);

  return (
    <section className="mt-32 mx-auto text-center">
      <h1 className="mb-8">
        <Heading text="My Work" />
      </h1>

      <span className="block text-mywhitelowopacity my-4 mb-14">
        Some of my proud works are below,
      </span>

      <div className="grid lg:grid-cols-2 gap-12 md:grid-cols-2 xs:grid-cols-1 mx-auto lg:w-3/4 w-11/12  place-items-center my-16">
        {dataCtx.projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
