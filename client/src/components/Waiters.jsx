import React from "react";
import "../styles/waiters.scss";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queries/queryKeys";
import axios from "axios";
import { BASE_URL } from "../consts";

function Waiters() {
  const { data, isLoading, isError } = useQuery(QUERY_KEYS.WAITERS, () =>
    axios.get(`${BASE_URL}/api/waiters`).then((res) => res.data)
  );

  if (isLoading) {
    return "Loading";
  }

  if (isError) {
    return "Something went wrong";
  }

  return (
    <div className="mainWaiterDiv">
      <Link to="/newWaiter">
        <button>Add new waiter</button>
      </Link>
      <table>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Birthday</th>
          <th>Avatar</th>
        </tr>
        {data.map((waiter) => {
          return (
            <tr>
              <td>{waiter.id}</td>
              <td>{waiter.firstname}</td>
              <td>{waiter.lastname}</td>
              <td>{waiter.gender}</td>
              <td>{waiter.email}</td>
              <td>{waiter.birthdate}</td>
              <td>{waiter.avatar}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Waiters;
