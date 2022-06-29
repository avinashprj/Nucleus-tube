import React from 'react';
import { AiFillClockCircle, AiFillHeart } from 'react-icons/ai';
import { MdOutlineDeleteSweep, MdPlaylistAdd, MdDelete } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useLocation, Link, useParams } from 'react-router-dom';
import { useClickOutside } from '../../../CustomHooks/CustomHooks';
import { useRemoveHistoryMutation } from '../../../features/api/historyApi/historySliceApi';
import { useRemoveLikesMutation } from '../../../features/api/likesApi/likesSliceApi';
import { useRemoveVideoFromPlaylistMutation } from '../../../features/api/playlistsApi/playlistsSliceApi';
import {
  usePostWatchLaterMutation,
  useRemoveWatchLaterMutation,
} from '../../../features/api/watchLaterApi/watchLaterApi';
import { isPresentInState } from '../../../utils/utils';

export const ActionButtons = ({
  setPlaylistModal,
  singleVideo,
  setVideoOverlay,
}) => {
  // const videoOverlayModalRef = useClickOutside(() => {
  //   setVideoOverlay(false);
  // });
  const { pathname } = useLocation();
  console.log(pathname, 'PLAYLIST');
  const { authToken } = useSelector((store) => store.authentication);
  const { watchLater } = useSelector((store) => store.watchLater);
  const [removeLikes, { isLoading: isDeletingLikes }] =
    useRemoveLikesMutation();
  const [removeWatchLater, { isLoading: isDeletingWatchLater }] =
    useRemoveWatchLaterMutation();
  const [addWatchLater, { isLoading: addingWatchLater }] =
    usePostWatchLaterMutation();
  const [removeHistory, { isLoading: isDeletingHistory }] =
    useRemoveHistoryMutation();
  // const {} = useSelector((store) => store.likes);
  const [removeVideoFromPlaylist, { isLoading: isRemovingFromPlaylist }] =
    useRemoveVideoFromPlaylistMutation();

  const { playlistID } = useParams();
  console.log(playlistID);
  // useCloseOnClickOutside(videoCardOverlayRef, setVideoOverlay);
  return (
    <>
      <div
        // ref={videoOverlayModalRef}
        className="flex-base flex-column video-card-overlay"
      >
        {authToken.id ? (
          <button
            type="button"
            className="flex-al-center"
            onClick={() => setPlaylistModal((prev) => !prev)}
          >
            <AiFillClockCircle />
            <div className="m-left-small">Add to Playlist</div>
          </button>
        ) : (
          <Link to="/login" className="flex-al-center">
            <AiFillClockCircle />
            <div className="m-left-small">Add to Playlist</div>
          </Link>
        )}
        {pathname.includes(`/playlists/`) && (
          <button
            style={{ marginRight: '0em', marginBottom: '0' }}
            onClick={() =>
              removeVideoFromPlaylist({
                playlistId: playlistID,
                video: singleVideo,
                authToken,
              })
            }
            className=" flex-al-center single-video-button active-watchLater"
            type="button"
            disabled={isRemovingFromPlaylist && isRemovingFromPlaylist}
          >
            <MdDelete />
            <div
              style={{ marginLeft: '0.5em', marginRight: '0em' }}
              className=""
            >
              {(isDeletingLikes && 'Removing ...') ||
                'Remove from this Playlist'}
            </div>
          </button>
        )}

        {/* <button type="button" className="flex-al-center">
        <MdPlaylistAdd />
        <div className="m-left-small">Add to Watch Later</div>
      </button> */}
        {pathname === '/liked' && (
          <button
            style={{ marginRight: '0em', marginBottom: '0' }}
            onClick={() => removeLikes({ authToken, singleVideo })}
            className=" flex-al-center single-video-button active-like"
            type="button"
            disabled={isDeletingLikes && isDeletingLikes}
          >
            <AiFillHeart />
            <div
              style={{ marginLeft: '0.5em', marginRight: '0em' }}
              className=""
            >
              {(isDeletingLikes && 'Removing ...') || 'Remove from Liked'}
            </div>
          </button>
        )}
        {pathname === '/watchlater' ? (
          <button
            style={{ marginRight: '0em', marginBottom: '0' }}
            onClick={() => removeWatchLater({ authToken, singleVideo })}
            className=" flex-al-center single-video-button active-like"
            type="button"
            disabled={isDeletingWatchLater && isDeletingWatchLater}
          >
            <MdPlaylistAdd />
            <div
              style={{ marginLeft: '0.5em', marginRight: '0em' }}
              className=""
            >
              {(isDeletingWatchLater && 'Removing ...') ||
                'Remove from Watch Later'}
            </div>
          </button>
        ) : authToken.id ? (
          isPresentInState(singleVideo, watchLater) ? (
            <button
              onClick={() => removeWatchLater({ authToken, singleVideo })}
              className="flex-al-center active-button active-watchlater"
              type="button"
              disabled={isDeletingWatchLater && isDeletingWatchLater}
            >
              <MdPlaylistAdd />
              <div className="m-left-small">
                {(isDeletingWatchLater && 'Removing...') ||
                  'Remove from Watch Later'}
              </div>
            </button>
          ) : (
            <button
              onClick={() => addWatchLater({ authToken, singleVideo })}
              className="flex-al-center"
              type="button"
              disabled={addingWatchLater && addingWatchLater}
            >
              <MdPlaylistAdd />
              <div style={{ marginLeft: '0.5em' }} className="">
                {(addingWatchLater && 'Adding...') || 'Add to Watch Later'}
              </div>
            </button>
          )
        ) : (
          <Link to="/login" type="button" className="flex-al-center">
            <MdPlaylistAdd />
            <div className="m-left-small">Add to Watch Later</div>
          </Link>
        )}
        {pathname === '/history' ? (
          <button
            onClick={() => removeHistory({ authToken, singleVideo })}
            className="flex-al-center active-button active-history"
            type="button"
            disabled={isDeletingHistory && isDeletingHistory}
          >
            <MdOutlineDeleteSweep />
            <div className="m-left-small">
              {(isDeletingHistory && 'Removing...') || 'Remove from History'}
            </div>
          </button>
        ) : null}
      </div>
    </>
  );
};
