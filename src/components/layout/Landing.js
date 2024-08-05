/** @jsxImportSource @emotion/react */
import logo from "../../assets/drawaday_logo.png";
import myInfo from "../../assets/drawaday_my.png";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const mainWrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70%;
  margin: 0 auto;
`;

const logoWrap = css`
  margin: 6rem 0 2.5rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const btnWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 1.4rem;

  div {
    padding: 0.6rem;
    margin: 0.5rem;
    border-radius: 0.7rem;
    width: 90%;

    background-color: #5393d9;
    color: #fff;
    box-shadow: 1px 0px 1px 0px #90a0c6;

    :hover, :active {
      background-color: #63ace4;
      transition: .2s;
      cursor: pointer;
    }
    
  }
`;

const login = css``;

const signin = css`
  background-color: #63ace4;
`;

const nonOp = css`
  margin-top: 1rem;

  font-size: 13px;
  text-decoration: underline;
  color: #90a0c6;

  :hover, :active {
    color: #5393d9;
    cursor: pointer;
    transition: .2s
  }
`;

const myInfoWrap = css`
  width: 100px;
  margin-top: 2rem;

  img {
    width: 100%;
  }
`;


const Landing = () => {
  const navigate = useNavigate();

  const useLogIn = () => {
    navigate("/auth/login")
  }

  const useSignIn = () => {
    navigate("/auth/signIn")
  }

  const useHome = () => {
    navigate("/home")
  }


  return (
    <div css={mainWrap}>
      <div css={logoWrap}>
        <img src={logo} alt="logo" />
      </div>
      <div css={btnWrap}>
        <div onClick={useLogIn} css={login}>로그인</div>
        <div css={signin} onClick={useSignIn}>회원가입</div>
        <p css={nonOp}>비회원으로 사용하기</p>
      </div>
      <div css={myInfoWrap} onClick={useHome}>
        <img src={myInfo} alt="myInfo" />
      </div>
    </div>
  );
};

export default Landing;
