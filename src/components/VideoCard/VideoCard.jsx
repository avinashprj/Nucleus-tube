import React from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdPlaylistAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const VideoCard = ({ setPlaylistModal }) => {
  const [videoOverlay, setVideoOverlay] = React.useState(false);

  return (
    <>
      <div className="video-card">
        <Link to="/video/singleVideo" className="video-card-main">
          <img
            src="https://i.ytimg.com/vi/JXeJANDKwDc/0.jpg"
            alt="video thumbnail"
            className=""
          />
        </Link>
        <div className="video-card-details">
          <Link to="/video/singleVideo" className="flex-base flex-column ">
            <button className="video-card-details-heading" type="button">
              What Are You Doing With Your Life? The Tail End
            </button>
            <div className="video-card-channel">Kurzgesagt – In a Nutshell</div>
          </Link>
          <div className="video-card-dots">
            <button
              onClick={() => setVideoOverlay((prev) => !prev)}
              className="border-none"
              type="button"
            >
              <BsThreeDotsVertical className="icon-svg" />
            </button>
            {videoOverlay && (
              <div className="flex-base flex-column video-card-overlay">
                <button
                  type="button"
                  className="flex-al-center"
                  onClick={() => setPlaylistModal((prev) => !prev)}
                >
                  <AiFillClockCircle />
                  <div className="m-left-small">Add to Playlist</div>
                </button>
                <button type="button" className="flex-al-center">
                  <MdPlaylistAdd />
                  <div className="m-left-small">Add to Watch Later</div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
