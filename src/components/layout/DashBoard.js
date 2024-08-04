import React from "react";
import { Outlet } from "react-router-dom";
import Container from "./style";

const DashBoard = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default DashBoard;
