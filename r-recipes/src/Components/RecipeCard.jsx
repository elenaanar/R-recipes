// RecipeCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import "./RecipeCard.css"


const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const RecipeCard = ({ title, description, recipeLink }) => {
  const truncatedDescription = truncateText(description, 100);
  return (
    <Grid container className="recipe-card">
      <Grid item xs={12} className="recipe-details">
        <h2 className="recipe-title">{title}</h2>
        <p className="recipe-description">{truncatedDescription}</p>
        <a href={recipeLink} target="_blank" rel="noopener noreferrer">
          <button className="recipe-button">View Recipe</button>
      </a>
      </Grid>
    </Grid>
  );
};

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  recipeLink: PropTypes.string.isRequired,
};

export default RecipeCard;

