import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import './App.css';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
        // <div>
        //     백엔드에서 가져온 데이터입니다 : {hello}
        // </div>
    );
}

export default App;
