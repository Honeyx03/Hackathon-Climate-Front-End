import React, { useState, useEffect } from 'react';
import "../CSS/Game3.css";
import bottleImage from '../Images/bottle.png'; 
import bagImage from '../Images/plastic-bag.png';
import forestImage from '../Images/forest-2.png';
import glassImage from '../Images/glass.png'
import gameOverImage from '../Images/volcano.png'

import rewardOne from '../Images/rewLeaf.png';
import rewardTwo from '../Images/rewForest.png';
import rewardThree from '../Images/rewPlanet.png';

const rewardImages = {
  "point100": rewardOne,
  "point200": rewardTwo,
  "point300": rewardThree
};



export default function Game3() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [bottlePosition, setBottlePosition] = useState(null);  
  const [forestPosition, setForestPosition] = useState(null);  
  const [bagPosition, setBagPosition] = useState(null);
  const [glassPosition, setGlassPosition] = useState(null);
  const [rewards, setRewards] = useState([]);


  useEffect(() => {
    const bottleInterval = setInterval(() => setBottle(getRandomTile()), 1000); 
    const forestInterval = setInterval(() => setForest(getRandomTile()), 2000);  
    const bagInterval = setInterval(() => setBag(getRandomTile()), 1500);
    const glassInterval = setInterval(() => setGlass(getRandomTile()), 1500);
    return () => {
      clearInterval(bottleInterval); 
      clearInterval(forestInterval); 
      clearInterval(bagInterval);
      clearInterval(glassInterval);
    }
  }, []);

  const getRandomTile = () => {
    return Math.floor(Math.random() * 9);
  };

  const setBottle = (position) => {  
    if (gameOver || forestPosition === position || bagPosition === position) return;
    setBottlePosition(position);
  };

  const setBag = (position) => {
    if (gameOver || bottlePosition === position || forestPosition === position) return;
    setBagPosition(position);
  };

  const setGlass = (position) => {
    if (gameOver || bottlePosition === position || forestPosition === position || bagPosition === position) return;
    setGlassPosition(position);
  };

  const setForest = (position) => {  
    if (gameOver || bottlePosition === position || bagPosition === position) return;
    setForestPosition(position);
  };


  const selectTile = (position) => {
    if (gameOver) return;

    if (position === bottlePosition) {
      setScore(prevScore => {
        const newScore = prevScore + 6;
        checkRewards(newScore);
        return newScore;
      });
    } else if (position === bagPosition) {
      setScore(prevScore => {
        const newScore = prevScore + 2; 
        checkRewards(newScore);
        return newScore;
      });
    } else if (position === glassPosition) {
      setScore(prevScore => {
        const newScore = prevScore + 2; 
        checkRewards(newScore);
        return newScore;
      });
    } else if (position === forestPosition) {
        setGameOver(true);
    }
  };  

  const checkRewards = (currentScore) => {
    if (currentScore >= 300 && !rewards.includes("point300")) {
      setRewards(prevRewards => ["point300", ...prevRewards.filter(reward => reward !== "point300")]);
    } else if (currentScore >= 200 && !rewards.includes("point200")) {
      setRewards(prevRewards => ["point200", ...prevRewards.filter(reward => reward !== "point200")]);
    } else if (currentScore >= 100 && !rewards.includes("point100")) {
      setRewards(prevRewards => ["point100", ...prevRewards.filter(reward => reward !== "point100")]);
    }
  };
  
  return (
    <div className="game3">
      <h1>Remove the Trash</h1>

      <div className="context-container">
        <p className="text-md info">
          "Remove the Trash" is an exciting game where you have the mission to clean up the environment<br></br>
          by clicking on pieces of trash appearing on the board. But be careful! If you destroy nature, it's game over!
        </p>
        <div className="context">
          <div className="context-column text-left text-sm">
            <ul className="list-width text-left text-sm ">
              <li>
                <span className="title">How to Play</span><br></br>
                Starting the Game: When the game begins, various trash items will pop up randomly on a board of nine tiles.
              </li>
              <li>
              <span className="title">Game Over</span><br></br>
                The game concludes if you click on the forest. Your score will be displayed along with a message that you've destroyed nature.
              </li>
            </ul>
            <ul className="list-width text-center">
              <li>
                <span className="title">Scoring Point</span><br></br>
               Click on the pieces of trash to remove them and earn points.
              </li>
              <li className='earn-list'>
                <p>
                 <span className="title">Bottle</span> 6 points
                </p>
                <p>
                 <span className="title">Plastic Bag</span> 2 points
                </p>
                <p>
                  <span className="title">Glass</span> 2 points
                </p>              
              </li>
              <li>
                <span className="title">Avoid the Forest</span><br></br>
                Clicking the forest ends the game, symbolizing harm to nature.
              </li>
            </ul>
            <ul className="list-width">
              <li>
                <span className="title">Rewards</span> As you earn points, you'll unlock special rewards:
              </li>
              <li>
                <span className="title">100 Points</span> Unlock the first reward (Leaf icon)
              </li>
              <li>
                <span className="title">200 Points</span> Unlock the second reward (Forest icon)
              </li>
              <li>
                <span className="title">300 Points</span> Unlock the third reward (Planet icon)
              </li>
            </ul>
          </div>
        </div>
        <div className="context-column text-sm">
          <p className="context-text">
             Watch for items, they appear randomly.
             Bottles give most points; prioritize them.<br></br>
             Don't click the forest to continue playing.
             Higher scores unlock more rewards.
          </p>
          <p className="context-text">
            The main objective of the game is to collect as many points as possible <br></br> by cleaning up the environment and unlocking rewards without destroying nature.
          </p>
        </div>
      </div>

      {gameOver ? (
        <div className="game-over-section">
          <img src={gameOverImage} alt="Game Over" />
          <h2>GAME OVER - You destroyed nature: {score}</h2>
        </div>
      ) : (
        <h2>{score}</h2>
      )}

      <div className="rewards">
        <h3>Earned Rewards:</h3>
        <ul>
          {rewards.map((reward, index) => (
            <li key={index}>
              <img src={rewardImages[reward]} alt={reward} />
            </li>
          ))}
        </ul>             
      </div>
      
      <div className="board">
        {Array(9).fill(null).map((_, index) => (
          <div key={index} onClick={() => selectTile(index)}>
            {index === bottlePosition && <img src={bottleImage} alt="bottle" />}
            {index === forestPosition && <img src={forestImage} alt="forest" />} 
            {index === bagPosition && <img src={bagImage} alt="bag" />}
            {index === glassPosition && <img src={glassImage} alt="glass" />}
          </div>
        ))}
      </div>


    </div>
  );
}