import React from 'react';
import { useSelector } from 'react-redux';
import { SideBarDesktop, SideBarMobile } from '../../components';
import { VideoCard } from '../../components/VideoCard/VideoCard';

export const LikesPage = () => {
  const { likes } = useSelector((store) => store.likes);
  console.log(likes);
  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <div className="flex-base flex-column container">
        <div className="outer-grid flex-base">
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
              <div className="grid-center">No videos found</div>
            ) : (
              ''
            )}
            <div className="video-grid">
              {likes &&
                likes.length > 0 &&
                likes?.map((likedVideo) => (
                  <VideoCard key={likedVideo._id} singleVideo={likedVideo} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
