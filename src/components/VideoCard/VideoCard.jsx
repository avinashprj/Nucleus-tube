import React from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdPlaylistAdd } from 'react-icons/md';

export const VideoCard = () => {
  const [videoOverlay, setVideoOverlay] = React.useState(false);
  return (
    <>
      <div className="video-card">
        <div className="video-card-main">
          <img
            src="https://i.ytimg.com/vi/JXeJANDKwDc/0.jpg"
            alt="video thumbnail"
            className=""
          />
        </div>
        <div className="video-card-details">
          <div className="flex-base flex-column ">
            <button className="video-card-details-heading" type="button">
              What Are You Doing With Your Life? The Tail End
            </button>
            <div className="video-card-channel">Kurzgesagt – In a Nutshell</div>
          </div>
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
                  color="var(--font-color)"
                  className="flex-al-center"
                >
                  <AiFillClockCircle />
                  <div className="m-left-small">Add to Playlist</div>
                </button>
                <button
                  type="button"
                  color="var(--font-color)"
                  className="flex-al-center"
                >
                  <MdPlaylistAdd />
                  <div color="var(--error-color)" className="m-left-small">
                    Add to Watch Later
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
