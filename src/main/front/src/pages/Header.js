
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Menubar from '../components/Header/Menubar';

export const LinkItem = styled(Link)`
  color: #61dafb;
  display: block;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
`;

function Header() {
    return (
      <div>
        <div className="header-menubar">
          {/* <Menubar></Menubar> */}
          <input type="checkbox" id="check_box" />
          <label for="check_box">
            <span></span>
            <span></span>
            <span></span>
          </label>
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
        <div className="header-center">
          <LinkItem to="/"><img className="mainlogo" src="img/bluesofy-logo-white.png" width="150" alt="mainLogo"/></LinkItem>
        </div>
        <div className="header-right">
          <LinkItem className="mymenu" to="/signin">Sign in</LinkItem>
        </div>
      </div>
    );
  }
  
  export default Header;