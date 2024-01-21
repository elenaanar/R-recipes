import React, { useState } from 'react';
import ItemList from './ItemList';
import InputComponent from './InputComponent';
import "../style.css";

const Sidebar = () => {
  const [items, setItems] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleAddItem = (item) => {
    // Update the items state with the new item
    setItems([...items, item]);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="toggle-button" onClick={toggleCollapse}>
        {isCollapsed ? '»' : '«'}
      </div>
      {!isCollapsed && (
        <>
          <ItemList items={items} />
          <InputComponent onAddItem={handleAddItem} />
        </>
      )}
    </div>
  );
};

export default Sidebar;
