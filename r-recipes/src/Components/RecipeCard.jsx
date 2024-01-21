import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import "./RecipeCard.css"


const RecipeCard = ({ title, description, image, recipeLink }) => {
  return (
    <Grid container className="recipe-card">
      <Grid item xs={4}>
        <img src={image} alt={title} className="recipe-image" style={{ maxWidth: '100%', maxHeight: '200px' }} />
      </Grid>
      <Grid item xs={8} className="recipe-details">
        <h2 className="recipe-title">{title}</h2>
        <p className="recipe-description">{description}</p>
        <a href={recipeLink} target="_blank" rel="noopener noreferrer">
          <button className="recipe-button">View Recipe</button>
      </a>
      </Grid>
    </Grid>
    // <div className="recipe-card">
    //   <img src={image} alt={title} className="recipe-image" style={{ maxWidth: '100%', maxHeight: '200px' }} />
    //   <div className="recipe-details">
    //     <h2 className="recipe-title">{title}</h2>
    //     <p className="recipe-description">{description}</p>
    //     <a href={recipeLink} target="_blank" rel="noopener noreferrer">
    //       <button className="recipe-button">View Recipe</button>
    //     </a>
    //   </div>
    // </div>
  );
};

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  recipeLink: PropTypes.string.isRequired,
};

export default RecipeCard;

