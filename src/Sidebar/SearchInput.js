import React from 'react';
import './SearchInput.css'; // Import the CSS file for styling

const SearchInput = () => {
  return (
    <div className="container">
      <div className="search-bar">
        <input type="text" className='po' placeholder="Search" />
        <button className='jj' type="submit">Search</button>
      </div>
    </div>
  );
};

export default SearchInput;
