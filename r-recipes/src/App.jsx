import { useState } from "react";
import "./App.css";
import RecipeCard from "./Components/RecipeCard";
import { SearchBar } from "./Components/SearchBar";
function App() {
  const [data, setData] = useState([])
  const [ingredients, setIngredients] = useState(['milk', 'sugar', 'flour', 'salt', 'chicken', 'apple', 'banana'])
  return (
    <div className="App">
      <div className="top-bar"></div>
      <div className="main-page">
        <div className="title-textbox search-bar-container">
          R'recipes
          <SearchBar data={data} setData={setData} ingredients={ingredients} setIngredients={setIngredients}/>
          {console.log(data)}
          </div>
        <RecipeCard
          title="Delicious Pasta"
          description="A mouth-watering pasta recipe with a rich tomato sauce."
          image="https://www.jocooks.com/wp-content/uploads/2018/12/creamy-tomato-chicken-pasta-1-20.jpg"
          recipeLink="https://www.foodnetwork.com/recipes/food-network-kitchen/baked-feta-pasta-9867689"
        />
      </div>
    </div>
  );
}

export default App;
