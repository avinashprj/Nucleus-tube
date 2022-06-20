import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const VideoCard = () => (
  <>
    <div cursor="pointer" className="video-card">
      <div className="video-card-main">
        <img
          src="https://i.ytimg.com/vi/JXeJANDKwDc/0.jpg"
          alt="video thumbnail"
          className=""
        />
      </div>
      <div className="video-card-details">
        <div className="flex-base flex-column ">
          <button
            cursor="pointer"
            className="video-card-details-heading"
            type="button"
          >
            What Are You Doing With Your Life? The Tail End
          </button>
          <div className="video-card-channel">Kurzgesagt – In a Nutshell</div>
        </div>
        <div className="video-card-dots">
          <button cursor="pointer" className="border-none" type="button">
            <BsThreeDotsVertical className="icon-svg" />
          </button>
        </div>
      </div>
    </div>
    <div cursor="pointer" className="video-card">
      <div className="video-card-main">
        <img
          src="https://i.ytimg.com/vi/RcGyVTAoXEU/0.jpg"
          alt="video thumbnail"
          className=""
        />
      </div>
      <div className="video-card-details">
        <div className="flex-base flex-column  ">
          <button
            cursor="pointer"
            className="video-card-details-heading"
            type="button"
          >
            How to make stress your friend | Kelly McGonigal
          </button>
          <div className="video-card-channel">TED</div>
        </div>
        <div className="video-card-dots">
          <button cursor="pointer" className="border-none" type="button">
            <BsThreeDotsVertical className="icon-svg" />
          </button>
        </div>
      </div>
    </div>
    <div cursor="pointer" className="video-card">
      <div className="video-card-main">
        <img
          src="https://i.ytimg.com/vi/j6K0iQg_p1w/0.jpg"
          alt="video thumbnail"
          className=""
        />
      </div>
      <div className="video-card-details">
        <div className="flex-base flex-column  ">
          <button
            cursor="pointer"
            className="video-card-details-heading"
            type="button"
          >
            Clover Hogan: What to do when climate change feels unstoppable | TED
          </button>
          <div className="video-card-channel">TED</div>
        </div>
        <div className="video-card-dots">
          <button cursor="pointer" className="border-none" type="button">
            <BsThreeDotsVertical className="icon-svg" />
          </button>
        </div>
      </div>
    </div>
    <div cursor="pointer" className="video-card">
      <div className="video-card-main">
        <img
          src="https://i.ytimg.com/vi/H14bBuluwB8/0.jpg"
          alt="video thumbnail"
          className=""
        />
      </div>
      <div className="video-card-details">
        <div className="flex-base flex-column  ">
          <button
            cursor="pointer"
            className="video-card-details-heading"
            type="button"
          >
            Grit: the power of passion and perseverance | Angela Lee Duckworth
          </button>
          <div className="video-card-channel">TED</div>
        </div>
        <div className="video-card-dots">
          <button cursor="pointer" className="border-none" type="button">
            <BsThreeDotsVertical className="icon-svg" />
          </button>
        </div>
      </div>
    </div>
  </>
);
