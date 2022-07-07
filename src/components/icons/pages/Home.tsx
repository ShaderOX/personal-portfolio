import React from "react";
import CTASection from "../../CTASection";
import ProjectsSection from "../../ProjectsSection";

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
