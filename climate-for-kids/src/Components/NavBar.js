import { Link } from "react-router-dom";
import logo from "../logo.png";
import  "../CSS/navBar.css";

export default function NavBar() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <aside className="tabs">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/game1">Memory Card Game</Link>
                    </li>
                    <li>
                        <Link to="/game2">Ocean Invaders</Link>
                    </li>
                    <li>
                        <Link to="/game3">Remove The Trash</Link>
                    </li>
                </ul>
            </aside>
        </nav>
    )
}