import React, { MouseEventHandler, useRef } from "react";

type Props = {
  onClick?: Function;
  className?: string;
};

const Hamburger: React.FC<Props> = props => {
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      className={`hamburger-menu ${props.className}`}
      ref={hamburgerRef}
      onClick={() => {
        hamburgerRef.current?.classList.toggle("open");

        if (props.onClick !== undefined) props.onClick();
      }}
    >
      <div className="hamburger-menu__burger"></div>
    </button>
  );
};

export default Hamburger;
