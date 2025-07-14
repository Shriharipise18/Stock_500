import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ 
  searchTerm, 
  setSearchTerm,
  placeholder = "Search by company or symbol..."
}) => {
  return (
    <div className="search-container">
      <div className="search-icon">
        <Search />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;