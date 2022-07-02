import React from 'react';
import { useSelector } from 'react-redux';
import { NoVideosFound, SideBarDesktop, SideBarMobile } from '../../components';
import { VideoCard } from '../../components/VideoCard/VideoCard';

export const LikesPage = ({ playlistModal, setPlaylistModal }) => {
  const { likes } = useSelector((store) => store.likes);

  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <div className="flex-base flex-column container">
        <div
          style={{ marginBottom: '1em', marginTop: '1em' }}
          className="outer-grid flex-base"
        >
          <div className="page-heading">
            Liked
            <span className="page-number">
              ( {(likes && likes.length) || 0} )
            </span>
          </div>
        </div>
        <div className="flex-base">
          <div className="outer-grid video-outer-grid">
            {likes && likes.length === 0 ? (
              <NoVideosFound>Like Videos</NoVideosFound>
            ) : (
              ''
            )}
            <div className="video-grid">
              {likes &&
                likes.length > 0 &&
                likes?.map((likedVideo) => (
                  <VideoCard
                    key={likedVideo._id}
                    singleVideo={likedVideo}
                    playlistModal={playlistModal}
                    setPlaylistModal={setPlaylistModal}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
