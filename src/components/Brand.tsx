import React from "react";

type Props = {
  text?: string;
  className?: string;
};

const Brand: React.FC<Props> = props => {
  return (
    <span
      className={`font-italic font-semibold text-2xl hover:tracking-wider transition-[letter-spacing] duration-200 ease-in-out ${props.className}`}
    >
      {props.text ? props.text : "ShaderOX"}
    </span>
  );
};

export default Brand;
