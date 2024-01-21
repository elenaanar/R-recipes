// InputComponent.js
import React, { useState } from 'react';

const InputComponent = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    // Pass the input value to the parent component
    onAddItem(inputValue);
    // Clear input field
    setInputValue('');
  };

  return (
    <div className='inputcomponent-container'> 
      <h2>Add Item</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default InputComponent;
