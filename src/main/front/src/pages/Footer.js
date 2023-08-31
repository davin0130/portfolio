
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
      <div>
        Jung da bin <br/>
        E-mail | davin0130@naver.com
        <button onClick={() => handleCopyClipBoard('davin0130@naver.com')}>
          복사
        </button>
        <br />
        copyrightⓒ 2023 All rights reserved by bluesofy. <br/>
      </div>
    );
  }
  
  export default Footer;