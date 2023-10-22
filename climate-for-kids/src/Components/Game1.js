import { useState, useEffect} from "react";
import data from '../Data/cards.json';
import fact from '../Data/randomFacts.json';
import "../CSS/Game1.css";

export default function Game1() {
    const [cards, setCards] = useState([]);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [lockBoard, setLockBoard] = useState(false);
    const [score, setScore] = useState(0);
    const [isPreviewPhase, setIsPreviewPhase] = useState(true);
    const [showMatchPopup, setShowMatchPopup] = useState(false);
    const [randomFact, setRandomFact] = useState(null);

    useEffect(() => {
        setCards([...data, ...data]);
        shuffleCards(cards);
    }, []);

    useEffect(() => {
        const scoreElement = document.querySelector('.score');
        if (scoreElement) {
            scoreElement.textContent = score;
        }
    }, [score]);

    useEffect(() => {
        checkForMatch();
    }, [secondCard])

    const shuffleCards = (cards) => {
        let currentIndex = cards.length,
            randomIndex,
            temporaryValue;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
      }
    }

    const generateCards = () => {
        return cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.flipped ? 'flipped' : ''}`}
            onClick={() => flipCard(index)}
          >
            <div className="front">
              <img className="front-image" src={card.image} alt={card.name} />
            </div>
            <div className="back"></div>
          </div>
        ));
    };

    const flipCard = (index) => {
        if (lockBoard) return;
        if (cards[index].flipped) return;
    
        cards[index].flipped = true;
        setCards([...cards]);
    
        if (firstCard === null) {
          setFirstCard(index);
        } else {
          setSecondCard(index);
        }
    };
    
    const checkForMatch = () => {
        if (firstCard !== null && secondCard !== null) {

          if (cards[firstCard].name === cards[secondCard].name) {
            disableCards();
            const randomIndex = Math.floor(Math.random() * fact.length);
            setRandomFact(fact[randomIndex]); // Select a random fact
            setShowMatchPopup(true);
          } else {
            setLockBoard(true);
            setTimeout(function(){
              unflipCards();
              setLockBoard(false);
            }, 3000);
          }
        }
    };

    const hideMatchPopup = () => {
        setShowMatchPopup(false); // Function to hide the match popup
    };
    
    const disableCards = () => {
        cards[firstCard].matched = true;
        cards[secondCard].matched = true;
        setCards([...cards]);
        setFirstCard(null);
        setSecondCard(null);
        setLockBoard(false);
        setScore(score + 10);

        // Check if all cards are matched (game over condition)
        if (cards.every((card) => card.matched)) {
            alert('Congratulations! You have won.');
        }
    };

    const unflipCards = () => {
        cards[firstCard].flipped = false;
        cards[secondCard].flipped = false;
        setCards([...cards]);
        setFirstCard(null);
        setSecondCard(null);
        setLockBoard(false);
    };


    const startGame = () => {
        // Reset cards and flip them to the front for the preview phase
        const initialCards = [...data, ...data];
        initialCards.forEach((card) => (card.flipped = true));
        
        setCards(initialCards);
        setScore(0);
        setIsPreviewPhase(false);
        setLockBoard(true); 

        // Delay for 3 seconds before turning off the preview phase
        setTimeout(() => {
            initialCards.forEach((card) => (card.flipped = false));
            setCards(initialCards);
            setIsPreviewPhase(false);
        }, 0);

        setTimeout(() => {
            unflipAllCards();
        }, 3000);
    };

    const unflipAllCards = () => {
        // Loop through all cards and set flipped to false
        const updatedCards = cards.map((card) => ({ ...card, flipped: false }));
        setCards(updatedCards);
        setFirstCard(null);
        setSecondCard(null);
        setLockBoard(false);
    };

     //Reset cards and flip them to the front for the preview phase
        const initialCards = [...data, ...data];
        shuffleCards(initialCards);
        initialCards.forEach((card) => (card.flipped = true));
        
    
    const restart = () => {
        const initialCards = [...data, ...data];
        shuffleCards(initialCards);
        setCards(initialCards);
        setFirstCard(null);
        setSecondCard(null);
        setLockBoard(false);
        setScore(0);
        setIsPreviewPhase(true);
    };

    const MatchPopup = () => {
        return (
          <div className="popup">
            <div className="popup-content">
              <h2>match found!</h2>
               <p>Congratulations, you found a match!</p>
            </div>
          </div>
        );
      }

    return (
        <div className="game-container">
             <h1>Environmental Awareness Flip Card Game</h1>
             {isPreviewPhase ? (
                <button onClick={startGame}>Start Game</button>
            ) : (
                <>
                    <div className="grid-container">{generateCards()}</div>
                    <p>
                        Score: <span className="score">{score}</span>
                    </p>
                    <div className="actions">
                        <button onClick={restart}>Restart</button>
                    </div>
                </>
            )}
            {showMatchPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>{randomFact.title}</h2>
                        <p>{randomFact.fact}</p>
                        <img className="img-fact" src={randomFact.image} alt={randomFact.title} />
                        <button onClick={hideMatchPopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};
