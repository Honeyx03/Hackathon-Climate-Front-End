import polarBear from "../Images/polar-bear-card-back.jpeg"; 
import carPollution from "../Images/car-pollution.jpeg";
import deforestation from "../Images/deforestation.jpeg";
import "../CSS/Game1.css";

export default function Game1() {
    return (
        <div className="cards">
            <div className="card">
                <div className="card-back">
                    <img src={polarBear} alt="polar bear global warming"></img>
                </div>
                <div className="card-front">
                    <img src={carPollution} alt="car pollution global warming"></img>
                </div>
            </div>
            <div className="card">
                <div className="card-back">
                    <img src={polarBear} alt="polar bear global warming"></img>
                </div>
                <div className="card-front">
                    <img src={deforestation} alt="deforestation global warming"></img>
                </div>
            </div>
        </div>
    )
}