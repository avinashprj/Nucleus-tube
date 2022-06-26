import React from 'react';
import { useSelector } from 'react-redux';
import { SideBarDesktop, SideBarMobile, VideoCard } from '../../components';

export const WatchLaterPage = () => {
  const { watchLater } = useSelector((store) => store.watchLater);
  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <div className="flex-base flex-column container">
        <div className="outer-grid flex-base">
          <div className="page-heading">
            Watch Later{' '}
            <span className="page-number">
              ( {(watchLater && watchLater.length) || 0} )
            </span>
          </div>
        </div>
        <div className="flex-base">
          <div className="outer-grid video-outer-grid">
            {watchLater && watchLater.length === 0 ? (
              <div className="grid-center">No videos found</div>
            ) : (
              ''
            )}
            <div className="video-grid">
              {watchLater &&
                watchLater?.length > 0 &&
                watchLater?.map((watchLaterVideo) => (
                  <VideoCard
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
