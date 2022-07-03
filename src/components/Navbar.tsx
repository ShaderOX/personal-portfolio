import React from "react";

type Props = {};

const Navbar: React.FC<Props> = props => {
  return (
    <div className="flex items-center justify-between md:mx-10 mx-2 py-6">
      {/* Brand */}
      <div id="brand" className="w-full font-italic font-semibold text-2xl ">
        <a
          href="/"
          className="hover:tracking-wider transition-[letter-spacing] duration-200 ease-in-out"
        >
          ShaderOX
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
    </div>
  );
};

export default Navbar;
