import React, { useEffect, useState } from "react";

import classes from "./Categories.module.css";
import Card from "../componenents/Card";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setCategories(jsonData.meals.map((x) => x.strCategory));
      });
  }, []);
  return (
    <>
      <div className={classes.categories}>
        {categories.map((x) => (
          <Card
            key={x}
            apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c="
            value={x}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Categories;
