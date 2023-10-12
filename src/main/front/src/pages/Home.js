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
  
  const fontPoint={
    color: "rgba(183, 150, 252, 1)",
    fontWeight: "bold",
  }

  const playBtn={fontSize: "25px"}
  
  return (
    <div>
      <div className="home">
          {/* <div className="circle rotate_circle"></div> */}
          <div className="content1">
            {/* <div className="main-image"></div> */}
              <p className="main-title">PRODUCT MANAGER</p>
              <div className="content1-right">
                <p className="cr1 text_fly_right">더 나은 소비자의 일상을 생각하<span style={fontPoint}>GO</span></p>
                <p className="cr2 text_fly_left">파트너와 원활하게 협업하<span style={fontPoint}>GO</span></p>
                <p className="cr3 text_fly_right">목표하<span style={fontPoint}>GO</span> 성취하는</p>            
              </div>
              <div className='content1-left'>
                <div className='stat'>
                  <div className='stat-title'>contents</div>
                  <div className='stat-content doongs1'>21</div>
                </div>
                
                <div className='stat'>
                  <div className='stat-title'>career</div>
                  <div className='stat-content doongs3'>3</div>
                </div>
                
                <div className='stat'>
                  <div className='stat-title'>projects</div>
                  <div className='stat-content doongs1'>25</div>
                </div>
                
                <div className='stat'>
                  <div className='stat-title'>skills</div>
                  <div className='stat-content doongs2'>3</div>
                </div>
              </div>
          </div>

          <LinkItem to="/" className="play" style={playBtn}>pL4y!</LinkItem>

          <div className="content2">
            <div className='c2 c2-1'>
              <div className="c2-subtitle">
                idea
              </div>
              <div className="c2-title">
                Good IDEA
              </div>
              <div className="c2-desc">
              좋은 아이디어를<br />
              보기 좋게 잘 만들 수 있도록<br />
              설계, 계획하고 관리하는 사람
              </div>
            </div>

            <div className="c2 c2-2">
              <div className="c2-subtitle">
                technology
              </div>
              <div className="c2-title">
                Professional Tech
              </div>
              <div className="c2-desc">
              전문적인 기술 지식을 습득하여<br />
              환경과 상황에 맞추어 적절한 기술을 사용하고<br />
              완성도 높은 결과물을 보여줄 수 있는 사람
              </div>
            </div>

            <div className="c2 c2-3">
              <div className="c2-subtitle">
                design
              </div>
              <div className="c2-title">
                Killing Design
              </div>
              <div className="c2-desc">
              시각적으로 깔끔한 BASIC을 잃지 않으며 <br />
              최신 트렌드에 민감하게 반응하고 <br />
              컨셉에 맞는 디자인을 고를 수 있는 안목 있는 사람
              </div>
            </div>
          </div>

          <div className='content4'>
            <div className='content4-title'>Skills</div>
            <div className='c4 c4-1'>
              <div className='c4-title'>Communication</div>
              <div className='c4-desc'>Figma, MS OFFICE, HANCOM</div>
            </div>
            <div className='c4 c4-2'>
              <div className='c4-title'>IDEA</div>
              <div className='c4-desc'>-</div>
            </div>
            <div className='c4 c4-3'>
              <div className='c4-title'>Technology</div>
              <div className='c4-desc'>Java, Python, MySQL, React</div>
            </div>
            <div className='c4 c4-4'>
              <div className='c4-title'>Design</div>
              <div className='c4-desc'>Figma, MS OFFICE</div>
            </div>
          </div>
          {/* <p className="content2-title doong1">#Record</p>
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
            </div>
            
            사이버보안 챌린지 통합 플랫폼 리뉴얼 기획<br/>
            시큐어코딩 교육 컨텐츠 개발<br/>
            사이버보안 AI 빅데이터 챌린지 PL<br/>
            개인정보 가명익명 처리 경진대회 PL<br/>
          </div>

          <p className="content2-title doong2">#Project</p>
          <div className="">
            교통카드 충전 애플리케이션 취약점 분석<br/>
            TAGO | 공유 모빌리티 웹 애플리케이션 개발<br/>
            Bobby | Tennis 스포츠센터 운영 웹 애플리케이션 기획<br/>
          </div> */}
          
          {/* <p className="content2-title doong1">#Introduce</p>
          <p className="content2-title doong2">#Experience</p>
          
          K-Shield 주니어<br/>
          A.idle    <br/> */}


        </div>
         {hello}
    </div>
  );
}

export default Home;