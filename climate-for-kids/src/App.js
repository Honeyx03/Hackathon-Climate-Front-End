import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

//Components
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import About from "./Components/About";
import Game1 from "./Components/Game1";
import Game2 from "./Components/Game2";
import Game3 from "./Components/Game3";


function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/game1" element={<Game1 />} />
            <Route path="/game2" element={<Game2 />} />
            <Route path="/game3" element={<Game3 />} />
            
          </Routes>
        </div>  
      </Router>
    </>

  );
}

export default App;
