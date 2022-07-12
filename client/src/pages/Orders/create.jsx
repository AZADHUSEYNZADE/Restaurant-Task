import React from "react";
import "../../styles/newOrder.scss";

function NewOrder() {
  return (
    <div className="sidesDiv">
      <div className="leftSide">
        <div></div>
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
