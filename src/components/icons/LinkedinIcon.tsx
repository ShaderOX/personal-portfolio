import * as React from "react";
import linkedinSVG from "../../images/linkedin.svg";

type Props = {
  className: string;
};

const LinkedinIcon: React.FC<Props> = props => (
  <img src={linkedinSVG} alt="Linkedin" {...props} />
);

export default LinkedinIcon;
