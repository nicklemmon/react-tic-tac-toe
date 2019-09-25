import React, { useState, useEffect } from 'react';
import TicTacToe from './TicTacToe'
import GameContext from './GameContext'
import ScoreBoard from './ScoreBoard'
import getWinner from './getWinner'
import './App.css'

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('x')
  const [winner, setWinner] = useState(null)
  const [boardState, setBoardState] = useState(Array(9).fill(null))
  const [hasReset, setHasReset] = useState(false)

  useEffect(() => {
    if (winner || !boardState.includes(null)) {
      setHasReset(true)
    }
  }, [boardState, winner])

  // useEffect(() => {
  //   setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
  // }, [boardState, setBoardState, setCurrentPlayer, currentPlayer])

  const handleResetClick = () => {
    setHasReset(false)
    setCurrentPlayer('x')
    setBoardState(Array(9).fill(null))
  }

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        togglePlayer: () => setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x'),
        winner,
        setWinner: (gameStateArr, player) => {
          setWinner(getWinner(gameStateArr, player))
        },
        boardState,
        setBoardState,
        setHasReset
      }}
    >
      <div className="App">
        <div className="App-wrapper">
          <ScoreBoard/>

          <TicTacToe/>

          {hasReset && (
            <button onClick={handleResetClick}>
              Reset Game
            </button>
          )}
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
