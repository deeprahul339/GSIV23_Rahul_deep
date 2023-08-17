import searchIcon from '../../assets/png/search-icon.png';
import homeIcon from '../../assets/png/home-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { searchMoviesStart, setQuery } from '../../redux/slice/movieList';
import Image from '../Image';

import './styles.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: any) => state.query);

  const handleChange = (e: any) => {
    dispatch(setQuery(e.target.value));
    dispatch(searchMoviesStart(query));
  };
  return (
    <div className="search-parent-container">
      <div className="search-main-container">
        <div className="search-container">
          <button className="search-button">
            <Image
              src={searchIcon}
              alt="search-icon"
              height={20}
              width={20}
              className="search-image"
            />
          </button>
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
          />
        </div>
        <Image
          src={homeIcon}
          alt="home-icon"
          height={20}
          width={20}
          className="search-image"
        />
      </div>
    </div>
  );
};

export default SearchBar;
