
import { Link } from "react-router-dom";
import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';
// import Menubar from '../components/Header/Menubar';

export const LinkItem = styled(Link)`
  color: #fff;
  display: block;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
`;

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [signToggled, setSignToggled] = useState(false);
    return (
      <div>
        <div className="header-menubar" isToggled={isToggled} signToggled={signToggled}>
          <div className="toggle" onClick={() => {setIsToggled(!isToggled);}} >
           <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
          </div>
        <div className="header-center">
          <LinkItem to="/"><img className="mainlogo" src="img/bluesofy-logo-white.png" width="150" alt="mainLogo"/></LinkItem>
        </div>
        <div className="sign" onClick={() => {setSignToggled(!signToggled);}} >
          <FontAwesomeIcon icon={!signToggled ? faUser : faTimes} />
        </div>
          <div id="side_menu">
              {/* <Link to='/intro'>자기소개</Link> */}
            <ul>
              <li><a href="/intro">자기소개</a></li>
              <li><a href="#">이력 및 경력</a></li>
              <li><a href="#">프로젝트</a></li>
              <li><a href="#">경험</a></li>
              <li><a href="#">Play with me!</a></li>
            </ul>
          </div>
        </div>
        <div className="header-right">
          <LinkItem className="mymenu" to="/signin">Sign in</LinkItem>
          <LinkItem className="mymenu" to="/">Sign up</LinkItem>
        </div>
      </div>
    );
  }
  
  export default Header;