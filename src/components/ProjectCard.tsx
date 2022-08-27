import React, { useState } from "react";

type Props = {
  imageUrl: string;
  title: string;
  desc: string;
  repoUrl: string;
  liveUrl?: string;
};

const ProjectCard: React.FC<Props> = ({
  imageUrl,
  title,
  desc,
  repoUrl,
  liveUrl,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div
      className="h-64 w-[30rem] bg-myyellow overflow-y-hidden relative"
      onMouseEnter={() => {
        setShowOverlay(true);
      }}
      onMouseLeave={() => {
        setShowOverlay(false);
      }}
    >
      <img src={imageUrl} alt={title} />
      <div
        className={`h-64 w-[30rem] bg-black opacity-90 z-20 absolute top-0 translate-y-[${
          showOverlay ? "0px" : "-300px"
        }] transition-transform duration-500 ease-out`}
      >
        <div className="flex flex-col items-center justify-around h-full text-mywhite mx-5">
          <span className="text-3xl font-italic font-semibold text-myyellow">
            {title}
          </span>
          <span className="font-mono text-xs">{desc}</span>
          <div className="w-full flex items-center justify-around">
            <a href={repoUrl} className="hover:opacity-80">
              <img src="/code-icon.png" alt="repo-url" className="h-6 w-6" />
            </a>
            {liveUrl && (
              <a href={liveUrl} className="hover:opacity-80">
                <img src="/live-icon.png" alt="live-url" className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
