import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';


const RecipeCard = ({ title, description, image, recipeLink }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" style={{ maxWidth: '100%', maxHeight: '200px' }} />
      <div className="recipe-details">
        <h2 className="recipe-title">{title}</h2>
        <p className="recipe-description">{description}</p>
        <a href={recipeLink} target="_blank" rel="noopener noreferrer">
          <button className="recipe-button">View Recipe</button>
        </a>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  recipeLink: PropTypes.string.isRequired,
};

export default RecipeCard;

