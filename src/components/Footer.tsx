import React from "react";
import Brand from "./Brand";
import SocialsLinks from "./SocialsLinks";

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = props => {
  return (
    <footer
      className={`mx-auto text-center flex flex-col items-center justify-around md:h-64 xs:h-48  ${props.className}`}
    >
      <Brand className="cursor-default justify-self-start" />

      <div className="flex items-center md:justify-around xs:justify-between w-1/5 mx-auto md:1/3">
        <SocialsLinks />
      </div>

      <span className="my-4 text-mywhitelowopacity">
        Made with 💖 by Asadullah Kashif
      </span>
    </footer>
  );
};

export default Footer;
