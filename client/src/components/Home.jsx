import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queries/queryKeys";
import { BASE_URL } from "../consts";
import axios from "axios";

function Home() {
  const { data, isLoading, isError } = useQuery(QUERY_KEYS, () =>
    axios.get(`${BASE_URL}/api/company-info`).then((res) => res.data)
  );

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
        <Link to="/orders">
          <p className="ordersLink">Sifarishler </p>
        </Link>
      </div>
    </>
  );
}

export default Home;
