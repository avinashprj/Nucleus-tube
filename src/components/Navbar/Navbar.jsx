import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { FiX } from 'react-icons/fi';
import { FaUser, FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useClickOutside } from '../../CustomHooks/CustomHooks';
import { logoutUser } from '../../features/authentication/authenticationSlice';
import { Theme } from '../Theme/Theme';

export const Navbar = ({ setSkip }) => {
  const [toggleSearchModal, setToggleSearchModal] = React.useState(false);
  const searchBarRef = useClickOutside(() => {
    setToggleSearchModal(false);
  });
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  return (
    <nav className="navbar flex-nav">
      <div className="nav-left flex-al-center">
        <Link to="/" className="nav-logo">
          Nucleus
        </Link>
      </div>
      <div className="nav-middle flex-al-center">
        {/* Note: Desktop search bar */}
        <form className="search-bar-center-desktop flex-al-center m-right-small">
          <input
            className="flex-al-center"
            placeholder="Search for Products Here"
          />
          <button className="flex-al-center" type="submit">
            <FaSearch className="nav-icons flex" />
          </button>
        </form>
        {/* Note: Desktop search bar END */}

        <div className={`search-bar-modal ${toggleSearchModal ? 'open' : ''}`}>
          <div
            ref={searchBarRef}
            className={`search-bar ${toggleSearchModal ? 'open' : ''}`}
          >
            <div className="search-bar-heading flex-nav">
              <span>What are you looking for?</span>
              <button
                onClick={() => setToggleSearchModal(!toggleSearchModal)}
                type="submit"
                className="border-none"
                id="search-close"
              >
                <FiX className=" close-symbol" />
              </button>
            </div>
            <form className="search-bar-center flex-al-center">
              <input placeholder="Search for Products Here" />
              <button type="submit">
                <IoIosSearch className="nav-icons icon-link" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="nav-right flex-al-center">
        <button
          onClick={() => setToggleSearchModal(!toggleSearchModal)}
          type="submit"
          className="flex search-symbol-mobile border-none m-right-small"
          href="#"
        >
          <FaSearch className="icon-svg" />
        </button>
        {authToken.id ? (
          <button
            type="button"
            onClick={() => {
              dispatch(logoutUser());
              setSkip(true);
              navigate('/login');
            }}
            className="flex-al-center border-none logout-btn "
          >
            LOG OUT
          </button>
        ) : (
          <Link to="/login" className="flex-al-center border-none ">
            <FaUser className="nav-icons " />
          </Link>
        )}
        <Theme />
        {/* <Link to="/login" className="flex">
          <FaUser className="pointer icon-svg " />
        </Link> */}
      </div>
    </nav>
  );
};
