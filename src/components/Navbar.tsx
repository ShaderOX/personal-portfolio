import React from "react";
import Brand from "./Brand";

type Props = {
  className?: string;
};

const Navbar: React.FC<Props> = props => {
  return (
    <nav className={`flex items-center justify-between ${props.className}`}>
      {/* Brand */}
      <div id="brand" className="w-full">
        <a href="/">
          <Brand />
        </a>
      </div>
      {/* Nav Items */}
      <div className="lg:w-4/5 w-full flex items-center justify-around">
        <a
          className="hover:text-myyellow transition-colors ease-in-out duration-200"
          href="#"
        >
          Projects
        </a>
        <a
          className="hover:text-myyellow transition-colors ease-in-out duration-200"
          href="#"
        >
          About Me
        </a>
        <a
          className="hover:text-myyellow transition-colors ease-in-out duration-200"
          href="#"
        >
          Résumé
        </a>
        <a
          className="hover:text-myyellow transition-colors ease-in-out duration-200"
          href="#"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
