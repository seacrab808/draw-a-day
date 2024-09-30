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

const selectWrap = css`
  position: relative;
`;

const titleWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

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

// 컴포넌트 분리 - 월별 드롭다운 바
const dateDropdown = css`
  position: absolute;
  top: 3.5rem;
  right: 2rem;

  background-color: #abcdf7;
  border-radius: 5px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0.7rem;
  }
  
  li {
    margin: 0.2rem;

    text-align: center;
    padding: 0.4rem;

    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    background-color: #89b6f0;
    cursor: pointer;

    :hover {
      background-color: #6c9fe0;
      transition: .3s;
    }
  }
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
      {/* 상단바에 뒤로가기 버튼 만들 예정 */}
      <div css={headerWrap}>
        <div css={leftBar}>
          {/* span에 username */}
          안녕하세요, <span>ㅇㅇㅇ</span>님
        </div>
        <div onClick={useCreate} css={rightBar}>
          일기쓰기
        </div>
      </div>

      <div css={selectWrap}>
        <div css={titleWrap}>
          {/* 날짜 20{year}년 {month}월 */}
          <div css={dateTitle}>2024년 8월</div>
          {/* 날짜 변경 시 드롭다운 메뉴바 컴포넌트, 클릭 시 open */}
          <div css={changeTitle}>날짜 변경</div>
        </div>
        <div css={dateDropdown}>
          <ul>
            <li>1월</li>
            <li>2월</li>
            <li>3월</li>
            <li>4월</li>
            <li>5월</li>
            <li>6월</li>
            <li>7월</li>
            <li>8월</li>
            <li>9월</li>
            <li>10월</li>
            <li>11월</li>
            <li>12월</li>
          </ul>
        </div>
      </div>

      <div css={containerWrap}>
        {/* 컴포넌트 분리 */}
        <div css={conAndTopWrap} onClick={useDiary}>
          <div css={topImgWrap}>
            <img src={topImg} alt="topImg" />
          </div>
          <div css={container}>
            <div css={conPic}>
              {/* 저장된 그림 */}
              <img src={logo} alt="logo" />
              </div>
            <div css={conText}>
              {/* 날짜 {year}년 {month}월 {date}일 */}
              <div css={conTextDate}>24년 8월 12일</div>
              {/* {title} */}
              <div css={conTextTitle}>월요일 에바다ㅇ</div>
            </div>
          </div>
        </div>

        {/* 아래는 웹 css 확인용 더미 데이터 */}
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
