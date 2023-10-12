
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
  const handleCopyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    
    alert(text+'가 복사되었습니다.');
  } catch (error) {
    alert('복사 실패!');
  }
};
    return (
      <div className="footer">
        Jung da bin <br/>
        E-mail | davin0130@naver.com
        <button onClick={() => handleCopyClipBoard('davin0130@naver.com')}>
          복사
        </button>
        <br />
        copyrightⓒ 2023 All rights reserved by bluesofy. <br/>
      </div>
      // <div>
      //   <p>플러스 옵틱(주) | 대표자 : 최원호 | 주소 : 경기도 고양시 일산동구 일산로 142 유니테크빌벤쳐타운 623호</p>
      //   <p>사업자 등록번호: 419-87-00995 | 전화 : 02-3665-5777 | 이메일 : top.cwh@plus0optic.co.kr</p>
      //   <p>copyrightⓒ 플러스옵틱(주). All rights reserved.</p>
      // </div>
    );
  }
  
  export default Footer;