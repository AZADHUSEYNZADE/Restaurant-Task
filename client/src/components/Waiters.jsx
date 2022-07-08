import React, { useState, useEffect } from "react";
import "../styles/waiters.scss";
import workers from "../mockData/workers";
function Waiters() {
  const [waiters, setWorkers] = useState(workers);

  function getWaiters() {
    fetch(`http://localhost:3333/api/waiters`)
      .then((response) => response.json())
      .then((data) => {
        setWorkers(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  useEffect(() => {
    getWaiters();
  }, []);
  return (
    <div className="mainWaiterDiv">
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
        {waiters.map((waiter) => {
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
