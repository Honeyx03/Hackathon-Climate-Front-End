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
                    {/* <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/articles">Articles</Link>
                    </li> */}
                </ul>
            </aside>
        </header>
    )
}