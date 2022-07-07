import React, { useState, useEffect } from "react";
import "../styles/newOrder.scss";
import addedOrders from "../mockData/addingOrders";
function NewOrder() {
  const [newOrders, setNewOrders] = useState(addedOrders);
  useEffect(() => {
    setNewOrders(addedOrders);
    console.log(newOrders);
  }, []);
  return (
    <>
      <div className="mainNewOrderDiv">
        <div className="topSide">
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
        </div>
        <div className="bottomSide">
          <select>
            {newOrders.map((item) => {
              return (
                <>
                  {item.numbersOfTheTable.map((order) => {
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
                  {item.servants.map((order) => {
                    return <option key={order}>{order}</option>;
                  })}
                </>
              );
            })}
          </select>
        </div>
      </div>
      <input type="number" />
      <h2 className="addedPrice">Qiymət:0</h2>
      <button className="addedBtn">Əlavə et</button>
    </>
  );
}

export default NewOrder;
