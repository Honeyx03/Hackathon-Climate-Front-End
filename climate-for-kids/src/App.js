import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

//Components
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import Game3 from "./Components/Game3";
import About from "./Components/About";
import Articles from "./Components/Game2";
import Game1 from "./Components/Game1";


function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Game3" element={<Game3 />} />
            <Route path="/game1" element={<Game1 />} />
          </Routes>
        </div>  
      </Router>
    </>

  );
}

export default App;
