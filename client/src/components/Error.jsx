import React from "react";
import { Container } from "./Container";
import { Flex } from "./Flex";

export const Error = ({ message } = { message: "Something went wrong" }) => {
  return (
    <Container>
      <Flex>
        <div style={{ backgroundColor: "red", padding: "20px" }}>{message}</div>
      </Flex>
    </Container>
  );
};
