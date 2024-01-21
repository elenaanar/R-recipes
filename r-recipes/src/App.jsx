import { useState } from "react";
import "./App.css";
import RecipeCard from "./Components/RecipeCard";
import { SearchBar } from "./Components/SearchBar";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <div className="App">
      <div className="top-bar"></div>
      <div className="main-page">
        <div className="title-textbox search-bar-container">
          R'recipes
          <SearchBar />
          </div>
        <RecipeCard
          title="Delicious Pasta"
          description="A mouth-watering pasta recipe with a rich tomato sauce."
          image="https://www.jocooks.com/wp-content/uploads/2018/12/creamy-tomato-chicken-pasta-1-20.jpg"
          recipeLink="https://www.foodnetwork.com/recipes/food-network-kitchen/baked-feta-pasta-9867689"
        />
      </div>
      <Sidebar/>
    </div>
  );
}

export default App;
