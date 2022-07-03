import React from "react";
import ghSVG from "../../images/gh.svg";

type Props = {
  className: string;
};

const GitHubIcon: React.FC<Props> = props => {
  return <img src={ghSVG} alt="Github" {...props} />;
};

export default GitHubIcon;
