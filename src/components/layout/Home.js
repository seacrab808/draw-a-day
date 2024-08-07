/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';

const headerWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #93b8e6;
  color : white;
`;

const leftBar = css`

`;

const rightBar = css``;


const Home = () => {
  return (
    <div css={headerWrap}>
      <div css={leftBar}>
        안녕하세요
      </div>
      <div css={rightBar}>
        일기쓰기
      </div>
    </div>
  );
};

export default Home;
