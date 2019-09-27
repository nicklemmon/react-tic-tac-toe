import React, { useContext } from 'react'
import GameContext from './GameContext'

export default function ScoreBoard() {
  const { currentPlayer, winner } = useContext(GameContext)

  return (
    <div className="m-auto text-center font mb-6 bg-gray-200 text-gray-600 p-4 rounded" aria-live="assertive">
      <h1 className="text-xl">Current Player: <strong>{currentPlayer.toUpperCase()}</strong></h1>

      {winner && 
        <div className="shadow-md inline-flex text-sm py-1 px-4 mt-2 rounded-lg bg-green-200 text-green-700 width-auto">
          <h2>{winner.toUpperCase()} wins!</h2>
        </div>
      }
    </div>
  )
}
