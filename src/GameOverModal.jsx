import React from 'react'
import './GameOverModal.css'

export const GameOverModal = (props) => {

  const {setClickedCards, setIsGameOver} = props;

  const handleClick = () => {
    setClickedCards([]);
    setIsGameOver(false);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Game over!</p>
        <button onClick={handleClick}>Restart</button>
      </div>
    </div>
  )
}
