
// ItemList.js
import React from 'react';
import './ItemList.css'

var localData = JSON.parse(localStorage.getItem("items"));
if (localData == null){
  localData = []
}

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      <h2>Your Ingredients</h2>
      <ul>
        {localData.map((local_data, index) => (
          <li key={index}>{local_data}</li>
        ))}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;