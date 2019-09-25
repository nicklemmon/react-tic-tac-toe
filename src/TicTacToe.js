import React, { useContext, useEffect } from 'react'
import GameContext from './GameContext'
import './TicTacToe.css'

export default function TicTacToe(props) {
  const {
    currentPlayer,
    boardState,
    setBoardState,
    togglePlayer,
    setWinner,
    winner,
  } = useContext(GameContext)

  useEffect(() => {
    setWinner(boardState, currentPlayer === 'x' ? 'o' : 'x')
  }, [boardState, currentPlayer, setWinner])

  const handleClick = (spaceValue, index) => {
    if (!spaceValue) {
      setBoardState(boardState.map((item, clickedIndex) => {
        if (clickedIndex === index) {
          togglePlayer()
          return currentPlayer
        } else {
          return item
        }
      }))
    }
  }

  return (
    <div className="TicTacToe">
      {boardState.map((spaceValue, index) => {
        return (
          <button
            key={`tic-tac-toe-space-${index}`}
            onClick={() => handleClick(spaceValue, index)}
            className="TicTacToe-space"
            disabled={winner && "disabled"}
          >
            {spaceValue}
          </button>
        )
      })}
    </div>
  )
}
