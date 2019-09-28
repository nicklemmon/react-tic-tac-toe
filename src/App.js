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
      <div className="App bg-gray-100">
        <div className="App-wrapper">
          <h1 className="text-center text-3xl font-bold text-gray-700 mb-6">Tic Tac Toe!</h1>

          <ScoreBoard/>

          <TicTacToe/>

          <ResetBtn onClick={handleResetClick}>
            Start Over
          </ResetBtn>
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
