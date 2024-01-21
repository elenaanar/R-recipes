import {useState} from 'react';
import './App.css'
import { SearchBar } from './Components/SearchBar';
function App() {
  return (
    <div className="App">
      <div className="search-bar-container">
      <div className="top-bar"></div>
      <div className="title-textbox">R'recipes</div>
      <SearchBar />
      {/* <div>SearchResults</div> */}
      </div>
    </div>
  );
}

export default App;
