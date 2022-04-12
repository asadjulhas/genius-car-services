import './App.css';
import Header from "./Pages/Shared/Header/Header";
import Footer from './Pages/Shared/Footer/Footer';
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home'
import Login from './Pages/Home/Login/Login'
import About from './Pages/Home/About/About';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
