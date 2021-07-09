import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./Recipes.module.css";
import Card from "./Card";

const Recipes = () => {
  const [recipe, setRecipe] = useState("");
  const location = useLocation();

  useEffect(() => {
    const recipeName =
      location.state === undefined
        ? window.location.href.split("/").pop()
        : location.state;
    console.log(recipeName);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipe(data.meals[0]);
      });
  }, []);
  const ingredientParser = () => {
    const ingredients = [];
    for (let i = 1; i < 20; i++) {
      let key = recipe[`strIngredient${i}`];
      let value = recipe[`strMeasure${i}`];
      if (key && value) {
        ingredients.push([key, value]);
      }
    }
    console.log(ingredients);
    return ingredients;
  };
  const ingredients = ingredientParser();

  return (
    <div className={classes.recipe}>
      <div
        style={{ backgroundImage: `url(${recipe.strMealThumb})` }}
        className={classes.header}
      >
        <h1>{recipe.strMeal}</h1>
      </div>
      <div className={`${classes["ingredients"]} ${classes["card"]}`}>
        {ingredients.map((x) => {
          return <p>{`${x[1]} ${x[0]}`}</p>;
        })}
      </div>
      <div className={`${classes.instruction}  ${classes["card"]}`}>
        {console.log(new String(recipe.strInstructions).replaceAll(". ", "\n"))}
        <p>{new String(recipe.strInstructions).replaceAll(". ", "\n")}</p>
      </div>
    </div>
  );
};

export default Recipes;
