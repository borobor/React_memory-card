import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "./App.css";

const cardSet = [
  { src: "src/assets/card1.png", text: "Finn the Human", id: 1 },
  { src: "src/assets/card2.png", text: "Jake the Dog", id: 2 },
  { src: "src/assets/card3.png", text: "Princess Bublegum", id: 3 },
  { src: "src/assets/card4.png", text: "BMO", id: 4 },
  { src: "src/assets/card5.png", text: "Ice King", id: 5 },
  { src: "src/assets/card6.png", text: "Lumpy Space Princess", id: 6 },
  { src: "src/assets/card7.png", text: "Earl of Lemongrab", id: 7 },
  { src: "src/assets/card8.png", text: "Marceline the Vampire Queen", id: 8 },
  { src: "src/assets/card9.png", text: "Peppermint Butler", id: 9 },
  { src: "src/assets/card10.png", text: "Gunter", id: 10 },
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
		//check if card was already clicked
		if (clickedCards.includes(id)) {
			alert("Game over!");
			saveHighScore(clickedCards.length)
			setClickedCards([]);
		} else {  //else add card id to clickedCards
			setClickedCards([...clickedCards, id]);
		}
  }

	const saveHighScore = (value) => {
		if (value > highScore) {
			setHighScore(value);
		}
		return;
	}
	
  useEffect(() => {
		shuffleCards();
  }, [clickedCards]);

  return (
    <div>
      <p>Hello World,</p>
      <p>This is my Memory game!</p>
      <Cards handleClick={handleClick} cards={cards} />
			<p>Current score: {clickedCards.length}</p>
			<p>High score: {highScore}</p>
    </div>
  );
}

export default App;
