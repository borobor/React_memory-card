import React from 'react'
import './GameOverModal.css'

export const GameOverModal = (props) => {

  const { clickedCards, setClickedCards, setIsGameOver, highScore, setHighScore } = props;  

  const handleClick = () => {
    setHighScore(clickedCards.length);
    setClickedCards([]);
    setIsGameOver(false);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {(clickedCards.length === 10) ?
          <p>Congrats! You've won</p> 
          :
          <>
            {(clickedCards.length > highScore) ?
              <>
                <p>Nice! New high score: {clickedCards.length}</p>
              </> 
              :
              <p>Game over!</p>
            } 
          </>
        } 
        <button onClick={handleClick}>Restart</button>
      </div>
    </div>
  )
}
