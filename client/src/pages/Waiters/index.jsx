import React from "react";
import { useNavigate } from "react-router-dom";

import { useWaiters } from "../../queries";
import { Loading } from "../../components/Loading";

import "../../styles/waiters.scss";
import { Error } from "../../components/Error";
import { Flex } from "../../components/Flex";
import { Container } from "../../components/Container";

function Waiters() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useWaiters();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Container>
      <div className="mainWaiterDiv">
        <Flex style={{ justifyContent: "space-between" }}>
          <h3>Waiters</h3>
          <button
            onClick={() => {
              navigate("/waiters/new");
            }}
          >
            Add new waiter
          </button>
        </Flex>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Birthday</th>
              <th>Avatar</th>
            </tr>
          </thead>

          <tbody>
            {data.map((waiter) => {
              return (
                <tr key={waiter.id}>
                  <td>{waiter.id.substring(1, 8)}</td>
                  <td>{waiter.firstname}</td>
                  <td>{waiter.lastname}</td>
                  <td>{waiter.gender}</td>
                  <td>{waiter.email}</td>
                  <td>{new Date(waiter.birthdate).toDateString()}</td>
                  <td>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={waiter.avatar}
                      alt=""
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default Waiters;
