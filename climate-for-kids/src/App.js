import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

//Components
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import About from "./Components/About";
import Articles from "./Components/Articles";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} /> */}
          </Routes>
        </div>  
      </Router>
    </>

  );
}

export default App;
