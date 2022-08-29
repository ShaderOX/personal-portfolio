import React, { forwardRef, useRef } from "react";

type Props = {
  onClick: Function;
  className?: string;
};

const Hamburger = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      className={`hamburger-menu ${props.className}`}
      ref={ref}
      onClick={() => {
        props.onClick();
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});

export default Hamburger;
