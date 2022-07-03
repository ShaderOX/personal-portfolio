import React from "react";
import emailSVG from "../../images/email.svg";

type Props = {
  className: string;
};

const EmailIcon: React.FC<Props> = props => {
  return <img src={emailSVG} alt="Email" {...props} />;
};

export default EmailIcon;
