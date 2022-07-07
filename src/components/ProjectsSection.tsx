import React from "react";
import Heading from "./Heading";

type Props = {};

const ProjectsSection: React.FC<Props> = props => {
  return (
    <section className="mt-32 mx-auto text-center">
      <div id="my-work" className="mb-8">
        <Heading text="My Work" />
      </div>

      <span className="block text-mywhitelowopacity my-4 mb-14">
        Some of my proud works are below,
      </span>

      <div className="grid lg:grid-cols-3 gap-12 md:grid-cols-2 xs:grid-cols-1 mx-auto lg:w-3/4 w-11/12  place-items-center my-16">
        <div className="h-48 w-80 bg-myyellow"></div>
        <div className="h-48 w-80 bg-myyellow"></div>
        <div className="h-48 w-80 bg-myyellow"></div>
        <div className="h-48 w-80 bg-myyellow"></div>
        <div className="h-48 w-80 bg-myyellow"></div>
        <div className="h-48 w-80 bg-myyellow"></div>
        <div className="h-48 w-80 bg-myyellow"></div>
        <div className="h-48 w-80 bg-myyellow"></div>
        <div className="h-48 w-80 bg-myyellow"></div>
        <div className="h-48 w-80 bg-myyellow"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;
