import React, { useState, useEffect } from 'react';
import TicTacToe from './TicTacToe'
import GameContext from './GameContext'
import ScoreBoard from './ScoreBoard'
import ResetBtn from './ResetBtn'
import getWinner from './getWinner'
import './App.css'

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('x')
  const [winner, setWinner] = useState(null)
  const [boardState, setBoardState] = useState(Array(9).fill(null))

  const handleResetClick = () => {
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
        setBoardState
      }}
    >
      <div className="App">
        <div className="App-wrapper">
          <ScoreBoard/>

          <TicTacToe/>

          <ResetBtn onClick={handleResetClick}>
            Reset Game
          </ResetBtn>
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
