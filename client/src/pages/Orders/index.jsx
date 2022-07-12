import React from "react";
import "../../styles/orders.scss";
import { useNavigate } from "react-router-dom";

import { useFoods, useOrders, useWaiters } from "../../queries";

import { Container } from "../../components/Container";
import { Flex } from "../../components/Flex";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../queries/queryKeys";

function Orders() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useOrders();
  const {
    data: waiters,
    isLoading: isWaitersLoading,
    isError: isWaitersError,
  } = useWaiters({
    enabled: !Boolean(queryClient.getQueryData(QUERY_KEYS.WAITERS)),
  });
  const {
    data: foods,
    isLoading: isFoodsLoading,
    isError: isFoodsError,
  } = useFoods({
    enabled: !Boolean(queryClient.getQueryData(QUERY_KEYS.FOODS)),
  });

  if (isLoading || isWaitersLoading || isFoodsLoading) {
    return <Loading />;
  }

  if (isError || isWaitersError || isFoodsError) {
    return <Error />;
  }

  return (
    <Container>
      <Flex style={{ justifyContent: "space-between" }}>
        <h3>Orders</h3>
        <button
          onClick={() => {
            navigate("/orders/new");
          }}
        >
          Add new order
        </button>
      </Flex>
      <Flex>
        <div className="mainDiv">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Table</th>
                <th>Waiter</th>
                <th>Status</th>

                <th>Total price</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => {
                const waiter = (
                  waiters || queryClient.getQueryData(QUERY_KEYS.WAITERS)
                ).find((waiter) => waiter.id === item.waiter);
                console.log(item, foods);
                const totalPrice = item.foods
                  .map((food) => {
                    if (food.isRemoved) {
                      return 0;
                    }

                    return (
                      food.count *
                      (
                        foods || queryClient.getQueryData(QUERY_KEYS.FOODS)
                      ).find((f) => f.foodId === food.id).price
                    );
                  })
                  .reduce(
                    (prevValue, currentValue) => prevValue + currentValue,
                    0
                  );

                return (
                  <tr key={item.id}>
                    <td>
                      <span>{item.id.substring(1, 8)}</span>
                    </td>
                    <td>{item.tableNumber}</td>
                    <td>
                      {waiter.firstname} {waiter.lastname}
                    </td>
                    <td>{item.status}</td>
                    <td>{totalPrice}</td>
                    <td>{new Date(item.createdAt).toLocaleString()}</td>
                    <td>
                      <button onClick={() => navigate(`${item.id}`)}>
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* <p className="total"> Cəmi Məbləğ : {total} AZN</p> */}
          </table>
        </div>
      </Flex>
    </Container>
  );
}

export default Orders;
