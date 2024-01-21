// Sidebar.js
import React, { useState } from 'react';
import ItemList from './ItemList';
import InputComponent from './InputComponent';
import "../style.css"

const Sidebar = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    // Update the items state with the new item
    setItems([...items, item]);
  };

  return (
    <div className="sidebar-container">
      <ItemList items={items} />
      <InputComponent onAddItem={handleAddItem} />
    </div>
  );
};

export default Sidebar;