import React from 'react';
import { useLocation } from 'react-router-dom';

function useCloseOnClickOutside(ref, handler = '') {
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
const useInput = (state) => {
  const [inputState, setInputState] = React.useState(state);
  const inputUpdate = (e) => {
    const inpValue = e.target.value;
    setInputState({
      ...inputState,
      [e.target.name]: inpValue,
    });
  };
  return { inputState, inputUpdate };
};

function useScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
}

function useLocalStorageState(
  key,
  defaultValue = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  // note: serialize and deserialize are functions that can be used by the user to do some custom operations on the data obtained from the localStorage like JSON.stringify and JSON.parse

  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    // note: defaultValue can be a function provided by user as it can be some computational heavy task and therefore we can lazy load it and call it only at the call and not at the initialization of our React.useState()

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export {
  useCloseOnClickOutside,
  useInput,
  useScrollToTop,
  useLocalStorageState,
};
