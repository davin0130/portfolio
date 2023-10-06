import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { LinkItem } from './Header';
import '../assets/styles/Home.css';

function Home() {
  const [hello, setHello] = useState('')

  useEffect(() => {
      axios.get('/api/hello')
      .then(response => setHello(response.data))
      .catch(error => console.log(error))
  }, []);
  const fontTitle={
    color: "lightgray",
    fontSize: "150px",
    float: "right",
    border: "1px solid red",
  }
  const fontPoint={
    color: "rgb(66, 199, 241)",
    fontWeight: "bold",
  }
  
  return (
    <div>
      <div className="home">
          {/* <div className="circle rotate_circle"></div> */}
          <div className="content1">
            <div className="main-image"></div>
            <div className="content1-right">
              <p className="main-title" style={fontTitle}>PRODUCT MANAGER</p>
              <p className="cr1 doong1">더 나은 소비자의 일상을 생각하<span style={fontPoint}>GO</span></p>
              <p className="cr2 doong2">파트너와 원활하게 협업하<span style={fontPoint}>GO</span></p>
              <p className="cr3 doong1">목표하<span style={fontPoint}>GO</span> 성취하는</p>
              
            </div>
          </div>

          <LinkItem to="/" className="play">pL4y</LinkItem>

          {/* <div className="content2">
            <div className="">
              기획자는
              좋은 아이디어를 
              보기 좋게 
              잘 만들 수 있도록
              설계, 계획하고 관리하는 사람
            </div>
          </div>
          <p className="content2-title doong1">#Record</p>
          <a href="/intro">더보기</a>
          <div className="content2">
            <div className="content2-box">
              <div className="image">
                이미지
              </div>
              <div className="description">
                시큐어코딩 교육 훈련 플랫폼 기획
                이건 어떤 프로젝트였다
              </div>
            </div>
            
            <div className="content2-box">
              <div className="image">
                이미지
              </div>
              <div className="description">
                사이버보안 챌린지 통합 플랫폼 리뉴얼 기획
                이건 어떤 프로젝트였다
              </div>
            </div>

            
            <div className="content2-box">
              <div className="image">
                이미지
              </div>
              <div className="description">
                개인정보 가명익명 처리 경진대회 PL
                이건 어떤 프로젝트였다
              </div>
            </div>

            
            <div className="content2-box">
              <div className="image">
                이미지
              </div>
              <div className="description">
                사이버보안 AI 빅데이터 챌린지 PL
                이건 어떤 프로젝트였다
              </div>
            </div>

            
            <div className="content2-box">
              <div className="image">
                이미지
              </div>
              <div className="description">
                시큐어코딩 교육 컨텐츠 개발
                이건 어떤 프로젝트였다
              </div>
            </div> */}
            
            {/* 사이버보안 챌린지 통합 플랫폼 리뉴얼 기획<br/>
            시큐어코딩 교육 컨텐츠 개발<br/>
            사이버보안 AI 빅데이터 챌린지 PL<br/>
            개인정보 가명익명 처리 경진대회 PL<br/> */}
          </div>

          {/* <p className="content2-title doong2">#Project</p>
          <div className="">
            교통카드 충전 애플리케이션 취약점 분석<br/>
            TAGO | 공유 모빌리티 웹 애플리케이션 개발<br/>
            Bobby | Tennis 스포츠센터 운영 웹 애플리케이션 기획<br/>
          </div>
          
          <p className="content2-title doong1">#Introduce</p>
          <p className="content2-title doong2">#Experience</p>
          
          K-Shield 주니어<br/>
          A.idle    <br/> */}


        {/* </div> */}
         {hello}
    </div>
  );
}

export default Home;