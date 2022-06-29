import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NoVideosFound, SideBarDesktop, SideBarMobile } from '../../components';
import { VideoCard } from '../../components/VideoCard/VideoCard';

export const PlaylistVideosPage = () => {
  const { playlists } = useSelector((store) => store.playlists);
  const { playlistID } = useParams();
  console.log(playlistID);
  const playlist = playlists?.find(
    (playlistItem) => playlistID === playlistItem._id
  );

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
            {playlist.title}
            <span className="page-number">
              ( {playlist.videos?.length || 0} )
            </span>
          </div>
        </div>
        <div className="flex-base">
          <div className="outer-grid video-outer-grid">
            {playlist.videos?.length === 0 ? (
              <NoVideosFound>Add Videos</NoVideosFound>
            ) : (
              ''
            )}
            <div className="video-grid">
              {playlist.videos?.length > 0 &&
                playlist.videos?.map((playlistVideo) => (
                  <VideoCard
                    key={playlistVideo._id}
                    singleVideo={playlistVideo}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
