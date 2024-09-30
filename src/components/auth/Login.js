// /** @jsxImportSource @emotion/react */
// import React from "react";
// import { css } from '@emotion/react';

import { loginEmail } from "firebase/auth";

// loginEmail("seacrab808@naver.com", "12345")

const Login = () => {
  return <>
    <h1>로그인</h1>
    <div>아이디</div>
    <input />
    <div>비밀번호</div>
    <input type='password' name='loginPassword' placehorder='비밀번호를 입력하세요' maxLength={16} />
  </>;
};

export default Login;
