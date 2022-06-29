import React from 'react';
import { useSelector } from 'react-redux';
import {
  NoVideosFound,
  SideBarDesktop,
  SideBarMobile,
  VideoCard,
} from '../../components';

export const WatchLaterPage = ({ playlistModal, setPlaylistModal }) => {
  const { watchLater } = useSelector((store) => store.watchLater);
  console.log(watchLater, 'ASDDSD');
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
            Watch Later
            <span className="page-number">
              ( {(watchLater && watchLater.length) || 0} )
            </span>
          </div>
        </div>
        <div className="flex-base">
          <div className="outer-grid video-outer-grid">
            {watchLater?.length === 0 ? (
              <NoVideosFound>Watch Videos</NoVideosFound>
            ) : null}
            <div className="video-grid">
              {watchLater &&
                watchLater?.length > 0 &&
                watchLater?.map((watchLaterVideo) => (
                  <VideoCard
                    playlistModal={playlistModal}
                    setPlaylistModal={setPlaylistModal}
                    key={watchLaterVideo._id}
                    singleVideo={watchLaterVideo}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
