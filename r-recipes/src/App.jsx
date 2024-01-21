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
          {
            data.map((r) => { return <RecipeCard 
              key={r._id}
              title={r.title} 
              description={r.description} 
              image={r.img} 
              recipeLink={r.url}></RecipeCard>})
          }
      </div>
    </div>
  );
}

export default App;
