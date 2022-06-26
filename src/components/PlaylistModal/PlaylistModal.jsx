import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiX, FiXCircle } from 'react-icons/fi';
import { useCloseOnClickOutside } from '../../CustomHooks/CustomHooks';

export const PlaylistModal = ({ playlistModal, setPlaylistModal }) => {
  const [createPlaylist, setCreatePlaylist] = React.useState(false);
  const playlistRef = React.useRef(null);
  useCloseOnClickOutside(playlistRef, setPlaylistModal);
  return (
    <>
      {playlistModal && (
        <div className="flex playlist-outer-modal">
          <div
            ref={playlistRef}
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
            <div className="flex-base playlist-checkbox">
              <div className="flex-al-center ">
                <input
                  type="checkbox"
                  id="asd143"
                  name="asd"
                  className="playlist-modal-symbol"
                  style={{ cursor: 'pointer' }}
                />
                <label
                  htmlFor="asd143"
                  style={{ cursor: 'pointer', paddingLeft: '1em' }}
                >
                  asd
                </label>
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
                  type="input"
                  id="playlistTitle"
                  placeholder="Playlist Name"
                  className="playlist-create-input"
                  defaultValue=""
                />
                <button
                  type="button"
                  disabled
                  className="playlist-create-button flex"
                >
                  Create
                </button>
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
          </div>
        </div>
      )}
    </>
  );
};
