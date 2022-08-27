import React from "react";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

type Props = {};

const projects = [
  // Code Editor
  {
    imageUrl:
      "https://raw.githubusercontent.com/ShaderOX/live-editor/main/assets/MainPage.gif",
    title: "Collaborative Code Editor",
    desc: "A web based editor that lets you collaborate on code, run it and see the output on the terminal screen below.",
    repoUrl: "https://github.com/ShaderOX/live-editor",
  },
  // Discord Music Bot
  {
    imageUrl:
      "https://raw.githubusercontent.com/ShaderOX/Discord-Bot/master/images/seek.PNG",
    title: "Discord Music Bot",
    desc: "A discord music bot like Groovy, Rhythm etc. It would play music from YouTube to a discord voice channel. It could maintain a queue, repeat, skip, seek tracks etc.",
    repoUrl: "https://github.com/ShaderOX/Discord-Bot",
  },
  // Chrome Extension
  {
    imageUrl:
      "https://raw.githubusercontent.com/ShaderOX/nust-feedback-ext/main/images/usage/3.jpeg",
    title: "Chrome Extension",
    desc: "A Chrome Extension Live on the Chrome Store that makes filling Teacher's Review forms easier. It remembers user's preferences for later. And is currently rated 5-star",
    repoUrl: "https://github.com/ShaderOX/nust-feedback-ext",
    liveUrl:
      "https://chrome.google.com/webstore/detail/qalam-feedback-form-autom/fkjcihepmkgphfakckacocmnopgmpbhb",
  },
];

const ProjectsSection: React.FC<Props> = props => {
  return (
    <section className="mt-32 mx-auto text-center">
      <h1 className="mb-8">
        <Heading text="My Work" />
      </h1>

      <span className="block text-mywhitelowopacity my-4 mb-14">
        Some of my proud works are below,
      </span>

      <div className="grid lg:grid-cols-2 gap-12 md:grid-cols-2 xs:grid-cols-1 mx-auto lg:w-3/4 w-11/12  place-items-center my-16">
        {projects.map(project => (
          <ProjectCard {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
