import React, { useState } from 'react';
import TicTacToe from './TicTacToe'
import GameContext from './GameContext'
import ScoreBoard from './ScoreBoard';
import './App.css'

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('x')
  const [boardState, setBoardState] = useState(Array(9).fill(null))

  return (
    <GameContext.Provider value={{
      currentPlayer,
      togglePlayer: () => {
        setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
      },
      boardState,
      setBoardState
    }}>
      <div className="App">
        <div className="App-wrapper">
          <ScoreBoard/>

          <TicTacToe/>
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
