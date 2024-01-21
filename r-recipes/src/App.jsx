import {useState} from 'react';
import './App.css'
import RecipeCard from './Components/RecipeCard';
import { SearchBar } from './Components/SearchBar';
function App() {
  return (
    <div className="App">
      <div className="title-textbox">R'recipes</div>
      <div className="search-bar-container">
        <div className="top-bar"></div>
        <SearchBar />
        <div>SearchResults</div>
      </div>
      <RecipeCard
        title="Delicious Pasta"
        description="A mouth-watering pasta recipe with a rich tomato sauce."
        image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1615916524567.jpeg"
        recipeLink="https://www.foodnetwork.com/recipes/food-network-kitchen/baked-feta-pasta-9867689"
      />
    </div>
  );
}

export default App;
