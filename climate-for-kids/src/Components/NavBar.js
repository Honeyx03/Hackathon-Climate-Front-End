import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <div className="logo">
                <h1></h1>
            </div>
            <aside className="tabs">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/game1">Game 1</Link>
                    </li>
                   
                </ul>
            </aside>
        </header>
    )
}