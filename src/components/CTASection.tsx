import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import SocialsLinks from "./SocialsLinks";

type Props = {};

const CTASection: React.FC<Props> = props => {
  return (
    <section className="h-full flex xs:my-48 lg:my-56 lg:w-2/5 md:w-8/12 sm:w-9/12 mx-auto px-2 items-center flex-col">
      <span id="greeting" className="text-4xl">
        Hello!
      </span>

      <div className="flex flex-col my-8">
        <Heading text="Asadullah Kashif" className="md:text-6xl xs:text-5xl" />
        <span className="text-center md:text-3xl xs:text-2xl text-mywhitelowopacity my-2">
          Software Engineer
        </span>
      </div>

      <div className="flex justify-between items-center w-3/4 mt-4">
        <div className="flex items-center justify-between lg:w-1/3 xs:w-2/6">
          <SocialsLinks />
        </div>

        <Link
          to="/contact-me"
          className="button font-semibold md:text-base text-sm"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
