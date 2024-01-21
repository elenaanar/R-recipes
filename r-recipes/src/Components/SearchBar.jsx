import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';
import axios from 'axios';

export const SearchBar = ({ data, setData, ingredients, setIngredients }) => {
  const [input, setInput] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const query = { ingredients: ingredients, search: input };
    let res = await axios.get('http://localhost:5010/search_recipes', {
      params: query,
    });
    setData(res.data);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  return (
    <div className="input-wrapper">
      {/*<FaSearch id="search-icon" />*/}
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
