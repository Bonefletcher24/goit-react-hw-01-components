// import './App.css';
import Header from './Header';
import About from './About';
import Users from './Users';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserId from './UserId';
import Error from './Error';

//Вместо Switch в 6 версии исп-тся Routes, а вместо атрибута component исп-тся element
//исп-зуя nav -> Link to перехожу между ссылками без перезагрузки стр(убирая header)
//exact ищет файл точь-в-точь
function App() {
    return (
        <>
        <Header/>
        <Router>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route exact path="/users" element={<Users />} />
                <Route path="/users/:userName" element={<UserId />} />
                <Route element={<Error />} />

            </Routes>

             {/* <nav>
                <li><Link to="/">Main</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
            </nav> */}
        </Router>
        </>
    );
}

export default App;