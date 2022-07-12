import React from "react";

import styles from "./index.module.css";

export const Flex = ({
  children,
  style: customStyles,
  elementName = "div",
}) => {
  const Wrapper = React.createElement(elementName, {
    style: customStyles,
    className: styles.flex,
    children: children,
  });

  return Wrapper;
};
