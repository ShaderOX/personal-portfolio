import React, { useContext } from "react";
import EducationCard from "../components/EducationCard";
import Heading from "../components/Heading";
import DataContext from "../context/DataContext";

type Props = {};

const AboutMe: React.FC<Props> = props => {
  const dataCtx = useContext(DataContext);

  return (
    <section className="w-3/4 mt-32 mx-auto ">
      <h1 className="mb-8">
        <Heading text="About Me" />
      </h1>

      <div className="my-16 text-center text-mywhitelowopacity mx-auto text-xl">
        {dataCtx.aboutMeIntro}
      </div>

      <section>
        <span className="text-3xl font-mono text-myyellow font-bold">
          Education
        </span>

        {dataCtx.education.map(education => (
          <EducationCard {...education} />
        ))}
      </section>

      <section className="my-16">
        <span className="text-3xl font-mono text-myyellow font-bold">
          Certifications
        </span>

        {dataCtx.certificates.map(certificate => (
          <EducationCard {...certificate} />
        ))}
      </section>
    </section>
  );
};

export default AboutMe;
