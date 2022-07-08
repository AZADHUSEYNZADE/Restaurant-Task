import React, { useState, useEffect, useMemo } from "react";
import "../styles/orders.scss";
import { Link, useParams } from "react-router-dom";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
function Orders() {
  const [info, setInfo] = useState([]);
  let params = useParams;

  function getOrders() {
    fetch(`http://localhost:3333/api/orders`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  useEffect(() => {
    getOrders();
  }, [params.id]);

  // const total = useMemo(() => {
  //   let sum = 0;
  //   for (let i = 0; i < data.length; i++) {
  //     const order = data[i];
  //     sum += order.cost;
  //   }
  //   return sum;
  // }, [data]);

  return (
    <>
      <Link to="/newOrder">
        <button className="addNewButton">
          Yeni masa əlave edin <BiRestaurant />
        </button>
      </Link>

      <div className="mainDiv">
        <table>
          {info.map((item, i) => {
            return (
              <tr>
                <td>
                  <AiOutlineFieldNumber className="number" />
                  <span> {item.id.substring(1, 8)}</span>
                </td>
                <td>Masa {item.tableNumber}</td>
                <td>{item.waiter}</td>
                <td>{item.status}</td>
                <td>{item.cost}</td>
                <td>{item.date}</td>
                <Link to={"/detail/" + item.id}>
                  <button className="lookBtn">bax</button>
                </Link>
              </tr>
            );
          })}
          {/* <p className="total"> Cəmi Məbləğ : {total} AZN</p> */}
        </table>
      </div>
    </>
  );
}

export default Orders;
