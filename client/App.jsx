import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import background_img from './images/background.jpg';
import './App.css';

function App() {
    return(
      <main className='main'>
       <img src={background_img} className="background" alt='background'  />

       <div className='container'>
         <Routes>
            <Route path='/' element={<Home />} />
         </Routes>
        </div> 
      </main>
    );
}

export default App;