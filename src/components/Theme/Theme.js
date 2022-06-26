import React from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { useThemeContext } from '../../context/ThemeContext/ThemeContext';

export function Theme() {
  const [colorState, setColorState] = useThemeContext();
  function handleColorState() {
    setColorState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <button
      onClick={handleColorState}
      type="button"
      className="m-left-small border-none  flex-al-center"
    >
      {colorState === 'dark' ? (
        <BsMoonFill className="icon-theme" />
      ) : (
        <BsFillSunFill className="icon-theme" />
      )}
    </button>
  );
}
