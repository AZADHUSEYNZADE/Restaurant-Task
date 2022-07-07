import React, { useState, useEffect, useMemo } from "react";
import "../styles/orders.scss";
import data from "../mockData/data";
import { Link, useParams } from "react-router-dom";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
function Orders() {
  const [info, setInfo] = useState(data);
  let params = useParams;

  useEffect(() => {
    setInfo(data);
  }, [params.id]);

  const total = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const order = data[i];
      sum += order.cost;
    }
    return sum;
  }, [data]);

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
                  <span> {item.id}</span>
                </td>
                <td>Masa {item.numberOfTheTable}</td>
                <td>{item.servant}</td>
                <td>{item.type}</td>
                <td>{item.cost}</td>
                <td>{item.date}</td>
                <Link to={"/detail/" + item.id}>
                  <button className="lookBtn">bax</button>
                </Link>
              </tr>
            );
          })}
          <p className="total"> Cəmi Məbləğ : {total} AZN</p>
        </table>
      </div>
    </>
  );
}

export default Orders;
