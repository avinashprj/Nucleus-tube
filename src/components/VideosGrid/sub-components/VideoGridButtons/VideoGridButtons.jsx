import React from 'react';
import { useDispatch } from 'react-redux';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { setSingleCategories } from '../../../../features/videos/videosSlice';

export const VideoGridButtons = ({ categories }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  return (
    <div className="homepage-buttons flex-base ">
      {categories.map((category) => (
        <button
          onClick={() => {
            navigate({
              pathname: '/',
              search: createSearchParams({
                category: category.categoryName,
              }).toString(),
            });
            dispatch(setSingleCategories(category.categoryName));
          }}
          key={category._id}
          cursor="pointer"
          className={`homepage-button ${
            params.get('category') === category.categoryName ? 'active' : ''
          }`}
          type="button"
        >
          <span>{category?.categoryName}</span>
        </button>
      ))}
    </div>
  );
};
