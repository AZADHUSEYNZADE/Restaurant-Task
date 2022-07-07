import React, { useState, useEffect } from "react";
import "../styles/new-meal.scss";
import addedOrders from "../mockData/addingOrders";

function NewMeal() {
  const [newOrders, setNewOrders] = useState(addedOrders);
  useEffect(() => {
    setNewOrders(addedOrders);
    console.log(newOrders);
  }, []);
  return (
    <div>
      <div className="mainNewMealDiv">
        <select>
          {newOrders.map((item) => {
            return (
              <>
                {item.meals.map((order) => {
                  return <option key={order}>{order}</option>;
                })}
              </>
            );
          })}
        </select>
        <select>
          {newOrders.map((item) => {
            return (
              <>
                {item.numbersOfTheTable.map((order) => {
                  return <option key={order}>Table {order}</option>;
                })}
              </>
            );
          })}
        </select>
        <select>
          {newOrders.map((item) => {
            return (
              <>
                {item.servants.map((order) => {
                  return <option key={order}>{order}</option>;
                })}
              </>
            );
          })}
        </select>
      </div>
      <input type="number" className="countInput" />
      <h2 className="addedPrice">Qiymət:0 AZN</h2>
      <button className="addedBtn">Save Meal</button>
    </div>
  );
}

export default NewMeal;
