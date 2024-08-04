import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ContainerWrap = styled.div`
  width: 100%;

  margin: 0 auto;
  padding: 0;

  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    width: 23rem;
  }
`;

const DashBoard = () => {
  return (
    <ContainerWrap>
      <Outlet />
    </ContainerWrap>
  );
};

export default DashBoard;
