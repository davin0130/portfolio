
import { Link } from "react-router-dom";
import styled from 'styled-components';

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
        <div className="header-left">
          <LinkItem to="/">홈</LinkItem>
        </div>
        <div className="header-menubar">
          <LinkItem to="/menu">#Introduce</LinkItem>
          <LinkItem to="/menu">#Record</LinkItem>
          <LinkItem to="/menu">#Project</LinkItem>
          <LinkItem to="/menu">#experience</LinkItem>
          <LinkItem to="/menu">Play with me</LinkItem>
        </div>
        <div className="header-right">
          <LinkItem to="/signin">로그인</LinkItem>
          <LinkItem to="/signup">회원가입</LinkItem>
        </div>
      </div>
    );
  }
  
  export default Header;