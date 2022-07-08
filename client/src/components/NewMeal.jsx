import React, { useState, useEffect } from "react";
import "../styles/new-meal.scss";

function NewMeal() {
  const [newMeals, setNewMeals] = useState([]);
  const [waiters, setWaiters] = useState([]);

  function getNewMeals() {
    fetch(`http://localhost:3333/api/foods`)
      .then((response) => response.json())
      .then((data) => {
        setNewMeals(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  function getWaiters() {
    fetch(`http://localhost:3333/api/waiters`)
      .then((response) => response.json())
      .then((data) => {
        setWaiters(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  useEffect(() => {
    getNewMeals();
    getWaiters();
  }, []);

  return (
    <div>
      <div className="mainNewMealDiv">
        <select>
          {newMeals.map((newMeal) => {
            return (
              <>
                <option>{newMeal.name}</option>
              </>
            );
          })}
        </select>
        <select>
          {waiters.map((waiter) => {
            return (
              <>
                <option>
                  {waiter.firstname}
                  {waiter.lastname}
                </option>
              </>
            );
          })}
        </select>

        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <input type="number" className="countInput" />
      <h2 className="addedPrice">Qiymət:0 AZN</h2>
      <button className="addedBtn">Save Meal</button>
    </div>
  );
}

export default NewMeal;
