// InputComponent.js
import React, { useState } from 'react';
import './InputComponent.css'







const InputComponent = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    // Pass the input value to the parent component

    var items = JSON.parse(localStorage.getItem('items'));
    if (items == null) {
      items = []
    }
    items.push(inputValue)
    localStorage.setItem('items', JSON.stringify(items))

    onAddItem(inputValue);
    // Clear input field
    setInputValue('');
  };



  return (
    <div className='input-component'> 
      <h3>Add Ingredient</h3>
      <input id='add-item-input' type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default InputComponent;