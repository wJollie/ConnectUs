import { Routes, Route } from 'react-router-dom';
import home from './pages/Home';
import backround_img from './images/backround.jpg';
import './App.css';

function App() {
    return(
        <main className='main'>
        <img src=[backround_img] className="background" alt='background' />

        <div className='container'>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        </div>
        </main>


    );
 }
