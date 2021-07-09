import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./MenuByCategories.module.css";
import Card from "./Card";

const Menu = (props) => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const category =
      location.state === undefined
        ? window.location.href.split("/").pop()
        : location.state;

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setRecipes(jsonData.meals);
      });
  }, []);
  return (
    <>
      <div></div>
      <div className={classes.categories}>
        {recipes.map((x) => {
          return (
            <Card
              key={x.strMeal}
              urlImg={x.strMealThumb}
              value={x.strMeal}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
