// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import './styles.css'; // Import the CSS file

const App = () => {
  return (
    <div className="app-container">
      <h1>R'Recipes</h1>
      <Sidebar />
    </div>
  );
};

export default App;