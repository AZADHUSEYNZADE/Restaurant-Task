import React, { useState, useEffect } from "react";
import "../styles/waiters.scss";
import workers from "../mockData/workers";
function Waiters() {
  const [waiters, setWorkers] = useState(workers);
  useEffect(() => {
    setWorkers(workers);
  });
  return (
    <div>
      {waiters.map(() => {
        return (
          <div>
            <table>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Birthday</th>
                <th>Avatar</th>
              </tr>
              {waiters.map((waiter) => {
                return (
                  <tr>
                    <td>{waiter.id}</td>
                    <td>{waiter.name}</td>
                    <td>{waiter.surname}</td>
                    <td>{waiter.email}</td>
                    <td>{waiter.birthday}</td>
                    <td>
                      <img className="avatarImg" src={waiter.avatar} alt="" />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Waiters;
