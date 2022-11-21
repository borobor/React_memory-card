import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "./App.css";

const cardSet = [
  { src: "./src/assets/img/card1.png", text: "Finn the Human", id: 1 },
  { src: "./src/assets/img/card2.png", text: "Jake the Dog", id: 2 },
  { src: "./src/assets/img/card3.png", text: "Princess Bublegum", id: 3 },
  { src: "./src/assets/img/card4.png", text: "BMO", id: 4 },
  { src: "./src/assets/img/card5.png", text: "Ice King", id: 5 },
  { src: "./src/assets/img/card6.png", text: "Lumpy Space Princess", id: 6 },
  { src: "./src/assets/img/card7.png", text: "Earl of Lemongrab", id: 7 },
  { src: "./src/assets/img/card8.png", text: "Marceline the Vampire Queen", id: 8 },
  { src: "./src/assets/img/card9.png", text: "Peppermint Butler", id: 9 },
  { src: "./src/assets/img/card10.png", text: "Gunter", id: 10 },
];

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
	const [highScore, setHighScore] = useState(0);

	const shuffleCards = () => {
		const shuffledCards = [...cardSet]
			.sort(() => Math.random() - 0.5);
		setCards(shuffledCards);
	};

  const handleClick = ({ currentTarget }) => {
  	let id = currentTarget.getAttribute("data-key");
		//check if card was already clicked -> game over
		if (clickedCards.includes(id)) {
			gameOver();
		} else {  //else add card id to clickedCards
			setClickedCards([...clickedCards, id]);
		}
  }

	const gameOver = () => {
		alert("Game over!");
		checkHighScore(clickedCards.length);
		setClickedCards([]);
	}

	const checkHighScore = (value) => {
		if (value > highScore) {
			setHighScore(value);
		}
		return;
	}
	
  useEffect(() => {
		shuffleCards();

		if (clickedCards.length == cardSet.length) {
			alert("You Won!!");
			checkHighScore(clickedCards.length);
			setClickedCards([]);
		}
  }, [clickedCards]);

  return (
    <div className="content">
      <header>
				<div className="header-logo">
					<img src="./src/assets/img/game-logo.png" alt="Adventure Time logo" />
					<p>Memory game</p>
				</div>
				<div className="header-score">
					<p>High score: {highScore}</p>
					<p>Current score: {clickedCards.length}</p>
				</div>
			</header>
      <main>
				<Cards handleClick={handleClick} cards={cards} />
			</main>
    </div>
  );
}

export default App;
