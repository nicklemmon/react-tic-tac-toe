import React, { useContext } from 'react'
import GameContext from './GameContext'
import './ScoreBoard.css'

export default function ScoreBoard() {
  const { currentPlayer } = useContext(GameContext)

  return (
    <div className="ScoreBoard" aria-live="assertive">
      <h1>Current Player:</h1>

      <span>{currentPlayer.toUpperCase()}</span>
    </div>
  )
}
