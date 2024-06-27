import React from 'react';

const RecipeList = ({ cakes }) => {
  return (
    <div>
      <h2>List of Cakes</h2>
      <ul>
        {cakes.map((cake, index) => (
          <li key={index}>
            <h3>{cake.cakeName}</h3>
            <p>Ingredients: {cake.ingredients.join(', ')}</p>
            <p>Rating: {cake.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
