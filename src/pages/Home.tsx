import React from "react";
import CTASection from "../components/CTASection";
import ProjectsSection from "../components/ProjectsSection";

type Props = {};

const Home: React.FC<Props> = props => {
  return (
    <>
      <CTASection />
      <ProjectsSection />
    </>
  );
};

export default Home;
