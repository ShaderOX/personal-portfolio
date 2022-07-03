import React from "react";
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

const SocialsLinks: React.FC<Props> = props => {
  return (
    <>
      {socials.map(social => (
        <a href={social.href} key={social.icon.toString()} className="px-1">
          <social.icon className="h-8 w-8 hover:opacity-80 transition-opacity duration-200 ease-in-out" />
        </a>
      ))}
    </>
  );
};

export default SocialsLinks;
