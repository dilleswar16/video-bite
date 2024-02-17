import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const PlayListItem = ({ video }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <>
      <div className={"rounded-lg flex flex-col items-center py-2 ${isClicked ? 'ml-auto' : ''}`"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}>

        <img className="rounded-lg" src={video.thumb} style={{ height: "100%", width: "100%" }} alt="thumbnail" />

        <div className="absolute inset-0 flex items-center justify-center">
        <i class="fa-regular fa-3x fa-circle-play"></i>
          </div>

        <div className="grid">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <span className="text-left mb-2 font-bold md:mb-0 md:mr-2">
              {video.description.substring(0, 50).trim() + "..."}
            </span>
          </div>
        </div>
      </div>


    </>
  );
};

export default PlayListItem;