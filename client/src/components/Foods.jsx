import React, { useState, useEffect } from "react";
import "../styles/foods.scss";
import { Link } from "react-router-dom";
function Foods() {
  const [foods, setFoods] = useState([]);
  function getFoods() {
    fetch(`http://localhost:3333/api/foods`)
      .then((response) => response.json())
      .then((data) => {
        setFoods(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  useEffect(() => {
    getFoods();
  }, []);
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
          {foods.map((food) => {
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
