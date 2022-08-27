import React, { useRef } from "react";

type Props = {
  onClick?: Function;
  className?: string;
};

const Hamburger: React.FC<Props> = props => {
  const hamburgerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`hamburger-menu ${props.className}`}
      ref={hamburgerRef}
      onClick={() => {
        hamburgerRef.current?.classList.toggle("open");

        if (props.onClick !== undefined) props.onClick();
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Hamburger;
