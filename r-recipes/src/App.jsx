import React from 'react';
import './App.css';
import RecipeGrid from './Components/Grid';
import { SearchBar } from './Components/SearchBar';

function App() {
  const recipes = [
    // Add your recipe data here
    {
      title: "TOMATO GOAT CHEESE PASTA",
      description: "This tomato goat cheese pasta recipe is simple, fresh, and easy to make.",
      image: "https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2-1200x1752.jpg",
      recipeLink: "https://www.saltandlavender.com/tomato-goat-cheese-pasta/",
    },
    {
      title: "TOMATO GOAT CHEESE PASTA",
      description: "This tomato goat cheese pasta recipe is simple, fresh, and easy to make.",
      image: "https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2-1200x1752.jpg",
      recipeLink: "https://www.saltandlavender.com/tomato-goat-cheese-pasta/",
    },
    {
      title: "TOMATO GOAT CHEESE PASTA",
      description: "This tomato goat cheese pasta recipe is simple, fresh, and easy to make.",
      image: "https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2-1200x1752.jpg",
      recipeLink: "https://www.saltandlavender.com/tomato-goat-cheese-pasta/",
    },
    {
      title: "TOMATO GOAT CHEESE PASTA",
      description: "This tomato goat cheese pasta recipe is simple, fresh, and easy to make.",
      image: "https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2-1200x1752.jpg",
      recipeLink: "https://www.saltandlavender.com/tomato-goat-cheese-pasta/",
    },
    {
      title: "TOMATO GOAT CHEESE PASTA",
      description: "This tomato goat cheese pasta recipe is simple, fresh, and easy to make.",
      image: "https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2-1200x1752.jpg",
      recipeLink: "https://www.saltandlavender.com/tomato-goat-cheese-pasta/",
    },
    {
      title: "TOMATO GOAT CHEESE PASTA",
      description: "This tomato goat cheese pasta recipe is simple, fresh, and easy to make.",
      image: "https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2-1200x1752.jpg",
      recipeLink: "https://www.saltandlavender.com/tomato-goat-cheese-pasta/",
    },
    // Add more recipes as needed
  ];

  return (
    <div className="App">
      <div className="search-bar-container">
      <div className="title-textbox">R'recipes</div>
        <div className="top-bar"></div>
        <SearchBar />
        <div className="recipe-grid-container">
          <RecipeGrid recipes={recipes} />
        </div>
      </div>
    </div>
  );
}

export default App;
