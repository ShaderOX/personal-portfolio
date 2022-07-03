import React from "react";

type Props = {
  className?: string;
  text: string;
};

const Heading: React.FC<Props> = props => {
  return (
    <span
      data-animation="water"
      className={`my-4 font-italic flex font-bold tracking-wide md:text-6xl xs:text-4xl ${props.className}`}
    >
      <h2 className="whitespace-nowrap">{props.text}</h2>
      <h2 className="whitespace-nowrap">{props.text}</h2>
    </span>
  );
};

export default Heading;
configuration;
