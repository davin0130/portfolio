
import { Link } from "react-router-dom";
import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';
// import Menubar from '../components/Header/Menubar';

export const LinkItem = styled(Link)`
  color: #fff;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  margin: 30px;
`;

const Menu = styled.div`
@media screen and (max-width: 920px) {
  flex-wrap: wrap;

  .header_sign {
    display: ${(props) => (props.signToggled ? "block" : "none")};
    flex-direction: column;
    width: 90%;
  }

  .header_menulist {
    display: ${(props) => (props.isToggled ? "block" : "none")};
    flex-direction: column;
    width: 90%;
  }
`
function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [signToggled, setSignToggled] = useState(false);
    return (
      <div>
        <Menu className="header-menubar" isToggled={isToggled} signToggled={signToggled}>
          <div className="toggle" onClick={() => {setIsToggled(!isToggled); console.log(isToggled)}} >
           <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
          </div>
          {/* <div className="header-center"> */}
          <div className="logo">
            <LinkItem to="/"><img className="mainlogo" src="judyjung_white.png" width="150" alt="mainLogo"/></LinkItem>
          </div>
          <div className="sign" onClick={() => {setSignToggled(!signToggled);}} >
            <FontAwesomeIcon icon={!signToggled ? faUser : faTimes} />
          </div>
          {/* <div id="side_menu"> */}
          <div className="header-right">
            <div className="header_menulist">
              <ul>
                <li>
                  <a href="/intro">
                    <span>자기소개</span>
                    <span>INTRODUCE</span>
                  </a>
                </li>
                <li>
                  <a href="/portfolio">
                    <span>포트폴리오</span>
                    <span>PORTFOLIO</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>게임</span>
                    <span>PLAY</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="header_sign">
              <ul>
                <li>
                  <a href="/">
                    <span>로그인</span>
                    <span>Sign In</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>회원가입</span>
                    <span>Sign Up</span>
                  </a>
                </li>
              </ul>
            </div>
        </div>
          {/* <div className="header_menulist">
            <ul>
              <li><a href="/intro">INTRODUCE</a></li>
              <li><a href="#">PORTFOLIO</a></li>
              <li><a href="#">PLAY</a></li>
            </ul>
          </div> */}
        </Menu>
        
      </div>
    );
  }
  
  export default Header;