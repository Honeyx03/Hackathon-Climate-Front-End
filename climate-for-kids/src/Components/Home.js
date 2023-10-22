import { Link } from "react-router-dom";
import "../CSS/Home.css";

export default function Home() {
	return (
		<div className="Home">
			<div className="text-container">
				<div className="centered-text">What is climate change?</div>
				<p className="home-text">It's the long-term shift in temperature and regular weather patterns in a given region.</p>
			</div>
		</div>
	);
}
