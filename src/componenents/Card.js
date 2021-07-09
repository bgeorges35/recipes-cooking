import React, { useEffect, useState } from "react";
import classes from "./Card.module.css";
import { Link, useRouteMatch } from "react-router-dom";

const Card = ({ apiUrl = null, value, urlImg = null }) => {
  const [food, setFood] = useState("");

  const { path, url } = useRouteMatch();

  useEffect(() => {
    if (!urlImg) {
      fetch(apiUrl + value)
        .then((response) => {
          return response.json();
        })
        .then((jsonData) => {
          setFood(jsonData.meals[0].strMealThumb);
        });
    }
  }, []);

  urlImg = urlImg === null ? food : urlImg;

  return (
    <Link
      className={classes.card}
      style={{ backgroundImage: `url(${urlImg})` }}
      to={{
        pathname: `${url}/${value}`,
        state: value,
      }}
    >
      <img className={classes.img} src={urlImg}></img>
      <p className={classes.text}>{value}</p>
    </Link>
  );
};

export default Card;
