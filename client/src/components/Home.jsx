import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";
import homeinformation from "../mockData/homeinformation";
import { AiOutlineArrowRight } from "react-icons/ai";
function Home() {
  const [restaurantInfo, setRestaurantInfo] = useState(homeinformation);
  useEffect(() => {
    setRestaurantInfo(homeinformation);
  });
  return (
    <>
      <div className="mainHomeDiv">
        {restaurantInfo.map((info) => {
          return (
            <div className="infoDiv">
              <h1 className="restInfo">{info.restInfo}</h1>
              <p className="dailyOrders">Daily Orders:{info.dailyCounts}</p>
              <p className="orders">Orders:{info.counts}</p>
              <Link to="/orders">
                <p className="ordersLink">Sifarishler -></p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
