import React from 'react';
import { useSelector } from 'react-redux';
import { SideBarDesktop, SideBarMobile, VideoCard } from '../../components';

export const HistoryPage = () => {
  const { history } = useSelector((store) => store.history);
  console.log(history);
  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <div className="flex-base flex-column container">
        <div className="outer-grid flex-nav">
          <div className="page-heading">
            History
            <span className="page-number">
              ( {(history && history.length) || 0} )
            </span>
          </div>
          <div className="">
            <button className="btn fs-small btn-outline-primary" type="button">
              Clear History
            </button>
          </div>
        </div>
        <div className="flex-base">
          <div className="outer-grid video-outer-grid">
            {history && history.length === 0 ? (
              <div className="grid-center">No videos found</div>
            ) : null}
            <div className="video-grid">
              {history &&
                history.length > 0 &&
                history?.map((likedVideo) => (
                  <VideoCard key={likedVideo._id} singleVideo={likedVideo} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
