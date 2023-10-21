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
                        <Link to="/Game3">Game3</Link>
                    </li>
                </ul>
            </aside>
        </header>
    )
}