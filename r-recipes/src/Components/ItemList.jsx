
// ItemList.js
import React from 'react';
import './ItemList.css'




const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      <h2>Your Ingredients</h2>
      <ul>
        {/* {local_items.map((local_item, index) => (
          <li key={index}>{local_item}</li>
        ))} */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;