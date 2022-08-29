import React from "react";

type Props = {
  title: string;
  date: string;
  institute: string;
  certificateUrl?: string;
};

const EducationCard: React.FC<Props> = props => {
  return (
    <div>
      <div className="mt-8 flex md:items-center md:flex-row flex-col">
        <div className="md:text-2xl text-xl">{props.title}</div>

        <div className="flex items-center justify-between">
          <div className="md:mx-4 mr-4 text-mywhitelowopacity">
            {props.date}
          </div>
          {props.certificateUrl && (
            <a target="_blank" href={props.certificateUrl}>
              <img
                src="/certificate.png"
                alt="certificate"
                className="h-6 w-6"
              />
            </a>
          )}
        </div>
      </div>
      <div className="md:mt-2 mt-4 text-lg text-mywhitelowopacity">
        {props.institute}
      </div>
    </div>
  );
};

export default EducationCard;
