import { useState } from "react";
import "./App.css";
import RecipeCard from "./Components/RecipeCard";
import { SearchBar } from "./Components/SearchBar";
import Sidebar from "./Components/Sidebar";
function App() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  let localData = JSON.parse(localStorage.getItem("items"));
  if (localData == null) {
    localData = [];
  }
  const [ingredients, setIngredients] = useState(localData);
  console.log(ingredients);
  return (
    <div className="App">
      <div className="top-bar">
      <div className="title-textbox">R'recipes</div>
      </div>
      <div className="main-page">
        <div className="search-bar-container">
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
                  recipeLink={r.url}
                ></RecipeCard>
              );
            })}
          </div>
        </div>
      </div>
      <Sidebar
        items={items}
        setItems={setItems}
        setIngredients={setIngredients}
      />
      {console.log(items)}
    </div>
  );
}

export default App;
