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
      className="h-full w-full bg-myyellow overflow-y-hidden relative"
      onMouseEnter={() => {
        setShowOverlay(true);
      }}
      onMouseLeave={() => {
        setShowOverlay(false);
      }}
    >
      <img src={imageUrl} alt={title} className="h-full w-full" />
      <div
        className={`h-full w-full bg-black opacity-90 z-10 absolute top-0 transition-transform duration-500 ease-out`}
        style={{
          transform: `translateY(${showOverlay ? "0" : "-100%"})`,
        }}
      >
        <div className="flex flex-col items-center justify-around h-full text-mywhite mx-5">
          <span className="text-2xl font-mono text-myyellow">{title}</span>
          <span className="text-sm md:text-base">{desc}</span>
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
