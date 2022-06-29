import React from 'react';
import { useSelector } from 'react-redux';
import {
  NoVideosFound,
  PlaylistCard,
  SideBarDesktop,
  SideBarMobile,
} from '../../components';

export const Playlist = () => {
  const { playlists } = useSelector((store) => store.playlists);
  console.log(playlists, 'Playlists');
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
            Playlists <span className="page-number">( 1 )</span>
          </div>
        </div>
        <div className="flex-base">
          <div className="outer-grid video-outer-grid">
            {playlists?.length === 0 ? (
              <NoVideosFound>Add Playlist</NoVideosFound>
            ) : null}
            <div className="video-grid">
              {playlists.map((playlist) => (
                <PlaylistCard key={playlist._id} playlist={playlist} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
