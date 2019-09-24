import React, { useContext } from 'react'
import GameContext from './GameContext'
import './TicTacToe.css'

export default function TicTacToe(props) {
  const {
    currentPlayer,
    togglePlayer,
    boardState,
    setBoardState
  } = useContext(GameContext)

  const handleClick = (spaceValue, index) => {
    if (!spaceValue) {
      togglePlayer()
      setBoardState(boardState.map((item, clickedIndex) => {
        if (clickedIndex === index) {
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
          >
            {spaceValue}
          </button>
        )
      })}
    </div>
  )
}
