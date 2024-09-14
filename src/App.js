import { useState } from 'react'
import './App.css'
import Square from './components/square';
import Button from './components/button';
import Board from './components/board';
import GameInfo from './components/gameinfo';
import calculateWinner from './utils/calculateWinner';
import Timeline from './components/timeline';


const App = () => {

  const [currentStep, setCurrentStep] = useState(0)

  const [timeline, setTimeline] = useState([
    {
      board: Array(9).fill(null),
      isXNext: true
    }
  ]);
  const board = timeline[currentStep].board;
  const isXNext = timeline[currentStep].isXNext
  const winner = calculateWinner(board);


  const handleResetClick = () => {
    setTimeline([
      {
        board: Array(9).fill(null),
        isXNext: true
      }
    ])

    setCurrentStep(0)
  };

  const handleTimelineClicked = (index) => {
    setCurrentStep(index)
  }

  const handleSquareClicked = (index) => {
    if (winner) {
      return;
    }

    const newBoard = [...board]

    if (newBoard[index]) {
      return newBoard;
    }

    newBoard[index] = isXNext ? "X" : "O";
    setTimeline([...timeline.slice(0, currentStep + 1), {
      board: newBoard,
      isXNext: !isXNext
    }])

    setCurrentStep(currentStep + 1)
  };

  return (
    <div className='container'>
      <Board board={board} buttonSquareAction={handleSquareClicked} />
      <div>
        <GameInfo winner={winner} isXNext={isXNext} buttonResetAction={handleResetClick} />
        <Timeline timeline={timeline} onTimelineClicked={handleTimelineClicked} currentStep={currentStep} />
      </div>
    </div>
  );
};

export default App;
