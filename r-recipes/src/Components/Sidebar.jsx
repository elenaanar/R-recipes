// Sidebar.js
import React, { useState } from 'react';
import ItemList from './ItemList';
import InputComponent from './InputComponent';
import "../style.css"

const Sidebar = ({items, setItems, setIngredients}) => {
  

  const handleAddItem = (item) => {
    // Update the items state with the new item
    setItems([...items, item]);
    setIngredients(items);
  };

  return (
    <div className="sidebar-container">
      <ItemList items={items} />
      <InputComponent onAddItem={handleAddItem} />
    </div>
  );
};

export default Sidebar;