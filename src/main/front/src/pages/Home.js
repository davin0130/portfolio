import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div>
        <Header></Header>
        <Link to="/">홈</Link>
        <Link to="/">홈</Link>
        <Footer></Footer>
    </div>
  );
}

export default Home;