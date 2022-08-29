import React, { useContext, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import Brand from "./Brand";
import Hamburger from "./icons/Hamburger";

type Props = {
  className?: string;
};

const Navbar: React.FC<Props> = props => {
  const hiddenNavbarRef = useRef<HTMLDivElement>(null);
  const hamburgerMenuRef = useRef<HTMLDivElement>(null);
  const dataCtx = useContext(DataContext);

  const navigationItems = [
    { text: "My Work", to: "/my-work" },
    { text: "About Me", to: "/about-me" },
    { text: "Résumé", to: dataCtx.resume, external: true },
    { text: "Contact Me", to: "/contact-me" },
  ];

  const navbarHandler = useMemo(
    () => () => {
      const hide = "translate-x-[1000px]";
      const unhide = "translate-x-0";
      if (hiddenNavbarRef.current?.classList.contains(hide)) {
        hiddenNavbarRef.current.classList.add(unhide);
        hiddenNavbarRef.current.classList.remove(hide);
      } else {
        hiddenNavbarRef.current?.classList.add(hide);
        hiddenNavbarRef.current?.classList.remove(unhide);
      }

      hamburgerMenuRef.current?.classList.toggle("open");
    },
    []
  );

  return (
    <nav className={`flex items-center justify-between ${props.className}`}>
      {/* Brand */}
      <div id="brand" className="w-full">
        <Link to="/">
          <Brand />
        </Link>
      </div>
      {/* Nav Items */}
      <div className="lg:w-4/5 sm:w-full flex items-center justify-end md:justify-between">
        {navigationItems.map(item => {
          const className =
            "hidden md:inline-block hover:text-myyellow ease-in-out duration-200";

          return item.external ? (
            <a
              key={item.text}
              target="__blank"
              href={item.to}
              className={className}
            >
              {item.text}
            </a>
          ) : (
            <Link to={item.to} key={item.text} className={className}>
              {item.text}
            </Link>
          );
        })}
        <Hamburger
          ref={hamburgerMenuRef}
          className="md:hidden flex z-20"
          onClick={navbarHandler}
        />

        {/* Hidden Navigation Menu for smaller screens  */}
        <div
          ref={hiddenNavbarRef}
          className="md:hidden flex absolute items-center justify-center h-screen w-screen z-10 top-0 left-0 opacity-90 bg-black text-myyellow transition-transform duration-700 ease-out translate-x-[1000px]"
        >
          <div className="flex flex-col items-center justify-around h-1/3 my-auto">
            {navigationItems.map(item => {
              const className =
                "text-lg hover:opacity-75 duration-200 ease-in-out";

              const onClick = navbarHandler;

              return item.external ? (
                <a
                  key={item.text}
                  target="__blank"
                  href={item.to}
                  className={className}
                  onClick={onClick}
                >
                  {item.text}
                </a>
              ) : (
                <Link
                  to={item.to}
                  key={item.text}
                  className={className}
                  onClick={onClick}
                >
                  {item.text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
