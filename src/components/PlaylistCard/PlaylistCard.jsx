import React from 'react';
import { CgPlayList } from 'react-icons/cg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdPlaylistAdd, MdOutlineDeleteSweep, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ActionButtons } from '../VideoCard/sub-components/ActionButtons';
import { useRemovePlaylistMutation } from '../../features/api/playlistsApi/playlistsSliceApi';

export const PlaylistCard = ({ playlist }) => {
  const [playlistCardOverlay, setPlaylistCardOverlay] = React.useState(false);
  const { authToken } = useSelector((store) => store.authentication);

  const [deletePlaylist, { isLoading: isDeletingPlaylist }] =
    useRemovePlaylistMutation();

  return (
    <div className="video-card playlist-card">
      <Link to={`/playlists/${playlist._id}`} className="video-card-main">
        <img
          src={`${
            playlist.videos?.length === 0
              ? 'https://res.cloudinary.com/dwmd1yjww/image/upload/v1656930047/Feeling-Empty-Inside_scldxa.png'
              : playlist?.videos[0]?.img
          }`}
          alt="video thumbnail"
          className="relative"
        />
        <div className="flex flex-column playlist-overlay">
          <div className="playlist-overlay-number">
            {playlist?.videos?.length}
          </div>
          <CgPlayList />
        </div>
      </Link>
      <div className="video-card-details">
        <div className="flex-base flex-column ">
          <button className="playlist-card-heading" type="button">
            {playlist.title}
          </button>
        </div>
        <div className="playlist-card-dots video-card-dots flex">
          <button
            onClick={() => setPlaylistCardOverlay(!playlistCardOverlay)}
            className="border-none "
            type="button"
          >
            <BsThreeDotsVertical className="icon-svg flex" />
          </button>
          <div className="flex-base flex-column video-card-overlay playlist-card-overlay">
            {playlistCardOverlay && (
              <button
                onClick={() =>
                  deletePlaylist({ authToken, playlistID: playlist._id })
                }
                disabled={isDeletingPlaylist}
                className="flex-al-center active-button active-watchlater"
                type="button"
                // disabled={isDeletingWatchLater && isDeletingWatchLater}
              >
                <MdDelete />
                <div className="m-left-small">
                  Delete Playlist
                  {/* {(isDeletingWatchLater && 'Removing...') || 'Delete Playlist'} */}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
