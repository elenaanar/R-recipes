// App.jsx
import React from 'react';
import './App.css';
import RecipeCard from './Components/RecipeCard';
import {SearchBar} from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="title-textbox">R'recipes</div>
      <div className="search-bar-container">
        <div className="top-bar"></div>
        <SearchBar />
      </div>
      <div className="recipe-cards-container">
        <RecipeCard
          title="Delicious Pasta"
          description="A mouth-watering pasta recipe with a rich tomato sauce."
          image="https://example.com/pasta-thumbnail.jpg"
          recipeLink="https://example.com/pasta-recipe"
        />
        {/* Add more RecipeCard components here as needed */}
      </div>
    </div>
  );
}

export default App;
