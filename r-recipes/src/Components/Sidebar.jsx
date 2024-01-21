// Sidebar.js
"use client"
import React, { useState } from 'react';
import ItemList from './ItemList';
import InputComponent from './InputComponent';
import "../style.css"
import TopBar from './TopBar';


const Sidebar = () => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(true);
  
  const handleAddItem = (item) => {
    // Update the items state with the new item
    setItems([...items, item]);
  };


if (open) {
  return (<div className='sidebar-container'>
    <div className="top-bar">
      <a onClick={() => {setOpen(false)}}>
        <img src="./dropdown.png" alt="" width="50" height="50"></img>
      </a>
    </div>
  <ItemList items={items} />
  <InputComponent onAddItem={handleAddItem}/>
  </div>)
} else {
  return (<div>
    <div className="top-bar">
      <a onClick={() => {setOpen(true)}}>
        <img src="./dropdown.png" alt="" width="50" height="50"></img>
      </a>
    </div>
    </div>)
}

};

export default Sidebar;