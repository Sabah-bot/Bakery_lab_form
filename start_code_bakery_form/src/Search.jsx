import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-field">Search </label>
      <input
        type="text"
        id="search-field"
        value={query}
        placeholder="Search BNTA cakes"

        onChange={(event) => setQuery(event.target.value)}
      />
      <input type="submit"  value="Search" placeholder='Search for cakes, recipies and more!' />
    </form>
  );
};

export default Search;


