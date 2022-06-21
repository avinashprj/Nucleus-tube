import React from 'react';
import { AiFillHeart, AiFillClockCircle } from 'react-icons/ai';
import { RiPlayListAddLine } from 'react-icons/ri';
import { PlaylistModal, SideBarDesktop, SideBarMobile } from '../../components';

export const SingleVideoPage = ({ playlistModal, setPlaylistModal }) => {
  console.log(playlistModal);
  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <div className="flex-base ">
        <div className="outer-grid single-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/JXeJANDKwDc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
          <div style={{ margin: '1em' }} className="flex-base flex-column">
            <div className="single-video-heading">
              What Are You Doing With Your Life? The Tail End
            </div>
            <div className="single-video-channel">
              Kurzgesagt – In a Nutshell
            </div>
            <div className="flex-al-center-wrap single-video-buttons">
              <button
                className="flex-al-center single-video-button"
                type="button"
              >
                <AiFillHeart />
                <div style={{ marginLeft: '0.5em' }} className="">
                  Like
                </div>
              </button>
              <button
                className="flex-al-center single-video-button"
                type="button"
              >
                <AiFillClockCircle />
                <div style={{ marginLeft: '0.5em' }} className="">
                  Watch Later
                </div>
              </button>
              <button
                className="flex-al-center single-video-button"
                type="button"
                onClick={() => setPlaylistModal((prev) => !prev)}
              >
                <RiPlayListAddLine />
                <div style={{ marginLeft: '0.5em' }} className="">
                  Save
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
