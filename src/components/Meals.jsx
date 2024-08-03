import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const reqConfig = {
  method: "GET",
};
function Meals() {
  const { data, isLoading, error } = useHttp(
    "http://localhost:3000/meals",
    reqConfig
  );

  if (isLoading) {
    return <h2 className="centre">Fetching Data...</h2>;
  }

  if (error) {
    return <Error title="Unable to fetch meals" message={error} />;
  }

  return (
    <div>
      <ul id="meals">
        {data.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </div>
  );
}

export default Meals;
