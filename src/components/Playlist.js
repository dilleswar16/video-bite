import React, { useContext, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ReactPlayer from 'react-player';
import PlayListItem from './PlayListItem';
import { MyContext } from '../MyContext';

const Playlist = () => {
  const { mediaJsonData, setMediaJsonData } = useContext(MyContext);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVideoClicked, setIsVideoClicked] = useState(false);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const videos = Array.from(mediaJsonData.categories[0].videos);
    const [reorderedVideo] = videos.splice(result.source.index, 1);
    videos.splice(result.destination.index, 0, reorderedVideo);

    const newMediaJsonData = {
      ...mediaJsonData,
      categories: [
        {
          ...mediaJsonData.categories[0],
          videos: videos
        }
      ]
    };

    setMediaJsonData(newMediaJsonData);
  };


  const handleVideoClick = (index) => {
    
    
    window.scrollTo({top: 0,behavior: 'smooth'});
    if (currentPlayingIndex === index) {
      return;
    }

    else {
    setIsVideoClicked(true);
    setCurrentPlayingIndex(index);
    }
  
    
  };
  

  const filteredVideos = mediaJsonData.categories[0].videos.filter((video) =>
    video.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-3">
      <div className="flex justify-center">
      <div className="relative flex items-center justify-center md:justify-start mb-4">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-3 text-md font-medium text-center text-gray-800 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      </div>


      <div className="flex justify-center">
        <div className={isVideoClicked ? 'w-1/4' : 'w-3/4'}>

          <div className="flex justify-center py-2">
            <div className="grid">
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="playlist">
                  {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                      {filteredVideos.length === 0 && !isVideoClicked ? (
                        <p className="text text-gray-500 py-2">No videos found</p>
                      ) : (
                        filteredVideos.map((video, index) => (
                          <Draggable key={video.description} draggableId={video.description} index={index}>
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                onClick={() => handleVideoClick(index)}
                              >
                                <PlayListItem key={video.title} video={video} />
                              </li>
                            )}
                          </Draggable>
                        ))
                      )}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>

        </div>

        {isVideoClicked && (
          <div className="w-3/4 mx-4 my-4">
            {isVideoClicked && filteredVideos.length === 0 &&  <p className="text-left text-gray-500 py-2 px-8 mx-8">No videos found</p>}
            <ReactPlayer
              style={{position: 'sticky', top:"10%"}}
              width="100%"
              height={`${searchTerm === "" ?  "13%": "76.5vh"}`}
              url={filteredVideos[currentPlayingIndex] !== undefined ? filteredVideos[currentPlayingIndex].sources : ""}
              controls={true}
              playing={true}
              light={<><img className="rounded-lg" src={filteredVideos[currentPlayingIndex] !== undefined ? filteredVideos[currentPlayingIndex].thumb : ""} style={{ height: '100%', width: '100%' }} alt="thumbnail" />
              </>}
              pip={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Playlist;
