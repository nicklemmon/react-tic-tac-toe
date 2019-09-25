import React, { useContext } from 'react'
import GameContext from './GameContext'
import './ScoreBoard.css'

export default function ScoreBoard() {
  const { currentPlayer, winner } = useContext(GameContext)

  return (
    <div className="ScoreBoard" aria-live="assertive">
      <h1>Current Player:</h1>

      <span className="ScoreBoard-subhead">{currentPlayer.toUpperCase()}</span>

      {winner && <h2>The Winner: {winner.toUpperCase()}</h2>}
    </div>
  )
}
