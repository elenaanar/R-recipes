import React from 'react';
import RecipeCard from './RecipeCard';
import './Grid.css'
const RecipeGrid = ({ recipes }) => {
    return (
        <div className='recipe-grid'>
            {recipes.map((recipe, index) => (
                <RecipeCard
                key={index}
                title={recipe.title}
                description={recipe.description}
                image={recipe.image}
                recipeLink={recipe.recipeLink}
                />
            ))}
        </div>
    );
};

export default RecipeGrid;