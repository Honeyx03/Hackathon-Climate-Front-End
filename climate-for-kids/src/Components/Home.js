import { Link } from "react-router-dom";

export default function Home() {
    return (
        <nav className="Home">
            <ul>
                <li>
                    <Link to="/"></Link>
                    <Link to="/Game3"></Link>
                </li>
            </ul>
        </nav>
    )
}