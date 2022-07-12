import React from "react";
import "../../styles/orderDetail.scss";
import { AiOutlineFieldNumber } from "react-icons/ai";

function OrderDetail() {
  return (
    <>
      <div className="mainDetailDiv">
        <table>
          <tr>
            <th>Say</th>
            <th>Məhsul adı</th>
            <th>Miqdar</th>
            <th>Məbləğ</th>
            <th>Sifariş Saatı</th>
            <th>Gözləmə</th>
            <th>#</th>
            <th>Geri</th>
          </tr>
          {[].map((item, i) => {
            return (
              <tr>
                <td>
                  <AiOutlineFieldNumber className="detailNumber" />
                  <span> {item.id}</span>
                </td>
                <td>{item.nameOfMeal}</td>
                <td>{item.count}</td>
                <td>{item.price}</td>
                <td>{item.orderTime}</td>
                <td>{item.waiting}</td>
                <td>
                  <button className="givingBtn">{item.btnType1}</button>
                </td>
                <td>
                  <button className="gettingBackBtn">{item.btnType2}</button>
                </td>
              </tr>
            );
          })}
          <p className="total"> Cəmi Məbləğ : 108.56 AZN</p>
        </table>
      </div>
      <button className="endBtn">Sifarişi sonlandır</button>
    </>
  );
}

export default OrderDetail;
