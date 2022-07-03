import React from "react";
import Heading from "./Heading";
import EmailIcon from "./icons/EmailIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

type Props = {};

// TODO: May later fetch these things from the firebase lambda or something of that sort.
const socials = [
  {
    icon: GitHubIcon,
    href: "https://github.com/ShaderOX",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/asadullah-kashif-3162b1201/",
  },
  {
    icon: EmailIcon,
    href: "mailto:s.asad18k@gmail.com",
  },
];

const CTA: React.FC<Props> = props => {
  return (
    <div className="flex lg:w-2/5 md:w-8/12 sm:w-9/12 mx-auto px-2 items-center flex-col">
      <span id="greeting" className="text-4xl mt-16">
        Hello!
      </span>

      <div className="flex flex-col my-8">
        <Heading text="Asadullah Kashif" />
        <span className="text-center md:text-3xl xs:text-2xl text-mywhitelowopacity mt-1">
          Software Engineer
        </span>
      </div>

      <div className="flex justify-between items-center w-3/4 mt-4">
        <div className="flex items-center justify-between md:w-1/4 xs:w-2/6">
          {socials.map(social => (
            <a href={social.href} key={social.icon.toString()}>
              <social.icon className="h-8 w-8 hover:opacity-80 transition-opacity duration-200 ease-in-out" />
            </a>
          ))}
        </div>

        <a href="/contact-me" className="button md:text-base text-sm">
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default CTA;
