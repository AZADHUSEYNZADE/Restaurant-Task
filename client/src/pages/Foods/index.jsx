import React from "react";
import "../../styles/foods.scss";
import { useNavigate } from "react-router-dom";
import { useFoods } from "../../queries";
import { Flex } from "../../components/Flex";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { Container } from "../../components/Container";

function Foods() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useFoods();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Container>
      <Flex style={{ justifyContent: "space-between" }}>
        <h3>Foods</h3>
        <button
          onClick={() => {
            navigate("/foods/new");
          }}
        >
          Add new food
        </button>
      </Flex>

      <div className="mainFoodsDiv">
        <table className="foodsTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {data.map((food) => {
              return (
                <tr key={food.id}>
                  <td>{food.id.substring(1, 8)}</td>
                  <td>{food.name}</td>
                  <td>{food.duration}</td>
                  <td>{food.price}AZN</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default Foods;
