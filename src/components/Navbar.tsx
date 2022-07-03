import React, { useRef } from "react";
import Brand from "./Brand";
import Hamburger from "./icons/Hamburger";

type Props = {
  className?: string;
};

const navigationItems = [
  { text: "Projects", href: "#" },
  { text: "About Me", href: "#" },
  { text: "Résumé", href: "#" },
  { text: "Contact Me", href: "#" },
];

const Navbar: React.FC<Props> = props => {
  const hiddenNavbarRef = useRef<HTMLDivElement>(null);

  return (
    <nav className={`flex items-center justify-between ${props.className}`}>
      {/* Brand */}
      <div id="brand" className="w-full">
        <a href="/">
          <Brand />
        </a>
      </div>
      {/* Nav Items */}
      <div className="lg:w-4/5 w-full flex items-center justify-end md:justify-around">
        {navigationItems.map(item => (
          <a className="hidden md:inline-block" href={item.href}>
            {item.text}
          </a>
        ))}
        <Hamburger
          className="md:hidden inline-block z-20"
          onClick={() => {
            const hide = "translate-x-[1000px]";
            const unhide = "translate-x-0";
            if (hiddenNavbarRef.current?.classList.contains(hide)) {
              hiddenNavbarRef.current.classList.add(unhide);
              hiddenNavbarRef.current.classList.remove(hide);
            } else {
              hiddenNavbarRef.current?.classList.add(hide);
              hiddenNavbarRef.current?.classList.remove(unhide);
            }
          }}
        />

        {/* Hidden Navigation Menu for smaller screens  */}
        <div
          ref={hiddenNavbarRef}
          className="md:hidden flex absolute items-center justify-center h-screen w-screen z-10 top-0 left-0 opacity-90 bg-black text-myyellow transition-transform duration-700 ease-out translate-x-[1000px]"
        >
          <div className="flex flex-col items-center justify-around h-1/3 my-auto">
            {navigationItems.map(item => (
              <a
                className="text-lg hover:opacity-75 duration-200 ease-in-out"
                href={item.href}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
