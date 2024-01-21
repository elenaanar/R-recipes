import { useState } from "react";
import "./App.css";
import RecipeCard from "./Components/RecipeCard";
import { SearchBar } from "./Components/SearchBar";
import Sidebar from "./Components/Sidebar";
function App() {
  const [data, setData] = useState([]);
  const [ingredients, setIngredients] = useState([
    "milk",
    "sugar",
    "flour",
    "salt",
    "chicken",
    "apple",
    "banana",
  ]);
  return (
    <div className="App">
      <div className="top-bar"></div>
      <div className="main-page">
        <div className="search-bar-container">
          <div className="title-textbox">R'recipes</div>
          <SearchBar
            data={data}
            setData={setData}
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          {console.log(data)}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "1085px",
            }}
          >
            {data.map((r) => {
              return (
                <RecipeCard
                  key={r._id}
                  title={r.title}
                  description={r.description}
                  image={r.img}
                  recipeLink={r.url}
                ></RecipeCard>
              );
            })}
          </div>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
}

export default App;
