import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

import { useCompanyInfo } from "../../queries";

function Home() {
  const { data, isLoading, isError } = useCompanyInfo();

  if (isLoading) {
    return "Loading";
  }

  if (isError) {
    return "Something went wrong";
  }

  return (
    <>
      <div className="infoDiv">
        <h1 className="restInfo">{data.title}</h1>
        <h1 className="restInfo">{data.description}</h1>
        <p className="dailyOrders">Daily Orders: 100</p>
        <p className="orders">Orders: 300</p>

        <Link to="/orders" className="ordersLink">
          Orders
        </Link>
      </div>
    </>
  );
}

export default Home;
