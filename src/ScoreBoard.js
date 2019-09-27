import React, { useContext } from 'react'
import posed, { PoseGroup } from 'react-pose'
import Badge from './Badge'
import GameContext from './GameContext'
import './ScoreBoard.css'

export default function ScoreBoard() {
  const { currentPlayer, winner } = useContext(GameContext)
  const hasWinnerBadge = () => winner && (winner === 'x' || winner === 'o')
  const hasTieBadge = () => winner && winner === 'tie'
  const BadgeWrapper = posed.div({
    enter: {
      x: '-50%',
      y: '50%',
      scale: 1,
      opacity: 1
    },
    exit: {
      x: '-50%',
      y: -50,
      scale: 0.75,
      opacity: 0
    }
  })

  return (
    <div className="relative m-auto text-center font mb-10 bg-gray-200 text-gray-600 px-4 py-6 rounded" aria-live="assertive">
      <h1 className="text-xl">Current Player: <strong>{currentPlayer.toUpperCase()}</strong></h1>

      <PoseGroup>
        {hasWinnerBadge() && [
          <BadgeWrapper className="BadgeWrapper" key="winner">
            <Badge variant="positive">
              <h2>{winner.toUpperCase()} wins! </h2>
            </Badge>
          </BadgeWrapper>
        ]}
      </PoseGroup>

      <PoseGroup>
        {hasTieBadge() && [
          <BadgeWrapper className="BadgeWrapper" key="tie">
            <Badge variant="negative">
              <h2>Tie game! 😞</h2>
            </Badge>
          </BadgeWrapper>
        ]}
      </PoseGroup>
    </div>
  )
}
