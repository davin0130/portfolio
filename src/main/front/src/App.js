import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Introduce from './components/Introduce/Introduce';
import './App.css';

function App() {

    return (
        <div className="App">
        <BrowserRouter>
            <div className="App-header">
                <Header />
            </div>
            <div className="App-Main">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/intro" element={<Introduce />}></Route>
                </Routes>
            </div>
            <div className="App-footer">
                <Footer />
            </div>
        </BrowserRouter>
        </div>
        // <div>
        //     백엔드에서 가져온 데이터입니다 : {hello}
        // </div>
    );
}

export default App;
