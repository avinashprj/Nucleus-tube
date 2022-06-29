import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiX, FiXCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReactDom from 'react-dom';
import { useClickOutside, useInput } from '../../CustomHooks/CustomHooks';
import {
  useAddVideoToPlaylistMutation,
  usePostPlaylistMutation,
  useRemoveVideoFromPlaylistMutation,
} from '../../features/api/playlistsApi/playlistsSliceApi';
import { setAuthToken } from '../../features/authentication/authenticationSlice';
import { isPresentInState } from '../../utils/utils';
import { useThemeContext } from '../../context/ThemeContext/ThemeContext';

export const PlaylistModal = ({
  playlistModal,
  setPlaylistModal,
  singleVideo,
}) => {
  const playlistModalRef = useClickOutside(() => {
    setPlaylistModal(false);
  });
  const navigate = useNavigate();
  const [createPlaylist, setCreatePlaylist] = React.useState(false);
  const { authToken } = useSelector((state) => state.authentication);
  const { playlists } = useSelector((state) => state.playlists);
  const { inputState, inputUpdate, setInputState } = useInput({
    title: '',
    description: '',
  });
  const [addPlaylist, { isLoading: isAddingPlaylist }] =
    usePostPlaylistMutation();

  const [addVideoToPlaylist, { isLoading: isAddingToPlaylist }] =
    useAddVideoToPlaylistMutation();

  const [removeVideoFromPlaylist, { isLoading: isRemovingFromPlaylist }] =
    useRemoveVideoFromPlaylistMutation();

  function handleCreatePlaylist(e) {
    e.preventDefault();
    if (!playlists?.some((item) => item.title === inputState.title)) {
      addPlaylist({ inputState, authToken });
      setInputState({ title: '' });
      setCreatePlaylist((prev) => !prev);
      return;
    }
    toast.error('Playlist already present');
  }
  const checkBoxHandler = (e, playlistItem, video) => {
    console.log(video, 'SADSDSDASHDouqgwubdoasbdsln');
    if (video) {
      if (e.target.checked) {
        addVideoToPlaylist({
          playlistId: playlistItem?._id,
          video,
          authToken,
        });
      } else {
        removeVideoFromPlaylist({
          playlistId: playlistItem?._id,
          video,
          authToken,
        });
      }
    }
  };

  const [colorState] = useThemeContext();
  console.log(colorState);

  return ReactDom.createPortal(
    <div className="app" data-theme={colorState}>
      <div className="flex playlist-outer-modal">
        <div
          ref={playlistModalRef}
          className="flex-base flex-column playlist-inner-modal"
        >
          <div className="flex-nav ">
            <div className="fs-medium">Save to...</div>
            <button
              type="button"
              className="border-none"
              onClick={() => setPlaylistModal((prev) => !prev)}
            >
              <FiXCircle className="playlist-modal-symbol pointer" />
            </button>
          </div>
          <form
            onSubmit={(e) => handleCreatePlaylist(e)}
            className="create-playlist-form"
          >
            <div
              className={`playlist-checkbox ${
                playlists?.length === 0 ? 'flex-jc-center' : 'flex-base'
              }`}
            >
              <div className="flex-base flex-column">
                {playlists?.length === 0 && !isAddingPlaylist && (
                  <h4 className="grid-center">No playlists added</h4>
                )}
                {playlists?.length === 0 && isAddingPlaylist && (
                  <h4 style={{ color: '#6be675' }}>Adding Playlist</h4>
                )}
                {playlists.length > 0 &&
                  playlists.map((playlist) => (
                    <div key={playlist._id}>
                      <input
                        name={playlist.title}
                        type="checkbox"
                        onChange={(e) =>
                          checkBoxHandler(e, playlist, singleVideo)
                        }
                        checked={
                          isPresentInState(singleVideo, playlist?.videos) || ''
                        }
                        className="playlist-modal-symbol"
                        style={{ cursor: 'pointer' }}
                      />
                      <label
                        htmlFor={playlist.title}
                        style={{ cursor: 'pointer', paddingLeft: '1em' }}
                      >
                        {playlist.title}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
            {createPlaylist ? (
              <div className="flex-base flex-column" style={{ marginTop: '0' }}>
                <label className="flex-nav" htmlFor="playlistTitle">
                  <span>Name</span>
                  <span>
                    <button
                      type="button"
                      className="border-none"
                      onClick={() => setCreatePlaylist((prev) => !prev)}
                    >
                      <FiX className="playlist-modal-symbol pointer" />
                    </button>
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  id="playlistTitle"
                  placeholder="Playlist Name"
                  className="playlist-create-input"
                  value={inputState.title}
                  onChange={inputUpdate}
                />
                {authToken.id ? (
                  <button
                    type="submit"
                    className="playlist-create-button button-cta flex"
                    disabled={!inputState?.title || isAddingPlaylist}
                  >
                    Create
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      navigate('/login');
                      setPlaylistModal((prev) => !prev);
                    }}
                    type="submit"
                    className="playlist-create-button button-cta flex"
                  >
                    Create
                  </button>
                )}
              </div>
            ) : (
              <div className="playlist-add ">
                <button
                  type="button"
                  onClick={() => setCreatePlaylist((prev) => !prev)}
                  className="border-none flex-al-center "
                >
                  <AiOutlinePlusCircle className="playlist-modal-symbol" />
                  <div style={{ paddingLeft: '0.8em' }}>
                    Create new playlist
                  </div>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};
