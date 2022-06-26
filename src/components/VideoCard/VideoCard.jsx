import React from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdPlaylistAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ActionButtons } from './sub-components/ActionButtons';

export const VideoCard = ({ setPlaylistModal, singleVideo }) => {
  const [videoOverlay, setVideoOverlay] = React.useState(false);
  return (
    <>
      <div className="video-card">
        <Link to={`/video/${singleVideo._id}`} className="video-card-main">
          <img src={`${singleVideo.img}`} alt="video thumbnail" className="" />
        </Link>
        <div className="video-card-details">
          <Link
            to={`/video/${singleVideo._id}`}
            className="flex-base flex-column "
          >
            <button className="video-card-details-heading" type="button">
              {singleVideo.title}
            </button>
            <div className="video-card-channel">{singleVideo.creator}</div>
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
              <ActionButtons
                singleVideo={singleVideo}
                setPlaylistModal={setPlaylistModal}
                setVideoOverlay={setVideoOverlay}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
