import React from "react";
import "../styles/foods.scss";
import { Link } from "react-router-dom";
function Foods() {
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
          <tr>
            <td>1</td>
            <td>Doner</td>
            <td>15 min</td>
            <td>5.00 AZN</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Shaurma</td>
            <td>10 min</td>
            <td>7.00 AZN</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Foods;
