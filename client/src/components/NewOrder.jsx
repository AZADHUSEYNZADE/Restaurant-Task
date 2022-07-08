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
    <div className="sidesDiv">
      <div className="leftSide">
        <div>
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
        <div>
          <input type="number" className="countInput" />
          <h2 className="addedPrice">Qiymət:0 AZN</h2>
          <button className="addedBtn">Əlavə et</button>
        </div>
      </div>

      <div className="rightSideTable">
        <table>
          <tr>
            <th>Name</th>
            <th>Table</th>
            <th>Count</th>
            <th>Servant</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Doner</td>
            <td>1</td>
            <td>4</td>
            <td>Murtuz</td>
            <td>35.6</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default NewOrder;
