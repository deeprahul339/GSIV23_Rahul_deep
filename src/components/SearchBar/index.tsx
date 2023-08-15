import searchIcon from '../../assets/png/search-icon.png';
import homeIcon from '../../assets/png/home-icon.png';

import Image from '../Image';

import './styles.css';

const SearchBar = () => (
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
        <input type="text" className="search-input" placeholder="Search..." />
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

export default SearchBar;
