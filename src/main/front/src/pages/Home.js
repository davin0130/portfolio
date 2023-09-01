import { Link } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Header, { LinkItem } from './Header';
import Footer from './Footer';
import '../styles/Home.css';

function Home() {
  const [hello, setHello] = useState('')

  useEffect(() => {
      axios.get('/api/hello')
      .then(response => setHello(response.data))
      .catch(error => console.log(error))
  }, []);
  const fontStyle={
    color: "#DB9700",
  }
  return (
    <div>
      <div className="home">
          <div className="content1">
            <div className="content1-left">
                박스
            </div>
            <div className="content1-right">
              더 나은 소비자의 일상을 생각하GO,<br />
              파트너와 원활하게 협업하GO,<br />
              목표하GO, 성취하는<br />
              <h1 style={fontStyle}>SERVICE PLANNER</h1>
              웹 서비스 기획자 정다빈입니다<br />
            </div>
          </div>
          <LinkItem to="/">Play with me!</LinkItem>

          <div className="">
            <h3>#Record</h3>
            시큐어코딩 교육 훈련 플랫폼 기획<br/>
            사이버보안 챌린지 통합 플랫폼 리뉴얼 기획<br/>
            시큐어코딩 교육 컨텐츠 개발<br/>
            사이버보안 AI 빅데이터 챌린지 PL<br/>
            개인정보 가명익명 처리 경진대회 PL<br/>
          </div>

          <div className="">
            <h3>#project</h3>
            교통카드 충전 애플리케이션 취약점 분석<br/>
            TAGO | 공유 모빌리티 웹 애플리케이션 개발<br/>
            Bobby | Tennis 스포츠센터 운영 웹 애플리케이션 기획<br/>
          </div>
          
          <h3>#introduce</h3>
          
          <h3>#experience</h3>
          K-Shield 주니어<br/>
          A.idle    <br/>


        </div>
         {hello}
    </div>
  );
}

export default Home;