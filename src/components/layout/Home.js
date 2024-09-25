/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/drawaday_logo.png";
import topImg from "../../assets/topImg.jpg";

const headerWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.5rem;
  background-color: #abcdf7;
  color : white;
`;

const leftBar = css`
  span {
    color: #e6f9ff;
  }
`;

const rightBar = css`
  cursor: pointer;
  border: 1px solid #abcdf7;
  padding: 0.3rem;

  :hover {
    color: #e6f9ff;
    transition: .2s;
    border: 1px solid #9ec3f0;
    border-radius: 4px;
  }
`;

const titleWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem 1rem 0.5rem;

  color: #5393D9;
  border: 1.3px solid #5393D9;
  border-radius: 3px;
`;

const dateTitle = css`
  font-weight: 600;
`;

const changeTitle = css`
  padding: 0.4rem;
  
  color: #fff;
  background-color: #abcdf7;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    background-color: #9ec3f0;
    transition: .2s;
  }
`;

const containerWrap = css`
  margin: 1.5rem;
`;

const conAndTopWrap = css`
  margin-bottom: 0.5rem;
`;

const topImgWrap = css`
  width: 100%;

  img {
    width: 100%;
  }
`;

const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 1rem 1rem ;

  /* background-color: #5393D9; */
`;

const conPic = css`
  padding: 0 1.5rem 0 0;

  img {
    width: 100%;
    border-radius: 3px;
  }
`;

const conText = css`
  padding: 1rem 0;

  color: #485666;
`;

const conTextDate = css`
  margin-bottom: 0.4rem;
  font-size: 13px;
  font-weight: 600;
`;

const conTextTitle = css`
  font-weight: 300;
`;

const Home = () => {
  const navigate = useNavigate()
  
  const useCreate = () => {
    navigate('/create')
  }

  const useDiary = () => {
    navigate('/diary')
  }
  
  return (
    <>
      <div css={headerWrap}>
        <div css={leftBar}>
          안녕하세요, <span>ㅇㅇㅇ</span>님
        </div>
        <div onClick={useCreate} css={rightBar}>
          일기쓰기
        </div>
      </div>
      <div css={titleWrap}>
        <div css={dateTitle}>2024년 8월</div>
        <div css={changeTitle}>날짜 변경</div>
      </div>
      <div css={containerWrap}>

        <div css={conAndTopWrap} onClick={useDiary}>
          <div css={topImgWrap}>
            <img src={topImg} alt="topImg" />
          </div>
          <div css={container}>
            <div css={conPic}>
              <img src={logo} alt="logo" />
              </div>
            <div css={conText}>
              <div css={conTextDate}>24년 8월 12일</div>
              <div css={conTextTitle}>월요일 에바다</div>
            </div>
          </div>
        </div>

        <div css={conAndTopWrap}>
          <div css={topImgWrap}>
            <img src={topImg} alt="topImg" />
          </div>
          <div css={container}>
            <div css={conPic}>
              <img src={logo} alt="logo" />
              </div>
            <div css={conText}>
              <div css={conTextDate}>24년 8월 13일</div>
              <div css={conTextTitle}>깃허브 배운 날 - !</div>
            </div>
          </div>
        </div>

        <div css={conAndTopWrap}>
          <div css={topImgWrap}>
            <img src={topImg} alt="topImg" />
          </div>
          <div css={container}>
            <div css={conPic}>
              <img src={logo} alt="logo" />
              </div>
            <div css={conText}>
              <div css={conTextDate}>24년 8월 14일</div>
              <div css={conTextTitle}>수요일이지만 쉴 수 업서</div>
            </div>
          </div>
        </div>

        <div css={conAndTopWrap}>
          <div css={topImgWrap}>
            <img src={topImg} alt="topImg" />
          </div>
          <div css={container}>
            <div css={conPic}>
              <img src={logo} alt="logo" />
              </div>
            <div css={conText}>
              <div css={conTextDate}>24년 8월 15일</div>
              <div css={conTextTitle}>광복절...</div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
