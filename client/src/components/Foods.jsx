import React, { useState, useEffect } from "react";
import "../styles/foods.scss";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queries/queryKeys";
import axios from "axios";
import { BASE_URL } from "../consts";
function Foods() {
  const { data, isLoading, isError } = useQuery(QUERY_KEYS.FOODS, () =>
    axios.get(`${BASE_URL}/api/foods`).then((res) => res.data)
  );

  if (isLoading) {
    return "Loading";
  }

  if (isError) {
    return "Something went wrong";
  }

  return (
    <>
      <Link to="/newMeal">
        <button className="addedBtn">Add new meal</button>
      </Link>

      <div className="mainFoodsDiv">
        <table className="foodsTable">
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
          {data.map((food) => {
            return (
              <tr>
                <td>{food.id.substring(1, 8)}</td>
                <td>{food.name}</td>
                <td>{food.duration}</td>
                <td>{food.price}AZN</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Foods;
