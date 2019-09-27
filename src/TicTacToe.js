import React, { useContext, useEffect } from 'react'
import posed, { PoseGroup } from 'react-pose'
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

  const SpaceValue = posed.div({
    enter: {
      scale: 1
    },
    exit: {
      scale: 0
    }
  })

  return (
    <div className="TicTacToe border-solid border-gray-300 bg-gray-300">
      {boardState.map((spaceValue, index) => {
        return (
          <button
            key={`tic-tac-toe-space-${index}`}
            onClick={() => handleClick(spaceValue, index)}
            className="TicTacToe-space bg-white focus:outline-none focus:shadow-outline"
            disabled={winner && "disabled"}
          >
            <PoseGroup>
              { spaceValue && [
                  <SpaceValue key="value">
                    {spaceValue}
                  </SpaceValue>
                ]
              }
            </PoseGroup>
          </button>
        )
      })}
    </div>
  )
}
